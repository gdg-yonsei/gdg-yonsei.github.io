import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import styled, { css } from "styled-components";
import GalleryItem from "./GalleryItem";
import { GalleryItems } from "./GalleryItem/GalleryItems";
import FocusedGalleryItem from "./FocusedGalleryItem";

function GalleryComponent() {
  const [focusedSectionId, setFocusedSectionId] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  const focusedItem = GalleryItems.filter(
    (item) => item.id === focusedSectionId
  );

  const focusedThumbnail =
    focusedItem.length !== 0 ? focusedItem[0].thumbnail : null;

  const isDisabled = !(focusedSectionId && focusedThumbnail);

  useEffect(() => {
    if (!isInView) {
      setFocusedSectionId(null);
    }
  }, [isInView]);

  return (
    <Container data-scroll-section id="fixed-element-clubs-container">
      <RotationContainer>
        <ContentWrapper>
          {GalleryItems.map((item, idx) => {
            const isVisible = item.id !== focusedSectionId;

            return (
              <GalleryItem
                key={item.id}
                item={item}
                index={idx}
                visible={isVisible}
                onFocus={() => setFocusedSectionId(item.id)}
              />
            );
          })}
        </ContentWrapper>
      </RotationContainer>
      <AnimatePresence>
        <FocusedGalleryItem
          disabled={isDisabled}
          focusedSectionId={focusedSectionId}
          thumbnail={focusedThumbnail}
          onBlur={() => setFocusedSectionId(null)}
        />
      </AnimatePresence>
    </Container>
  );
}

export default GalleryComponent;

const Container = styled.div`
  height: 100%;
  margin-left: -1px;

  padding-left: 20vw;
  padding-right: 30vw;

  background-color: ${(props) => props.theme.backgroundColor.black};
`;

const RotationContainer = styled.div`
  height: 100%;
  transform: rotate(-1deg);
`;

const ContentWrapper = styled(motion.div)`
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25vw;
`;

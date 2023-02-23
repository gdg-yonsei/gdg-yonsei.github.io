import { motion } from "framer-motion";
import styled from "styled-components";
import GalleryItem from "./GalleryItem";
import { GalleryItems } from "./GalleryItem/GalleryItems";

function GalleryComponent() {
  return (
    <Container data-scroll-section>
      <RotationContainer>
        <ContentWrapper>
          {GalleryItems.map((item, idx) => {
            return (
              <GalleryItem
                key={idx}
                index={idx}
                short={item.short}
                desc={item.description}
              />
            );
          })}
        </ContentWrapper>
      </RotationContainer>
    </Container>
  );
}

export default GalleryComponent;

const Container = styled.div`
  height: 100%;
  margin-left: -1px;

  padding-left: 15vw;

  background-color: ${(props) => props.theme.backgroundColor.black};
`;

const RotationContainer = styled.div`
  width: 100%;
  height: 100%;
  transform: rotate(-1deg);
`;

const ContentWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25vw;
`;

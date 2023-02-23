import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";
import mapNumber from "@utils/mapNumber";

function GalleryItem({ index, desc, short }) {
  const { scroll } = useLocomotiveScroll();
  const scrollPos = { previous: 0, current: 0 };
  const [skew, setSkew] = useState(0);

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (obj) => {
        scrollPos.current = obj.scroll.x;
        const distance = scrollPos.current - scrollPos.previous;
        scrollPos.previous = scrollPos.current;
        const skewness = mapNumber(distance, -100, 100, -10, 10);
        setSkew(skewness);
        console.log(scrollPos, skewness);
      });
    }
  }, [scroll]);

  return (
    <Container
      style={{
        transform: `skew(${skew}deg)`,
      }}
    >
      <WriteupWrapper>
        <IndexSpan data-scroll data-scroll-speed="1.5">
          0{index + 1}
        </IndexSpan>
        <DescriptionSpan data-scroll data-scroll-speed="2.5">
          {short}
        </DescriptionSpan>
      </WriteupWrapper>
      <ImageSection data-scroll data-scroll-speed="1"></ImageSection>
    </Container>
  );
}

export default GalleryItem;

const Container = styled(motion.div)`
  width: 30vw;

  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

const WriteupWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 4vw;

  transform: translateX(-30%);
`;

const IndexSpan = styled.span`
  display: inline-block;

  font-weight: 900;
  font-size: 128px;

  color: ${(props) => props.theme.backgroundColor.white};
`;

const DescriptionSpan = styled.span`
  display: inline-block;

  font-weight: 400;
  font-size: 5vw;
  color: ${(props) => props.theme.backgroundColor.white};
`;

const ImageSection = styled.div`
  width: 100%;
  height: 50vh;

  background-color: white;

  cursor: pointer;
`;

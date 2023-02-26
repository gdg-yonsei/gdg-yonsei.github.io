import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";
import { useGallerySkew } from "../hooks";

function GalleryItem({ item, index, onFocus, visible }) {
  const { scroll } = useLocomotiveScroll();
  const skew = useGallerySkew();

  const onClickImageSection = () => {
    scroll.stop();
    onFocus();
  };

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
          {item.short}
        </DescriptionSpan>
      </WriteupWrapper>
      <div data-scroll data-scroll-speed="1.2">
        <ImageSection
          thumbnail={item.thumbnail}
          onClick={onClickImageSection}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.3,
            },
          }}
          layout
          layoutId={item.id}
          visible={visible}
        />
      </div>
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

const ImageSection = styled(motion.div)`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  width: 30vw;
  height: 50vh;

  background: ${(props) => `url("/assets/GDSCImages/${props.thumbnail}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 0 0 0 10px ${(props) => props.theme.backgroundColor.white} inset;

  overflow: hidden;

  cursor: pointer;
`;

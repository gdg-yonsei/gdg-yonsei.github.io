import useHover from "@hooks/useHover";
import { IconContext } from "@react-icons/all-files";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled, { css } from "styled-components";

function Jam(props) {
  const [hoverRef, isHovered] = useHover(false);
  const { scroll } = useLocomotiveScroll();

  const IconStyle = {
    width: "30%",
    height: "100%",
    fontSize: "30%",
    color: "black",
  };

  return (
    <Container
      ref={hoverRef}
      onClick={() => {
        scroll.scrollTo(props.scrollTarget);
      }}
    >
      <IconContainer>
        <IconContext.Provider
          value={{
            style: IconStyle,
          }}
        >
          {props.icon}
        </IconContext.Provider>
      </IconContainer>
      <DescContainer>
        <DescSpan isHovered={isHovered}>{props.description}</DescSpan>
      </DescContainer>
    </Container>
  );
}

export default Jam;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 4fr 1fr;

  border-radius: 20px;

  background-color: ${(props) => props.theme.backgroundColor.white};
  border: 3px solid ${(props) => props.theme.backgroundColor.black};

  cursor: pointer;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5%;

  overflow: hidden;
`;

const DescSpan = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: black;

  font-size: 2.3vw;

  transition: transform 0.3s cubic-bezier(0.13, 0.8, 0.24, 0.89);
  will-change: transform;

  ${(props) =>
    props.isHovered
      ? css`
          transform: translateY(-5%);
        `
      : css`
          transform: translateY(100%);
        `}
`;

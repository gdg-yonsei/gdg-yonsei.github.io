import useOnScreen from "@hooks/useOnScreen";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

function SectionIntro() {
  const observerRef = useRef(null);
  const onScreen = useOnScreen(observerRef, "100px");

  return (
    <TitleWrapper data-scroll-section ref={observerRef}>
      {onScreen && (
        <Title>
          <TypeAnimation
            data-scroll
            data-scroll-speed="2"
            sequence={["Section Introduction."]}
            speed={50}
            wrapper="span"
            repeat={1}
          />
        </Title>
      )}
    </TitleWrapper>
  );
}

export default SectionIntro;

const TitleWrapper = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 10vh;
  margin-left: 10vw;
  margin-bottom: 10vh;
`;

const Title = styled.div`
  span {
    display: inline-block;
    font-size: 6vw;

    color: ${(props) => props.theme.backgroundColor.black};
  }
`;

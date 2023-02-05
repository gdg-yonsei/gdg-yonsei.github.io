import useOnScreen from "@hooks/useOnScreen";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

function WebSection() {
  const observerRef = useRef(null);
  const onScreen = useOnScreen(observerRef, "100px");

  return (
    <Container
      data-scroll-section
      data-persistent
      data-scroll-section-inview
      ref={observerRef}
    >
      <TitleWrapper data-scroll data-scroll-speed="1">
        {onScreen && (
          <Title>
            <TypeAnimation
              sequence={["Web Development Jams"]}
              speed={50}
              wrapper="span"
              repeat={1}
            />
          </Title>
        )}
      </TitleWrapper>
      <ContentWrapper id="fixed-element">
        <LeftSection>
          <OutlineContainer
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-element"
          >
            Left Test
          </OutlineContainer>
        </LeftSection>
        <RightSection>
          <TargetSection>Right Section</TargetSection>
        </RightSection>
      </ContentWrapper>
    </Container>
  );
}

export default WebSection;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 2;

  color: white;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
  margin-left: 3vw;
`;

const Title = styled.div`
  span {
    display: inline-block;
    font-size: 4.5vw;

    color: ${(props) => props.theme.backgroundColor.black};
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  position: relative;

  display: flex;
`;

const LeftSection = styled.div`
  width: 40%;

  background-color: teal;
`;

const OutlineContainer = styled.div`
  position: relative;
  z-index: 0;
  padding-top: 35vh;
`;

const RightSection = styled.div`
  width: 60%;
  height: 100vh;

  background-color: blue;
  position: relative;
  overflow: hidden;
`;

const TargetSection = styled.div``;

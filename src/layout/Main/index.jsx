import MainFooter from "@components/Footer/MainFooter";
import MainHeader from "@components/Header/MainHeader";
import { MouseParallaxContainer } from "react-parallax-mouse";
import styled from "styled-components";
import BackgroundParallax from "./BackgroundParallax";
import LogoSection from "./LogoSection";
import NavigationSection from "./NavigationSection";

function Hero() {
  return (
    <MouseParallaxContainer
      className="parallax"
      containerStyle={{
        width: "100%",
        height: "100%",
      }}
      globalFactorX={0.3}
      globalFactorY={0.3}
      resetOnLeave
    >
      <MainContainer>
        <MainHeader />
        <LogoSection />
        <NavigationSection />
        <SectionPadding />
        <MainFooter />
      </MainContainer>
      <BackgroundContainer>
        <BackgroundParallax />
      </BackgroundContainer>
    </MouseParallaxContainer>
  );
}

export default Hero;

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;

  z-index: 1;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
`;

const SectionPadding = styled.div`
  flex-grow: 1;
`;

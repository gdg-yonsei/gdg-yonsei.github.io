import useLocomotiveScrollPosition from '@hooks/useLocomotiveScrollPosition';
import styled from 'styled-components';

import { BackgroundVideo, SearchBar } from '../components';

function Hero() {
  const scrollPos = useLocomotiveScrollPosition(10, false);

  return (
    <Container data-scroll-section id="aboutus-container">
      <MainWrapper data-scroll data-scroll-sticky data-scroll-target="#aboutus-container">
        <TextSection>
          <MainSpan blur={scrollPos / 30}>Code</MainSpan>
          <SearchBar translateZ={scrollPos / 5} />
          <MainSpan blur={scrollPos / 30}>With</MainSpan>
          <MainSpan blur={scrollPos / 30}>Google</MainSpan>
        </TextSection>
      </MainWrapper>
      <BackgroundVideo />
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  width: 100vw;
  height: 400vh;

  background-color: ${(props) => props.theme.backgroundColor.black};

  font-family: 'Google Sans', sans-serif;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  z-index: 10;

  background-color: transparent;
`;

const TextSection = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 3%;

  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2.5vw;

  background-color: transparent;

  z-index: 4;

  @media screen and (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    gap: 5vh;
  }
`;

const MainSpan = styled.span.attrs((props) => ({
  style: {
    filter: `blur(${props.blur}px)`,
  },
}))`
  display: inline-block;
  font-size: 120px;

  color: ${(props) => props.theme.backgroundColor.white};

  filter: blur(${(props) => `${props.blue}px`});
`;

import useLocomotiveScrollPosition from '@hooks/useLocomotiveScrollPosition';
import styled from 'styled-components';

import { BackgroundVideo, GoBackArrow, SearchBar } from '../components';

function Hero() {
  const scrollPos = useLocomotiveScrollPosition(10, false);

  console.log(scrollPos / 5);

  return (
    <Container data-scroll-section id="aboutus-container">
      <MainWrapper data-scroll data-scroll-sticky data-scroll-target="#aboutus-container">
        <TextSection>
          <MainSpan blur={scrollPos / 30} opacity={Math.max(1 - scrollPos / 2500, 0)}>
            Code
          </MainSpan>
          <SearchBar translateZ={scrollPos / 5} />
          <MainSpan blur={scrollPos / 30} opacity={Math.max(1 - scrollPos / 2500, 0)}>
            With
          </MainSpan>
          <MainSpan blur={scrollPos / 30} opacity={Math.max(1 - scrollPos / 2500, 0)}>
            Google
          </MainSpan>
        </TextSection>
      </MainWrapper>
      <BackgroundVideo />
      <GoBackArrow />
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  width: 100vw;
  height: 300vh;

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
    opacity: `${props.opacity}`,
  },
}))`
  display: inline-block;
  font-size: 120px;

  color: ${(props) => props.theme.backgroundColor.white};

  filter: blur(${(props) => `${props.blue}px`});
`;

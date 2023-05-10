import { LoadingScreen } from '@components/LoadingScreen';
import { VerticalLocomotiveScrollProvider } from '@context/LocomotiveScrollCustom';
import { TransitionColorContext } from '@context/TransitionColorContext';
import useEffectOnce from '@hooks/useEffectOnce';
import useHandleAnimationScroll from '@hooks/useHandleAnimationScroll.js';
import { useContext, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import { Hero } from './Hero';

function AboutUs() {
  const { handleAnimationStart, handleAnimationComplete } = useHandleAnimationScroll();
  const containerRef = useRef(null);
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();

  useEffectOnce(() => {
    transitionColorHandler(color.darkgrey);
  });

  return (
    <>
      <VerticalLocomotiveScrollProvider containerRef={containerRef}>
        <MainContainer data-scroll-container ref={containerRef}>
          <Hero />
        </MainContainer>
      </VerticalLocomotiveScrollProvider>
      <LoadingScreen
        handleAnimationStart={handleAnimationStart}
        handleAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default AboutUs;

const MainContainer = styled.main`
  width: 100vw;

  background-color: ${(props) => props.theme.backgroundColor.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

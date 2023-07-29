import { LoadingScreen } from '@components/LoadingScreen';
import { LocomotiveScrollProvider } from '@context';
import { TransitionColorContext } from '@context/TransitionColorContext';
import useHandleAnimationScroll from '@hooks/useHandleAnimationScroll/useHandlerAnimationScroll';
import useMount from '@hooks/useMount/useMount';
import { useContext, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import { Hero } from './Hero';

function AboutUs() {
  const { handleAnimationStart, handleAnimationComplete } = useHandleAnimationScroll();
  const containerRef = useRef(null);
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();

  useMount(() => {
    transitionColorHandler(color.darkgrey);
  });

  return (
    <>
      <LocomotiveScrollProvider.Vertical containerRef={containerRef}>
        <MainContainer data-scroll-container ref={containerRef}>
          <Hero />
        </MainContainer>
      </LocomotiveScrollProvider.Vertical>
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

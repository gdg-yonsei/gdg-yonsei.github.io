import { LoadingScreen } from '@components/LoadingScreen';
import { LocomotiveScrollProvider } from '@context';
import { TransitionColorContext } from '@context/TransitionColorContext';
import { useHandleAnimationScroll } from '@hooks';
import { useMount } from '@hooks/useMount';
import { useContext, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import Banner from './Banner';
import Introduction from './Introduction';
import { Progress } from './Progress';

function GooglePage() {
  const { handleAnimationStart, handleAnimationComplete } = useHandleAnimationScroll();
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();
  const containerRef = useRef(null);

  useMount(() => {
    transitionColorHandler(color.red);
  });

  return (
    <>
      <LocomotiveScrollProvider.Vertical containerRef={containerRef}>
        <Container data-scroll-container ref={containerRef}>
          <Banner />
          <Introduction />
          <Progress />
        </Container>
      </LocomotiveScrollProvider.Vertical>
      <LoadingScreen
        handleAnimationStart={handleAnimationStart}
        handleAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default GooglePage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: 'Google Sans', sans-serif;
  perspective: 1px; // for locomotive-scroll element disappearance bug fix.
  background-color: ${(props) => props.theme.backgroundColor.white};

  content-visibility: auto;
`;

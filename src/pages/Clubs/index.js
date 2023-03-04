import LoadingScreen from '@components/LoadingScreen';
import { HorizontalLocomotiveScrollProvider } from '@context/LocomotiveScrollCustom';
import { TransitionColorContext } from '@context/TransitionColorContext';
import useEffectOnce from '@hooks/useEffectOnce';
import useHandleAnimationScroll from '@hooks/useHandleAnimationScroll.js';
import { useContext, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import Banner from './Banner';
import GalleryComponent from './GalleryComponent';

function ClubsPage() {
  const { handleAnimationStart, handleAnimationComplete } = useHandleAnimationScroll();
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();
  const containerRef = useRef(null);

  useEffectOnce(() => {
    transitionColorHandler(color.yellow);
  });

  return (
    <>
      <HorizontalLocomotiveScrollProvider containerRef={containerRef}>
        <Container data-scroll-container ref={containerRef} id="#fixed-element-clubs-container">
          <Banner />
          <GalleryPadding data-scroll-section />
          <GalleryComponent />
        </Container>
      </HorizontalLocomotiveScrollProvider>
      <LoadingScreen
        handleAnimationStart={handleAnimationStart}
        handleAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default ClubsPage;

const Container = styled.main`
  width: fit-content;
  height: 100%;

  display: flex;

  font-family: 'Google Sans', sans-serif;
  perspective: 1px; // for locomotive-scroll element disappearance bug fix.
  background-color: ${(props) => props.theme.backgroundColor.white};
`;

const GalleryPadding = styled.div`
  width: 35vw;
  height: 100%;

  background: linear-gradient(
    to right,
    ${(props) => props.theme.backgroundColor.white} 0%,
    ${(props) => props.theme.backgroundColor.black} 100%
  );
`;

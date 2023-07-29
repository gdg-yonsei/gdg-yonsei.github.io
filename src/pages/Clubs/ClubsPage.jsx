import { LoadingScreen } from '@components/LoadingScreen';
import { LocomotiveScrollProvider } from '@context';
import { TransitionColorContext } from '@context/TransitionColorContext';
import { useHandleAnimationScroll, useMount } from '@hooks';
import { useContext, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import Banner from './Banner/Banner';
import { GalleryComponent } from './GalleryComponent';

function ClubsPage() {
  const { handleAnimationStart, handleAnimationComplete } = useHandleAnimationScroll();
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();
  const containerRef = useRef(null);

  useMount(() => {
    transitionColorHandler(color.yellow);
  });

  return (
    <>
      <LocomotiveScrollProvider.Horizontal containerRef={containerRef}>
        <Container data-scroll-container ref={containerRef} id="#fixed-element-clubs-container">
          <Banner />
          <GalleryPadding data-scroll-section />
          <GalleryComponent />
        </Container>
      </LocomotiveScrollProvider.Horizontal>
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
  height: 100vh;

  display: flex;

  font-family: 'Google Sans', sans-serif;
  perspective: 1px; // for locomotive-scroll element disappearance bug fix.
  background-color: ${(props) => props.theme.backgroundColor.white};

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
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

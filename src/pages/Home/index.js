import { LoadingScreen } from '@components/LoadingScreen';
import { LocomotiveScrollProvider } from '@context';
import { useHandleAnimationScroll, useMediaQuery } from '@hooks';
import MainSection from '@pages/Home/MainSection/MainSection';
import { MEDIA_QUERIES } from '@styles/media';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

import { Hero } from './Hero';
import { MobileMainSection } from './MobileMainSection';

function Home() {
  const { handleAnimationStart, handleAnimationComplete } = useHandleAnimationScroll();
  const isMobileOrTablet = useMediaQuery(MEDIA_QUERIES.LAPTOP);
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider.Vertical containerRef={containerRef}>
        <Container data-scroll-container ref={containerRef}>
          <Hero />
          {!isMobileOrTablet ? <MainSection /> : <MobileMainSection />}
        </Container>
      </LocomotiveScrollProvider.Vertical>
      <LoadingScreen
        handleAnimationStart={handleAnimationStart}
        handleAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default Home;

const Container = styled(motion.div)`
  width: 100%;

  background-color: ${(props) => props.theme.backgroundColor.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  content-visibility: auto;
`;

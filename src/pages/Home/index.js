import LoadingScreen from '@components/LoadingScreen';
import { VerticalLocomotiveScrollProvider } from '@context/LocomotiveScrollCustom';
import useHandleAnimationScroll from '@hooks/useHandleAnimationScroll.js';
import { useMediaQuery } from '@hooks/useMediaQuery';
import MainSection from '@pages/Home/MainSection';
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
      <VerticalLocomotiveScrollProvider containerRef={containerRef}>
        <Container data-scroll-container ref={containerRef}>
          <Hero />
          {!isMobileOrTablet ? <MainSection /> : <MobileMainSection />}
        </Container>
      </VerticalLocomotiveScrollProvider>
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

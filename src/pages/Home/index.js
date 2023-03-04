import LoadingScreen from '@components/LoadingScreen';
import { VerticalLocomotiveScrollProvider } from '@context/LocomotiveScrollCustom';
import useHandleAnimationScroll from '@hooks/useHandleAnimationScroll.js';
import Hero from '@pages/Home/Hero';
import MainSection from '@pages/Home/MainSection';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

function Home() {
  const { handleAnimationStart, handleAnimationComplete } = useHandleAnimationScroll();
  const containerRef = useRef(null);

  return (
    <>
      <VerticalLocomotiveScrollProvider containerRef={containerRef}>
        <Container data-scroll-container ref={containerRef}>
          <Hero />
          <MainSection />
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
`;

import LoadingScreen from "@components/LoadingScreen";
import useHandleAnimationScroll from "@hooks/useHandleAnimationScroll.js";
import Hero from "@pages/Home/Hero";
import MainSection from "@pages/Home/MainSection";
import { motion } from "framer-motion";
import styled from "styled-components";

function Home() {
  const { handleAnimationStart, handleAnimationComplete } =
    useHandleAnimationScroll();

  return (
    <>
      <Container>
        <Hero />
        <MainSection />
      </Container>
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

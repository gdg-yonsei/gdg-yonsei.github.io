import LocomotiveScrollCustom from "@context/LocomotiveScrollCustom";
import Hero from "@pages/Home/Hero";
import MainSection from "@pages/Home/MainSection";
import { useRef } from "react";
import styled from "styled-components";

function Home() {
  const ref = useRef(null);

  return (
    <LocomotiveScrollCustom containerRef={ref}>
      <Container data-scroll-container ref={ref}>
        <Hero />
        <MainSection />
      </Container>
    </LocomotiveScrollCustom>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;

  background-color: ${(props) => props.theme.backgroundColor.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

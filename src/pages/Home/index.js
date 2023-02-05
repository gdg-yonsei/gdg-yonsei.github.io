import Hero from "@pages/Home/Hero";
import MainSection from "@pages/Home/MainSection";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import styled from "styled-components";

function Home() {
  const ref = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: true,
      }}
      containerRef={ref}
    >
      <Wrapper data-scroll-container ref={ref}>
        <Hero />
        <MainSection />
      </Wrapper>
    </LocomotiveScrollProvider>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 100%;

  background-color: ${(props) => props.theme.backgroundColor.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

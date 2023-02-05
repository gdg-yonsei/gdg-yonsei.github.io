import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import styled from "styled-components";
import Banner from "./Banner";
import Introduction from "./Introduction";
import WebSection from "./JamSection/Web";

function DeveloperPage() {
  const ref = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: true,
      }}
      containerRef={ref}
    >
      <Container data-scroll-container ref={ref}>
        <Banner />
        <Introduction />
        <WebSection />
        <SamplePadding />
      </Container>
    </LocomotiveScrollProvider>
  );
}

export default DeveloperPage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: "Google Sans", sans-serif;
`;

const SamplePadding = styled.div`
  width: 100%;
  height: 100vh;
`;

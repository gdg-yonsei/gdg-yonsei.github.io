import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import styled from "styled-components";
import Banner from "./Banner";
import Introduction from "./Introduction";
import Progress from "./Progress";

function GooglePage() {
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
        <Progress />
      </Container>
    </LocomotiveScrollProvider>
  );
}

export default GooglePage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

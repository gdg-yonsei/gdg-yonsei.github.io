import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import styled from "styled-components";
import Banner from "./Banner";
import Introduction from "./Introduction";

function DeveloperPage() {
  const ref = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={ref}
    >
      <Container data-scroll-container ref={ref}>
        <Banner />
        <Introduction />
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
`;

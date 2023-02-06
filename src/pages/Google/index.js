import LocomotiveScrollCustom from "@context/LocomotiveScrollCustom";
import { useRef } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Introduction from "./Introduction";
import Progress from "./Progress";

function GooglePage() {
  const ref = useRef(null);

  return (
    <LocomotiveScrollCustom containerRef={ref}>
      <Container data-scroll-container ref={ref}>
        <Banner />
        <Introduction />
        <Progress />
      </Container>
    </LocomotiveScrollCustom>
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

import LocomotiveScrollCustom from "@context/LocomotiveScrollCustom";
import { useRef } from "react";
import styled from "styled-components";
import Banner from "./Banner";

function StudentPage() {
  const ref = useRef(null);

  return (
    <LocomotiveScrollCustom containerRef={ref}>
      <Container data-scroll-container ref={ref}>
        <Banner />
        <PaddingTest />
      </Container>
    </LocomotiveScrollCustom>
  );
}

export default StudentPage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PaddingTest = styled.div`
  width: 100%;
  height: 100vh;
`;

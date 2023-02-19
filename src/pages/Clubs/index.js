import { useRef } from "react";
import styled from "styled-components";
import LocomotiveScrollCustom from "@context/LocomotiveScrollCustom";
import Banner from "./Banner";

function ClubsPage() {
  const ref = useRef(null);

  return (
    <LocomotiveScrollCustom
      containerRef={ref}
      additionalOptions={{
        direction: "horizontal",
      }}
    >
      <Container data-scroll-container ref={ref}>
        <Banner />
        <PaddingTemp />
      </Container>
    </LocomotiveScrollCustom>
  );
}

export default ClubsPage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: "Google Sans";

  perspective: 1px; // for locomotive-scroll element disappearance bug fix.
`;

const PaddingTemp = styled.div`
  width: 100%;
  height: 100vh;
`;

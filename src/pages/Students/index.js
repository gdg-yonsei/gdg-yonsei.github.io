import GithubCursor from "@components/GithubCursor";
import LocomotiveScrollCustom from "@context/LocomotiveScrollCustom";
import MouseContextProvider from "@context/MouseContext";
import { useRef } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import BlogSection from "./BlogSection";
import FooterSection from "./FooterSection";
import MemberSection from "./MemberSection";

function StudentPage() {
  const ref = useRef(null);

  return (
    <>
      <LocomotiveScrollCustom containerRef={ref}>
        <Container data-scroll-container ref={ref}>
          <Banner />
          <MouseContextProvider>
            <MemberSection />
            <GithubCursor />
          </MouseContextProvider>
          <PaddingSection />
          <BlogSection />
          <FooterSection />
        </Container>
      </LocomotiveScrollCustom>
    </>
  );
}

export default StudentPage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: "Google Sans";

  perspective: 1px; // for locomotive-scroll element disappearance bug fix.
`;

const PaddingSection = styled.div`
  width: 100%;
  height: 30vh;

  background-color: transparent;
`;

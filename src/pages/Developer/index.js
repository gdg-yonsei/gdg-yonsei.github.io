import LocomotiveScrollCustom from "@context/LocomotiveScrollCustom";
import { useRef } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import FooterSection from "./FooterSection";
import Introduction from "./Introduction";
import DevRelSection from "./JamSection/DevRel";
import FSSection from "./JamSection/FS";
import MLSection from "./JamSection/ML";
import MobileSection from "./JamSection/Mobile";
import ServerSection from "./JamSection/Server";
import WebSection from "./JamSection/Web";
import SectionIntro from "./SectionIntro";

function DeveloperPage() {
  const ref = useRef(null);

  return (
    <LocomotiveScrollCustom containerRef={ref}>
      <Container data-scroll-container ref={ref}>
        <Banner />
        <Introduction />
        <SectionIntro />
        <WebSection />
        <ServerSection />
        <MobileSection />
        <MLSection />
        <FSSection />
        <DevRelSection />
        <FooterSection />
      </Container>
    </LocomotiveScrollCustom>
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

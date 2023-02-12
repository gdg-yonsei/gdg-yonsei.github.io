import styled from "styled-components";
import Jam from "./Jam/Jam";

import { VscCode } from "@react-icons/all-files/vsc/VscCode";
import { BsServer } from "@react-icons/all-files/bs/BsServer";
import { VscDeviceMobile } from "@react-icons/all-files/vsc/VscDeviceMobile";
import { GiProcessor } from "@react-icons/all-files/gi/GiProcessor";
import { FaCogs } from "@react-icons/all-files/fa/FaCogs";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";

function Introduction() {
  return (
    <Container data-scroll-section>
      <TitleWrapper data-scroll data-scroll-speed="1">
        <Title>
          We Have&nbsp;
          <Green>6 Study Jams&nbsp;</Green>Organized.
        </Title>
      </TitleWrapper>
      <JamsContainer>
        <Jam
          icon={<VscCode />}
          description={"Web Developement"}
          scrollTarget="#fixed-element-web"
        />
        <Jam
          icon={<BsServer />}
          description={"Server Development"}
          scrollTarget="#fixed-element-server"
        />
        <Jam
          icon={<VscDeviceMobile />}
          description={"Mobile Development"}
          scrollTarget="#fixed-element-mobile"
        />
        <Jam
          icon={<GiProcessor />}
          description={"Artificial Intelligence"}
          scrollTarget="#fixed-element-ML"
        />
        <Jam
          icon={<FaCogs />}
          description={"Full-Stack Development"}
          scrollTarget="#fixed-element-FS"
        />
        <Jam
          icon={<FaHandshake />}
          description={"Developer Relations"}
          scrollTarget="#fixed-element-DevRel"
        />
      </JamsContainer>
    </Container>
  );
}

export default Introduction;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 2;

  font-family: "Google Sans", sans-serif;
  background-color: ${(props) => props.theme.backgroundColor.white};
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
  margin-left: 3vw;
`;

const Title = styled.span`
  display: inline-block;
  font-size: 5vw;

  color: ${(props) => props.theme.backgroundColor.black};
`;

const Green = styled.span`
  color: ${(props) => props.theme.color.green};
`;

const JamsContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  padding: 5vh 5vw;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 5vh;
  column-gap: 3vw;
`;

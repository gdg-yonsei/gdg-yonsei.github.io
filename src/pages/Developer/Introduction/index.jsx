import styled from "styled-components";
import Jam from "./Jam/Jam";

function Introduction() {
  return (
    <Container data-scroll-section>
      <TitleWrapper>
        <Title>6 Study Jams are Organized.</Title>
      </TitleWrapper>
      <JamsContainer>
        <Jam />
        <Jam />
        <Jam />
        <Jam />
        <Jam />
        <Jam />
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

  background-color: ${(props) => props.theme.color.green};

  font-family: "Google Sans", sans-serif;
  color: white;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
  margin-left: 3vw;
`;

const Title = styled.span`
  display: inline-block;
  font-size: 5vw;
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

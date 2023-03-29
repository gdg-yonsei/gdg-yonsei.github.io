import styled from 'styled-components';

import { BackgroundVideo, SearchBar } from '../components';

function Hero() {
  return (
    <>
      <Container>
        <MainWrapper>
          <MainSpan>Code</MainSpan>
          <SearchBar />
          <MainSpan>With</MainSpan>
          <MainSpan>Google</MainSpan>
        </MainWrapper>
        <BackgroundVideo />
      </Container>
    </>
  );
}

export default Hero;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.backgroundColor.black};

  font-family: 'Google Sans', sans-serif;
`;

const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 15vh;

  padding: 0 3%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2.5vw;

  z-index: 4;

  @media screen and (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    gap: 5vh;
  }
`;

const MainSpan = styled.span`
  display: inline-block;
  font-size: 120px;

  color: ${(props) => props.theme.backgroundColor.white};

  /* font-family: 'Open Sans';
  font-weight: 300; */
`;

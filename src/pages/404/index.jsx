import styled from "styled-components";
import DinosaurGif from "@assets/images/dinosaur-trex.gif";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  return (
    <Container>
      <DinosaurImage src={DinosaurGif} alt="DinosaurGif" />
      <H1>Captain, We're Lost!</H1>
      <Span>Don't worry. We're get you back on course.</Span>
      <BackToMain
        onClick={() => {
          navigate(-1);
        }}
      >
        Take me to Previous Page
      </BackToMain>
      <a
        href="https://tenor.com/ko/view/dinosaur-trex-rare-no-net-gif-15077799"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Credits>
          Credits to: Dinosaur Trex Sticker by "RoxanneJarrelMellott" on tenor
        </Credits>
      </a>
    </Container>
  );
}

export default Page404;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  font-family: "Google Sans", sans-serif;
`;

const DinosaurImage = styled.img`
  margin-bottom: 10vh;
`;

const H1 = styled.h1`
  font-size: 4vw;
  margin-bottom: 1vh;
`;

const Span = styled.span`
  font-size: 1.5vw;
  margin-bottom: 5vh;
`;

const BackToMain = styled.button`
  font-size: 32px;
  font-weight: 600;

  padding: 16px 32px;

  border: 2px solid ${(props) => props.theme.backgroundColor.black};
  border-radius: 32px;

  cursor: pointer;
  margin-bottom: 10vh;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor.black};
    color: ${(props) => props.theme.backgroundColor.white};
  }
`;

const Credits = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 10px;
  right: 10px;

  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

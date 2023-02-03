import styled, { css } from "styled-components";

const Writeup = [
  "Build a solution to a local",
  "problems using Google technologies,",
  "in accordance with one or more of",
  "UN 17 Sustainable Development Goals",
];

function Introduction() {
  return (
    <Container data-scroll-section>
      <TitleWrapper>
        <Title>What is Solution Challenge?</Title>
      </TitleWrapper>
      <DescWrapper>
        {Writeup.map((el, idx) => {
          return idx === 3 ? (
            <Underline key={idx}>{el}</Underline>
          ) : (
            <Line key={idx} index={idx}>
              {el}
            </Line>
          );
        })}
      </DescWrapper>
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

  background-color: ${(props) => props.theme.color.red};

  font-family: "Google Sans", sans-serif;
  color: white;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
  margin-left: 3vw;
`;

const Title = styled.span`
  font-size: 5vw;
`;

const DescWrapper = styled.ul`
  flex-grow: 1;

  padding-top: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Line = styled.li`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 5.5vw;
  line-height: 1.4;

  ${(props) =>
    props.index % 2 === 0
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `}
`;

const Underline = styled.li`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 5.5vw;

  text-decoration: underline;
`;

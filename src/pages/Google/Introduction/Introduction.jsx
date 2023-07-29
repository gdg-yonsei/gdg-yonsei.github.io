import styled, { css } from 'styled-components';

const Writeup = [
  'Build a solution to a local',
  'problems using Google technologies,',
  'in accordance with one or more of',
  'UN 17 Sustainable Development Goals',
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
            <Underline
              key={idx}
              href="https://sdgs.un.org/goals"
              target="_blank"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="1.5"
            >
              {el}
            </Underline>
          ) : (
            <Line
              key={idx}
              index={idx}
              data-scroll
              data-scroll-position="top"
              data-scroll-speed={`1.5 - ${0.1 * idx}`}
            >
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

  position: relative;
  z-index: 2;

  background-color: ${(props) => props.theme.color.red};

  font-family: 'Google Sans', sans-serif;
  color: ${(props) => props.theme.backgroundColor.white};

  ${({ theme }) => theme.tablet`
    min-height: calc(var(--vh, 1vh) * 100);
  `}
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
  margin-left: 3vw;
`;

const Title = styled.span`
  display: inline-block;
  font-size: max(5vw, 28px);
`;

const DescWrapper = styled.ul`
  flex-grow: 1;

  padding-top: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.li`
  display: inline-block;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-weight: 300;
  font-size: max(5.5vw, 24px);
  font-family: 'Pretendard', sans-serif;

  line-height: 1.3;

  ${(props) =>
    props.index % 2 === 0
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `}
`;

const Underline = styled.a`
  display: inline-block;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: max(5.5vw, 24px);

  text-decoration: underline;
  cursor: pointer;
`;

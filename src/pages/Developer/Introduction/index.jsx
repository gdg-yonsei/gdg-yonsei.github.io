import { useState } from 'react';
import styled from 'styled-components';

import Jam from './Jam/Jam';
import { JamList } from './Jam/JamList';

function Introduction() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <Container data-scroll-section>
      <TitleWrapper data-scroll data-scroll-speed="1">
        <Title>
          We Have&nbsp;
          <Green>6 Study Jams&nbsp;</Green>Organized.
        </Title>
      </TitleWrapper>
      <JamsContainer hoveredSection={hoveredSection}>
        {JamList.map((JamElement, idx) => {
          return (
            <Jam
              key={idx}
              index={idx}
              icon={JamElement.icon}
              description={JamElement.description}
              scrollTarget={JamElement.scrollTarget}
              setHoveredSection={setHoveredSection}
            />
          );
        })}
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

  font-family: 'Google Sans', sans-serif;
  background-color: ${(props) => props.theme.backgroundColor.white};

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
  font-size: 5vw;

  color: ${(props) => props.theme.backgroundColor.black};
`;

const Green = styled.span`
  color: ${(props) => props.theme.color.green};
`;

const JamsContainer = styled.div`
  width: 100%;
  height: 25vh;
  flex-grow: 1;

  padding: 5vh 5vw;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  display: grid;
  row-gap: 5vh;
  column-gap: 3vw;

  ${({ theme }) => theme.tablet`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  `}
`;

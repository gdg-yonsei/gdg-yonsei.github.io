import { useState } from 'react';
import styled, { css } from 'styled-components';

import Jam from './Jam/Jam';
import { JamList } from './Jam/JamList';

const handleHoveredSection = (sectionIndex) => {
  switch (sectionIndex) {
    case 0:
      return css`
        grid-template-columns: 1.2fr 1fr 1fr;
        grid-template-rows: 1.2fr 1fr;
      `;

    case 1:
      return css`
        grid-template-columns: 1fr 1.2fr 1fr;
        grid-template-rows: 1.2fr 1fr;
      `;

    case 2:
      return css`
        grid-template-columns: 1fr 1fr 1.2fr;
        grid-template-rows: 1.2fr 1fr;
      `;

    case 3:
      return css`
        grid-template-columns: 1.2fr 1fr 1fr;
        grid-template-rows: 1fr 1.2fr;
      `;

    case 4:
      return css`
        grid-template-columns: 1fr 1.2fr 1fr;
        grid-template-rows: 1fr 1.2fr;
      `;

    case 5:
      return css`
        grid-template-columns: 1fr 1fr 1.2fr;
        grid-template-rows: 1fr 1.2fr;
      `;

    default:
      return css`
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
      `;
  }
};

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

  transition: grid-template-columns 0.35s ease-in-out, grid-template-rows 0.35s ease-in-out;
  ${(props) => handleHoveredSection(props.hoveredSection)}

  display: grid;
  row-gap: 5vh;
  column-gap: 3vw;
`;

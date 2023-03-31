import SubHeader from '@components/Header/SubHeader';
import { useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import Card from '../Card';

function MainSection() {
  const { color } = useTheme();
  const cardsRef = useRef([]);

  const onClickContainer = () => {
    cardsRef.current.forEach((cardRef) => cardRef.update());
  };

  return (
    <Container data-scroll-section onClick={onClickContainer} id="home-container-mainsection">
      <OffsetWrapper data-scroll data-scroll-speed={`-10`}>
        <SubHeader />
        <CardContainer>
          <CardWrapper>
            <TitleSpan className="green">Create.</TitleSpan>
            <CardHeight>
              <Card
                leftText={'01'}
                rightText={'Google'}
                color={color.red}
                linkTarget={'/google'}
                ref={(el) => {
                  cardsRef.current[0] = el;
                }}
              />
            </CardHeight>
          </CardWrapper>
          <CardWrapper>
            <TitleSpan className="yellow">Design.</TitleSpan>
            <CardHeight>
              <Card
                leftText={'02'}
                rightText={'Developer'}
                color={color.green}
                linkTarget={'/developer'}
                ref={(el) => {
                  cardsRef.current[1] = el;
                }}
              />
            </CardHeight>
          </CardWrapper>
          <CardWrapper>
            <TitleSpan className="red">Code.</TitleSpan>
            <CardHeight>
              <Card
                leftText={'03'}
                rightText={'Student'}
                color={color.blue}
                linkTarget={'/student'}
                ref={(el) => {
                  cardsRef.current[2] = el;
                }}
              />
            </CardHeight>
          </CardWrapper>
          <CardWrapper>
            <TitleSpan className="blue">Build.</TitleSpan>
            <CardHeight>
              <Card
                leftText={'04'}
                rightText={'Clubs'}
                color={color.yellow}
                linkTarget={'/clubs'}
                ref={(el) => {
                  cardsRef.current[3] = el;
                }}
              />
            </CardHeight>
          </CardWrapper>
        </CardContainer>
      </OffsetWrapper>
    </Container>
  );
}

export default MainSection;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor.black};
  position: relative;
  z-index: 10;

  font-family: 'Google Sans';

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const OffsetWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleSpan = styled.span`
  display: inline-block;

  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 4.7vw;
  font-weight: 500;
  letter-spacing: 3.6px;

  pointer-events: none;

  &.green {
    color: ${(props) => props.theme.color.green};
  }

  &.red {
    color: ${(props) => props.theme.color.red};
  }

  &.blue {
    color: ${(props) => props.theme.color.blue};
  }

  &.yellow {
    color: ${(props) => props.theme.color.yellow};
  }
`;

const CardHeight = styled.div`
  width: 100%;
  height: 45vh;
`;

const CardContainer = styled.div`
  width: 100%;
  flex: 1;
  padding-bottom: 12.5vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

const CardWrapper = styled.div`
  width: 18vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

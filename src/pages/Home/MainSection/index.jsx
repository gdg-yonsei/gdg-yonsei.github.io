import SubHeader from '@components/Header/SubHeader';
import styled, { useTheme } from 'styled-components';

import Card from './Card';
import Asterisk from './Elements/Asterisk';

function MainSection() {
  const { color } = useTheme();

  return (
    <Container data-scroll-section>
      <OffsetWrapper data-scroll data-scroll-speed="-10">
        <SubHeader />
        <CardContainer>
          <CardWrapper>
            <TitleSpan className="green">Create.</TitleSpan>
            <Card
              leftText={'01'}
              rightText={'Google'}
              shape={<Asterisk />}
              color={color.red}
              linkTarget={'/google'}
            />
          </CardWrapper>
          <CardWrapper>
            <TitleSpan className="yellow">Design.</TitleSpan>
            <Card
              leftText={'02'}
              rightText={'Developer'}
              shape={<Asterisk />}
              color={color.green}
              linkTarget={'/developer'}
            />
          </CardWrapper>
          <CardWrapper>
            <TitleSpan className="red">Code.</TitleSpan>
            <Card
              leftText={'03'}
              rightText={'Student'}
              shape={<Asterisk />}
              color={color.blue}
              linkTarget={'/student'}
            />
          </CardWrapper>
          <CardWrapper>
            <TitleSpan className="blue">Build.</TitleSpan>
            <Card
              leftText={'04'}
              rightText={'Clubs'}
              shape={<Asterisk />}
              color={color.yellow}
              linkTarget={'/clubs'}
            />
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

const CardContainer = styled.div`
  flex: 1;
  padding-bottom: 12.5vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

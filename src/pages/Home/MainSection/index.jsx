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
        <TitleWrapper>
          <TitleSpan className="green">Create,</TitleSpan>
          <TitleSpan className="yellow">Design,</TitleSpan>
          <TitleSpan className="red">Code,</TitleSpan>
          <TitleSpan className="blue">Build</TitleSpan>
        </TitleWrapper>
        <CardContainer>
          <Card
            leftText={'01'}
            rightText={'Google'}
            shape={<Asterisk />}
            color={color.red}
            linkTarget={'/google'}
          />
          <Card
            leftText={'02'}
            rightText={'Developer'}
            shape={<Asterisk />}
            color={color.green}
            linkTarget={'/developer'}
          />
          <Card
            leftText={'03'}
            rightText={'Student'}
            shape={<Asterisk />}
            color={color.blue}
            linkTarget={'/student'}
          />
          <Card
            leftText={'04'}
            rightText={'Clubs'}
            shape={<Asterisk />}
            color={color.yellow}
            linkTarget={'/clubs'}
          />
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

const TitleWrapper = styled.div`
  width: 100%;
  min-height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vh;
`;

const TitleSpan = styled.span`
  display: inline-block;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  font-weight: 500;
  font-size: 9vmin;
  letter-spacing: 3.6px;

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
  padding-bottom: 5vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

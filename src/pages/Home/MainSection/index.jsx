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
          <TitleSpan>We Solve,</TitleSpan>
          <TitleSpan>We Challenge.</TitleSpan>
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

  font-family: 'Neue Montreal';
`;

const OffsetWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 5vh 10vw;

  vertical-align: baseline;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1vh;
`;

const TitleSpan = styled.span`
  display: inline-block;
  height: 100%;

  font-weight: 400;
  font-size: 10vmin;
  letter-spacing: 3.6px;

  color: ${(props) => props.theme.backgroundColor.white};
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

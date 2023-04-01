import SubHeader from '@components/Header/SubHeader';
import { useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import Card from '../Card';

function MobileMainSection() {
  const { color } = useTheme();
  const cardsRef = useRef([]);

  const onClickContainer = () => {
    cardsRef.current.forEach((cardRef) => cardRef.update());
  };

  return (
    <Container data-scroll-section onClick={onClickContainer}>
      <OffsetWrapper data-scroll data-scroll-speed="0" id="home-container-mainsection">
        <SubHeader />
        <CardContainer>
          <CardWrapper id="mobile-main-google">
            <TitleSpan data-scroll data-scroll-speed="1.5" className="green">
              Create.
            </TitleSpan>
            <CardControl>
              <Card
                leftText={'01'}
                rightText={'Google'}
                color={color.red}
                linkTarget={'/google'}
                ref={(el) => {
                  cardsRef.current[0] = el;
                }}
              />
            </CardControl>
          </CardWrapper>
          <CardWrapper id="mobile-main-developer">
            <TitleSpan data-scroll data-scroll-speed="1.5" className="yellow">
              Design.
            </TitleSpan>
            <CardControl>
              <Card
                leftText={'02'}
                rightText={'Developer'}
                color={color.green}
                linkTarget={'/developer'}
                ref={(el) => {
                  cardsRef.current[1] = el;
                }}
              />
            </CardControl>
          </CardWrapper>
          <CardWrapper id="mobile-main-student">
            <TitleSpan data-scroll data-scroll-speed="1.5" className="red">
              Code.
            </TitleSpan>
            <CardControl>
              <Card
                leftText={'03'}
                rightText={'Student'}
                color={color.blue}
                linkTarget={'/student'}
                ref={(el) => {
                  cardsRef.current[2] = el;
                }}
              />
            </CardControl>
          </CardWrapper>
          <CardWrapper>
            <TitleSpan data-scroll data-scroll-speed="1.5" className="blue">
              Build.
            </TitleSpan>
            <CardControl id="mobile-main-clubs">
              <Card
                leftText={'04'}
                rightText={'Clubs'}
                color={color.yellow}
                linkTarget={'/clubs'}
                ref={(el) => {
                  cardsRef.current[3] = el;
                }}
              />
            </CardControl>
          </CardWrapper>
        </CardContainer>
      </OffsetWrapper>
    </Container>
  );
}

export default MobileMainSection;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.backgroundColor.black};
  position: relative;
  z-index: 10;

  font-family: 'Google Sans';
`;

const OffsetWrapper = styled.div`
  width: 100%;

  padding-bottom: max(10vh, 120px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleSpan = styled.span`
  display: inline-block;

  width: 100%;
  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 80px;
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

const CardControl = styled.div`
  width: min(100%, 450px);
  height: 55vh;
`;

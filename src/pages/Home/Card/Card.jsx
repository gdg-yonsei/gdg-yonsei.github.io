import { DelayedLink } from '@components/DelayedLink';
import { Doodle } from '@components/Doodle';
import { TRANSITION_DURATION } from '@constants/constants';
import { TransitionColorContext } from '@context/TransitionColorContext';
import { forwardRef, useContext } from 'react';
import styled from 'styled-components';

function Card({ color, linkTarget, leftText, rightText }, ref) {
  const { transitionColorHandler } = useContext(TransitionColorContext);

  const handleCardClick = () => {
    transitionColorHandler(color);
  };

  return (
    <Container color={color} onClick={handleCardClick}>
      <DelayedLink to={linkTarget} delay={TRANSITION_DURATION}>
        <Wrapper>
          <ShapeWrapper>
            <Doodle
              ref={ref}
              rule={`
              :doodle {
                @size: clamp(150px, 75%, 200px);
              }

              transition: all 0.4s ease;
              border-top: 1px solid @p(#ea3323, #007cf3, #ffbb25,#1fb254);
              border-right: 1px solid @p(#ea3323, #007cf3, #ffbb25,#1fb254);

              :after {
                content: \\@hex(@rand(9632, 9687));
                color: @p(#ea3323, #007cf3, #ffbb25,#1fb254);
                transform: scale(3.5);
              }

              @random {
                border-top: 1px solid transparent;
                border-right: 1px solid transparent;
                border-bottom: 1px solid @p(#ea3323, #007cf3, #ffbb25,#1fb254);
                border-left: 1px solid @p(#ea3323, #007cf3, #ffbb25,#1fb254);
                border-style: dashed;
            `}
            />
          </ShapeWrapper>
          <TextWrapper>
            <LeftText>{leftText}</LeftText>
            <RightText>{rightText}</RightText>
          </TextWrapper>
        </Wrapper>
      </DelayedLink>
    </Container>
  );
}

export default forwardRef(Card);

const Container = styled.figure`
  width: 100%;
  height: 100%;

  background-color: transparent;
  border: 1px solid ${(props) => props.theme.lightColor.light};

  position: relative;

  cursor: pointer;
`;

const ShapeWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 0 5% 3%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const LeftText = styled.span`
  color: ${(props) => props.theme.backgroundColor.white};
  font-size: 44px;
`;

const RightText = styled.span`
  color: ${(props) => props.theme.backgroundColor.white};
  font-size: 20px;
`;

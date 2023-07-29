import Circle from '@components/Circle';
import { useWindowSize } from '@hooks';
import { MouseParallaxChild } from 'react-parallax-mouse';
import styled, { css } from 'styled-components';

function BackgroundParallax() {
  const { width, height } = useWindowSize();

  return (
    <>
      <MouseParallaxChild factorX={0.1} factorY={0.05}>
        <CircleWrapper xPos={width * -0.24} yPos={height * -0.6}>
          <Circle size={Math.min(width, height) * 1} color={'red'} />
        </CircleWrapper>
      </MouseParallaxChild>
      <MouseParallaxChild factorX={0.25} factorY={0.125}>
        <CircleWrapper xPos={width * 0.02} yPos={height * 0.1} rightPos>
          <Circle size={Math.min(width, height) * 0.3} color={'green'} />
        </CircleWrapper>
      </MouseParallaxChild>
      <MouseParallaxChild factorX={0.2} factorY={0.1}>
        <CircleWrapper xPos={width * 0.01} yPos={height * 0.6}>
          <Circle size={Math.min(width, height) * 0.618} color={'blue'} />
        </CircleWrapper>
      </MouseParallaxChild>
      <MouseParallaxChild factorX={0.4} factorY={0.2}>
        <CircleWrapper xPos={width * 0.01} yPos={height * 0.7} rightPos>
          <Circle size={Math.min(width, height) * 0.1} color={'yellow'} />
        </CircleWrapper>
      </MouseParallaxChild>
    </>
  );
}

export default BackgroundParallax;

const CircleWrapper = styled.div`
  position: absolute;

  ${(props) =>
    !props.rightPos
      ? css`
          top: ${(props) => `${props.yPos}px`};
          left: ${(props) => `${props.xPos}px`};
        `
      : css`
          top: ${(props) => `${props.yPos}px`};
          right: ${(props) => `${props.xPos}px`};
        `}

  opacity: 0.22;
`;

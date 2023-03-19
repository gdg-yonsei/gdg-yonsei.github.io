import 'css-doodle';

import { forwardRef } from 'react';
import styled from 'styled-components';

function BlocksDoodle({ shapeFrequency = 0.4 }, ref) {
  return (
    <Container>
      <style>
        {`
        css-doodle{
            --randomColor: @p(#ea3323, #007cf3, #1fb254, #ffbb25);
            --rule: (
              -webkit-transform:rotate(@p(90deg, 180deg, 270deg, 360deg));
              transform:rotate(@p(90deg, 180deg, 270deg, 360deg));
              
              @random(${shapeFrequency}) {
                background: var(--randomColor);
                -webkit-clip-path: @p(circle(50% at 50% 50%), polygon(0 0, 0% 100%, 100% 100%), polygon(0 0, 100% 0, 100% 100%, 0% 100%));
                clip-path: @p(circle(50% at 50% 50%), polygon(0 0, 0% 100%, 100% 100%), polygon(0 0, 100% 0, 100% 100%, 0% 100%));
                -webkit-transition: ease @r(200ms, 600ms);
                transition: ease @r(200ms, 600ms);
              }
              
              @random(${shapeFrequency}) {
                background: var(--randomColor);
                border-radius: 200px 200px 0px 0px;
                -webkit-clip-path: none;
                clip-path: none;
                
              -webkit-transition: ease @r(200ms, 600ms);
              transition: ease @r(200ms, 600ms);
              }
            );
          }
        `}
      </style>
      <css-doodle use="var(--rule)" ref={ref}>
        {`
          :doodle {
            @grid: 6x9;
            @size: 49.5% 80%;

            overflow: hidden;
            text-align: center;
          }
          
          :container {
            background: #fffdfa;
            overflow: hidden;
          }
          `}
      </css-doodle>
    </Container>
  );
}

export default forwardRef(BlocksDoodle);

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

import 'css-doodle';

import { forwardRef } from 'react';
import styled from 'styled-components';

function TerrainDoodle({ shapeFrequency = 0.5, lineFrequency = 0.5 }, ref) {
  return (
    <Container>
      <style>
        {`
          css-doodle {
            --randomColor: @p(#ea3323, #007cf3, #1fb254, #ffbb25);
            --rule: (
              /*Frequency options of 0.2, 0.4, 0.6, 0.8, 1.0 */
              @random(${shapeFrequency}) {
                :after {
                  content: '';
                  background: var(--randomColor);
                  @size: @rand(12px, 36px);
                  -webkit-clip-path: @pick(polygon(50% 0%, 0% 100%, 100% 100%), circle(50% at 50% 50%), polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%));
                  clip-path: @pick(polygon(50% 0%, 0% 100%, 100% 100%), circle(50% at 50% 50%), polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%));

                  -webkit-transform: rotate(@pick(0deg, 360deg));
                  transform: rotate(@pick(0deg, 360deg));

                  -webkit-transition: transform ease @rand(200ms, 600ms);
                  transition: transform ease @rand(200ms, 600ms);
                }
              }

              @random(${lineFrequency}) {
                -webkit-box-shadow:0 -1px 0 #000000;
                box-shadow:0 -1px 0 #000000;
              }
              
              @random(${lineFrequency}) {
                -webkit-box-shadow:-1px 0 0 #000000;
                box-shadow:-1px 0 0 #000000;
              }
            );
          }
        `}
      </style>
      <css-doodle use="var(--rule)" ref={ref}>
        {`
          :doodle {
            @grid: 4x8;
            @size: 49.5% 80%;

            overflow:hidden;
            text-align:center;
            box-sizing:border-box;
          }
          
          :container {
            background: ${(props) => props.theme.backgroundColor.white};
            overflow:hidden;
          }
          `}
      </css-doodle>
    </Container>
  );
}

export default forwardRef(TerrainDoodle);

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

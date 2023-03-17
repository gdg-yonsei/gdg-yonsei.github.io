import 'css-doodle';

import { forwardRef } from 'react';
import styled from 'styled-components';

function OdessaDoodle({ shapeFrequency = 0.4 }, ref) {
  return (
    <Container>
      <style>
        {`
          css-doodle {
            --randomColor: @p(#ea3323, #007cf3, #1fb254, #ffbb25);
            --rule: (
              /* Frequency options of 0.2, 0.4, 0.6, 0.8, 1.0 */
              @random(${shapeFrequency}) {
                background: var(--randomColor);
                width:100%;
                height: @pick(100%, 200%, 300%);
                border-radius: 200px 200px 200px 200px;
                
                /* On or off option for displaying box shadows */
                -webkit-box-shadow: 0 0 @pick(0, 40)px rgba(0,0,0,0.2);
                box-shadow: 0 0 @pick(0, 40)px rgba(0,0,0,0.2);
              }
              
              -webkit-transition: height ease @rand(200ms, 600ms);
              transition: height ease @rand(200ms, 600ms);
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

export default forwardRef(OdessaDoodle);

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

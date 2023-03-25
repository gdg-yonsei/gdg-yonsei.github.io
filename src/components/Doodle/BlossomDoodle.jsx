import 'css-doodle';

import { forwardRef } from 'react';
import styled from 'styled-components';

function BlossomDoodle({ shapeFrequency = 0.4 }, ref) {
  return (
    <Container>
      <style>
        {`
          css-doodle {
            --randomColor: @p(#ea3323, #007cf3, #1fb254, #ffbb25);
            --rule: (
              overflow: hidden;
              
              :before {
                content: '';
                @size: 100%;
                position: absolute;
              }
              
              @random(${shapeFrequency}) {
                @random {
                  border-radius: 0px 0px 100% 100%;
                  background: linear-gradient(90deg, var(--randomColor) 50%, var(--randomColor) 50%);
                  
                  :before {
                    top: -50%;
                    left: 0;

                    background-color: #fffdfa;
                    @shape: hypocycloid 4;

                    -webkit-transition: ease @rand(200ms, 600ms);
                    transition: ease @rand(200ms, 600ms);
                  }
                }
                
                @random { 
                  border-radius: 100% 100% 0 0;
                  background: linear-gradient(90deg, var(--randomColor) 50%, var(--randomColor) 50%);
                  
                  :before {
                    top: 50%;
                    left: 0;
                    background-color: #fffdfa;

                    @shape: hypocycloid 4;
                    -webkit-transition: ease @rand(200ms, 600ms);
                    transition: ease @rand(200ms, 600ms);
                  }
                } 

                @random {
                background: none;

                -webkit-clip-path: @pick(circle(50% at 50% 50%), polygon(0 0, 100% 0, 100% 100%, 0% 100%));
                clip-path: @pick(circle(50% at 50% 50%), polygon(0 0, 100% 0, 100% 100%, 0% 100%));

                transform: rotate(@pick(0, 90deg, 180deg));
                -webkit-transition: ease @rand(200ms, 600ms);
                 
                transition: ease @rand(200ms, 600ms);
                
                :before {
                  background: linear-gradient(90deg, var(--randomColor) 50%, var(--randomColor) 50%);
                  top: 0;
                  left: 0;
                }
              }
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
            text-align:center;
            box-sizing:border-box;
          }
          
          :container {
            background: #fffdfa;
            overflow:hidden;
          }
          `}
      </css-doodle>
    </Container>
  );
}

export default forwardRef(BlossomDoodle);

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

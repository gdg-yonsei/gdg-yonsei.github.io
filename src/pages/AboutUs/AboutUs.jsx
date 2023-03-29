import styled from 'styled-components';

import { Hero } from './Hero';

function AboutUs() {
  return (
    <>
      <Hero />
      <Background />
    </>
  );
}

export default AboutUs;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;

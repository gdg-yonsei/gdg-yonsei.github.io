import MainFooter from '@components/Footer/MainFooter';
import MainHeader from '@components/Header/MainHeader';
import styled from 'styled-components';

import LogoSection from './LogoSection';
import NavigationSection from './NavigationSection';
import PaddingSection from './PaddingSection';

function Hero() {
  return (
    <MainContainer data-scroll-section>
      <MainHeader />
      <LogoSection />
      <NavigationSection />
      <PaddingSection />
      <MainFooter />
    </MainContainer>
  );
}

export default Hero;

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 1000;

  background-color: ${(props) => props.theme.backgroundColor.white};
`;

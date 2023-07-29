import { MainFooter } from '@components/Footer';
import { MainHeader } from '@components/Header/MainHeader';
import { useMediaQuery } from '@hooks';
import { MEDIA_QUERIES } from '@styles/media';
import { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';

import LogoSection from './LogoSection';
import NavigationSection from './NavigationSection';
import PaddingSection from './PaddingSection';

const GDSC_PAGES = ['/google', '/developer', '/student', '/clubs'];
const GDSC_SCROLL_TARGET = [
  '#mobile-main-google',
  '#mobile-main-developer',
  '#mobile-main-student',
  '#mobile-main-clubs',
];

function Hero() {
  const isSmallerLaptop = useMediaQuery(MEDIA_QUERIES.LAPTOP);
  const { scroll, isReady } = useLocomotiveScroll();

  useEffect(() => {
    if (isReady) {
      const prevRoute = localStorage.getItem('prev') ?? '';

      if (GDSC_PAGES.includes(prevRoute)) {
        if (isSmallerLaptop) {
          const pageIndex = GDSC_PAGES.indexOf(prevRoute);

          scroll.scrollTo(GDSC_SCROLL_TARGET[pageIndex], { duration: 0, disableLerp: false });
          return;
        }

        scroll.scrollTo('bottom', { duration: 0, disableLerp: false });
      }
    }
  }, [isReady]);

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

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

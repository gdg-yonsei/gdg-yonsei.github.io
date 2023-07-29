import useLocomotiveScrollPosition from '@hooks/useLocomotiveScrollPosition/useLocomotiveScrollPosition';
import useWindowSize from '@hooks/useWindowSize/useWindowSize';
import styled from 'styled-components';

import { BackgroundVideo, GoBackArrow, SearchBar } from '../components';

function Hero() {
  const scrollPos = useLocomotiveScrollPosition(10, false);
  const { height } = useWindowSize();

  return (
    <Container data-scroll-section id="aboutus-container">
      <MainWrapper data-scroll data-scroll-sticky data-scroll-target="#aboutus-container">
        <TextSection>
          <MainSpan blur={scrollPos / 30} opacity={Math.max(1 - scrollPos / height, 0)}>
            Code
          </MainSpan>
          <SearchBar translateZ={scrollPos / 5} />
          <MainSpan blur={scrollPos / 30} opacity={Math.max(1 - scrollPos / height, 0)}>
            With
          </MainSpan>
          <MainSpan blur={scrollPos / 30} opacity={Math.max(1 - scrollPos / height, 0)}>
            Google
          </MainSpan>
        </TextSection>
      </MainWrapper>
      <TextWrapper>
        <H1>Welcome to GDSC Yonsei!</H1>
        <P>
          Google Developer Student Clubs (GDSC) are community groups designed to help students
          develop leadership and development skills. Students participate in events hosted by
          Google, meet engineers on the job, and demonstrate their skills. <br /> <br />
          Further, various educational materials and activities are given to support the development
          of their technological skills. <br /> <br />
          As a member of the GDSC, students build their knowledge through peer-to-peer learning and
          put theory into practice through the development of solutions based on community needs. In
          addition to contributing to the UN Sustainable Development Goals and addressing climate
          issues, GDSC leaders are developing valuable coding skills and making a real difference.
          <br /> <br />
          Come join us for various projects that will shape the society, and fun activities that
          will enrich your college experience!
        </P>
      </TextWrapper>
      <BackgroundVideo />
      <GoBackArrow />
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  width: 100vw;
  height: 450vh;

  background-color: ${(props) => props.theme.backgroundColor.black};

  font-family: 'Google Sans', sans-serif;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  z-index: 10;

  background-color: transparent;

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const TextSection = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 3%;

  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2.5vw;

  background-color: transparent;

  z-index: 4;

  @media screen and (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    gap: 5vh;
  }

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const MainSpan = styled.span.attrs((props) => ({
  style: {
    filter: `blur(${props.blur}px)`,
    opacity: `${props.opacity}`,
  },
}))`
  display: inline-block;
  font-size: 100px;

  background-color: transparent;

  color: ${(props) => props.theme.backgroundColor.white};

  filter: blur(${(props) => `${props.blue}px`});

  @media screen and (max-width: 1350px) {
    font-size: 120px;
  }

  ${({ theme }) => theme.mobile`
    font-size: 72px;
  `}
`;

const TextWrapper = styled.main`
  width: 80vw;
  height: 80vh;

  margin-left: 10vw;
  margin-top: 260vh;
  padding: 3%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 5vh;

  position: relative;
  z-index: 10;

  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.4);

  border-radius: 32px;

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);

    margin-top: 240vh;
  `}

  ${({ theme }) => theme.mobile`
    height: 120vh;

    margin-top: 220vh;
  `}
`;

const H1 = styled.h1`
  font-size: 72px;
  color: ${(props) => props.theme.backgroundColor.white};

  ${({ theme }) => theme.mobile`
    font-size: 36px;
  `}
`;

const P = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.backgroundColor.white};

  line-height: 1.2;

  ${({ theme }) => theme.mobile`
    font-size: 16px;
  `}
`;

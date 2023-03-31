import { ReactComponent as SiDart } from '@assets/images/icons/mobile/dart.svg';
import { ReactComponent as SiFirebase } from '@assets/images/icons/mobile/firebase.svg';
import { ReactComponent as SiFlutter } from '@assets/images/icons/mobile/flutter.svg';
import { ReactComponent as SiUIKit } from '@assets/images/icons/mobile/uikit.svg';
// Icon Import
import { ReactComponent as SiSwift } from '@assets/images/icons/swift.svg';
import useOnScreen from '@hooks/useOnScreen';
import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

import GithubMenu from './GithubMenu';

function MobileSection() {
  const observerRef = useRef(null);
  const observerRefSecond = useRef(null);
  const observerRefThird = useRef(null);
  const onScreen = useOnScreen(observerRef);
  const onScreenSecond = useOnScreen(observerRefSecond);
  const onScreenThird = useOnScreen(observerRefThird);

  const setTooltip = (content) => {
    return {
      'data-tooltip-id': 'mobile-tooltip',
      'data-tooltip-content': content,
      'data-tooltip-place': 'bottom',
      'data-tooltip-hide': 0.5,
    };
  };

  return (
    <Container data-scroll-section>
      <ContentWrapper id="fixed-element-mobile">
        <LeftSection>
          <OutlineContainer
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-element-mobile"
          >
            <H1>03.</H1>
            <H2>Mobile Development</H2>
            <Paragraph>
              Hand-held mobile smartphones & devices have become more accessible than ever before,
              and the importance of mobile developement is becoming more evident. more and more
              nowadays. <br />
              Crucial as it seems, and it is!
            </Paragraph>
          </OutlineContainer>
        </LeftSection>
        <RightSection>
          <SectionWrapper ref={observerRef} id="mobile-section-wrapper-first">
            <TitleWrapperFirst
              data-scroll
              data-scroll-sticky
              data-scroll-target="#mobile-section-wrapper-first"
            >
              {onScreen && (
                <TypeAnimation sequence={['What we do']} speed={50} wrapper={'span'} repeat={1} />
              )}
            </TitleWrapperFirst>
            <LearnList>
              <List>Develop modern mobile application using Flutter & Swift.</List>
              <List>Write API to support native mobile functionality.</List>
              <List>Build interfaces with rich UI / UX.</List>
              <List>Monitor the application CI / CD and track ongoing releases.</List>
            </LearnList>
          </SectionWrapper>
          <SectionWrapper ref={observerRefSecond} id="mobile-section-wrapper-second">
            <TitleWrapperSecond
              data-scroll
              data-scroll-sticky
              data-scroll-target="#mobile-section-wrapper-second"
            >
              {onScreenSecond && (
                <TypeAnimation
                  sequence={['What we learn']}
                  speed={50}
                  wrapper={'span'}
                  repeat={1}
                />
              )}
            </TitleWrapperSecond>
            <IconList>
              <IconName>Languages</IconName>
              <IconWrapper>
                <SiSwift {...setTooltip('Swift')} />
                <SiDart {...setTooltip('Dart')} />
              </IconWrapper>
            </IconList>
            <IconList>
              <IconName>Mobile Frameworks & Libraries</IconName>
              <IconWrapper>
                <SiSwift {...setTooltip('Swift')} />
                <SiUIKit {...setTooltip('UIKit')} />
                <SiFlutter {...setTooltip('Flutter')} />
                <SiFirebase {...setTooltip('Firebase')} />
              </IconWrapper>
            </IconList>
          </SectionWrapper>
          <SectionWrapper ref={observerRefThird} id="mobile-section-wrapper-third">
            <TitleWrapperThird
              data-scroll
              data-scroll-sticky
              data-scroll-target="#mobile-section-wrapper-third"
            >
              {onScreenThird && (
                <TypeAnimation
                  sequence={["What we've done"]}
                  speed={50}
                  wrapper={'span'}
                  repeat={1}
                />
              )}
            </TitleWrapperThird>
            <GithubList>
              <GithubMenu
                title={'Fridge Share App'}
                type="Flutter"
                description={
                  'Fridge Sharing managing mobile app. GDSC - YS believes the power of beneficial positive impact on society.'
                }
                link="https://github.com/gdsc-ys/share-fridge-flutter"
              />
            </GithubList>
          </SectionWrapper>
        </RightSection>
      </ContentWrapper>
      <Tooltip id="mobile-tooltip" />
    </Container>
  );
}

export default MobileSection;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 2;

  color: ${(props) => props.theme.backgroundColor.black};

  perspective: 1px;

  ${({ theme }) => theme.tablet`
    min-height: calc(var(--vh, 1vh) * 100);
  `}
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  position: relative;

  display: flex;
`;

const LeftSection = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutlineContainer = styled.div`
  position: relative;
  z-index: 0;

  padding-top: 25vh;
  padding-right: 20%;
  padding-left: 10%;
  padding-bottom: 20vh;
`;

const H1 = styled.h1`
  font-size: 88px;
  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.mobile`
    font-size: 9vw;
  `}
`;

const H2 = styled.h2`
  display: inline-block;
  font-size: 30px;
  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.mobile`
    font-size: 3.5vw;
  `}
`;

const Paragraph = styled.p`
  margin-top: 5vh;

  font-size: 16px;
  font-weight: 400;
  white-space: pre-line;
  line-height: 1.3;

  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.mobile`
    font-size: 2vw;
  `}
`;

const RightSection = styled.div`
  width: 65%;

  padding: 3% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
  background-color: ${(props) => props.theme.color.yellow};
`;

const SectionWrapper = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 15vh;
  padding: 7% 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1000;

  background-color: ${(props) => props.theme.color.yellow};

  span {
    font-weight: 500;

    &::after {
      // cursor styling
      color: ${(props) => props.theme.brightColor.yellow};
    }
  }

  ${({ theme }) => theme.mobile`
    height: 10vh;
  `}
`;

const TitleWrapperFirst = styled(TitleWrapper)`
  span {
    font-size: 8vw;
  }
`;

const LearnList = styled.ul`
  width: 100%;

  padding: 3% 12%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.3vh;

  list-style-type: decimal;
`;

const List = styled.li`
  font-size: 1.7vw;
  font-weight: 400;

  ${({ theme }) => theme.mobile`
    font-size: 2vw;
  `}
`;

const TitleWrapperSecond = styled(TitleWrapper)`
  span {
    font-size: 7vw;
  }
`;

const IconList = styled.div`
  width: 100%;

  padding: 5% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.3vh;
`;

const IconName = styled.div`
  width: 100%;

  font-size: 3vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 100%;
  padding: 3% 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  // Icon Styling
  svg {
    width: 5vw;
    height: 5vw;
    cursor: pointer;

    path {
      fill: ${(props) => props.theme.lightColor.yellow};
      transition: fill 0.1s ease-in;
    }

    &:hover {
      path {
        fill: ${(props) => props.theme.backgroundColor.white};
        /* fill: inherit; */
      }
    }
  }
`;

const TitleWrapperThird = styled(TitleWrapper)`
  span {
    font-size: 5.5vw;
  }
`;

const GithubList = styled.ul`
  width: 100%;

  padding: 5% 10%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5vh;
`;

import useOnScreen from "@hooks/useOnScreen";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

// Icon Import
import { ReactComponent as SiSwift } from "@assets/images/icons/swift.svg";
import { ReactComponent as SiUIKit } from "@assets/images/icons/mobile/uikit.svg";
import { ReactComponent as SiDart } from "@assets/images/icons/mobile/dart.svg";
import { ReactComponent as SiFlutter } from "@assets/images/icons/mobile/flutter.svg";
import { ReactComponent as SiFirebase } from "@assets/images/icons/mobile/firebase.svg";

import GithubMenu from "./GithubMenu";

function MobileSection() {
  const observerRef = useRef(null);
  const observerRefSecond = useRef(null);
  const observerRefThird = useRef(null);
  const onScreen = useOnScreen(observerRef);
  const onScreenSecond = useOnScreen(observerRefSecond);
  const onScreenThird = useOnScreen(observerRefThird);

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
              As hand-held mobile smartphones & devices are any closer than
              other devices, the importance of mobile developement is emphasized
              more and more nowadays. <br />
              Crucial as it seems, and it is!
            </Paragraph>
          </OutlineContainer>
        </LeftSection>
        <RightSection>
          <SectionWrapper ref={observerRef}>
            <TitleWrapperFirst>
              {onScreen && (
                <TypeAnimation
                  sequence={["What we do"]}
                  speed={50}
                  wrapper={"span"}
                  repeat={1}
                />
              )}
            </TitleWrapperFirst>
            <LearnList>
              <List>
                Develop modern mobile application using modern framework.
              </List>
              <List>Write APIs for supporting mobile functionality.</List>
              <List>Build interfaces with rich UI / UX.</List>
              <List>
                Create cross-platform applications for Android and iOS.
              </List>
              <List>
                Monitor the application CI / CD and track ongoing releases.
              </List>
            </LearnList>
          </SectionWrapper>
          <SectionWrapper ref={observerRefSecond}>
            <TitleWrapperSecond>
              {onScreenSecond && (
                <TypeAnimation
                  sequence={["What we learn"]}
                  speed={50}
                  wrapper={"span"}
                  repeat={1}
                />
              )}
            </TitleWrapperSecond>
            <IconList>
              <IconName>Languages</IconName>
              <IconWrapper>
                <SiSwift />
                <SiDart />
              </IconWrapper>
            </IconList>
            <IconList>
              <IconName>Mobile Frameworks & Libraries</IconName>
              <IconWrapper>
                <SiSwift />
                <SiUIKit />
                <SiFlutter />
                <SiFirebase />
              </IconWrapper>
            </IconList>
          </SectionWrapper>
          <SectionWrapper ref={observerRefThird}>
            <TitleWrapperThird>
              {onScreenThird && (
                <TypeAnimation
                  sequence={["What we've done"]}
                  speed={50}
                  wrapper={"span"}
                  repeat={1}
                />
              )}
            </TitleWrapperThird>
            <GithubList>
              <GithubMenu
                title={"Fridge Share App"}
                type="Flutter"
                description={
                  "Fridge Sharing managing mobile app. GDSC - YS believes the power of beneficial positive impact on society."
                }
                link="https://github.com/gdsc-ys/share-fridge-flutter"
              />
            </GithubList>
          </SectionWrapper>
        </RightSection>
      </ContentWrapper>
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
`;

const H2 = styled.h2`
  display: inline-block;
  font-size: 30px;
  color: ${(props) => props.theme.backgroundColor.black};
`;

const Paragraph = styled.p`
  margin-top: 5vh;

  font-size: 16px;
  font-weight: 400;
  white-space: pre-line;
  line-height: 1.3;

  color: ${(props) => props.theme.backgroundColor.black};
`;

const RightSection = styled.div`
  width: 65%;

  padding: 3% 7%;

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
  padding: 5% 0;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 500;

    &::after {
      // cursor styling
      color: ${(props) => props.theme.brightColor.yellow};
    }
  }
`;

const TitleWrapperFirst = styled(TitleWrapper)`
  span {
    font-size: 8vw;
  }
`;

const LearnList = styled.ul`
  width: 100%;

  padding: 5% 0;

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
    width: 4.5vmax;
    height: 4.5vmax;
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

  padding: 5% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5vh;
`;

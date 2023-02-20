import useOnScreen from "@hooks/useOnScreen";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

function DevRelSection() {
  const observerRef = useRef(null);
  const observerRefSecond = useRef(null);
  const onScreen = useOnScreen(observerRef);
  const onScreenSecond = useOnScreen(observerRefSecond);

  return (
    <Container data-scroll-section>
      <ContentWrapper id="fixed-element-DevRel">
        <LeftSection>
          <OutlineContainer
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-element-DevRel"
          >
            <H1>06.</H1>
            <H2>Developer Relations</H2>
            <Paragraph>
              Every groups need a leader & mediators. <br />
              Developer Relations, DevRel in short, hosts ongoing events in GDSC
              - YS, and be the heart of the chapter. <br />
              Strategic mind and tactics help the chapter beneficial to both
              developers and the organization.
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
                Host upcoming & ongoing internal, external Google events.
              </List>
              <List>
                Recruit other developers and managers and help the recuitee fit
                in the chapter.
              </List>
              <List>
                Manage current projects and develop vision for the product
                related to business goals.
              </List>
              <List>
                Promote GDSC chapter to the student & industry society.
              </List>
            </LearnList>
          </SectionWrapper>
          <SectionWrapper ref={observerRefSecond}>
            <TitleWrapperSecond>
              {onScreenSecond && (
                <TypeAnimation
                  sequence={["What we've done"]}
                  speed={50}
                  wrapper={"span"}
                  repeat={1}
                />
              )}
            </TitleWrapperSecond>
            <EventList>
              <List>Hosted GDSC - YS Weekly T19 / Tech Talk Session.</List>
              <List>Organize aperiodic fireside chat.</List>
              <List>Manage production of &apos;Fridge Share App.&apos;</List>
              <List>Hosted joint session with GDSC - CAU.</List>
              <List>Hosted joint session with GDSC - CAU & GDSC - GIST.</List>
            </EventList>
          </SectionWrapper>
        </RightSection>
      </ContentWrapper>
    </Container>
  );
}

export default DevRelSection;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 2;

  color: ${(props) => props.theme.backgroundColor.white};

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
  background-color: ${(props) => props.theme.backgroundColor.black};
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
      color: ${(props) => props.theme.brightColor.black};
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
  line-height: 1.3;
`;

const TitleWrapperSecond = styled(TitleWrapper)`
  span {
    font-size: 5.5vw;
  }
`;

const EventList = styled.ul`
  width: 100%;

  padding: 5% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.3vh;

  list-style-type: decimal;
`;

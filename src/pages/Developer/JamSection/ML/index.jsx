import useOnScreen from "@hooks/useOnScreen";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

// Icon Import
import { ReactComponent as SiPython } from "@assets/images/icons/python.svg";

import { ReactComponent as SiJupyter } from "@assets/images/icons/ML/jupyter.svg";
import { ReactComponent as SiNumpy } from "@assets/images/icons/ML/numpy.svg";
import { ReactComponent as SiPandas } from "@assets/images/icons/ML/pandas.svg";
import { ReactComponent as SiPytorch } from "@assets/images/icons/ML/pytorch.svg";
import { ReactComponent as SiTensorflow } from "@assets/images/icons/ML/tensorflow.svg";
import { ReactComponent as SiSklearn } from "@assets/images/icons/ML/scikitlearn.svg";

import GithubMenu from "./GithubMenu";

function MLSection() {
  const observerRef = useRef(null);
  const observerRefSecond = useRef(null);
  const observerRefThird = useRef(null);
  const onScreen = useOnScreen(observerRef);
  const onScreenSecond = useOnScreen(observerRefSecond);
  const onScreenThird = useOnScreen(observerRefThird);

  return (
    <Container data-scroll-section>
      <ContentWrapper id="fixed-element-ML">
        <LeftSection>
          <OutlineContainer
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-element-ML"
          >
            <H1>04.</H1>
            <H2>Machine Learning</H2>
            <H2>Artificial Intelligence</H2>
            <Paragraph>
              State-of-the-art technology is here. At the frontier of the future
              IT industry, GDSC - YS ML study jam pursues the best and the
              finest model training and model serving for customized needs.
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
                Learn the fundamentals of AI / ML & basic model optimization.
              </List>
              <List>
                Review the latest paper in order to catch up with the industry.
              </List>
              <List>
                Dataflow management & ML pipelineing with huggingface, wanDB.
              </List>
              <List>Build basic Pytorch template for further competition.</List>
              <List>
                Inspect ML ideas with respect to mathematical approach.
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
                <SiPython />
              </IconWrapper>
            </IconList>
            <IconList>
              <IconName>ML Frameworks & Libraries</IconName>
              <IconWrapper>
                <SiNumpy />
                <SiPandas />
                <SiJupyter />
              </IconWrapper>
              <IconWrapper>
                <SiPytorch />
                <SiTensorflow />
                <SiSklearn />
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
            {/* TODO: Add papers! */}
            <GithubList>
              <GithubMenu
                title={"Change me!"}
                type="Github"
                description={"sample"}
                link="https://github.com/orgs/gdsc-ys/repositories?q=sprint1&type=all"
              />
            </GithubList>
          </SectionWrapper>
        </RightSection>
      </ContentWrapper>
    </Container>
  );
}

export default MLSection;

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
  background-color: ${(props) => props.theme.color.green};
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
      color: ${(props) => props.theme.brightColor.green};
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
      fill: ${(props) => props.theme.lightColor.green};
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

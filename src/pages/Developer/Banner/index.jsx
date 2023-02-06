import styled from "styled-components";
import { letterAnimation } from "./animation";
import GoogleDevelopers from "@assets/images/GoogleDevelopers.png";

function Banner() {
  return (
    <HeadingSection data-scroll-section>
      <TitleSection>
        <TitleWrapper
          data-scroll
          data-scroll-position="top"
          data-scroll-direction="horizontal"
          data-scroll-speed="-5"
        >
          <TitleSpan>Introducing</TitleSpan>
        </TitleWrapper>
      </TitleSection>
      <BodySection>
        <TextSection>
          <div data-scroll data-scroll-position="top" data-scroll-speed="2">
            {"Google".split("").map((el, idx) => {
              return (
                <BodySpanLarge key={idx} animationDelay={idx}>
                  {el}
                </BodySpanLarge>
              );
            })}
          </div>
          <div data-scroll data-scroll-position="top" data-scroll-speed="3">
            {"Developers".split("").map((el, idx) => {
              return (
                <BodySpanFirst key={idx} animationDelay={idx}>
                  {el}
                </BodySpanFirst>
              );
            })}
          </div>
        </TextSection>
        {/* //TODO: Replace This to custom animation. */}
        <CanvasSection>
          <CanvasImage
            data-scroll
            data-scroll-position="top"
            data-scroll-speed="3"
            src={GoogleDevelopers}
            alt="Solution Challenge"
          />
        </CanvasSection>
      </BodySection>
    </HeadingSection>
  );
}

export default Banner;

const HeadingSection = styled.div`
  width: 100%;
  height: 100vh;

  padding-bottom: 1vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: "Google Sans";
`;

const BodySection = styled.div`
  width: 100%;
  flex-grow: 1;

  padding-bottom: 2vh;
  padding-left: 2vw;

  display: grid;
  grid-template-columns: 1fr 1.2fr;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const CanvasSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CanvasImage = styled.img`
  width: 80%;
`;

const BodySpanLarge = styled.span`
  display: inline-block;
  font-size: 12.5vw;
  font-weight: 500;

  line-height: 1.1;
  opacity: 0;

  animation: ${letterAnimation} 0.2s ease-out normal forwards;
  animation-delay: ${(props) => `${props.animationDelay * 0.1}s`};
`;

const BodySpan = styled.span`
  font-size: 6.3vw;
  font-weight: 400;

  line-height: 1.1;
  color: ${(props) => props.theme.backgroundColor.black};
  opacity: 0;
`;

const BodySpanFirst = styled(BodySpan)`
  animation: ${letterAnimation} 0.2s ease-out normal forwards;
  animation-delay: ${(props) => `${props.animationDelay * 0.1 + 0.3}s`};
`;

const TitleSection = styled.div`
  width: 100%;
  padding-top: 5vh;

  display: flex;
  justify-content: flex-start;
`;

const TitleWrapper = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 65px;

  padding: 20px 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${(props) => props.theme.backgroundColor.black};
  border-radius: 50px;

  background-color: ${(props) => props.theme.color.green};

  margin-left: 5vw;
`;

const TitleSpan = styled.h1`
  font-size: 28px;
`;
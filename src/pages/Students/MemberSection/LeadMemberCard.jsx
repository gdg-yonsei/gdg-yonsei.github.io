import styled from "styled-components";
import useHover from "@hooks/useHover";
import TextTransition from "react-text-transition";
import { memo, useCallback, useContext } from "react";
import { MouseParallaxChild } from "react-parallax-mouse";
import { MouseContext } from "@context/MouseContext";

function LeadMemberCard({ upperLetter, lowerLetter, githubID }) {
  const [hoverRef, isHovered] = useHover();
  const { cursorChangeHandler } = useContext(MouseContext);

  const names = [lowerLetter, `@${githubID}`];

  const cursorChangeGithubHandler = useCallback(() => {
    cursorChangeHandler("Github");
  }, [cursorChangeHandler]);

  const cursorChangeEmptyHandler = useCallback(() => {
    cursorChangeHandler("");
  }, [cursorChangeHandler]);

  return (
    <Container
      ref={hoverRef}
      href={`https://github.com/${githubID}`}
      target="_blank"
      rel="noreferrer noopener nofollow"
      onMouseEnter={cursorChangeGithubHandler}
      onMouseLeave={cursorChangeEmptyHandler}
    >
      <UpperContainer>
        <UpperSpan>{upperLetter}</UpperSpan>
      </UpperContainer>
      <LowerContainer>
        <LowerSpan>
          <MouseParallaxChild>
            <TextTransition inline overflow>
              {names[isHovered | 0]}
            </TextTransition>
          </MouseParallaxChild>
        </LowerSpan>
      </LowerContainer>
    </Container>
  );
}

export default memo(LeadMemberCard);

const Container = styled.a`
  width: 100%;
  height: 300px;

  padding: 0 10%;

  display: grid;
  grid-template-rows: 1fr 2fr;

  border-radius: 20px;
  background-color: transparent;

  cursor: none;
`;

const UpperContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const UpperSpan = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;

  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LowerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20%;
`;

const LowerSpan = styled.span`
  font-size: 6vw;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: uppercase;
`;

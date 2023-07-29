import { MouseContext } from '@context/MouseContext';
import { useHover } from '@hooks';
import { memo, useCallback, useContext } from 'react';
import { MouseParallaxChild } from 'react-parallax-mouse';
import TextTransition from 'react-text-transition';
import styled from 'styled-components';

function MemberCard({ upperLetter, lowerLetter, githubID }) {
  const [hoverRef, isHovered] = useHover();
  const { cursorChangeHandler } = useContext(MouseContext);

  const names = [lowerLetter, `@${githubID}`];

  const cursorChangeGithubHandler = useCallback(() => {
    cursorChangeHandler('Github');
  }, [cursorChangeHandler]);

  const cursorChangeEmptyHandler = useCallback(() => {
    cursorChangeHandler('');
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

export default memo(MemberCard);

const Container = styled.a`
  width: 100%;
  height: 200px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;

  border-radius: 20px;

  user-select: none;
  cursor: none;

  content-visibility: auto;
`;

const UpperContainer = styled.div`
  width: 100%;
  padding-right: 50px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  ${({ theme }) => theme.mobile`
    padding-right: 20px;
  `}
`;

const UpperSpan = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;

  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: ${(props) => props.theme.contrast.red};

  ${({ theme }) => theme.mobile`
    font-size: 10px;
    line-height: 20px;
  `}
`;

const LowerContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 50px;

  ${({ theme }) => theme.mobile`
    padding-right: 20px;
`}
`;

const LowerSpan = styled.span`
  display: inline-block;

  font-size: 64px;
  font-weight: 900;
  letter-spacing: 2px;
  text-overflow: ellipsis;
  text-transform: uppercase;

  ${({ theme }) => theme.mobile`
    font-size: 16px;
    line-height: 20px;

    padding-right: 1vw;
  `}
`;

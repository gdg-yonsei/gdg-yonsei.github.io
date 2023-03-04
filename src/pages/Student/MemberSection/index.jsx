import { LeftAppearAnimationWidth } from '@components/Animation/LeftAppearAnimation';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactTextTransition from 'react-text-transition';
import styled, { useTheme } from 'styled-components';
import MemberCard from './MemberCard';
import { DevrelList, MemberList } from './memberList';

import HorizontalPatternImage1 from '@assets/images/pattern3.png';
import HorizontalPatternImage2 from '@assets/images/pattern4.png';
import useLocomotiveScrollPosition from '@hooks/useLocomotiveScrollPosition';
import useWindowSize from '@hooks/useWindowSize';
import { MouseParallaxContainer } from 'react-parallax-mouse';
import LeadMemberCard from './LeadMemberCard';
import ProgressBar from './ProgressBar';
import { STUDENTS_COLOR_BREAKPOINT as BREAKPOINT } from '@constants/constants';

const Writeups = ['Lead', 'DevRel', 'Developers', ''];

function MemberSection() {
  const sectionRef = useRef(null);
  const { height } = useWindowSize();

  const scrollPos = useLocomotiveScrollPosition(50);
  const [scrollIndex, setScrollIndex] = useState(3);
  const { contrast, backgroundColor } = useTheme();

  const modifiedScrollPos = scrollPos - height * 1.05;

  // FIXME: Hard-Coded. Is there any idea? Observer doesn't work.
  const handleScrollPosition = useCallback((pos) => {
    if (0 <= pos && pos <= BREAKPOINT.LEAD_BREAKPOINT) {
      return 0;
    }

    if (BREAKPOINT.LEAD_BREAKPOINT <= pos && pos <= BREAKPOINT.DEVREL_BREAKPOINT) {
      return 1;
    }

    if (BREAKPOINT.DEVREL_BREAKPOINT <= pos && pos <= BREAKPOINT.MEMBER_BREAKPOINT) {
      return 2;
    }

    return 3;
  }, []);

  const handleLeftBackgroundColor = useCallback(
    (index) => {
      switch (index) {
        case 0:
          return contrast.red;
        case 1:
          return contrast.blue;
        case 2:
          return contrast.green;
        default:
          return backgroundColor.black;
      }
    },
    [backgroundColor.black, contrast.blue, contrast.green, contrast.red],
  );

  useEffect(() => {
    setScrollIndex(handleScrollPosition(modifiedScrollPos));
  }, [handleScrollPosition, modifiedScrollPos]);

  return (
    <Container data-scroll-section ref={sectionRef} id="fixed-element-members">
      <LeftContainer id="fixed-element-leftcontainer">
        <TypeWrapper
          data-scroll
          data-scroll-sticky
          data-scroll-target="#fixed-element-members"
          bgcolor={handleLeftBackgroundColor(scrollIndex)}
        >
          <LeftTitle>GDSC Yonsei</LeftTitle>
          <LeftSubtitle>
            {`${Writeups[scrollIndex]}`.split('').map((n, idx) => {
              return (
                <ReactTextTransition
                  key={idx}
                  // eslint-disable-next-line react/no-children-prop
                  children={n}
                  delay={idx * 25}
                  overflow
                  inline
                />
              );
            })}
          </LeftSubtitle>
        </TypeWrapper>
        <ProgressBar scrollIndex={scrollIndex} />
      </LeftContainer>
      <RightContainer>
        <div>
          <MouseParallaxContainer globalFactorX={0.2} globalFactorY={0.2} resetOnLeave>
            <LeadMemberCard
              upperLetter={'GDSC Lead'}
              lowerLetter={'Kiung Jung'}
              githubID={'Quqqu'}
            />
          </MouseParallaxContainer>
        </div>
        <HorizontalLineWrapper>
          <HorizontalPattern
            style={{
              backgroundImage: `url(${HorizontalPatternImage1})`,
            }}
          />
        </HorizontalLineWrapper>
        <div>
          {DevrelList.map((el, idx) => {
            return (
              <MouseParallaxContainer
                key={idx}
                globalFactorX={0.1}
                globalFactorY={0.1}
                resetOnLeave
              >
                <MemberCard
                  key={idx}
                  upperLetter={el.upperLetter}
                  lowerLetter={el.lowerLetter}
                  githubID={el.githubID}
                />
              </MouseParallaxContainer>
            );
          })}
        </div>
        <HorizontalLineWrapper>
          <HorizontalPattern
            style={{
              backgroundImage: `url(${HorizontalPatternImage2})`,
            }}
          />
        </HorizontalLineWrapper>
        <div>
          {MemberList.map((el, idx) => {
            return (
              <MouseParallaxContainer
                key={idx}
                globalFactorX={0.1}
                globalFactorY={0.1}
                resetOnLeave
              >
                <MemberCard
                  key={idx}
                  upperLetter={el.upperLetter}
                  lowerLetter={el.lowerLetter}
                  githubID={el.githubID}
                />
              </MouseParallaxContainer>
            );
          })}
        </div>
        <RightArrow
          data-scroll
          data-scroll-sticky
          data-scroll-target="#fixed-element-members"
          bgcolor={handleLeftBackgroundColor(scrollIndex)}
        />
      </RightContainer>
    </Container>
  );
}

export default MemberSection;

const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr 1.5fr;
`;

const LeftContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  background-color: transparent;
`;

const TypeWrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  padding-left: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;

    mix-blend-mode: overlay;

    animation: ${LeftAppearAnimationWidth} 1s cubic-bezier(0.1, 0.87, 0.19, 0.98) 1s forwards;

    background-color: ${(props) => props.bgcolor};
    transition: background-color 1s cubic-bezier(0.1, 0.87, 0.19, 0.98);
  }
`;

const LeftTitle = styled.span`
  display: block;
  width: 100%;

  margin-bottom: 3vh;

  font-family: 'Neue Montreal';
  font-size: 5.5vw;
  font-weight: 400;
  color: ${(props) => props.theme.backgroundColor.white};
`;

const LeftSubtitle = styled.span`
  display: block;
  width: 100%;

  font-family: 'Neue Montreal';
  font-size: 2.5vw;
  font-weight: 200;
  color: ${(props) => props.theme.backgroundColor.white};
`;

const RightContainer = styled.div`
  width: 100%;

  position: relative;

  padding-top: calc(50vh - 125px);
  overflow: hidden;
`;

const RightArrow = styled.figure`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: calc(50vh - 50px);

  width: 0;
  height: 0;
  border-style: solid;
  border-width: 25px 43.3px 25px 0;
  border-color: transparent ${(props) => props.bgcolor} transparent transparent;
  transition: border-color 1s cubic-bezier(0.1, 0.87, 0.19, 0.98);
`;

const HorizontalLineWrapper = styled.div`
  width: 100%;
  height: 109px;
  padding: 25px 70px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorizontalPattern = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
`;

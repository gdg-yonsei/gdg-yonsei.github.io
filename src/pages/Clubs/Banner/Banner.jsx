import { BannerTextAnimation } from '@components/Animation/BannerTextAnimation';
import { BannerTextAnimationFirefox } from '@components/Animation/BannerTextAnimationFirefox';
import { DelayedLink } from '@components/DelayedLink';
import { TerrainDoodle } from '@components/Doodle';
import { TRANSITION_DURATION, TRANSITION_DURATION_DELAY } from '@constants/constants';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

function Banner() {
  const doodleRef = useRef(null);

  const animationDelaySeconds = TRANSITION_DURATION_DELAY * 0.001;

  const onClickHeadingSection = () => {
    doodleRef.current.update();
  };

  return (
    <HeadingSection data-scroll-section onClick={onClickHeadingSection}>
      <TitleSection>
        <TitleWrapper data-scroll data-scroll-position="top" data-scroll-speed="-5">
          <TitleSpan>Introducing</TitleSpan>
        </TitleWrapper>
        <LinkWrapper>
          <DelayedLink to="/" delay={TRANSITION_DURATION}>
            <BackToMainButton
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="5"
              dtaa-scroll-direction="vertical"
            >
              Back To Main
            </BackToMainButton>
          </DelayedLink>
        </LinkWrapper>
      </TitleSection>
      <BodySection>
        <TextSection>
          <TextAnimationContainer delay={animationDelaySeconds + 0.1}>
            <BodySpanLarge>Google</BodySpanLarge>
          </TextAnimationContainer>
          <TextAnimationContainer delay={animationDelaySeconds + 0.4}>
            <BodySpan>Yonsei Club</BodySpan>
          </TextAnimationContainer>
        </TextSection>
        <CanvasSection>
          <TerrainDoodle ref={doodleRef} shapeFrequency={0.8} lineFrequency={0.4} />
        </CanvasSection>
      </BodySection>
    </HeadingSection>
  );
}

export default Banner;

const HeadingSection = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  padding-bottom: 1vh;
  margin-bottom: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: 'Google Sans';

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const BodySection = styled.div`
  width: 100%;
  height: 87vh;

  padding-bottom: 2vh;
  padding-left: 2vw;

  display: grid;
  grid-template-columns: 1fr 1.2fr;

  ${({ theme }) => theme.mobile`
    display: flex;
    flex-direction: column-reverse;
  `}
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const TextAnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: translateY(100%) rotateX(-80deg);
  transform-origin: center top;
  transform-style: preserve-3d;

  animation-name: ${BannerTextAnimation};
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-fill-mode: forwards;
  animation-delay: ${(props) => `${props.delay}s`};

  user-select: none;

  @supports (-moz-appearance: none) {
    transform: translateY(100%);
    animation-name: ${BannerTextAnimationFirefox};
  }
`;

const CanvasSection = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mobile`
    flex: 1;
  `}
`;

const BodySpanLarge = styled.span`
  display: inline-block;
  font-size: 12.5vw;
  font-weight: 500;

  line-height: 1.3;

  color: ${(props) => props.theme.backgroundColor.black};
`;

const BodySpan = styled.span`
  display: inline-block;
  font-size: 6.3vw;
  font-weight: 400;

  line-height: 1.1;
  color: ${(props) => props.theme.backgroundColor.black};
`;

const TitleSection = styled.div`
  width: 100%;
  height: 12vh;

  padding-top: 5vh;
  padding-left: 5vw;
  padding-right: 5vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
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

  background-color: ${(props) => props.theme.color.yellow};

  ${({ theme }) => theme.mobile`
    width: 120px;
    height: 30px;
  `}
`;

const TitleSpan = styled.h1`
  font-size: 28px;

  ${({ theme }) => theme.mobile`
    font-size: 16px;
  `}
`;

const BackToMainButton = styled.button`
  padding: 20px 36px;

  font-size: 16px;
  font-weight: 400;
  font-family: 'Google Sans', sans-serif;

  border: none;
  background-color: ${(props) => props.theme.backgroundColor.white};

  cursor: pointer;
`;

const LinkWrapper = styled.main`
  height: 100%;
`;

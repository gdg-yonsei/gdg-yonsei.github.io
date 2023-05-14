import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

import FocusedCardItem from './components/FocusedCardItem';
import SwiperElement from './Swiper';
import { SlideContents } from './Swiper/SlideContent';

function Progress() {
  const [focusedSectionId, setFocusedSectionId] = useState(null);
  const isDisabled = focusedSectionId === null;

  const focusedItem = SlideContents.filter((_, idx) => idx === focusedSectionId)[0];

  const onClickElement = (idx) => {
    setFocusedSectionId(idx);
  };

  const onBlurFocusedCardItem = () => {
    setFocusedSectionId(null);
  };

  return (
    <Container data-scroll-section>
      <ContentWrapper data-scroll data-scroll-speed="-10">
        <TitleWrapper>
          <Title>...and GDSC - YS is always challenging.</Title>
          <Desc>Congratulations to those who reached to Top 100!</Desc>
        </TitleWrapper>
        <SwpierWrapper>
          <SwiperElement onClickElement={onClickElement} />
        </SwpierWrapper>
        <AnimatePresence>
          <FocusedCardItem
            focusedItem={focusedItem}
            disabled={isDisabled}
            focusedSectionId={focusedSectionId}
            onBlur={onBlurFocusedCardItem}
          />
        </AnimatePresence>
      </ContentWrapper>
    </Container>
  );
}

export default Progress;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 1;

  font-family: 'Google Sans', sans-serif;
  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;

  padding-top: 5vh;
`;

const Title = styled.span`
  display: inline-block;
  padding-left: 3vw;
  padding-bottom: 10px;

  font-size: max(5vw, 28px);
  letter-spacing: -0.5px;
`;

const Desc = styled.span`
  display: inline-block;
  font-size: max(2.5vw, 20px);
  padding-left: 3vw;

  ${({ theme }) => theme.mobile`
    padding-top: 2vh;
  `}
`;

const SwpierWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

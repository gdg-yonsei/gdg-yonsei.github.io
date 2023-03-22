import 'swiper/css';
import 'swiper/css/pagination';

import useKeyPress from '@hooks/useKeyPress';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import useOverlayStyle from './hooks/useOverlayStyle';

SwiperCore.use([Pagination]);

function FocusedGalleryItem({ focusedSectionId, focusedItem, onBlur, disabled }) {
  const { scroll } = useLocomotiveScroll();
  const { blurValue, brightnessValue } = useOverlayStyle();
  const isEscPressed = useKeyPress('Escape');

  const progressBarRef = useRef(null);

  const onClickOverlayContainer = () => {
    scroll.start();
    onBlur();
  };

  useEffect(() => {
    if (isEscPressed) {
      onClickOverlayContainer();
    }
  }, [isEscPressed]);

  return (
    <>
      <OverlayContainer
        onClick={onClickOverlayContainer}
        disabled={disabled}
        blurvalue={blurValue}
        brightnessvalue={brightnessValue}
        data-scroll
        data-scroll-sticky
        data-scroll-target="#fixed-element-clubs-container"
      >
        <ProgressBar ref={progressBarRef} />
        {focusedSectionId && (
          <>
            <Padding>
              <Swiper
                modules={[Pagination]}
                spaceBetween={200}
                slidesPerView={2}
                centeredSlides
                pagination={{ type: 'progressbar', el: progressBarRef.current }}
                grabCursor
                onSwiper={(swiper) => {
                  swiper.params.pagination.el = progressBarRef.current;

                  swiper.pagination.destroy();
                  swiper.pagination.init();
                  swiper.pagination.update();
                }}
              >
                {focusedItem[0].images.map((item, idx) => {
                  if (idx === 0) {
                    return (
                      <SwiperSlide key={idx}>
                        <Image layoutId={focusedSectionId} disabled={disabled} thumbnail={item} />
                      </SwiperSlide>
                    );
                  }

                  return (
                    <SwiperSlide key={idx}>
                      <Image
                        key={idx}
                        disabled={disabled}
                        thumbnail={item}
                        initial="hidden"
                        animate="visible"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Padding>
          </>
        )}
      </OverlayContainer>
    </>
  );
}

export default FocusedGalleryItem;

const Padding = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled(motion.div)`
  visibility: ${(props) => (props.disabled ? 'hidden' : 'visible')};

  width: 50vw;
  height: 60vh;

  background: ${(props) => `url("/assets/GDSCImages/${props.thumbnail}")`},
    linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(65, 65, 65, 1) 50%, rgba(0, 0, 0, 1) 100%);

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  box-shadow: 0 0 0 10px ${(props) => props.theme.backgroundColor.white} inset;

  z-index: 3000;

  ${({ theme }) => theme.mobile`
    width: 250px;
    height: 50vh;
  `}
`;

const OverlayContainer = styled(motion.div)`
  visibility: ${(props) => (props.disabled ? 'hidden' : 'visible')};

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  backdrop-filter: ${(props) => `blur(${props.blurvalue}px) brightness(${props.brightnessvalue}%)`};

  z-index: 2999;

  cursor: pointer;

  transition: backdrop-filter 0.35s ease-in-out;
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  background-color: black;

  span {
    background: ${(props) => props.theme.backgroundColor.white} !important;
  }
`;

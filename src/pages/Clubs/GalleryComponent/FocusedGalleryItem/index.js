import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import useOverlayStyle from "./hooks/useOverlayStyle";

function FocusedGalleryItem({ focusedSectionId, thumbnail, onBlur, disabled }) {
  const { scroll } = useLocomotiveScroll();
  const { blurValue, brightnessValue } = useOverlayStyle();

  const onClickOverlayContainer = () => {
    scroll.start();
    onBlur();
  };

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
        {focusedSectionId && (
          <Container
            layoutId={focusedSectionId}
            disabled={disabled}
            thumbnail={thumbnail}
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-element-clubs-container"
          />
        )}
      </OverlayContainer>
    </>
  );
}

export default FocusedGalleryItem;

const Container = styled(motion.div)`
  visibility: ${(props) => (props.disabled ? "hidden" : "visible")};

  position: absolute;
  top: 25vh;
  left: 35vw;

  width: 30vw;
  height: 50vh;

  background: ${(props) => `url("/assets/GDSCImages/${props.thumbnail}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 0 0 0 10px ${(props) => props.theme.backgroundColor.white} inset;
  cursor: pointer;

  z-index: 3000;
`;

const OverlayContainer = styled(motion.div)`
  visibility: ${(props) => (props.disabled ? "hidden" : "visible")};

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  backdrop-filter: ${(props) =>
    `blur(${props.blurvalue}px) brightness(${props.brightnessvalue}%)`};

  z-index: 2999;

  cursor: pointer;

  transition: backdrop-filter 0.35s ease-in-out;
`;

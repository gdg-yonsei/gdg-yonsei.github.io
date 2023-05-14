import useKeyPress from '@hooks/useKeyPress';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';

import { useOverlayStyle } from '../hooks';
import FocusedCard from './FocusedCard';

const FocusedCardItem = ({ focusedItem, disabled, focusedSectionId, onBlur }) => {
  const { scroll } = useLocomotiveScroll();
  const { blurValue, brightnessValue } = useOverlayStyle();
  const isEscPressed = useKeyPress('Escape');

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
    <OverlayContainer
      disabled={disabled}
      blurvalue={blurValue}
      brightnessvalue={brightnessValue}
      onClick={onClickOverlayContainer}
    >
      {focusedSectionId !== null && (
        <FocusedCard focusedItem={focusedItem} focusedSectionId={focusedSectionId + ''} />
      )}
    </OverlayContainer>
  );
};

export default FocusedCardItem;

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

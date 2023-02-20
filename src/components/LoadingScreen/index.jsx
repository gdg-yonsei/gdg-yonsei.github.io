import {
  TRANSITION_DURATION,
  TRANSITION_DURATION_DELAY,
} from "@constants/constants";
import { TransitionColorContext } from "@context/TransitionColorContext";
import { motion, useIsPresent } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";

function LoadingScreen({ handleAnimationStart, handleAnimationComplete }) {
  const { transitionColor } = useContext(TransitionColorContext);
  const isPresent = useIsPresent();

  const screenVariants = {
    start: {
      scaleY: 1,
    },
    end: {
      scaleY: 0,
      transition: {
        ease: "circOut",
        duration: TRANSITION_DURATION * 0.001,
        delay: TRANSITION_DURATION_DELAY * 0.001,
      },
    },
    exit: {
      scaleY: 1,
      transition: {
        ease: "circIn",
        duration: TRANSITION_DURATION * 0.001,
      },
    },
  };

  return (
    <>
      <Screen
        initial="start"
        animate="end"
        exit="exit"
        variants={screenVariants}
        bgroundcolor={transitionColor}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
        style={{
          originY: isPresent ? 0 : 1,
        }}
      />
    </>
  );
}

export default LoadingScreen;

const Screen = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 5000;

  cursor: none;

  background-color: ${(props) => props.bgroundcolor};
`;

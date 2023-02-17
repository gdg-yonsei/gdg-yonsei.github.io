import { keyframes } from "styled-components";

export const LeftAppearAnimationWidth = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

export const LeftAppearAnimationTransform = keyframes`
  0% {
    transform: translateX(-100vw);
  }

  100% {
    transform: translateX(0);
  }
`;

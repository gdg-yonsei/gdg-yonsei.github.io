import { keyframes } from "styled-components";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(-20px, 0);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate(0, 0);
  }

  to {
    opacity: 0;
    transform: translate(-20px, 0);
  }
`;

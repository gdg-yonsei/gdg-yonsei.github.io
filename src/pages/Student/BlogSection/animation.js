const { keyframes } = require("styled-components");

export const onHoverAnimation = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

export const offHoverAnimation = keyframes`
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
`;

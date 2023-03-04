import { keyframes } from 'styled-components';

export const letterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5%);
  }
  100% {
    opacity: 1;
    trnasform: translateY(0%);
  }
`;

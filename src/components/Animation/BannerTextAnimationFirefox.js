import { keyframes } from 'styled-components';

// Firefox rotate bug temporary fix
export const BannerTextAnimationFirefox = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: none;
    opacity: 1;
  }
`;

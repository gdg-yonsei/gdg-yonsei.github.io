import { keyframes } from 'styled-components';

export const BannerTextAnimation = keyframes`
  0% {
    transform: translateY(100%) rotateX(-80deg);
    opacity: 0;
  }

  100% {
    transform: none;
    opacity: 1;
  }
`;

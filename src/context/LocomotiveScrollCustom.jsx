import { TRANSITION_DURATION } from '@constants/constants';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export function VerticalLocomotiveScrollProvider({ containerRef, children }) {
  const scrollOptions = {
    onLocationChange: (scroll) => {
      setTimeout(() => {
        scroll.scrollTo(0, { duration: 0, disableLerp: true });
      }, TRANSITION_DURATION);
    },
    options: {
      smooth: true,
      reloadOnContextChange: true,
      tablet: {
        breakpoint: 0,
        smooth: true,
      },
      smartphone: {
        smooth: true,
      },
      direction: 'vertical',
      getDirection: true,
    },
    location: location,
    containerRef: containerRef,
    watch: [],
  };

  return <LocomotiveScrollProvider {...scrollOptions}>{children}</LocomotiveScrollProvider>;
}

export function HorizontalLocomotiveScrollProvider({ containerRef, children }) {
  const scrollOptions = {
    onLocationChange: (scroll) => {
      setTimeout(() => {
        scroll.scrollTo(0, { duration: 0, disableLerp: true });
      }, TRANSITION_DURATION);
    },
    options: {
      smooth: true,
      reloadOnContextChange: true,
      tablet: {
        breakpoint: 0,
        smooth: true,
        direction: 'horizontal',
      },
      smartphone: {
        smooth: true,
        direction: 'horizontal',
      },
      direction: 'horizontal',
      getDirection: true,
    },
    location: location,
    containerRef: containerRef,
    watch: [],
  };

  return <LocomotiveScrollProvider {...scrollOptions}>{children}</LocomotiveScrollProvider>;
}

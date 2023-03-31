import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export function VerticalLocomotiveScrollProvider({ containerRef, children }) {
  const scrollOptions = {
    onLocationChange: (scroll) => {
      scroll.destroy();
      scroll.init();
      scroll.update();
    },
    options: {
      smooth: true,
      reloadOnContextChange: true,
      touchMultiplier: 3,
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
      scroll.destroy();
      scroll.init();
      scroll.update();
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

import { TRANSITION_DURATION } from "@constants/constants";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocation } from "react-router-dom";

function LocomotiveScrollCustom({ containerRef, children }) {
  const location = useLocation();

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
      direction: "vertical",
      getDirection: true,
    },
    location: location,
    containerRef: containerRef,
    watch: [],
  };

  return (
    <LocomotiveScrollProvider {...scrollOptions}>
      {children}
    </LocomotiveScrollProvider>
  );
}

export default LocomotiveScrollCustom;

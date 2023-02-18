import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function LocomotiveScrollCustom(props) {
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          breakpoint: 0,
          smooth: true,
        },
        smartphone: {
          smooth: true,
        },
      }}
      containerRef={props.containerRef}
    >
      {props.children}
    </LocomotiveScrollProvider>
  );
}

export default LocomotiveScrollCustom;
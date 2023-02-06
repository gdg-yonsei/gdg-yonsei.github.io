import { useEffect } from "react";

function useLocomotiveScrollInit() {
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
        resetNativeScroll: true,
      });
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  });
}

export default useLocomotiveScrollInit;

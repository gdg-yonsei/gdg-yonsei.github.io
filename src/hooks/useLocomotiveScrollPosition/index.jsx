import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { throttle } from "throttle-debounce";

function useLocomotiveScrollPosition(throttleValue = 1000) {
  const [pos, setPos] = useState(null);

  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      scroll.on(
        "scroll",
        throttle(throttleValue, (args) => {
          setPos(args.scroll.y);
        })
      );
    }
  }, [scroll, throttleValue]);

  return pos;
}

export default useLocomotiveScrollPosition;

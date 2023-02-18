import { useEffect, useState } from "react";

const useMousePosition = (includeTouch = false) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      let x, y;

      if (event.touches) {
        const touch = event.touches[0];
        [x, y] = [touch.clientX, touch.clientY];
      } else {
        [x, y] = [event.clientX, event.clientY];
      }
      setMousePosition({ x, y });
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    if (includeTouch) {
      document.addEventListener("touchmove", mouseMoveHandler);
    }

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);

      if (includeTouch) {
        document.removeEventListener("touchmove", mouseMoveHandler);
      }
    };
  }, [includeTouch, mousePosition]);

  return mousePosition;
};

export default useMousePosition;

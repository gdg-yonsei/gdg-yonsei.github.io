import { useEffect, useState } from "react";

function useMousePosition() {
  const [pos, setPos] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handler = (event) => {
      const { clientX, clientY } = event;
      setPos({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handler);
    handler();

    return window.removeEventListener("mousemove", handler);
  }, [pos]);

  return pos;
}

export default useMousePosition;

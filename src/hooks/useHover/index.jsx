import { useEffect, useRef, useState } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);

  const hoverRef = useRef(null);

  const handleHoverOver = () => setHovered(true);
  const handleHoverOut = () => setHovered(false);

  useEffect(() => {
    const ref = hoverRef.current;

    if (ref) {
      ref.addEventListener("mouseover", handleHoverOver);
      ref.addEventListener("mouseout", handleHoverOut);

      return () => {
        ref.removeEventListener("mouseover", handleHoverOver);
        ref.removeEventListener("mouseout", handleHoverOut);
      };
    }
  }, []);

  return [hoverRef, hovered];
}

export default useHover;

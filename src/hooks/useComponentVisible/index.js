import { useEffect, useRef, useState } from "react";

function useComponentVisible(init) {
  const [isVisible, setIsVisible] = useState(init);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  const handleEscPress = (event) => {
    if (event.key === "Escape") {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keydown", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("keydown", handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}

export default useComponentVisible;

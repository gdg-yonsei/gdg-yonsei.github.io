const { useState, useLayoutEffect } = require("react");

function useOnScreen(ref, rootMargin = "0px") {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isOnScreen;
}

export default useOnScreen;

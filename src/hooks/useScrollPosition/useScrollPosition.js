const { useState, useEffect } = require('react');

function useScrollPosition() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return scrollPos;
}

export default useScrollPosition;

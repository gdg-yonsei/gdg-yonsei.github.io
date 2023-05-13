import { useEffect, useState } from 'react';

const useIntersectionObserver = (
  elementRef,
  { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false },
) => {
  const [entry, setEntry] = useState(undefined);

  const isFrozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref

    if (!window.IntersectionObserver || isFrozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin, isFrozen]);

  return entry;
};

export default useIntersectionObserver;

import { useIsomorphicLayoutEffect } from '@hooks';
import { useEffect, useRef } from 'react';

function useTimeout(cb, delay) {
  const savedCb = useRef(cb);

  // save the latest callback function.
  useIsomorphicLayoutEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => savedCb.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
}

export default useTimeout;

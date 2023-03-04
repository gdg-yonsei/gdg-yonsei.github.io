import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';

const defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
const oneMinute = 60e3;

const on = (obj, ...args) => {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args);
  }
};

const off = (obj, ...args) => {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args);
  }
};

const useIdle = (ms = oneMinute, initialState = false, events = defaultEvents) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let mounted = true;
    let timeout;
    let localState = state;

    const set = (newState) => {
      if (mounted) {
        localState = newState;
        setState(newState);
      }
    };

    const onEvent = throttle(50, () => {
      if (localState) {
        set(false);
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        set(true);
      }, ms);
    });

    const onVisibility = () => {
      if (!document.hidden) {
        onEvent();
      }
    };

    for (let i = 0; i < events.length; i++) {
      on(window, events[i], onEvent);
    }

    on(document, 'visibilitychange', onVisibility);

    timeout = setTimeout(() => {
      set(true);
    }, ms);

    return () => {
      mounted = false;

      for (let i = 0; i < events.length; i++) {
        off(window, events[i], onEvent);
      }
      off(document, 'visibilitychange', onVisibility);
    };
  }, [ms, events]);

  return state;
};

export default useIdle;

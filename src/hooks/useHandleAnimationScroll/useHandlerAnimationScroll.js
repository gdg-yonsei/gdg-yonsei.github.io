import { useCallback } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

function useHandleAnimationScroll() {
  const { scroll } = useLocomotiveScroll();

  const handleAnimationStart = useCallback(() => {
    scroll && scroll.stop();
  }, [scroll]);

  const handleAnimationComplete = useCallback(() => {
    scroll && scroll.start();
  }, [scroll]);

  return { handleAnimationStart, handleAnimationComplete };
}

export default useHandleAnimationScroll;

import { useEffect, useLayoutEffect } from 'react';

function useIsomorphicLayoutEffect() {
  return typeof window !== 'undefined' ? useLayoutEffect : useEffect;
}

export default useIsomorphicLayoutEffect;

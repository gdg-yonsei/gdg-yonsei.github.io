import { useLayoutEffect, useEffect } from "react";

function useIsomorphicLayoutEffect() {
  return typeof window !== "undefined" ? useLayoutEffect : useEffect;
}

export default useIsomorphicLayoutEffect;

import { useEffect } from "react";

function useEffectOnce(cb) {
  useEffect(cb, [cb]);
}

export default useEffectOnce;

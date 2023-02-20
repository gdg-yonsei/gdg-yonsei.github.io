import { useEffect } from "react";

function useEffectOnce(cb) {
  useEffect(cb, []);
}

export default useEffectOnce;

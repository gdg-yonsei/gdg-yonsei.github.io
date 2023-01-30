import { useEffect } from "react";

function useSingleEffect(effect) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
}

export default useSingleEffect;

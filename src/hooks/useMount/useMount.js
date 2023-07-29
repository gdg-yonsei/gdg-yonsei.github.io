import { useEffect } from 'react';

function useMount(cb) {
  useEffect(cb, []);
}

export default useMount;

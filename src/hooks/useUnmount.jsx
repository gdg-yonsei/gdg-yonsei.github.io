import { useEffect } from 'react';

const useUnmount = (cb) => {
  useEffect(() => {
    return cb;
  }, []);
};

export default useUnmount;

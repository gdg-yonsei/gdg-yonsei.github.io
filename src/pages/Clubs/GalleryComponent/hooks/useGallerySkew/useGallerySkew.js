import mapNumber from '@utils/mapNumber';
import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const useGallerySkew = () => {
  const { scroll } = useLocomotiveScroll();

  const [skew, setSkew] = useState(0);

  const scrollPos = { previous: 0, current: 0 }; // scroll cache

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (obj) => {
        scrollPos.current = obj.scroll.x;
        const distance = scrollPos.current - scrollPos.previous;
        scrollPos.previous = scrollPos.current;
        const skewness = mapNumber(distance, -100, 100, -10, 10);
        setSkew(skewness);
      });
    }
  }, [scroll]);

  return skew;
};

export default useGallerySkew;

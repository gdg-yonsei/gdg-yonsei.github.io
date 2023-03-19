import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import useWindowSize from '@hooks/useWindowSize';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide from './Slide';
import { SlideContents } from './SlideContent';

function SwiperElement() {
  const { width } = useWindowSize();

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        rewind={true}
        slidesPerView={1}
        slidesOffsetBefore={width / 10}
        loop={true}
        spaceBetween={width / 10}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesOffsetBefore: width / 5,
            spaceBetween: width / 10,
          },
        }}
      >
        {[
          SlideContents.map((content, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Slide name={content.name} index={idx} />
              </SwiperSlide>
            );
          }),
        ]}
      </Swiper>
    </Container>
  );
}

export default SwiperElement;

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 20vh;
`;

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Slider = ({
  images,
}: {
  images: {
    url: string;
    alt?: string;
  }[];
}): JSX.Element => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="slider">
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        loop
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.map(({ url, alt }) => (
          <SwiperSlide
            key={url}
            className="slider-main"
          >
            <img
              fill={true}
              src={url}
              alt={alt || 'product-image'}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs, Navigation]}
        watchSlidesProgress
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
      >
        {images.map(({ url, alt }) => (
          <SwiperSlide
            key={url}
            className="slider-thumb"
          >
            <img
              fill={true}
              src={url}
              alt={alt || 'product-image'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

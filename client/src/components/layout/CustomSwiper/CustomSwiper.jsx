import React, {useEffect, useRef, useState} from 'react'
import './CustomSwiper.css'
import Product from '@ui/Product/Product';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";



function CustomSwiper({data}) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperRef = useRef(null);


  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update(); // Trigger an update to recalculate scrollbar width
    }
  }, [data, swiperInstance]);

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true, hide: false }}
    onSwiper={(swiper) => setSwiperInstance(swiper)}
    // onSlideChange={() => console.log("slide change")}
    breakpoints={{
      320: {
        slidesPerView: 1.5,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    }}
    ref={swiperRef}
  >
    {data.map((product) => (
      <SwiperSlide key={product.id}>
        <Product product={product} />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default CustomSwiper
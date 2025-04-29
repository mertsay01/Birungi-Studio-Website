import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";

import imagecarousel1 from '../../assets/imagecarousel1.jpg';
import imagecarousel2 from '../../assets/imagecarousel2.jpg';
import imagecarousel3 from '../../assets/imagecarousel3.jpg';

const ImageSlider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="image-slider"
    >
    <SwiperSlide>
        <img src={imagecarousel1} alt="Slide1"/>
    </SwiperSlide>
    <SwiperSlide>
        <img src={imagecarousel2} alt="Slide2"/>
    </SwiperSlide>
    <SwiperSlide>
        <img src={imagecarousel3} alt="Slide3"/>
    </SwiperSlide>

    </Swiper>
  )
}

export default ImageSlider
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";

import imagecarousel1 from '../../assets/imagecarousel1.jpg';
import imagecarousel2 from '../../assets/imagecarousel2.jpg';
import imagecarousel3 from '../../assets/imagecarousel3.jpg';
import imagecarousel4 from '../../assets/imagecarousel4.jpg'
import imagecarousel21 from '../../assets/imagecarousel21.jpg'

const SlideContent = ({ title, description }) => {
  const slide = useSwiperSlide();

  return (
    <div className={`overlay-text ${slide.isActive ? 'show' : ''}`}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

const ImageSlider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      className="image-slider"
    >
    <SwiperSlide>
        <img src={imagecarousel1} alt="Slide1"/>
        <SlideContent 
        title="BIRUNGI STUDIO"
        description="Explore our games that engage players on how to positively impact the environment">

        </SlideContent>
    </SwiperSlide>
    <SwiperSlide>
        <img src={imagecarousel4} alt="Slide2"/>
        <SlideContent
        title="I Bee Xploring"
        description="Go on a journey as a bee in search for food" >

        </SlideContent>
    </SwiperSlide>
    <SwiperSlide>
        <img src={imagecarousel21} alt="Slide3"/>
        <SlideContent
        title="Social impact gamification"
        description="Through games, educating players on our actions on the environment">

        </SlideContent>
    </SwiperSlide>

    </Swiper>
  )
}

export default ImageSlider
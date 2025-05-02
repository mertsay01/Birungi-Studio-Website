"use client"

import { useState, useEffect } from "react"
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { getCurrentTranslations, subscribeToLanguageChange } from "../../utils/languageState"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./ImageSlider.css"

import imagecarousel1 from "../../assets/imagecarousel1.jpg"
import imagecarousel4 from "../../assets/imagecarousel4.jpg"
import imagecarousel21 from "../../assets/imagecarousel21.jpg"

const SlideContent = ({ titleKey, descriptionKey }) => {
  const slide = useSwiperSlide()
  const [translations, setTranslations] = useState(getCurrentTranslations())

  useEffect(() => {
    // Subscribe to language changes
    const unsubscribe = subscribeToLanguageChange((language, newTranslations) => {
      setTranslations(newTranslations)
    })

    // Cleanup subscription when component unmounts
    return () => unsubscribe()
  }, [])

  return (
    <div className={`overlay-text ${slide.isActive ? "show" : ""}`}>
      <h1>{translations[titleKey] || ""}</h1>
      <p>{translations[descriptionKey] || ""}</p>
    </div>
  )
}

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
        <img src={imagecarousel1 || "/placeholder.svg"} alt="Slide1" />
        <SlideContent titleKey="slide1_title" descriptionKey="slide1_description" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imagecarousel4 || "/placeholder.svg"} alt="Slide2" />
        <SlideContent titleKey="slide2_title" descriptionKey="slide2_description" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imagecarousel21 || "/placeholder.svg"} alt="Slide3" />
        <SlideContent titleKey="slide3_title" descriptionKey="slide3_description" />
      </SwiperSlide>
    </Swiper>
  )
}

export default ImageSlider

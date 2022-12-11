import './Slider.sass'
import { slides as img } from '../../utils/constants';
import { useEffect, useState } from 'react';


const Slider = ({activeIndex, img = []}) => {

// Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : img?.length - 1
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === img?.length - 1 ? 0 : activeIndex + 1


return (
  <div className="slider">
      <div className="slider-img slider-img-prev"
              key={prevImgIndex}>
          {img[prevImgIndex]}
      </div>
      <div className="slider-img"
              key={activeIndex}>
          {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next"
              key={nextImgIndex}>
          {img[nextImgIndex]}
      </div>
  </div>
)
}

export default Slider;
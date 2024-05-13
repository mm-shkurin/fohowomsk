import React, { useState } from 'react';
import './Slider.css';
import p1 from './../../img/photo_5224466530765492712_y.jpg';
import p2 from './../../img/photo_5224466530765492711_y.jpg';
import p3 from './../../img/photo_5224466530765492710_y.jpg';
import p4 from './../../img/photo_5224466530765492709_y.jpg';
import p5 from './../../img/photo_5224466530765492708_y.jpg';
import p6 from './../../img/photo_5224466530765492707_y.jpg';
import p7 from './../../img/photo_5224466530765492706_y.jpg';
import p8 from './../../img/photo_5224466530765492705_x.jpg';
import p9 from './../../img/photo_5224466530765492704_y.jpg';
import p10 from './../../img/photo_5224466530765492703_y.jpg';
import p11 from './../../img/photo_5224466530765492702_y.jpg';

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className='Slider'>
      <div className="slider-content">
        <h1>Вместе работаем, вместе учимся, вместе растем, вместе отдыхаем</h1>
        <div className="slider">
          <img className="slider-image"
            src={images[currentImageIndex]}
            alt=""
          />
        </div>
        <div className="slider-controls">
          <button className="slider-button" onClick={prevImage}>
            Назад
          </button>
          <button className="slider-button" onClick={nextImage}>
            Вперед
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
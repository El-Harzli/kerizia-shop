import React from 'react'
import './Hero.css'
import hero_image_mobile from '../../../assets/hero_image_mobile.png'
import hero_image_laptop from '../../../assets/hero_image_mobile.png'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero__image-container">
        <img className="hero__image"
          src={hero_image_mobile}
          srcSet={`${hero_image_mobile} 480w, ${hero_image_laptop} 1200w`}
          alt="Hero"
        />
        </div>
        <div className="hero__content">
          <div className="hero__content-category">
            MEN
          </div>
          <div className="hero__content-title">
            New Formal
          </div>
          <div className="hero__content-cta">
            <a href="#">Discover the Collection</a>
          </div>
        </div>
    </div>
  )
}

export default Hero
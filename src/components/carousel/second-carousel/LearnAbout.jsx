import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Checked } from './svg-list-item/Checked';
import { motion as m } from 'framer-motion';

const LearnAbout = () => {
  const pagination = [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 },]
  const [activeIndex, setActiveIndex] = useState(0)
  const images = [
    '/assets/images/carousel/children-one.jpg',
    '/assets/images/carousel/children-two.jpg',
    '/assets/images/carousel/children-three.jpg',
    '/assets/images/carousel/children-four.jpg'
  ]

  return (
    <div className='Slick-wrapper'>
      <div className="Slick-container">
        <div className='Slick-row'>
          <div className="Learn-left">
            <div className="Underlay">
              <div className="Slick-images">
                <m.img
                  key={activeIndex}
                  src={images[activeIndex]}
                  alt="Carousel image.jpg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: '0.8', delay: '0.4' } }}
                  exit={{ opacity: 0 }}
                  loading='lazy'
                />
              </div>
              <ul className='Slide-list'>
                {pagination.map((slide) => {
                  return <li key={slide.index} className={`Slick-list ${slide.index === activeIndex ? 'Active-Slide' : ''}`} onClick={() => setActiveIndex(slide.index)}></li>
                })}
              </ul>
            </div>
          </div>
          <div className='Learn-right'>
            <div className="Design">
              <img src="/assets/svg/Up.svg" alt="Up" />
            </div>
            <div className="Slider-info">
              <div className="Section-title-container">
                <h5 className='Sub-title'>Education For Everyone</h5>
                <h2 className='Section-title'>Learn About Our Work Culture At Devschool</h2>
                <p className='Section-content'>As a word from our heart, we love to dedicate for Kids the valuable things in Life. A great education is a must for a solid developments in both soul and mind for kids. We go with kids to play, learn, and grow better.</p>
              </div>
              <ul className='List-content'>
                <li>
                  <Checked />
                  Transportation
                </li>
                <li>
                  <Checked />
                  Outdoor Games
                </li>
                <li>
                  <Checked />
                  Nutritious Food
                </li>
                <li>
                  <Checked />
                  Best Care
                </li>
              </ul>
              <p className='Section-summary'>As a word from our heart, we love to dedicate for Kids the valuable things in Life. We go with kids to play, learn, and grow better.</p>
              <h5 className='Section-footer'>
                Have a question?
                <Link to='/'>Get Started Free</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnAbout;
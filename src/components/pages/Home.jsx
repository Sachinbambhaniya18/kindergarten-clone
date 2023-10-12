import React, { useState, createContext } from 'react';
import Carousel from '../carousel/Carousel';
import VideoPlayer from '../modals/VideoPlayer';
import { items } from '../carousel/carouselData';

export const SliderContext = createContext()

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [key, setKey] = useState(0)


  const nextIndex = () => {
    setCurrentIndex((currentIndex + 1) % items.length)
    setKey((prev) => prev + 1)
  }
  const prevIndex = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length)
    setKey((prev) => prev - 1)
  }

  const handleVideoClose = () => {
    setIsPlayerOpen(false);
    document.body.classList.remove('Scroll-lock')
  }
  const item = items[currentIndex]

  return (
    <SliderContext.Provider value={{ key, isPlayerOpen, setIsPlayerOpen, currentIndex, setCurrentIndex }}>
      <div className='Home-Page'>
        {
          isPlayerOpen && <VideoPlayer onClose={handleVideoClose} itemLink={item.link} />
        }
        <div className="Slider-wrapper">
          <div className="Slider-container">
            <div className="Slider-Holder">
              <Carousel nextIndex={nextIndex} prevIndex={prevIndex} />
            </div>
            <div className="Slider-image">
              <img src="/assets/svg/Kids.svg" alt="Kids" className='kids-img' />
              <img src="/assets/svg/TriangleUpsideDown.svg" alt="Triangle" className='Triangle' />
              <img src="/assets/svg/CrossDecoration.svg" alt="Cross" className='Cross-Decor' />
            </div>
          </div>
        </div>

      </div>
    </SliderContext.Provider>
  )
}

export default Home;
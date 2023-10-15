import React, { useState, createContext, useReducer, useContext } from 'react';
import Carousel from '../carousel/first-carousel/Carousel';
import VideoPlayer from '../modals/VideoPlayer';
import { items } from '../static-data/carouselData';
import LearnAbout from '../carousel/second-carousel/LearnAbout';
import CardStructure from '../cards/CardStructure';
import { HeadDataContext } from '../navigation/Navbar';

export const SliderContext = createContext()
const initial_state = {
  currentIndex: 0,
  key: 0
}
const reducer = (state, action) => {
  switch (action) {
    case 'nextIndex':
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % items.length,
        key: (state.key + 1)
      }
      case 'prevIndex':
        return {
          ...state,
          currentIndex: (state.currentIndex - 1 + items.length) % items.length,
          key: (state.key - 1)
        }
        default:
          return initial_state
        }
      }
      const Home = () => {
        const { heading } = useContext(HeadDataContext)
        const [state, dispatch] = useReducer(reducer, initial_state)
        const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleVideoClose = () => {
    setIsPlayerOpen(false);
    document.body.classList.remove('Scroll-lock')
  }
  const item = items[state.currentIndex]

  return (
    <div className='Home-Page' id='section1'>
      {
        isPlayerOpen && <VideoPlayer onClose={handleVideoClose} itemLink={item.link} />
      }
      <div className="Slider-wrapper">
        <div className="Slider-container">
          <div className="Slider-Holder">
            <SliderContext.Provider value={{
              key: state.key,
              isPlayerOpen,
              setIsPlayerOpen,
              currentIndex: state.currentIndex
            }}>
              <Carousel 
              nextIndex={() => dispatch('nextIndex')} 
              prevIndex={() => dispatch('prevIndex')} />
            </SliderContext.Provider>
          </div>
          <div className="Slider-image">
            <img src="/assets/svg/Kids.svg" alt="Kids" className='kids-img' />
          </div>
        </div>
      </div>
      <LearnAbout />
      <CardStructure subtitle={heading[0].subtitle} title={heading[0].title} content={heading[0].content}/>
      
    </div>
  )
}

export default Home;
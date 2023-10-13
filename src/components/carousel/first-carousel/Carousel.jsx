import React, { useContext } from 'react'
import { CarouselItem } from './CarouselItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { SliderContext } from '../../pages/Home'

const Carousel = ({ prevIndex, nextIndex }) => {
    const {currentIndex, key} = useContext(SliderContext)

    return (
        <div>
            <CarouselItem indexValue={currentIndex} keyProp={key}/>
            <div className="Slide-controls">
                <button className="Directional-btn left-btn" onClick={prevIndex}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="Directional-btn right-btn" onClick={nextIndex}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default Carousel
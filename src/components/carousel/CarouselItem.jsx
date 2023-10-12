import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SliderContext } from '../pages/Home';
import { items } from './carouselData';
import { motion as m } from 'framer-motion';

export const CarouselItem = ({ indexValue, keyProp }) => {
    const { setIsPlayerOpen } = useContext(SliderContext)

    const handleVideoOpen = () => {
        setIsPlayerOpen(true);
        document.body.classList.add('Scroll-lock')
    }

    const item = items[indexValue];
    return (
        <m.div className="Slider"
            key={keyProp}
            initial={{ translateX: '-100%' }}
            animate={{
                translateX: '0',
                transition: {
                    // duration: '2',
                    type: 'spring', stiffness: 300, damping: 40
                }
            }}
            exit={{ translateX: '100%' }}
            transition={{
                duration: '2'
            }}
        >
            <button className="Video-modal" onClick={handleVideoOpen}>
                <FontAwesomeIcon icon={faPlay} size="l" />
            </button>
            <h1>
                {item.title}
                <br />
                <span>{item.span}</span>
            </h1>
            <p>{item.description}</p>
            <a href="/" className="Apply-btn">
                Apply Now
                <FontAwesomeIcon icon={faArrowRight} className="Action-align" />
            </a>
            <a href="/" className="Learn-btn">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} className="Action-align" />
            </a>
        </m.div>

    )
}


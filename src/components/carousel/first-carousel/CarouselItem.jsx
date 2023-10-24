import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SliderContext } from '../../pages/Home';
import { items } from '../../static-data/carouselData';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

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
                    type: 'spring', stiffness: 300, damping: 40
                }
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
            <div className="Action-btn">
            <Link to="/" className="Apply-btn">
                Apply Now
                <FontAwesomeIcon icon={faArrowRight} className="Action-align" />
            </Link>
            <Link to="/" className="Learn-btn">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} className="Action-align" />
            </Link>
            </div>
        </m.div>

    )
}


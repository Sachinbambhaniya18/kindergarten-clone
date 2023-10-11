import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  return (
    <div className='Home-Page'>
      <div className="Slider-wrapper">
        <div className="Slider-container">
          <div className="Slider">
            <button className='Video-modal'>
              <FontAwesomeIcon icon={faPlay} size='l'/>
            </button>
              <h1>We Are Child Care<br/><span>Professional</span></h1>
              <p>You must know that there is nothing higher and stronger and more wholesome and good for life in the future than some good memory,  specially a memory of childhood.</p>
              <a href="/" className="User-actions">
                Apply Now
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a href="/" className="User-actions">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <button className="Directional-btn">
              <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className="Directional-btn">
              <FontAwesomeIcon icon={faArrowRight} />
              </button>
          </div>
          <div className="Slider-image">
            <img src="/assets/svg/Kids.svg" alt="Kids" className='kids-img'/>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home;
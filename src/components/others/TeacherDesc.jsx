import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import VideoPlayer from '../modals/VideoPlayer';
const TeacherDesc = () => {
    const [isPlayerOpenTwo, setIsPlayerOpenTwo] = useState(false);
    const handleCloseOnClick = () => {
        setIsPlayerOpenTwo(false)
        document.body.classList.remove('Scroll-lock')
    }

    const handleOpenOnClick = () => {
        setIsPlayerOpenTwo(true)
        document.body.classList.add('Scroll-lock')
    }
    return (
        <div className='Description-wrapper'>
            <div className="Description-container">
                <div className="Description-row">
                    <div className="Description-col">
                        <div className="Description-img">
                            <img src="/assets/images/descriptive-section.jpg" alt="Teacher" />
                            <button className='Play-btn' onClick={handleOpenOnClick}>
                                <FontAwesomeIcon icon={faPlay} size='l'></FontAwesomeIcon>
                            </button>
                            {
                                isPlayerOpenTwo && <VideoPlayer onClose={handleCloseOnClick} itemLink="https://www.youtube.com/embed/watch?v=Pyx3NG_OHlM&list=PL7pkSK1xbGD47-htL3ZMDXwOU_bnmS58c&index=8" />
                            }
                        </div>
                    </div>
                    <div className="Description-col Right-section">
                        <div className="Description">
                            <div className="Desc-section-title">
                                <h5 className="Desc-subtitle">Why Hesitate To Register?</h5>
                                <h5 className="Desc-title">We Are The Best Choice For Your Child</h5>
                                <p className="Desc-content">As a word from our heart, we love to dedicate for Kids the valuable things in Life. A great education is a must for a solid developments in both soul and mind for kids. We go with kids to play, learn, and grow better.</p>
                            </div>
                            <div className="Desc-options">
                                <div className='Options'>
                                    <div className="Option-img"><img src="/assets/images/teacher1.png" alt="School" /></div>
                                    <div className="Option-content">
                                        <h5>Well Trained Professionals</h5>
                                        <p>Enabling humanoid robot movement with imitation learning and mimicking of animal behaviors</p>
                                    </div>
                                </div>
                                <div className='Options'>
                                    <div className="Option-img"><img src="/assets/images/teacher2.png" alt="Teacher" /></div>
                                    <div className="Option-content">
                                        <h5>International Lesson Patterns</h5>
                                        <p>Summer of the SPAC, Adam Neumann returns and the Nissan Ariya debuts</p>
                                    </div>
                                </div>
                                <div className='Options'>
                                    <div className="Option-img"><img src="/assets/images/teacher3.png" alt="Book" /></div>
                                    <div className="Option-content">
                                        <h5>Awesome Infrastructure</h5>
                                        <p>Ready, set, network! CrunchMatch is now open for Early Stage 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherDesc
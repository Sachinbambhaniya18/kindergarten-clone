import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { staffData } from '../../static-data/staffData';

const StaffCard = () => {
    return (
        <>

            {
                staffData.map((staff) => {
                    return (
                        <div className="Teacher-card-container">
                            <div className="Teacher-img">
                                <img src={staff.image} alt="Staff" />
                            </div>
                            <div className="Teacher-content">
                                <div className="Teacher-details">
                                    <h5>{staff.name}</h5>
                                    <h6>{staff.position}</h6>
                                    <div className="Social-links">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com" className='facebook'>
                                                    <FontAwesomeIcon icon={faFacebookF} color='#4267B2'/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.twitter.com" className='twitter'>
                                                    <FontAwesomeIcon icon={faXTwitter} color='#000'/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com" className='linkedin'>
                                                    <FontAwesomeIcon icon={faLinkedinIn} color='#0077B5'/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/" className='instagram'>
                                                    <FontAwesomeIcon icon={faInstagram} color='#FD1D1D'/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default StaffCard
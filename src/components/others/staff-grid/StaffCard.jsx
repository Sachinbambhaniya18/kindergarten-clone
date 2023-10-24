import React from 'react';
import { staffData } from '../../static-data/staffData';
import { Facebook, Instagram, Twitter, LinkedIn } from '../footer/footerSvg';
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
                                                <a href="https://www.facebook.com" className="Social-icons facebook-link">
                                                    <Facebook />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.twitter.com" className="Social-icons twitter-link">
                                                    <Twitter />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com" className="Social-icons linkedin-link">
                                                    <LinkedIn />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/" className="Social-icons instagram-link">
                                                    <Instagram />
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
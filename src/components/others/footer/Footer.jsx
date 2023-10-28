import React from 'react'
import { Clock, Email, House, PhoneCall, Facebook, Twitter, Instagram, LinkedIn, GitHub } from './footerSvg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='Footer-wrapper'>
            <div className="Footer-container">
                <div className="Footer-row">
                    <div className="Footer-col">
                        <div className="Footer-holder">
                            <h3>Contact Us</h3>
                            <ul className="Contact-add">
                                <li>
                                    <PhoneCall />
                                    Phone no: + 91 86374 56375
                                </li>
                                <li>
                                    <Email />
                                    Email Address: <a href="mailto:abcd@gmail.com">abcd@gmail.com</a>
                                </li>
                                <li>
                                    <House />
                                    Address: 3366 Jefferson Street, NEW HAMPTON, IA.
                                </li>
                                <li>
                                    <Clock />
                                    Working Days: 9am - 5pm, Monday - Friday.
                                </li>
                                <li>
                                    <GitHub />
                                    Link to Repo:
                                    <a href="https://github.com/Sachinbambhaniya18/kindergarten-clone" target='blank'> https://github.com/Sachinbambhaniya18/kindergarten-clone</a>
                                </li>
                            </ul>
                            <ul className="Socials">
                                <li>
                                    <a href="https://www.facebook.com" className='footer-links facebook-link'>
                                        <Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com" className='footer-links twitter-link'>
                                        <Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com" className='footer-links linkedin-link'>
                                        <LinkedIn />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" className='footer-links instagram-link'>
                                        <Instagram />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="Footer-col">
                        <div className="Footer-holder">
                            <h3>Information</h3>
                            <ul className="Info-footer">
                                <li><Link to="/">- Home</Link></li>
                                <li><Link to="/teachers">- Teacher</Link></li>
                                <li><Link to="/aboutus">- About Us</Link></li>
                                <li><Link to="/contact">- Contact</Link></li>
                                <li><Link to="*">- Error</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Footer-row">
                    <div className="Bottom-col">
                        <p>©2023 - Sachin Bambhaniya, Developer | Devdesign Studio, Designer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
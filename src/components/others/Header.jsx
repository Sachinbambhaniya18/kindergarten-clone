import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ heading, secondPath, thirdPath, linkPathOne, linkPathTwo, styleProp }) => {
  return (
    <div className='Path-wrapper'>
        <div className="Path-container">
            <div className="Path-row">
                <div className="Path-col">
                    <div className="Path-section">
                        <h2>{heading}</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={linkPathOne}>{secondPath}</Link></li>
                            <li style={styleProp}><Link to={linkPathTwo}>{thirdPath}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="Path-decor-one">
            <img src="/assets/svg/Planedecor.svg" alt="decor" />    
        </div>
        <div className="Path-decor-two">
            <img src="/assets/svg/TriangleUpsideDown.svg" alt="decor" />    
        </div>
        <div className="Path-decor-three">
            <img src="/assets/svg/CrossDecoration.svg" alt="decor" />
        </div>
    </div>
  )
}

export default Header
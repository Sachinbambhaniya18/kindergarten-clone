import React from 'react'

const Header = ({ heading, firstPath, secondPath, thirdPath, linkPathOne, linkPathTwo, styleProp }) => {
  return (
    <div className='Path-wrapper'>
        <div className="Path-container">
            <div className="Path-row">
                <div className="Path-col">
                    <div className="Path-section">
                        <h2>{heading}</h2>
                        <ul>
                            <li><a href="/">{firstPath}</a></li>
                            <li><a href={linkPathOne}>{secondPath}</a></li>
                            <li style={styleProp}><a href={linkPathTwo}>{thirdPath}</a></li>
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
import React from 'react'

const Heading = ({ subtitle, title, content, styleValue }) => {
    return (
        <div className='Header'>
            <div className="Header-wrapper">
                <div className="Header-container">
                    <h5 className='Header-subtitle'>{subtitle}</h5>
                    <h2 className='Header-title'>{title}</h2>
                    <p className='Header-content' style={styleValue}>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Heading;
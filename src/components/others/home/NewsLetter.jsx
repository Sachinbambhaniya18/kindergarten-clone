import React from 'react'

const NewsLetter = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='Newsletter-wrapper'>
      <div className="Newsletter-container">
        <div className="Newsletter-row">
          <div className="Newsletter-col">
            <div className="Newsletter-content">
              <h2>Subscribe Newsletter</h2>
              <p>Enter your email address to register to our newsletter delivered on a regular basis!</p>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="Form-controls">
                <input type="email" placeholder='Enter Your Email'/>
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter;
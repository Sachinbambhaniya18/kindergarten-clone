import React from 'react'
import Footer from '../others/footer/Footer'
import Header from '../others/Header'

const Events = () => {
  return (
    <div className='Event-Page'>
      <Header styleProp={{display : 'none'}} heading='Events' secondPath='Events' linkPathOne='/events'/>
      <Footer />
    </div>
  )
}

export default Events
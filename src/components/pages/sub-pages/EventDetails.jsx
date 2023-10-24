import React from 'react'
import Footer from '../../others/footer/Footer'
import Header from '../../others/Header'

const EventDetails = () => {
  return (
    <div className='Event-Details'>
      <Header styleProp={{ display: 'list-item' }} heading='Events' secondPath='Events' thirdPath='Details' linkPathOne='/events' linkPathTwo='/event/details'/>
      <Footer />
    </div>
  )
}

export default EventDetails
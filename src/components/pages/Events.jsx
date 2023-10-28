import React from 'react'
import Footer from '../others/footer/Footer'
import Header from '../others/header/Header'
import LearnAbout from '../carousel/second-carousel/LearnAbout'
import TripEvents from '../event-components/trip/TripEvents'
import Counter from '../others/eventPage/Counter'
import BlogEvent from '../event-blogs/BlogEvent'

const Events = () => {
  return (
    <div className='Event-Page'>
      <Header styleProp={{display : 'none'}} heading='Events' secondPath='Events' linkPathOne='/events'/>
      <TripEvents />
      <div className="Kids-wrapper">
        <div className="Kids-container">
          <div className="Kids-row">
            <div className="Kids-col">
              <img src="/assets/images/cartoon-kids.png" alt="children" />
            </div>
          </div>
        </div>
      </div>
      <BlogEvent />
      <LearnAbout />
      <Counter />
      <Footer />
    </div>
  )
}

export default Events
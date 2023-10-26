import React from 'react'
import Heading from '../../others/Heading'
import { heading } from '../../static-data/heading-data'
import { cards } from './cardData'
import { ReadMore } from '../../others/Button'
const TripEvents = () => {
  return (
    <div className='Trip-wrapper'>
      <div className="Trip-container">
        <Heading subtitle={heading[0].subtitle} title={heading[0].title} content={heading[0].content} />
        <div className="Trip-row">
          {
            cards.map((card, index) => (
              <div className="Trip-col">
                <div className="Trip-card">
                  <div className={`Trip-icon Icon-${index}`}>
                    {card.icon}
                  </div>
                  <h5>
                    {card.title}
                  </h5>
                  <p>
                    {card.content}
                  </p>
                  <ReadMore title='Read more' />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TripEvents
import React from 'react'
import Heading from '../../others/Heading'
import CardOne from './CardOne'
import { cards } from '../../static-data/classCard'
import { Button } from '../../others/Button'

const CardStructure = ({ subtitle, title, content }) => {

  return (
    <div className="Class-section">
      <div className="Class-decor"><img src="/assets/svg/HollowCircle.svg" alt="Circle" /></div>
      <div className='Class-card-container'>
        <Heading subtitle={subtitle} title={title} content={content} />
        <div className="Class-row">
          {
            cards.map((card) => {

              return <CardOne cardPrice={card.price} cardImage={card.src} cardTitle={card.title} />
            })
          }
        </div>
        <Button title="Discover More Projects"/>
      </div>
    </div>
  )
}

export default CardStructure
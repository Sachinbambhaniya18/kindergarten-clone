import React from 'react'
import Heading from '../others/Heading'

const CardStructure = ({subtitle, title, content}) => {
  return (
    <div className='Class-card-container'>
        <Heading subtitle={subtitle} title={title} content={content}/>
    </div>
  )
}

export default CardStructure
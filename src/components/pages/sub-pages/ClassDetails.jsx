import React from 'react'
import Footer from '../../others/footer/Footer'
import Header from '../../others/Header'

const ClassDetails = () => {
  return (
    <div className='Class-Details'>
      <Header styleProp={{ display: 'list-item' }} heading='Classes' secondPath='Classes' thirdPath='Details' linkPathOne='/classes' linkPathTwo='/class/details'/>
      <Footer />
    </div>
  )
}

export default ClassDetails
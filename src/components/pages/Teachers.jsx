import React from 'react'
import Footer from '../others/footer/Footer'
import Header from '../others/Header'

const Teachers = () => {
  return (
    <div className='Teacher-Page'>
      <Header styleProp={{display : 'none'}} heading='Teachers' secondPath='Teachers' linkPathOne='/teachers'/>
      <Footer />
    </div>
  )
}

export default Teachers
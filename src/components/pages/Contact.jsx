import React from 'react'
import Footer from '../others/footer/Footer'
import Header from '../others/Header'

const Contact = () => {
  return (
    <div className='Contact-Page'>
      <Header styleProp={{display : 'none'}} heading='Contact' secondPath='Contact' linkPathOne='/contact'/>      
      <Footer />
    </div>
  )
}

export default Contact
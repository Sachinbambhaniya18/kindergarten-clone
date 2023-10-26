import React from 'react'
import Footer from '../others/footer/Footer'
import Header from '../others/Header'
import Staff from '../others/staff-grid/Staff'

const Teachers = () => {
  return (
    <div className='Teacher-Page'>
      <Header styleProp={{display : 'none'}} heading='Teachers' secondPath='Teachers' linkPathOne='/teachers'/>
      <Staff />
      <Footer />
    </div>
  )
}

export default Teachers
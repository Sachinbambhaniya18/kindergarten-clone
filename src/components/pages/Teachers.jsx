import React from 'react'
import Footer from '../others/footer/Footer'
import Header from '../others/header/Header'
import Staff from '../others/staff-grid/Staff'
import ClassVariety from '../others/teacher/ClassVariety'

const Teachers = () => {
  return (
    <div className='Teacher-Page'>
      <Header styleProp={{display : 'none'}} heading='Teachers' secondPath='Teachers' linkPathOne='/teachers'/>
      <ClassVariety />
      <Staff />
      <Footer />
    </div>
  )
}

export default Teachers
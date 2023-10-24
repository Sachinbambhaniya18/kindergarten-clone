import React from 'react'
import Footer from '../../others/footer/Footer'
import Header from '../../others/Header'

const TeacherDetails = () => {
  return (
    <div className='Teach-Details'>
      <Header styleProp={{ display: 'list-item' }} heading='Teacher Details' secondPath='Teachers' thirdPath='Teacher Details' linkPathOne='/teachers' linkPathTwo='/teacher/details'/>
      <Footer />
    </div>
  )
}

export default TeacherDetails
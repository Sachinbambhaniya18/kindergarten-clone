import React from 'react'
import Footer from '../../others/footer/Footer'
import Header from '../../others/header/Header'

const TeacherDetails = () => {
  return (
    <div className='Teach-Details'>
      <Header styleProp={{ display: 'list-item' }} heading='Teachers' secondPath='Teachers' thirdPath='Details' linkPathOne='/teachers' linkPathTwo='/teacher/details' />
      <div style={{ textAlign: 'center' }}>
        <h1>
          This page has not been finished yet. <br/>
          Here's the original website: <a href="https://graphtheme.com/kintergartenreact/">https://graphtheme.com/kintergartenreact</a>
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default TeacherDetails
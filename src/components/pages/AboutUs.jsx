import React from 'react'
import Footer from '../others/footer/Footer';
import LearnAbout from '../carousel/second-carousel/LearnAbout';
import TeacherDesc from '../others/TeacherDesc';
import Staff from '../others/staff-grid/Staff';
import Header from '../others/Header';

const AboutUs = () => {
  return (
    <div className='About-Page'>
      <Header styleProp={{display : 'none'}} heading='About Us' secondPath='About Us' linkPathOne='/aboutus'/>
      <LearnAbout />
      <TeacherDesc />
      <Staff />
      <Footer />
    </div>
  )
}

export default AboutUs;
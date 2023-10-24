import React from 'react'
import Footer from '../others/footer/Footer';
import Header from '../others/Header';

const ClassesPage = () => {
  return (
    <div className='Class-Page'>
      <Header styleProp={{display : 'none'}} heading='Classes' secondPath='Classes' linkPathOne='/classes'/>
      <Footer />
    </div>
  )
}

export default ClassesPage;

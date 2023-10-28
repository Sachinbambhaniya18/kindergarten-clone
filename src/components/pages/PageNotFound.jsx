import React from 'react'
import Footer from '../others/footer/Footer';
import ErrorComponent from '../others/errorComponent/ErrorComponent';

const NotFound = () => {
  return (
    <div className='Not-found'>
      <ErrorComponent />
      <Footer />
    </div>
  )
}

export default NotFound;
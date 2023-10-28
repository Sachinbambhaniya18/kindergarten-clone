import React from 'react'
import Footer from '../others/footer/Footer';
import Header from '../others/header/Header';
import CardStructure from '../cards/class-structure/CardStructure';
import { heading } from '../static-data/heading-data';
import TripEvents from '../event-components/trip/TripEvents';

const ClassesPage = () => {
  return (
    <div className='Class-Page'>
      <Header styleProp={{display : 'none'}} heading='Classes' secondPath='Classes' linkPathOne='/classes'/>
      <TripEvents />
      <CardStructure subtitle={heading[0].subtitle} title={heading[0].title} content={heading[0].content}/>
      <Footer />
    </div>
  )
}

export default ClassesPage;

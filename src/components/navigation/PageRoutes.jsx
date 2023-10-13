import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Events from '../pages/Events'
import Teachers from '../pages/Teachers'
import ClassesPage from '../pages/ClassesPage'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import ClassDetails from '../pages/sub-pages/ClassDetails'
import EventDetails from '../pages/sub-pages/EventDetails'
import TeacherDetails from '../pages/sub-pages/TeacherDetails'
import NotFound from '../pages/PageNotFound'
const PageRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/classes' element={<ClassesPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/class/details' element={<ClassDetails />} />
        <Route path='/event/details' element={<EventDetails />} />
        <Route path='/teacher/details' element={<TeacherDetails />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/pages' />
    </Routes>
  )
}

export default PageRoutes;
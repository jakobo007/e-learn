import React from 'react'
import Description from './Description'
import About from './About';
import Contact from './Contact';
import Home from '../components/Home';
import Courses from '../routes/Courses';
import CourseBookingForm from '../components/CourseBookingForm';

const Homepage = () => {
  return (

<div className='flex flex-col items-center gap-20'>

    <Home />
    <Description />
    <About />
    <Courses />
    <Contact />
</div>



  )
}

export default Homepage

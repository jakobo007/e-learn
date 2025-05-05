import React from 'react'
import about from '../assets/about.jpg' 
import Title from './Title'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
      viewport={{ once: false, amount: 0.2 }}

    className='about min-h-screen flex items-center justify-center py-20 text-black mx-auto wrapper'
    >
      
      <div className='space-y-4 md:space-y-10 max-w-7xl'>

      <Title title="About Us" />
      
      <div className='flex items-center justify-center flex-col md:flex-row-reverse mx-auto'>

        <div 
          
        className='basis-1/2'>
              <h1 className=' text-3xl md:text-5xl font-bold text-wrap max-w-120'>Struggling to learn and find work balance? We can help.</h1>
              <p className='max-w-100 text-wrap mt-4 text-gray-500'>Learning german can be difficult. Finding work life balance while still learning german is even much more difficult. Our goal is to find the best learning method that's perfect to your needs. Achieving your goals and leveling up in the process.</p>        

          </div>

          <div 
            
          className='basis-1/2'>
              <img src={about} alt="" />
          </div>

      </div>


      </div>

    </motion.div>
  )
}

export default About

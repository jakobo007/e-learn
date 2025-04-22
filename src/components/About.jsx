import React from 'react'
import about from '../assets/about.jpg' 
import Title from './Title'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.1, duration: 0.3 }}}
    viewport={{ once: true, amount: 0.5 }}

    className='overflow-x-hidden about min-h-screen w-full relative flex items-center justify-center flex-col gap-10 text-black bg-white wrapper'>
      
      <Title title="About Us" />
      
      <div className='flex items-center justify-center flex-col md:flex-row-reverse mx-auto'>

        <div 
          
        className='basis-1/2'>
              <h1 className=' text-4xl md:text-6xl font-bold text-wrap max-w-120'>Don't know where to start? We can help.</h1>
              <p className='max-w-100 text-wrap mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem doloremque quidem repudiandae culpa modi odit hic totam, ex vel obcaecati sed quos in voluptate, maiores nisi laudantium assumenda repellendus.</p>        

          </div>

          <div 
            
          className='basis-1/2'>
              <img src={about} alt="" />
          </div>

      </div>


    </motion.div>
  )
}

export default About

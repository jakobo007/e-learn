import React from 'react'
import home from '../assets/home.jpg'
import Hero_text from './Hero_text'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
      viewport={{ once: false, amount: 0.5 }}
    className='overflow-x-hidden wrapper hero  min-h-screen w-full relative flex items-center justify-center flex-col gap-10 text-black bg-white mt-15 md:mt-0'>
      <div className='flex items-center justify-center flex-col md:flex-row'>

        <div className='basis-1/2 flex flex-col gap-10'>

        <div className='flex flex-col gap-5 md:gap-10'>
            <h1 className=' text-5xl md:text-7xl font-bold text-wrap'>Learn German Online</h1>
            <p className='max-w-100 text-wrap text-xl md:text-2xl'>We provide the best way to learn German, through personalized fun and interractive learning classes. All from the comfort of <span className=''>Home.</span></p>
            <Link to="classes" smooth={true} duration={500} className='cursor-pointer lg:text-xl'><motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log('hover started!')}
      className="rounded-3xl px-4 text-2-xl py-2 cursor-pointer bg-black text-white">Get Started</motion.button></Link>

        </div>

        

        </div>

        <div className='basis-1/2 '>
            <img src={home} alt="" />
        </div>

      </div>
      <Link to="about1" smooth={true} duration={500} className='cursor-pointer lg:text-xl'><motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log('hover started!')}
      className="hidden md:block rounded-3xl px-4 py-2 cursor-pointer bg-black text-white">See More</motion.button></Link>
    </motion.div>
  )
}

export default Hero

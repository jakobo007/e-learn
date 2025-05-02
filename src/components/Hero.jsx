import React from 'react'
import home from '../assets/home.jpg'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
      viewport={{ once: false, amount: 0.5 }}
    >
      
      <div className='hero min-h-screen flex items-center justify-center relative wrapper py-20 mx-auto'>


        <div className='flex items-center flex-col md:flex-row justify-center max-w-7xl'>
          
        <div className='text-left basis-1/2 grid gap-5 max-w-5xl'>
          <h1 className='text-3xl md:text-6xl font-bold'>Learn German Online</h1>
          <p className='max-w-400px md:text-xl text-wrap text-gray-500'>The best way to learn german! We provide convinient and flexible way of learning german, through our personalised, fun and interractive learning methods. </p>
          <Link to="hero_text" smooth={true} duration={500} offset={-50} className='cursor-pointer lg:text-xl'><motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log('hover started!')}
      className="rounded-3xl px-4 text-2-xl py-2 cursor-pointer bg-black text-white">Learn More</motion.button></Link>
        </div>

        {/* image */}
        <div className='basis-1/2'>
          <img src={home} alt="home" />
        </div>

        </div>
        

      </div>



    </motion.div>
  )
}

export default Hero

import React from 'react'
import { motion } from 'framer-motion'
const Hero_text = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
      viewport={{ once: false, amount: 0.2 }}
    className='hero_text min-h-screen flex items-center justify-center py-20 bg-[#ffbf23] text-black mx-auto wrapper'>
      <div className='flex items-center flex-col md:flex-row justify-center max-w-7xl gap-5 md:gap-60'>

        <div className='basis-1/2 left'>
          <h2 className='text-4xl md:text-5xl max-w-100 text-wrap'>With the Right Teacher, Great Things Happen </h2>
        </div>
        <div className='basis-1/2'>
        <p className=' max-w-100 text-wrap font-light '>Achieve your goals and discover your potential with our inspiring teachers and supportive community. Guiding and supporting you through the journey of learning, speaking and living in Germany. Join us and thrive!</p>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero_text

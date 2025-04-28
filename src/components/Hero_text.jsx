import React from 'react'
import { motion } from 'framer-motion'
const Hero_text = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
      viewport={{ once: false, amount: 0.5 }}
    className='hero_text min-h-screen flex items-center justify-center py-20 bg-[#ffbf23] text-black mx-auto wrapper'>
      <div className='flex items-center flex-col md:flex-row justify-center max-w-7xl gap-5 md:gap-60'>

        <div className='basis-1/2'>
          <h2 className=' text-4xl md:text-6xl max-w-100 text-wrap'>With the Right Teacher, Great Things Happen </h2>
        </div>
        <div className='basis-1/2'>
          <p className='md:text-3xl max-w-100 text-wrap px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non ipsum, fugiat dicta nemo qui temporibus quae sapiente nam ratione magni, quia delectus soluta incidunt commodi id sunt alias possimus.</p>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero_text

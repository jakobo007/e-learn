import React from 'react'
import { motion } from 'framer-motion'
const Hero_text = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
      viewport={{ once: false, amount: 0.5 }}
    className='bg-[#ffbf23] text-black w-full min-h-[80vh] p-8 flex items-center flex-col md:flex-row justify-center wrapper gap-4 about1'>
      <div className='basis-1/2'>
        <h2 className=' text-4xl md:text-5xl max-w-100 text-wrap'>With the Right Teacher, Great Things Happen </h2>
      </div>
      <div className='basis-1/2'>
        <p className='md:text-xl max-w-100 text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non ipsum, fugiat dicta nemo qui temporibus quae sapiente nam ratione magni, quia delectus soluta incidunt commodi id sunt alias possimus.</p>
      </div>
    </motion.div>
  )
}

export default Hero_text

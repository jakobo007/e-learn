import React from 'react'
import Picture from '../components/Picture'

const Description = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col gap-5 md:gap-10'>
      
      <div className='flex flex-col md:flex-row gap-5'>

        <div className=''>
          <h2 className='text-3xl md:text-5xl font-semibold'>With the Right Teacher,</h2>
          <h2 className='text-3xl md:text-5xl font-semibold'>Great Things Happen.</h2>
        </div>

        <div>
          <p className='text-sm md:text-lg text-gray-500 max-w-xl'>Achieve your goals and discover your potential with our inspiring teachers and supportive community. Guiding and supporting you through the journey of learning, speaking and living in Germany. Join us and thrive!</p>
        </div>

      </div>


    </div>
  )
}

export default Description

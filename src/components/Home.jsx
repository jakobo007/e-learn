import React from 'react'
import Picture from '../components/Picture'
import { Link } from 'react-router';
import { TiTick } from "react-icons/ti";

const Home = () => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row items-center gap-4 max-w-7xl'>
      
      <div className='lg:w-1/2'>
      <Picture src='e-learn/home.jpg' w={800} h={800} />
      </div>
      <div className='lg:w-1/2 max-w-2xl grid gap-4 '>
        <h1 className='text-4xl md:text-4xl lg:text-6xl font-semibold'>
          <span className='text-blue-500'>Learn German</span> <br />
           in 3 Months
           </h1>
        
        <p className='text-wrap text-sm md:text-lg text-gray-500'>Join our community of learners and start your journey to fluency today. With our expert teachers and engaging curriculum, you'll be speaking German with confidence in no time.</p>
        <ul className='text-wrap max-w-3xl'>
          <li className='flex gap-4 items-center'>
          <TiTick className='text-lg' />
          <span className='text-sm md:text-xl'>Learn from experienced teachers.</span>
          </li>
          <li className='flex gap-4 items-center'>
          <TiTick className='text-lg' />
          <span className='text-sm md:text-xl'>Personalised flexible learning schedule.</span>
          </li>
          <li className='flex gap-4 items-center'>
          <TiTick className='text-lg' />
          <span className='text-sm md:text-xl'>Exams/Module refresher und preparation.</span>
          </li>
          <li className='flex gap-4 items-center'>
          <TiTick className='text-lg' />
          <span className='text-sm md:text-xl'>Interactive and progressive learning</span>
          </li>
        </ul>

        <Link to='/e-learn/courses'>
        <button className='px-3 py-4 bg-black text-white rounded-full justify-self-start text-sm md:text-lg cursor-pointer'>Start Now</button>
        </Link>
      </div>

    </div>
  )
}

export default Home

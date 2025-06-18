import React from 'react'
import { TiTick } from "react-icons/ti";
import Picture from '../components/Picture'
import Title from '../components/Title';
import Image from '../components/Image';
import image2 from '../assets/image6.jpg';

const About = () => {
  return (
    
    <div className='w-full mx-auto max-w-7xl flex flex-col items-center justify-center gap-5 md:gap-10'>
      <Title subTitle='About Us'  />

      <div className='flex flex-col items-center md:flex-row gap-5 md:gap-10'>
        <div className='md:w-1/2'>
          <Image src={image2} className='rounded-xl'/>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl md:text-5xl font-semibold'>The best way to learn German</h1>
          <p className='text-sm md:text-lg text-gray-500 max-w-xl'>Learn German from top-rated German teachers with online German classes and online German courses. Choose from a range of courses and learn through fun interractive classes at your own pace. With flexible scheduling and affordable prices, E-Learn makes it easy to achieve your goals.</p>
        </div>
      </div>
      
    </div>

      
    
  )
}

export default About

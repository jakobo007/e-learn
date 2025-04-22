import React from 'react'
import beginner from '../assets/beginner.jpg'
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion';
import Title from './Title';
const Classes = () => {
  return (
    <div
    className='overflow-x-hidden classes wrapper  min-h-screen w-full relative flex flex-col items-center justify-center gap-10 mt-10'>
      
      <Title title="What we offer" />

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto">
        
        <div 
                
        className='bg-[#708cd5] p-10 rounded shadow-md text-black flex flex-col gap-4'>
            <h3 className='text-4xl font-bold text-wrap'>Beginner (A1)</h3>
            <h1 className='text-2xl font-semibold'>$100 <span className='font-light text-xl text-[rgba(0,0,0,0.7)]'>/8 weeks</span></h1>
            <p className=' text-wrap text-xl font-medium'>For People beginning to learn german. An introduction to German and  entails:</p> 
            <ul className='flex flex-col gap-2 '>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Beginner Friendly</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Everyday Greetings.</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Basic Vocabulary</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Basic Grammar</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Basic Conversation</li>
                

            </ul>
            <button className=" rounded-xl px-4 py-2 cursor-pointer bg-black text-white">Choose Plan</button>
        </div>
        
        <div 
                
        className='bg-[#ee6e58] p-10 rounded shadow-md text-black flex flex-col gap-4'>
            <h3 className='text-3xl font-bold text-wrap'>Pre-Intermediate (A2)</h3>
            <h1 className='text-2xl font-semibold'>$100 <span className='font-light text-xl text-[rgba(0,0,0,0.7)]'>/8 weeks</span></h1>
            <p className='text-wrap text-xl font-medium'>At the end of the course you will be able to</p> 
            <ul className='flex flex-col gap-2 '>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Understand Expressions</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Describe background & family</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Order Food in a Restaurant</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Ask for Directions</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Ask Directions</li>
                

            </ul>
            <button className=" rounded-xl px-4 py-2 cursor-pointer bg-black text-white">Choose Plan</button>
        </div>
        
        <div 
                
        className='bg-[#ffbf23] p-10 rounded shadow-md text-black flex flex-col gap-4'>
            <h3 className='text-4xl font-bold text-wrap'>Intermediate (B1)</h3>
            <h1 className='text-2xl font-semibold'>$150 <span className='font-light text-xl text-[rgba(0,0,0,0.7)]'>/10 weeks</span></h1>
            <p className='text-wrap text-xl font-medium'>At the end of the course you will be able to:</p> 
            <ul className='flex flex-col gap-2 '>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Talks about hobbies & work</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Talk about future plans.</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Ask for Travel Guides.</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Write emails & letters</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Apply for jobs in Germany</li>
                

            </ul>
            <button className=" rounded-xl px-4 py-2 cursor-pointer bg-black text-white">Choose Plan</button>
        </div>
        
        <div 
                
        className='bg-[#FFDEDE] p-6 md:p-10 rounded shadow-md text-black flex flex-col gap-4'>
            <h3 className='text-4xl font-bold text-wrap'>Refresher </h3>
            <h1 className='text-2xl font-semibold'>$50 <span className='font-light text-xl text-[rgba(0,0,0,0.7)]'>/Module</span></h1>
            <p className='text-wrap text-xl font-medium'>For People already studying German or preparing for Goethe exams or a module.</p> 
            <ul className='flex flex-col gap-2 '>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Exam Preparation.</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Module Preparation.</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Basics revision.</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Ausbildung Preparation.</li>
                <li className='inline-flex gap-2 items-center'><FaRegCheckCircle />Ausbildung Application.</li>
                

            </ul>
            <button className=" rounded-xl px-4 py-2 cursor-pointer bg-black text-white">Choose Plan</button>
        </div>
        
  

  

  
        </div>

    </div>
  )
}

export default Classes

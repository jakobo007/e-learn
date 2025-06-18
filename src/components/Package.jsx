import React from 'react'
import { useState } from 'react'
import Picture from '../components/Picture'

const Package = ({pack, price, description, sessions, src}) => {

  const [buttonText, setButtonText] = useState(price);

  const handleMouseEnter = () => {
    setButtonText('Book Course');
  };

  const handleMouseLeave = () => {
    setButtonText(price);
  };

  return (
    <div className="flex flex-col h-full shadow-lg gap-4">

        <div className=''>
            <Picture src={src} className='rounded-t-lg' h={200} />
        </div>

        <div className='p-4 flex flex-col flex-grow rounded-b-lg'>
        
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-4'>{pack}</h1>

        <ul className='flex-grow'>
          <li className='flex gap-4 items-center mb-2'>
            
            <svg className='text-lg text-green-500 w-5 h-5' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className='text-sm md:text-base text-gray-700'>{description}</span>
          </li>
          <li className='flex gap-4 items-center'>
            
            <svg className='text-lg text-green-500 w-5 h-5' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className='text-sm md:text-base text-gray-700'>{sessions}</span>
          </li>
        </ul>

        
        <button 
          className='px-6 py-3 bg-black text-white rounded-full self-start text-sm md:text-lg mt-6 hover:bg-gray-800 transition duration-300 cursor-pointer'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </button>
        </div>

      
    </div>
  )
}

export default Package

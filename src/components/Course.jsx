import React from 'react'
import { useState } from 'react';
import Image from '../components/Image';
import image1 from '../assets/image6.jpg';

const levels = [
    {
      id: 1,
      name: 'A1',
      level: 'Beginner',
      title: 'Introduction to German',
      sessions: 20,
      duration: '2 Months',
      price: '10 EUR/Session',
      image: {image1},
    },
    {
      id: 2,
      name: 'A2',
      level: 'Intermediate',
      title: 'German Grammar and sentence structure',
      sessions: 20,
      duration: '2 Months',
      price: '12 EUR/Session',
      image: 'https://placehold.co/400x250/FF6B6B/FFFFFF?text=German+A2',
    },
    {
      id: 3,
      name: 'B1',
      level: 'Advanced',
      title: 'Advance interactive and progressive learning.',
      sessions: 20,
      duration: '2 Months',
      price: '10 EUR/Session',
      image: 'https://placehold.co/400x250/4ECDC4/FFFFFF?text=German+B1',
    },
    {
      id: 4,
      name: 'Refresher',
      level: ['Beginner', 'Intermediate', 'Advanced'],
      title: 'Level refresher and language skills.',
      sessions: 15,
      duration: '1 Month',
      price: '10 EUR/Session',
      image: 'https://placehold.co/400x250/5D6D7E/FFFFFF?text=Refresher',
    },
    {
      id: 5,
      name: 'Revision',
      level: ['Beginner', 'Intermediate', 'Advanced'],
      title: 'Goethe/TELC exam level and module preparation',
      sessions: 15,
      duration: '1 Month',
      price: '10 EUR/Session',
      image: 'https://placehold.co/400x250/D2B4DE/FFFFFF?text=Exam+Prep',
    },
    {
      id: 6,
      name: 'Job Application',
      level: 'Ausbildung',
      title: 'Learn about finding an Ausbildung and working in Germany',
      sessions: 10,
      duration: '4 Months',
      price: '10 EUR/Session',
      image: 'https://placehold.co/400x250/A9CCE3/FFFFFF?text=Ausbildung+Application',
    },
  ];
const Course = ({ level, onBookClick }) => {
    
    const displayLevels = Array.isArray(level.level) ? level.level : [level.level];

    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Image section */}
        <div className="w-full h-48 bg-gray-200">
          <Image
            src={level.image}
            alt={level.name}
            className="w-full h-full object-cover"
            width={400}
            height={250}
          />
        </div>
  
        {/* course details section */}
        <div 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            className="p-4"
        >
          <div className='flex items-center justify-between gap-2 mb-2 cursor-pointer'>
            <h2 className="text-xl font-semibold text-gray-800">{level.name}</h2>
            <p className='text-sm font-semibold flex items-center gap-2'>
              Duration: <span className='text-gray-600'>{level.duration}</span>
            </p>
          </div>
  
          <p className="text-gray-600 mb-3">{level.title}</p>
  
          <div className="flex flex-wrap gap-2 mb-3">
            {displayLevels.map((lvl, index) => (
              <span key={index} className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                {lvl}
              </span>
            ))}
            <span className="text-sm font-medium text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
              {level.sessions} Sessions
            </span>
          </div>

        <div className="text-lg font-bold text-gray-800 h-16 flex items-center">
          {isHovered ? (
            <button
              onClick={() => onBookClick(level.name)}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 w-full cursor-pointer"
            >
              Book Course
            </button>
          ) : (
            <span className='flex flex-col gap-1'>
              Lessons start from
              <span className="text-green-600">{level.price}</span>
            </span>
          )}
        </div>
  
          
        </div>

      </div>
    );
}

export default Course

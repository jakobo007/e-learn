import React, { useState } from 'react';
import Course from '../components/Course';
import Title from '../components/Title';
import CourseBookingForm from '../components/CourseBookingForm'

// Data for the course levels
const levels = [
  {
    id: 1,
    name: 'A1',
    level: 'Beginner',
    title: 'Introduction to German',
    sessions: 20,
    duration: '2 Months',
    price: '10 EUR/Session',
    image: 'https://placehold.co/400x250/F8D800/FFFFFF?text=German+A1', // Placeholder image
  },
  {
    id: 2,
    name: 'A2',
    level: 'Intermediate',
    title: 'German Grammar and sentence structure',
    sessions: 20,
    duration: '2 Months',
    price: '12 EUR/Session',
    image: 'https://placehold.co/400x250/FF6B6B/FFFFFF?text=German+A2', // Placeholder image
  },
  {
    id: 3,
    name: 'B1',
    level: 'Advanced',
    title: 'Advance interactive and progressive learning.',
    sessions: 20,
    duration: '2 Months',
    price: '10 EUR/Session',
    image: 'https://placehold.co/400x250/4ECDC4/FFFFFF?text=German+B1', // Placeholder image
  },
  {
    id: 4,
    name: 'Refresher',
    level: ['Beginner', 'Intermediate', 'Advanced'],
    title: 'Level refresher and language skills.',
    sessions: 15,
    duration: '1 Month',
    price: '10 EUR/Session',
    image: 'https://placehold.co/400x250/5D6D7E/FFFFFF?text=Refresher', // Placeholder image
  },
  {
    id: 5,
    name: 'Revision',
    level: ['Beginner', 'Intermediate', 'Advanced'],
    title: 'Goethe/TELC exam level and module preparation',
    sessions: 15,
    duration: '1 Month',
    price: '10 EUR/Session',
    image: 'https://placehold.co/400x250/D2B4DE/FFFFFF?text=Exam+Prep', // Placeholder image
  },
  {
    id: 6,
    name: 'Ausbildung',
    level: 'Ausbildung',
    title: 'Learn about finding an Ausbildung and working in Germany',
    sessions: 10,
    duration: '4 Months',
    price: '10 EUR/Session',
    image: 'https://placehold.co/400x250/A9CCE3/FFFFFF?text=Job+Application', // Placeholder image
  },
];


const Courses = () => {

  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleBookClick = (courseName) => {
    setSelectedCourse(courseName);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedCourse('');
  };


  return (
    <div className='w-full mx-auto flex flex-col items-center justify-center gap-5 md:gap-10'>
      {/* Title section */}
      <Title subTitle='Our Courses' />

      {/* Grid of course cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <Course key={level.id} level={level} onBookClick={handleBookClick} />
        ))}
      </div>

      {/* Course Booking Form Modal */}
      {showForm && (
        <CourseBookingForm
          courseName={selectedCourse}
          onClose={handleCloseForm}
        />
      )}
      
    </div>
  );
}

export default Courses;

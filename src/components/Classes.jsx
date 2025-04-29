import React from 'react'
import { FaCheck } from "react-icons/fa";
import Title from './Title';
import { motion } from 'framer-motion'
const Classes = () => {
    const courses = [
        {
            id: 1,
            title: "Beginner",
            price: 50,
            features: [
                'Introduction to German',
                'Basic Vocabulary & Grammar',
                'Introducing yourself',
                'Basic greetings and expressions',
            ]
        },
        {
            id: 2,
            title: "Intermediate",
            price: 100,
            features: [
                'Intermediate Vocabulary',
                'Intermediate Grammar',
                'Conversational Skills',
                'Reading and Writing Skills',
            ]
        },
        {
            id: 3,
            title: "Advanced",
            price: 150,
            features: [
                'Advanced Vocabulary',
                'Advanced Grammar',
                'Fluency in Conversations',
                'Writing and Comprehension Skills',
            ]
        }
    ]
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
    viewport={{ once: false, amount: 0.5 }}
     className='hero min-h-screen flex items-center justify-center wrapper py-20 classes flex-col space-y-4 md:space-y-10 mx-auto'>
      
      

        <Title title="What we offer" />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl'>
            {courses.map((course) => (
                <div key={course.id} className={`course active-${course.id} border-2 cursor-pointer border-black hover:border-[#ffbf23] p-4 rounded-2xl relative`}>
                    <div className='mb-2'>
                        <h3 className='text-xl font-semibold'>{course.title}</h3>
                        <span className='text-2xl font-bold'>${course.price} <span className='text-gray-500 font-light text-xl'>/month</span></span>
                    </div>

                    <ul className='mb-6 flex flex-col'>
                        <p className='font-semibold mb-4 text-[#ffbf23]'>Includes:</p>
                        {course.features.map((feature, index) => (
                            <li className='inline-flex items-center gap-4 text-wrap' key={index}><FaCheck />{feature}</li>
                        ))}
                    </ul>

                    <button className="md:text-xl rounded w-full px-4 py-2 cursor-pointer hover:bg-[#ffbf23] bg-black text-white ">Choose Plan</button>

                </div>
            ))}
        </div>
        
  

  

  
       

    </motion.div>
  )
}

export default Classes

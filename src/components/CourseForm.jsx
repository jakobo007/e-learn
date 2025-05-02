import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import Title from './Title';
import intouch from '../assets/intouch.jpg';
import thanks from '../assets/thanks.png';

const CourseForm = ({ onFormSubmit }) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d40557af-11a2-452b-9dfc-eb6d5f8d7886");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(" Submitted Successfully");
      event.target.reset();
      onFormSubmit();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact min-h-screen flex items-center justify-center flex-col py-20 text-black mx-auto wrapper space-y-10'>

      <Title title="Registration Form" />

      <div className='flex justify-between flex-col-reverse md:flex-row gap-10 max-w-7xl w-full'>

        <div className='basis-1/2 max-w-100'>

          <div className=''>
            <h2 className='text-xl md:text-2xl font-semibold inline-flex items-center gap-2'>Thank you for registering with us<img src={thanks} className='w-8' alt="" /></h2>
            <p className='text-gray-500 max-w-[450px] md:text-xl'>We appreciate your interest in our courses. Our team will review your application and get back to you shortly. If you have any questions, feel free to reach out.</p>
          </div>
          <img src={intouch} className='max-w-100' alt="" />
        </div>

        <div className='basis-1/2'>
          <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label >Your Email</label>
            <input type="email" name='email' placeholder='Enter your email' required />
            <label >Your Message</label>
            <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
              className="md:text-xl rounded-3xl px-4 py-2 cursor-pointer bg-black text-white inline-flex items-center justify-center gap-2">Register Now<FaArrowRight className='text-xl' /></motion.button>
          </form>
          <span className='block my-4'>{result}</span>
        </div>

      </div>
    </div>
  );
};

export default CourseForm;
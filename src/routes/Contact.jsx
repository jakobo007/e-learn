import React from 'react'

import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import { FaArrowRight } from "react-icons/fa";
import Title from '../components/Title'

const Contact = () => {

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
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (

    <div className='flex flex-col items-center justify-center gap-5 w-full md:gap-10'>

    <Title subTitle='Get in Touch' />

    <div className='flex justify-between flex-col md:flex-row gap-5 md:gap-10 max-w-7xl w-full mx-auto'>

          <div className='basis-[48%] flex flex-col gap-2 '>
            <h2 className='text-xl md:text-2xl font-semibold inline-flex items-center gap-2'>Send us a message <img src={msg_icon} className='w-8'/></h2>
            <p className='text-gray-500 max-w-[450px] md:text-xl'>Feel free to reach out through  the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <li className='inline-flex items-center gap-2 text-sm md:text-xl'><img src={mail_icon} className='w-5' />applications@e-learn.de</li>
            <li className='inline-flex items-center gap-2 text-sm md:text-xl'><img src={phone_icon} className='w-5' />+49 1776999579</li>
            <li className='inline-flex items-center gap-2 text-sm md:text-xl'><img src={location_icon} className='w-5' />38458, Velpke</li>
            
          </div>


          <div className='basis-[48%]'>
            <form onSubmit={onSubmit}>
              <label >Your Name</label>
              <input type="text" name='name' placeholder='Enter your name' required/>
              <label >Your Email</label>
              <input type="email" name='email' placeholder='Enter your email' required/>
              <label >Your Message</label>
              <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
              <button 
              
              className="md:text-xl rounded-3xl px-4 py-2 cursor-pointer bg-black text-white inline-flex items-center justify-center gap-2">Submit<FaArrowRight className='text-xl' /></button>
            </form>
            <span className='block my-4'>{result}</span>
          </div>
        

          

        </div>

    </div>
      

  )
}

export default Contact

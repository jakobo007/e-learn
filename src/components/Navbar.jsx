import React, { useEffect } from 'react'
import { useState } from 'react'
import { PiStudentDuotone } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const menuOpen = () => {
      setIsOpen(!isOpen);
    
    };

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', () => {window.scrollY > 0 ? setSticky(true) : setSticky(false)})
    },[])
  
    return (
      <nav className={`w-full wrapper text-black bg-[rgba(255,255,255,0.2)] backdrop-blur-2xl flex items-center justify-between py-2 fixed top-0 left-0 z-10 ${sticky ? 'dark-nav' : '' }`}>
        <h1 className="inline-flex items-center gap-2 md:gap-4 lg:text-2xl cursor-pointer text-[#F7374F]">
          <PiStudentDuotone className='lg:text-2xl' />E-Learn.
        </h1>
  
        <ul className="hidden md:flex md:items-center md:gap-4 xl:gap-8">
          <Link to="hero" smooth={true} duration={500} className='cursor-pointer lg:text-xl'>Home</Link>
          <Link to="classes" smooth={true} duration={500} offset={-40} className='cursor-pointer lg:text-xl'>Classes</Link>
          <Link to="about" smooth={true} duration={500} offset={-40} className='cursor-pointer lg:text-xl'>About</Link>
          <Link to="contact" smooth={true} duration={500} offset={-40} className='cursor-pointer lg:text-xl'>Contact</Link>
          <Link to="classes" smooth={true} duration={500} offset={-40} className='cursor-pointer lg:text-xl'><motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log('hover started!')}
      className="rounded-3xl px-4 text-2-xl py-2 cursor-pointer bg-black text-white">Get Started</motion.button></Link>
          
          
        </ul>
  
        <button className="md:hidden text-2xl z-50 cursor-pointer" onClick={menuOpen}>
          {isOpen ? <FaXmark className='text-white' /> : <FaBars />}
        </button>
  
        <div
          className={`fixed top-0 right-0 w-1/2 h-screen bg-black text-white p-6 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <ul className="flex flex-col gap-6 pt-6 cursor-pointer">
          <Link to="hero" smooth={true} duration={500} offset={-40} className='cursor-pointer lg:text-xl'>Home</Link>
          <Link to="classes" smooth={true} duration={500} offset={-40} className='cursor-pointer lg:text-xl'>Classes</Link>
          <Link to="about" smooth={true} duration={500} offset={-30} className='cursor-pointer lg:text-xl'>About</Link>
          <Link to="contact" smooth={true} duration={500} offset={-60} className='cursor-pointer lg:text-xl'>Contact</Link>
          
            
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar

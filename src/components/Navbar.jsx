import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { PiStudentDuotone } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import favicon from '../assets/favicon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null); // Create a ref for the sidebar

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = (event) => {
    // Check if the clicked target is outside the sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to the document to handle clicks outside the sidebar
    document.addEventListener('mousedown', closeSidebar);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', closeSidebar);
    };
  }, [isOpen]); // Re-run effect when isOpen changes

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`w-full wrapper text-black bg-[#ffbf23] backdrop-blur-2xl flex items-center justify-between py-2 fixed top-0 left-0 z-10 ${sticky ? 'dark-nav' : ''}`}>
      <h1 className="inline-flex items-center gap-2 md:gap-4 lg:text-2xl text-xl cursor-pointer text-black">
        <img src={favicon} alt="" />E-Learn.
      </h1>

      <ul className="hidden md:flex md:items-center md:gap-4 xl:gap-8">
        <Link to="hero" smooth={true} duration={500} className='cursor-pointer lg:text-xl hover:text-white'>Home</Link>
        <Link to="classes" smooth={true} duration={500} offset={-40} className='cursor-pointer lg:text-xl hover:text-white'>Classes</Link>
        <Link to="about" smooth={true} duration={500} offset={-40} className='cursor-pointer lg:text-xl hover:text-white'>About</Link>
        <Link to="contact" smooth={true} duration={500} offset={-40} className='cursor-pointer lg:text-xl hover:text-white'>Contact</Link>
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
        ref={sidebarRef} // Attach the ref to the sidebar div
        className={`fixed top-0 right-0 w-1/2 h-screen bg-black text-white p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col gap-6 pt-6 cursor-pointer">
          <Link to="hero" smooth={true} duration={500} className='cursor-pointer lg:text-xl' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="classes" smooth={true} duration={500} className='cursor-pointer lg:text-xl' onClick={() => setIsOpen(false)}>Classes</Link>
          <Link to="about" smooth={true} duration={500} className='cursor-pointer lg:text-xl' onClick={() => setIsOpen(false)}>About</Link>
          <Link to="contact" smooth={true} duration={500} className='cursor-pointer lg:text-xl' onClick={() => setIsOpen(false)}>Contact</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
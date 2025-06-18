import React from 'react'
import { useState, useEffect } from 'react';
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    };

  return (
    
    <div className='flex items-center justify-between h-16 w-full'>

                {/* Logo Section */}
                <Link to='/e-learn' className='text-lg font-bold'>E-learn</Link>

                {/* Mobile Section */}
                <div className='md:hidden'>

                <button className='cursor-pointer' onClick={menuOpen}>
                    {isOpen ? <FaXmark className='text-2xl' /> : <FaBars  className='text-2xl'/>}
                </button>

                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute cursor-pointer top-16 bg-black text-white transition-all ease-in-out ${isOpen ? 'right-0' : 'right-[100%]'}`}>
                    <Link to='/e-learn' onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to='/courses' onClick={() => setIsOpen(false)}>Courses</Link>
                    <Link to='/about' onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to='/contact' onClick={() => setIsOpen(false)}>Contact Us</Link>

                    <SignedOut>
                        <Link to='/login'>
                        <button className='px-4 py-2 bg-white text-black rounded-full'>Login</button>
                        </Link>
                    </SignedOut>
                     

                </div>
                    
                </div>
                
                {/* Desktop Section */}

                <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium cursor-pointer'>
                    <Link to='/e-learn' onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to='/courses' onClick={() => setIsOpen(false)}>Courses</Link>
                    <Link to='/about' onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to='/contact' onClick={() => setIsOpen(false)}>Contact Us</Link>

                    <SignedOut>
                        <Link to='/login'>
                        <button className='px-4 py-2 bg-black text-white rounded-full'>Login</button>
                        </Link>
                    </SignedOut>
                    


                </div>
            
    </div>  
    
  )
}

export default Navbar

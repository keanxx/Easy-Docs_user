import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Determine if we're on an authentication page
  const isAuthPage = location.pathname === "/signIn" || location.pathname === "/signUp";

  // Show profile (and sign out) links only when not on auth pages
  const showProfile = !isAuthPage;

  return (
    <div className='flex flex-col items-center relative z-50 '>
      <nav className='flex md:w-[95%] w-[85%] h-[70px] rounded-[18px] items-center  justify-between text-white font-semibold space-x-5 px-5 mt-5 bg-fixed bg-[#376a63] shadow-lg z-50'>
        <div className='inline-flex items-center md:space-x-5 space-x-2'>
          <img className='h-[50px] w-auto'
        src="./images/logo.png" alt="logo"/>
        <p className='text-left'>Barangay Easy Docs</p>
        </div>
        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-5'>
          {showProfile ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/">Sign Out</Link></li>
            </>
          ) : (
            <>
              <Link to="/signUp">
                <li>Sign Up</li>
              </Link>
              <Link to="/">
                <li>Sign In</li>
              </Link>
            </>
          )}
        </ul>
        
        {/* Mobile Burger Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg 
              className='w-6 h-6' 
              fill='none' 
              stroke='currentColor' 
              strokeWidth='2' 
              viewBox='0 0 24 24' 
              strokeLinecap='round' 
              strokeLinejoin='round'
            >
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden w-[70%] bg-black text-white flex flex-col space-y-3 p-3 absolute top-[90px] mt-2 rounded-[10px] pl-10 font-semibold'>
          {showProfile ? (
            <>
              <li>
                <Link to="/profile" onClick={() => setIsOpen(false)}>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Sign Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signUp" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default Header;
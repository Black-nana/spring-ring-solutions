// NavBar.js
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import UserSection from './UserSections';

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState(null);

  const handleUserLogin = (signedInUser) => {
    setUser(signedInUser);
  };

  const handleUserLogout = () => {
    setUser(null);
  };

  return (
    <div className='w-full'>
      <nav>
        <div className='max-w-7xl mx-auto'>
          <div className='flex mx-auto justify-between w-5/6 '>
            {/* Primary menu and logo */}
            <div className='flex items-center gap-16 my-6'>
              {/* logo */}
              <div>
                <a href='/' className='flex gap-1 font-bold text-gray-700 items-center '>
                  Ring Solutions
                </a>
              </div>
              {/* primary */}
              <div className='hidden lg:flex gap-8 '>
                <a href='#'>Home</a>
                <a href='#'>Services</a>
                <a href='#'>About us</a>
                <a href='#'>Testimonials</a>
                <a href='#'>Gallery</a>
                <a href='#'>Book Now</a>
              </div>
            </div>
            {/* secondary */}
            <div className='flex gap-6'>
              <div className='grid'>
                <UserSection
                  user={user}
                  onUserLogin={handleUserLogin}
                  onUserLogout={handleUserLogout}
                />
              </div>
              {/* Mobile navigation toggle */}
              <div className='lg:hidden flex items-center'>
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {toggleMenu ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? 'h-0' : 'h-full'
          }`}>
          <div className='px-8'>
            <div className='flex flex-col gap-8 font-bold tracking-wider'>
              <a href='#' className='border-l-4 border-gray-600'>
                Home
              </a>
              <a href='#'>Services</a>
              <a href='#'>About us</a>
              <a href='#'>Testimonials</a>
              <a href='#'>Gallery</a>
              <a href='#'>Book Now</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

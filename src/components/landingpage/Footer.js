import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MdLocalPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='w-full bg-gray-950 grid place-items-center'>
      <div className='w-4/5  text-white p-8 grid place-items-center lg:grid-cols-4'>
        <div className='grid gap-4'>
          <h3 className='text-3xl font-bold uppercase'>Stay informed</h3>
          <div className='relative'>
            <ArrowForwardIcon className='bg-orange-500 absolute top-3 left-[11.5rem] cursor-pointer' />
            <input
              className='bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 focus:outline-none focus:ring-0 '
              type='text'
              placeholder='enter email'
              name=''
              id=''
            />
          </div>
        </div>
        <div className='grid'>
          <h1 className='capitalize text-2xl text-orange-200 font-sans font-semibold'>
            information
          </h1>
          <div>
            <ul>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>About us</a>
              </li>
              <li>
                <a href=''>Book Now</a>
              </li>
              <li>
                <a href=''>Testimonials</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className='capitalize text-2xl text-orange-200 font-sans font-semibold'>
            contact
          </h3>
          <h4 className='flex items-center gap-2'>
            <MdLocalPhone />
            +000 000 000 000
          </h4>
          <h4 className='flex items-center gap-2'>
            <MdEmail />
            ringSolutions@gmail.com
          </h4>
        </div>
        <div>
          <h1 className='text-3xl font-extrabold border-l-4 border-orange-300 pl-2'>Ring Solutions</h1>
        </div>
      </div>
      <footer className='text-orange-200 py-4'>
        @ 2023 Ring Solutions. All Rights reserved
      </footer>
    </div>
  );
};

export default Footer;

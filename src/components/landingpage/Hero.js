import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

import image from '../../asserts/2.jpg'

const Hero = () => {
  return (
    <section className='w-full relative h-[90vh] overflow-hidden'>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <img
        src={image}
        alt='Hero'
        loading='lazy'
        className='absolute inset-0 object-cover w-full h-full'
      />

      <div className='relative flex gap-8 items-center justify-center h-full text-white p-2'>
       <div className='grid gap-6 place-items-center h-72 bg-gradient-to-br from-white-opacity-10 to-white-opacity-0 backdrop-blur-md shadow-lg  rounded-2xl p-4'>
        <h1 className='rotate-90 text-xl font-semibold'>Follow Us</h1>
        <div className='grid gap-6'>
          <Facebook  className='cursor-pointer'/>
          <Twitter className='cursor-pointer'/>
          <Instagram className='cursor-pointer'/>
          <LinkedIn className='cursor-pointer'/>
        </div>
       </div>
        <div className='bg-gradient-to-br from-white-opacity-10 to-white-opacity-0 backdrop-blur-md shadow-lg  rounded-2xl p-8'>
          <h1 className='text-5xl font-bold grid gap-4'>
            <span className='uppercase text-6xl'>Spring Ring Solutions</span>
            <span className='capitalize text-2xl'>we spring to where our arms can reach</span>
          </h1>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;

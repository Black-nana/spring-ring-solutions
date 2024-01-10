import React from 'react';
import { Button, Typography, Divider } from '@mui/material';

const CallToAction = () => {
  return (
    <div className='bg-slate-900 text-white py-8 px-8 lg:grid lg:grid-cols-2 lg:gap-4 grid gap-7'>
      <div>
        <p className='text-4xl font-bold w-4/5 py-4 tracking-widest'>
          Ready to transform your space?
        </p>
        <button className='py-4 px-16 text-center text-slate-900 font-bold bg-orange-300 tracking-widest cursor-pointer'>
          Let's Go
        </button>
      </div>
      <div>
        <header className='text-4xl font-bold w-4/5 py-4 tracking-widest'>
          <h5>why ring solutions?</h5>
        </header>
        <div>
          <Typography
            variant='body1'
            paragraph>
            Discover the joy of a cleaner and healthier environment. Our
            professional cleaning services are tailored to meet your unique
            needs. Whether it's a one-time deep cleaning or a recurring service,
            we've got you covered.
          </Typography>
          <Typography
            variant='body1'
            paragraph>
            Our experienced team uses eco-friendly cleaning products to ensure a
            spotless and hygienic space. We take pride in our attention to
            detail and commitment to delivering excellence in every cleaning
            session.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

import React from 'react';
// import { Typography } from '@mui/material';
import { GoPeople } from 'react-icons/go';
import { GrMapLocation } from 'react-icons/gr';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
// import { PeopleAlt, DoneAll, EmojiTransportation } from '@mui/icons-material';

const StatsOverview = () => {
  return (
    <div className='w-full grid place-items-center px-8 py-8 bg-slate-900 text-orange-300'>
      <div className='w-4/5 grid place-items-center lg:grid-cols-3'>
        <div className=' grid gap-2 place-items-center'>
          <GoPeople style={{ fontSize: 150, color: '#fdba74' }} />
          <h1 className='text-3xl font-bold tracking-wider'>10K+</h1>
          <h3 className='text-2xl font-bold text-orange-200'>Happy Customers</h3>
          <p className='text-center text-orange-100'>we have over 10,000 happy customers who have already used the service of Ring Solution</p>
        </div>

        <div className=' grid gap-2 place-items-center'>
          <MdOutlineEmojiTransportation
            style={{ fontSize: 150, color: '#fdba74' }}
          />
          <h1 className='text-3xl font-bold tracking-wider'>247</h1>
          <h3 className='text-2xl font-bold text-orange-200'>Comfortable Vans</h3>
          <p className='text-center text-orange-100'>our vans are equipped with all the necessary amenities for a comfortable journey</p>
        </div>
        <div className=' grid gap-2 place-items-center'>
          <GrMapLocation style={{ fontSize: 150, color: '#fdba74' }} />
          <h1 className='text-3xl font-bold tracking-wider' >200+</h1>
          <h3 className='text-2xl font-bold text-orange-200'>Completed Works</h3>
          <p className='text-center text-orange-100'>we have completed over 200 projects in the field of transportation of goods and people</p>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;

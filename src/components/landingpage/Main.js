import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import ServicesFeatures from './ServicesFeatures';
import CallToAction from './CallToAction';
import StatsOverview from './StatsOverview';
import Footer from './Footer';

const Main = () => {
  return (
    <div className='w-full border-4 grid place-items-center'>
      <NavBar />
      <Hero />
      <ServicesFeatures />
      <CallToAction />
      <StatsOverview />
      <Footer />
      {/* <Booking/> */}
      
    </div>
  );
};

export default Main;

import React, { useState } from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import image from '../../asserts/1.jpg';
import img1 from '../../asserts/2.jpg';
import image2 from '../../asserts/3.jpg';

const ServicesFeatures = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const toggleReadMore1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleReadMore2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const toggleReadMore3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const toggleReadLess = (toggleFunction) => {
    toggleFunction(false);
  };

  const renderContent = (text, isExpanded, toggleReadMore, toggleReadLess) => {
    if (isExpanded) {
      return (
        <>
          {text}
          <span
            className='text-orange-300 cursor-pointer'
            onClick={() => toggleReadLess(toggleReadMore)}>
            {' '}
            Read less <ArrowBackIcon />
          </span>
        </>
      );
    }

    // Trim the text for the preview
    const trimmedText = `${text.substring(0, 200)}...`;

    return (
      <>
        {trimmedText}
        <span
          className='text-orange-300 cursor-pointer'
          onClick={toggleReadMore}>
          {' '}
          Read more <ArrowForwardIcon className=''/>
        </span>
      </>
    );
  };

  // Function to render content for "Easy Booking"
  const renderEasyBookingContent = () => {
    return renderContent(
      'Conveniently book your cleaning appointments online with just a few clicks. Our user-friendly booking platform allows you to schedule your cleaning sessions hassle-free. Choose from a variety of available time slots that fit your busy schedule. Whether you prefer morning, afternoon, or evening appointments, we provide the flexibility to meet your cleaning needs. Our goal is to make the booking process seamless, allowing you to enjoy a clean and refreshing space without any stress.',
      isExpanded2,
      toggleReadMore2,
      toggleReadLess
    );
  };

  // Function to render content for "Quality Service"
  const renderQualityServiceContent = () => {
    return renderContent(
      'Our dedicated team ensures high-quality service with attention to detail. We go the extra mile to meet your expectations and provide a clean and comfortable environment for your home or office.',
      isExpanded3,
      toggleReadMore3,
      toggleReadLess
    );
  };

  return (
    <div className='w-full bg-slate-900 text-white'>
      <section className='py-16 w-full'>
        <div className='w-full  text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8'> Our Services</h2>
          <div className='grid gap-4 w-full'>
            {/* Service Feature 1 */}
            <div className='grid grid-cols-2 gap-4 place-items-center w-full'>
              <div className='overflow-hidden h-64 rounded-r-full'>
                <img
                  src={img1}
                  alt=''
                  loading='lazy'
                />
              </div>

              <div className='text-left pl-6'>
                <h3 className='text-xl font-bold mb-2'>
                  Professional Cleaners
                </h3>
                <p className='text-gray-600 w-3/4'>
                  {renderContent(
                    'Our experienced and professional cleaners ensure a spotless and hygienic environment. Our team of highly trained and experienced cleaners is dedicated to ensuring a spotless and hygienic environment for your home or office. With attention to detail and a commitment to excellence',
                    isExpanded1,
                    toggleReadMore1,
                    toggleReadLess
                  )}
                </p>
              </div>
            </div>

            {/* Service Feature 2 */}
            <div className='grid grid-cols-2 gap-8 place-items-center w-full'>
              <div className='text-left pl-6'>
                <h3 className='text-xl font-bold mb-2'>Easy Booking</h3>
                <p className='text-gray-600  w-3/4'>{renderEasyBookingContent()}</p>
              </div>

              <div className='overflow-hidden h-64 rounded-l-full'>
                <img
                  src={image}
                  alt=''
                  loading='lazy'
                />
              </div>
            </div>

            {/* Service Feature 3 */}
            <div className='grid grid-cols-2 gap-8 place-items-center w-full'>
              <div className='overflow-hidden h-64 rounded-r-full'>
                <img
                  src={image2}
                  alt=''
                  loading='lazy'
                />
              </div>

              <div className='text-left pl-6'>
                <h3 className='text-xl font-bold mb-2'>Quality Service</h3>
                <p className='text-gray-600  w-3/4'>{renderQualityServiceContent()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesFeatures;

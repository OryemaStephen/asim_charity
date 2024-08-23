import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeIntro = ({ number: targetNumber }) => {
  const [number, setNumber] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Start counting
          animateNumber();
        }
      }
    };

    const animateNumber = () => {
      let start = 0;
      const duration = 2000; // Duration of the animation in milliseconds
      const stepTime = 2; // Time between each step in milliseconds
      const steps = Math.ceil(duration / stepTime);
      const increment = Math.ceil(targetNumber / steps);

      const updateNumber = () => {
        if (start < targetNumber) {
          setNumber(prev => Math.min(prev + increment, targetNumber));
          start += increment;
          requestAnimationFrame(updateNumber);
        }
      };

      updateNumber();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately in case it's already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetNumber]);

  return (
    <div className='grid items-start justify-between w-full h-full grid-cols-1 gap-5 px-3 py-20 md:px-20 md:grid-cols-2'>
      <div className='bg-[#F7CA44] px-10 py-20' ref={ref}>
        <p className='text-lg'>Served over</p>
        <p className='pt-3 text-6xl font-semibold'>{number}</p>
        <p className='py-3 text-lg'>in Uganda</p>
        <Link
          to="/services"
          className="px-4 py-2 text-xl text-black capitalize transition-shadow duration-300 bg-white shadow-lg hover:shadow-xl"
        >
          View Our Programs
        </Link>
      </div>
      <div className='flex flex-col justify-between w-full h-full'>
        <h2 className='text-4xl capitalize'>Who are we?</h2>
        <p className='py-3 text-lg text-justify'>
          We are Asim Charity Organization. We are a passionate 
          team working to improve the lives of needy Ugandans 
          through provision of basic needs such as food, shelter, 
          education, and health services.<br/>
          We are Asim Charity Organization. We are a passionate 
          team working to improve the lives of needy Ugandans 
          through provision of basic needs such as food, shelter, 
          education, and health services.
        </p>
        <Link
          to='/about'
          className="w-1/2 px-4 py-2 text-xl text-center text-white capitalize transition-shadow duration-300 bg-black shadow-lg lg:w-1/3 hover:shadow-xl"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

HomeIntro.propTypes = {
  number: PropTypes.number.isRequired,
};

export default HomeIntro;

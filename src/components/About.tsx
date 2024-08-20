import React from 'react';
import { AboutText } from '../constant';

const About = () => {
  return (
    <div className='bg-white p-6 md:p-8 rounded-2xl m-4 md:m-8 lg:m-32'>
      <h4 className='text-2xl md:text-3xl font-bold text-purple-600'>About me</h4>
      <br />
      <p className='text-base md:text-lg'>
        {AboutText}
      </p>
    </div>
  );
};

export default About;

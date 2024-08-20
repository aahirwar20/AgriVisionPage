import React from 'react';
import { coursesData } from '../constant';
import Course from './Course';

const Courses = () => {
  return (
    <div className='m-4 md:m-8 lg:m-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {coursesData.map((data, index) => (
          <Course key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
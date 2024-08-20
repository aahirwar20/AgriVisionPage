import React from 'react';
import calender from '../assests/calendar.png';
import arrow from '../assests/arrow.png';
import { CourseType } from '../interfaces';

interface CourseProps {
  data: CourseType;
}

const Course: React.FC<CourseProps> = ({ data }) => {
  return (
    <div className='bg-white p-6 rounded-2xl space-y-4 w-full'>
      <h3 className='text-lg md:text-xl font-bold'>{data.name}</h3>
      <h5 className='text-sm md:text-base'>Duration {data.duration} min</h5>
      <p className='text-sm md:text-base'>
        <span className="inline-block line-through mr-2 md:mr-4">₹{data.price}</span>
        <span className="inline-block">{data.discount}% off</span>
      </p>

      <div className={`w-full flex justify-between ${data.color} p-2 rounded-full`}>
        <div className="flex items-center space-x-2">
          <img
            src={calender}
            alt="calendar"
            className="w-5 h-5 md:w-6 md:h-6"
          />
          <span className='text-sm md:text-base'>Book Now</span>
        </div>
        <span className="inline-flex items-center justify-center border-gray-600 border-2 rounded-full px-3 py-1 text-sm md:text-base">
          ₹{data.bookingPrice}
          <img
            src={arrow}
            alt="arrow"
            className="ml-2 w-5 h-5 md:w-6 md:h-6"
          />
        </span>
      </div>
    </div>
  );
};

export default Course;

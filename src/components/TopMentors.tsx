import React from 'react';
import { topMentorsData } from '../constant';
import MentorCard from './MentorCard';

const TopMentors = () => {
  return (
    <div className='m-4 md:m-8 lg:m-32'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold text-purple-600'>
          People also liked their Mentorship
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {topMentorsData.map((data, index) => (
          <MentorCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TopMentors;

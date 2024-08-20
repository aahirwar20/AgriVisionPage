import React from 'react';
import { MentorshipFeedback } from '../constant';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  return (
    <div className='m-4 md:m-8 lg:m-32'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold text-purple-600'>
          Impact of my Mentorship
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {MentorshipFeedback.map((data, index) => (
          <FeedbackCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;

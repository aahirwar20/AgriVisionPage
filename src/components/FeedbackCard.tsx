import React from 'react';
import FeedbackRate from './FeedbackRate';
import { Feedback } from '../interfaces'; // Import the interface

interface FeedbackCardProps {
  data: Feedback;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ data }) => {
  return (
    <div className='bg-white h-auto p-6 rounded-2xl space-y-4 w-full max-w-md mx-auto'>
      <div className='flex items-start'>
        <div className='relative w-12 h-12 md:w-14 md:h-14 rounded-full mr-4'>
          <img
            src={data.profile}
            alt={`${data.name}'s profile`}
            className='w-full h-full object-cover rounded-full'
          />
        </div>
        <div>
          <div className='text-lg font-semibold'>{data.name}</div>
          <div className='flex items-center mt-2'>
            <span className='inline-block mr-4'>{data.rate}</span>
            <div className='inline-block'>
              <FeedbackRate rating={4} totalStars={5} />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 text-gray-700'>
        {data.feedbackText}
      </div>
    </div>
  );
};

export default FeedbackCard;

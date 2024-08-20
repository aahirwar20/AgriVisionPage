import React from 'react';
import { mentorData } from '../constant';
import FeedbackRate from './FeedbackRate';
import SocialIcons from './SocialIcons';

const Mentor = () => {
  return (
    <div className='bg-white p-8 rounded-2xl m-4 sm:m-8 md:m-16 lg:m-32 flex flex-col lg:flex-row justify-between'>
      <div className='space-y-4 lg:mr-52 mb-8 lg:mb-0'>
        <h6 className='text-purple-800'>MENTOR</h6>
        <h3 className='text-2xl font-semibold'>{mentorData.name}</h3>
        <p className='text-lg'>{mentorData.about}</p>
        <div className='flex items-center'>
          <span className='inline-block mr-4'>{mentorData.rate}</span>
          <div className='inline-block'>
            <FeedbackRate rating={4} totalStars={5} />
          </div>
        </div>
      </div>
      <div className='space-y-6'>
        <div className='flex justify-center'>
          <img
            src={mentorData.profile}
            alt={`${mentorData.name} profile`}
            className='w-24 h-24 md:w-36 md:h-36 object-cover rounded-lg'
          />
        </div>
        <SocialIcons socialLinks={mentorData.social} />
      </div>
    </div>
  );
};

export default Mentor;

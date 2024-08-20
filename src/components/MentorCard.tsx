import React from 'react';

const MentorCard = ({ data }: any) => {
  return (
    <div className="bg-white h-auto p-6 md:p-8 rounded-2xl space-y-4 overflow-hidden flex flex-col justify-center">
      <div className="relative w-full">
        {/* Circle Background */}
        <div className={`w-60 h-60 ${data.color} rounded-b-full absolute -top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0`}></div>
        
        {/* Profile Image */}
        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full z-10 m-auto mt-12 border-8">
          <img
            src={data.profile}
            alt={`${data.name}'s profile`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-semibold">{data.name}</h3>
        <p className="text-gray-500 text-sm md:text-base pt-2">Prof. of {data.department}</p>
        <p className="mt-4 inline-block border-gray-200 border-2 rounded-full px-2 py-1 md:px-4 md:py-2 text-gray-700 text-sm md:text-base">
          {data.exprience}+ Experience
        </p>
      </div>
      <div className="text-center mt-6">
        <button className="bg-purple-600 text-white py-2 px-4 md:py-2 md:px-6 rounded-full hover:bg-purple-700 transition duration-300">
          Know More
        </button>
      </div>
    </div>
  );
};

export default MentorCard;

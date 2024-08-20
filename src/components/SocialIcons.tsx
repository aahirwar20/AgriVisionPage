import React from 'react';

const SocialIcons = ({ socialLinks }:any) => {
  return (
    <div className='flex space-x-4'>
      {socialLinks.map((social:any, index:any) => (
        <a key={index} href={social.link} target='_blank' rel='noopener noreferrer'>
          <img
            src={social.icon}
            alt={`${social.name} icon`}
            className='w-8 h-8 object-contain'
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

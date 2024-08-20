import React from 'react';
import googleplayBadge from "../assests/googleBadge.png";
import appleBadge from "../assests/appleBadge.png";
import SocialIcons from './SocialIcons';
import { mentorData } from '../constant';
import logoIcon from '../assests/logoIcon.png'
import govermentIcon from '../assests/goverment.jpg'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 px-6 py-12 lg:px-28 lg:py-16">
        {/* First Column */}
        <div className="md:col-span-1">
          <div className="text-center md:text-left flex flex-col items-center md:items-start mb-8 md:mb-4">
            <img src={logoIcon} alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold mt-4 text-purple-800">E-NEST</span>
            <span className='my-4 text-center md:text-left'>Empowering Agri <br /> and food technology </span>
          </div>
          <div className="mb-8 md:mb-4">
            <h3 className="text-lg font-semibold text-purple-800">Contact with us</h3>
            <p>Email: <a href="mailto:example@example.com" className="hover:text-blue-600">example@example.com</a></p>
            <p>Talk to a Consultant: <a href="tel:+1234567890" className="hover:text-blue-600">+1 234 567 890</a></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-purple-800">Address</h3>
            <p><a href="https://goo.gl/maps/example" className="hover:text-blue-600">Address link</a></p>
          </div>
        </div>

        {/* Second Column */}
        <div className="md:col-span-3 flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 md:mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-800">Quick Links</h3>
              <ul className='space-y-2'>
                <li><a href="#" className="hover:text-blue-600">Program</a></li>
                <li><a href="#" className="hover:text-blue-600">Tech Series</a></li>
                <li><a href="#" className="hover:text-blue-600">Skull Connect</a></li>
                <li><a href="#" className="hover:text-blue-600">Expert Connect</a></li>
                <li><a href="#" className="hover:text-blue-600">Study Abroad</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-800">Company</h3>
              <ul className='space-y-2'>
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Why Choose Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Policies</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-800">Security</h3>
              <ul className='space-y-2'>
                <li><a href="#" className="hover:text-blue-600">Report</a></li>
                <li><a href="#" className="hover:text-blue-600">Trademark Notice</a></li>
                <li><a href="#" className="hover:text-blue-600">Advertise</a></li>
                <li><a href="#" className="hover:text-blue-600">Help & Support</a></li>
              </ul>
            </div>
          </div>
          <div className='mx-auto mt-auto'>
            <div className="flex space-x-4 items-center justify-center md:justify-start">
              <a href="#">
                <img src={googleplayBadge} alt="Google Play" className="w-36 h-12 md:w-52 md:h-20" />
              </a>
              <a href="#">
                <img src={appleBadge} alt="App Store" className="w-36 h-12 md:w-44 md:h-14" />
              </a>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="md:col-span-1 flex flex-col justify-between">
          <div className="mb-8 md:mb-4">
            <h3 className="text-lg font-semibold mb-2">Incubated by</h3>
            <img src={govermentIcon} alt="Government MSME" className="h-16 mr-2" />
            <span>MSME</span>
            <h2>IITMA</h2>
          </div>
          <div className="mt-auto">
            <h3 className="text-lg font-semibold mb-2">Let's get social:</h3>
            <SocialIcons socialLinks={mentorData.social} />
          </div>
        </div>
      </div>
      <div className='w-full text-center p-2 bg-purple-600 text-white'>
        {`Copyright \u00A9 AgriVision4U Pvt. Ltd. 2024`}
      </div>
    </footer>
  );
};

export default Footer;

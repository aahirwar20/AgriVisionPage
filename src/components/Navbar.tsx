import React, { useState } from 'react';
import logoIcon from '../assests/logoIcon.png'; // Replace with your logo icon path
import profileImage from '../assests/profileImage.png'; // Replace with your profile image path
import programIcon from '../assests/program.png';
import skillIcon from '../assests/skill.png';
import testIcon from '../assests/test.png';
import groupIcon from '../assests/group.png';
import arrowDownIcon from '../assests/arrowDown.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="flex items-center justify-between mx-4 md:mx-8 lg:mx-32">
        {/* Start: Logo and Name */}
        <div className="flex items-center">
          <img src={logoIcon} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-purple-800">E-Nest</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/home" className="flex items-center text-gray-600 hover:text-blue-500">
            <img src={programIcon} alt="Program" className="h-6 w-6 mr-2" />
            Program
          </a>
          <a href="/profile" className="flex items-center text-gray-600 hover:text-blue-500">
            <img src={testIcon} alt="Test Series" className="h-6 w-6 mr-2" />
            Test Series
          </a>
          <a href="/settings" className="flex items-center text-gray-600 hover:text-blue-500">
            <img src={skillIcon} alt="Skill Connect" className="h-6 w-6 mr-2" />
            Skill Connect
          </a>
          <a href="/settings" className="flex items-center text-gray-600 hover:text-blue-500">
            <img src={groupIcon} alt="Expert Connect" className="h-6 w-6 mr-2" />
            Expert Connect
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-blue-500"
            onClick={toggleDropdown}
          >
            More
            <img src={arrowDownIcon} alt="Arrow Down" className="h-6 w-6 ml-1" />
          </a>
        </div>

        {/* Mobile and Tablet Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleDropdown} className="text-gray-600 hover:text-blue-500">
            <img src={arrowDownIcon} alt="Menu" className="h-6 w-6" />
          </button>
        </div>

        {/* End: Profile Image */}
        <div className="flex items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="h-10 w-10 rounded-full border-2 border-gray-300"
          />
        </div>
      </div>

      {/* Dropdown Menu for Mobile and Tablet View */}
      {isDropdownOpen && (
        <div className="lg:hidden bg-white shadow-lg p-4 mt-2">
          <a href="/home" className="block text-gray-600 hover:text-blue-500 mb-2">
            <img src={programIcon} alt="Program" className="h-6 w-6 inline-block mr-2" />
            Program
          </a>
          <a href="/profile" className="block text-gray-600 hover:text-blue-500 mb-2">
            <img src={testIcon} alt="Test Series" className="h-6 w-6 inline-block mr-2" />
            Test Series
          </a>
          <a href="/settings" className="block text-gray-600 hover:text-blue-500 mb-2">
            <img src={skillIcon} alt="Skill Connect" className="h-6 w-6 inline-block mr-2" />
            Skill Connect
          </a>
          <a href="/settings" className="block text-gray-600 hover:text-blue-500 mb-2">
            <img src={groupIcon} alt="Expert Connect" className="h-6 w-6 inline-block mr-2" />
            Expert Connect
          </a>
          <a href="/settings" className="block text-gray-600 hover:text-blue-500">
            <img src={arrowDownIcon} alt="More" className="h-6 w-6 inline-block mr-2" />
            More
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

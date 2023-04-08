import {BsFillGearFill} from 'react-icons/bs';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link to="/" className="flex items-center text-white text-2xl md:text-4xl">
            <BsFillGearFill />
            &nbsp; Gear Train Website
          </Link>
        </div>
        <div className="sm:hidden">
          <button type="button" className="text-gray-500 hover:text-white focus:text-white focus:outline-none" onClick={toggleMenu}>
            <FaBars className="h-6 w-6 fill-current" />
          </button>
        </div>
      </div>
      <nav className={`${isOpen ? "block" : "hidden"} px-2 pt-2 pb-4 sm:flex sm:p-0`}>
      <Link to="/details" className="block px-2 mr-5 text-3xl py-1 text-white rounded hover:bg-gray-700">What is Gear Train?</Link>
        <Link to="/about" className="block px-2 mr-5 text-3xl py-1 text-white rounded hover:bg-gray-700">About</Link>
        <Link to="/contact" className="block text-3xl mr-5 px-2 py-1 text-white rounded hover:bg-gray-700">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

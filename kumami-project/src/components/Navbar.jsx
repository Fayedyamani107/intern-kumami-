import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ['Home', 'Games', 'About'];

  return (
    <nav className="w-full bg-[#000000] text-white px-6 md:px-16 py-4 shadow-md fixed top-0 z-50">
      <div className="flex justify-between items-center">
        
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
          Kumami
        </h1>

        
        <ul className="hidden md:flex gap-8 font-medium text-white">
          {menuItems.map((item, i) => (
            <li key={i} className="hover:text-primary cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>

        {}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

     
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-center font-medium">
          {menuItems.map((item, i) => (
            <li key={i} className="hover:text-primary cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

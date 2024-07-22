// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">MyPortfolio</a>
        <div className="space-x-4">
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

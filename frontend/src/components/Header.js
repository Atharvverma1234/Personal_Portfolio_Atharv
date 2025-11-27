import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Your Name</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600">About</a>
            <a href="#projects" className="block text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#skills" className="block text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 font-medium mb-6">
              <span className={`w-2 h-2 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full mr-2 animate-pulse`}></span>
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gray-800 dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gipsy Danger
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Full Stack Developer passionate about creating amazing digital experiences. 
              I build modern web applications with clean code and beautiful designs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition duration-300 transform hover:scale-105">
                View Projects
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                Contact Me
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 transform hover:scale-110"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Profile */}
          <div className="relative">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
              {/* Profile Image Container */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-20 dark:opacity-30"></div>
              <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 dark:bg-yellow-500 rounded-full animate-float opacity-20 dark:opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 dark:bg-green-500 rounded-full animate-float opacity-20 dark:opacity-30" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Tech Stack Floating */}
            <div className="absolute -bottom-8 left-10 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 animate-bounce-slow">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-lg">⚛️</span>
                </div>
                <span className="font-semibold text-gray-800 dark:text-white">Kaiju Killer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
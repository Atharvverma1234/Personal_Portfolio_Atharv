import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            View My Work
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
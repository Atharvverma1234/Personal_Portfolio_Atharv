import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gray-800">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Full Stack Developer passionate about creating amazing digital experiences. 
              I build modern web applications with clean code and beautiful designs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition duration-300 transform hover:scale-105">
                View Projects
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300">
                Contact Me
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition duration-300 transform hover:scale-110"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Profile or Illustration */}
          <div className="relative">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
              {/* Profile Image Container */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Tech Stack Floating */}
            <div className="absolute -bottom-8 left-10 bg-white shadow-xl rounded-2xl p-4 animate-bounce-slow">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">⚛️</span>
                </div>
                <span className="font-semibold">React Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate full-stack developer with expertise in the MERN stack. 
              I love creating beautiful, functional web applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With experience in both frontend and backend development, I bring ideas to life 
              through clean code and modern design principles.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800">Frontend</h3>
                <p className="text-gray-600">React, JavaScript, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Backend</h3>
                <p className="text-gray-600">Node.js, Express, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
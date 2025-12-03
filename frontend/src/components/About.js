import React from 'react';

const About = () => {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Availability' }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8">
                  <img 
                    src="/profile.jpg" 
                    alt="Profile" 
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-white shadow-2xl rounded-2xl p-4 animate-pulse-slow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-sm text-gray-600">Years Exp</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in creating beautiful, functional applications that provide exceptional 
              user experiences.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a strong foundation in both frontend and backend development, I enjoy turning 
              complex problems into simple, beautiful designs. When I'm not coding, you can find 
              me exploring new technologies, contributing to open-source projects, or sharing 
              knowledge with the developer community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition duration-300"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition duration-300">
                Download CV
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300">
                View Skills
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
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
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-4 animate-pulse-slow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in creating beautiful, functional applications that provide exceptional 
              user experiences.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
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
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition duration-300">
                Download CV
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-medium hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
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
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tags: ["React", "Express", "Socket.io", "MongoDB"],
      image: "/project2.jpg",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Some of my recent work that I'm proud of
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl text-white opacity-20">💻</span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex-1 text-center border-2 border-gray-300 text-gray-700 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition duration-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.live}
                    className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
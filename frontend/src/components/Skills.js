import React from 'react';

const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-600 border-blue-200" },
    { name: "JavaScript", icon: "🟨", color: "bg-yellow-100 text-yellow-600 border-yellow-200" },
    { name: "TypeScript", icon: "🔷", color: "bg-blue-100 text-blue-600 border-blue-200" },
    { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-600 border-green-200" },
    { name: "Express.js", icon: "🚂", color: "bg-gray-100 text-gray-600 border-gray-200" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-100 text-green-600 border-green-200" },
    { name: "Tailwind CSS", icon: "💨", color: "bg-cyan-100 text-cyan-600 border-cyan-200" },
    { name: "HTML5", icon: "🌐", color: "bg-orange-100 text-orange-600 border-orange-200" },
    { name: "CSS3", icon: "🎨", color: "bg-blue-100 text-blue-600 border-blue-200" },
    { name: "Git & GitHub", icon: "📚", color: "bg-gray-100 text-gray-600 border-gray-200" },
    { name: "REST APIs", icon: "🔗", color: "bg-indigo-100 text-indigo-600 border-indigo-200" },
    { name: "Redux", icon: "🔄", color: "bg-purple-100 text-purple-600 border-purple-200" },
    { name: "Next.js", icon: "⚡", color: "bg-black text-white border-gray-800" },
    { name: "Postman", icon: "📬", color: "bg-orange-100 text-orange-600 border-orange-200" },
    { name: "Figma", icon: "🎯", color: "bg-purple-100 text-purple-600 border-purple-200" },
    { name: "AWS", icon: "☁️", color: "bg-yellow-100 text-yellow-600 border-yellow-200" },
    { name: "Docker", icon: "🐳", color: "bg-blue-100 text-blue-600 border-blue-200" },
    { name: "JWT", icon: "🔐", color: "bg-red-100 text-red-600 border-red-200" }
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Skills & Technologies</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My ever-growing toolkit for building amazing digital experiences
        </p>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden py-8 group">
          {/* Main Carousel - Left to Right */}
          <div className="flex mb-8 animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 transform hover:scale-110 transition duration-300"
              >
                <div className={`flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 font-semibold shadow-lg hover:shadow-2xl transition duration-300 ${skill.color}`}>
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg whitespace-nowrap">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Reverse Carousel - Right to Left */}
          <div className="flex animate-infinite-scroll-reverse group-hover:[animation-play-state:paused]">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index + skills.length}
                className="flex-shrink-0 mx-2 transform hover:scale-110 transition duration-300"
              >
                <div className={`flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 font-semibold shadow-lg hover:shadow-2xl transition duration-300 ${skill.color} opacity-90`}>
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg whitespace-nowrap">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Skill Progression */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-gray-100 rounded-2xl px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">18+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">3+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600">Projects Built</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${skills.length}));
          }
        }
        @keyframes infinite-scroll-reverse {
          0% {
            transform: translateX(calc(-250px * ${skills.length}));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll-reverse {
          animation: infinite-scroll-reverse 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
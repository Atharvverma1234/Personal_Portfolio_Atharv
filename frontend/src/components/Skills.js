import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const carouselRef = useRef(null);

  const skillSets = [
    { name: "React", icon: "⚛️", category: "frontend" },
    { name: "JavaScript", icon: "🟨", category: "frontend" },
    { name: "TypeScript", icon: "🔷", category: "frontend" },
    { name: "Next.js", icon: "⚡", category: "frontend" },
    { name: "Tailwind", icon: "💨", category: "frontend" },
    { name: "Node.js", icon: "🟢", category: "backend" },
    { name: "Express", icon: "🚂", category: "backend" },
    { name: "MongoDB", icon: "🍃", category: "backend" },
    { name: "GraphQL", icon: "📊", category: "backend" },
    { name: "PostgreSQL", icon: "🐘", category: "backend" },
    { name: "Git", icon: "📚", category: "tools" },
    { name: "Docker", icon: "🐳", category: "tools" },
    { name: "AWS", icon: "☁️", category: "tools" },
    { name: "Figma", icon: "🎯", category: "design" },
    { name: "Jest", icon: "🧪", category: "testing" },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let position = 0;
    const speed = 0.8; // Adjust speed here

    const animate = () => {
      position -= speed;
      if (Math.abs(position) >= carousel.scrollWidth / 2) {
        position = 0;
      }
      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tech <span className="text-blue-600">Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden py-8">
            <div 
              ref={carouselRef}
              className="flex space-x-8"
              style={{ willChange: 'transform' }}
            >
              {[...skillSets, ...skillSets].map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-110 hover:-translate-y-2">
                    <div className="text-4xl mb-3 group-hover:scale-125 transition duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Frontend", count: 5, color: "bg-blue-500" },
            { title: "Backend", count: 5, color: "bg-green-500" },
            { title: "Tools", count: 3, color: "bg-purple-500" },
            { title: "Others", count: 2, color: "bg-orange-500" },
          ].map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800">{category.title}</h3>
                <span className={`w-3 h-3 ${category.color} rounded-full`}></span>
              </div>
              <div className="text-3xl font-bold text-gray-800">{category.count}+</div>
              <div className="text-sm text-gray-500">Technologies</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
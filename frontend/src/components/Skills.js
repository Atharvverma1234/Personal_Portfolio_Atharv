import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "TypeScript", level: 75 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "REST APIs", level: 88 },
        { name: "JWT Authentication", level: 80 },
        { name: "Mongoose", level: 75 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 70 },
        { name: "AWS/Heroku", level: 65 },
        { name: "Docker", level: 60 }
      ]
    }
  ];

  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-600 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Skills & Technologies</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex}
                    skill={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Other Proficiencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Responsive Design",
              "Agile Methodology",
              "Problem Solving",
              "Team Collaboration",
              "Code Review",
              "Testing & Debugging",
              "Performance Optimization",
              "UI/UX Principles"
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-blue-600 mb-2">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
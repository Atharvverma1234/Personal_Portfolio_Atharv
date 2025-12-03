import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      year: "2022 - Present",
      company: "Google",
      role: "Senior Full Stack Developer",
      location: "Mountain View, CA",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Led microservices architecture serving 10M+ users",
        "Reduced page load time by 60% through optimization",
        "Mentored 5 junior developers",
        "Improved deployment pipeline efficiency"
      ],
      skills: ["React", "Node.js", "Kubernetes", "GraphQL", "TypeScript"],
      icon: "🔍"
    },
    {
      id: 2,
      year: "2020 - 2022",
      company: "Microsoft",
      role: "Frontend Engineer",
      location: "Redmond, WA",
      description: "Developed user interfaces for enterprise applications and improved performance.",
      achievements: [
        "Built React components for 5M+ active users",
        "Optimized bundle size by 45%",
        "Reduced bug reports by 70%",
        "Implemented comprehensive testing"
      ],
      skills: ["TypeScript", "React", "Azure", "Jest", "Webpack"],
      icon: "🪟"
    },
    {
      id: 3,
      year: "2018 - 2020",
      company: "Amazon",
      role: "Software Engineer",
      location: "Seattle, WA",
      description: "Built backend systems and implemented real-time features for e-commerce.",
      achievements: [
        "Handled 1M+ daily requests",
        "Reduced server costs by 30%",
        "Built real-time notification system",
        "Improved system reliability"
      ],
      skills: ["AWS", "Node.js", "MongoDB", "Docker", "Redis"],
      icon: "📦"
    },
    {
      id: 4,
      year: "2017 - Present",
      company: "Freelance",
      role: "Full Stack Developer",
      location: "Remote",
      description: "Working with various clients to build custom web solutions and applications.",
      achievements: [
        "30+ projects completed",
        "100% client satisfaction",
        "International clients",
        "Diverse industry experience"
      ],
      skills: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind"],
      icon: "💼"
    }
  ];

  const stats = [
    { value: "5+", label: "Years Experience", icon: "📅" },
    { value: "50+", label: "Projects Completed", icon: "🚀" },
    { value: "100%", label: "Client Satisfaction", icon: "⭐" },
    { value: "10M+", label: "Users Impacted", icon: "👥" }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Career <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional timeline and key accomplishments
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center shadow-lg">
                  <span className="text-lg">{exp.icon}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-left' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition duration-300">
                    {/* Year Badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full font-medium mb-4 ${
                      index === 0 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    }`}>
                      {exp.year}
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.role}</h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-3">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-5">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-5">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, sIndex) => (
                          <span 
                            key={sIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-2/12"></div>

                {/* Empty div for alignment */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
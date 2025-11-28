import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      organization: "TechCrunch Disrupt",
      date: "2023",
      description: "Won first place in a 48-hour hackathon by building a real-time collaborative coding platform with 500+ active users.",
      icon: "🏆",
      category: "Competition",
      impact: "Led to a startup acquisition offer"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2022-Present",
      description: "Contributed to 10+ open source projects with 50+ merged pull requests. Maintainer of a popular React component library.",
      icon: "💻",
      category: "Community",
      impact: "5,000+ weekly downloads on npm"
    },
    {
      id: 3,
      title: "Tech Conference Speaker",
      organization: "React Summit",
      date: "2023",
      description: "Spoke about 'Modern State Management in React' to an audience of 500+ developers. Received 95% positive feedback.",
      icon: "🎤",
      category: "Speaking",
      impact: "Inspired 50+ developers to adopt new patterns"
    },
    {
      id: 4,
      title: "Mentorship Program Lead",
      organization: "Women Who Code",
      date: "2022-2023",
      description: "Mentored 25+ aspiring developers through a 6-month program. 80% of mentees secured tech jobs within 3 months.",
      icon: "👥",
      category: "Mentorship",
      impact: "Helped increase diversity in tech"
    },
    {
      id: 5,
      title: "Performance Optimization Award",
      organization: "Company Internal",
      date: "2022",
      description: "Reduced application load time by 70% and improved Core Web Vitals scores from 'Poor' to 'Good' across all metrics.",
      icon: "⚡",
      category: "Technical",
      impact: "Improved user retention by 25%"
    },
    {
      id: 6,
      title: "Publication in Tech Journal",
      organization: "JavaScript Weekly",
      date: "2021",
      description: "Published research paper on 'Advanced React Patterns for Scalable Applications' that was featured in industry newsletters.",
      icon: "📚",
      category: "Writing",
      impact: "10,000+ reads across platforms"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Achievements & Awards</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Recognitions and milestones that showcase my dedication and impact in the tech community.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 border-l-4 border-blue-500"
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className="text-3xl flex-shrink-0">
                  {achievement.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mt-1 sm:mt-0">
                      {achievement.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <span>{achievement.organization}</span>
                    <span className="mx-2">•</span>
                    <span>{achievement.date}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {achievement.description}
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center text-green-800">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-medium">Impact: {achievement.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Create Something Amazing Together</h3>
            <p className="mb-6 opacity-90">
              Ready to bring your ideas to life? I'm always excited to take on new challenges and create impactful solutions.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
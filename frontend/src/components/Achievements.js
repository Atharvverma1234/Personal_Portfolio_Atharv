import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      organization: "TechCrunch Disrupt",
      date: "2023",
      icon: "🏆",
      description: "Won first place in a 48-hour hackathon by building a real-time collaborative platform.",
      metrics: "500+ Active Users"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2022-Present",
      icon: "💻",
      description: "Contributed to 10+ open source projects with 50+ merged pull requests.",
      metrics: "5,000+ Weekly Downloads"
    },
    {
      id: 3,
      title: "Conference Speaker",
      organization: "React Summit",
      date: "2023",
      icon: "🎤",
      description: "Spoke about modern state management to 500+ developers.",
      metrics: "95% Positive Feedback"
    },
    {
      id: 4,
      title: "Mentorship Program Lead",
      organization: "Women Who Code",
      date: "2022-2023",
      icon: "👥",
      description: "Mentored 25+ aspiring developers through a 6-month program.",
      metrics: "80% Job Placement"
    }
  ];

  const stats = [
    { value: "10+", label: "Projects", color: "text-blue-600 dark:text-blue-400" },
    { value: "50+", label: "Happy Clients", color: "text-green-600 dark:text-green-400" },
    { value: "99%", label: "Success Rate", color: "text-purple-600 dark:text-purple-400" },
    { value: "5+", label: "Years Experience", color: "text-orange-600 dark:text-orange-400" }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">Achievements</span> & Awards
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognitions and milestones in my professional journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">{achievement.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{achievement.title}</h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{achievement.organization}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{achievement.description}</p>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Impact</div>
                    <div className="font-semibold text-gray-800 dark:text-white">{achievement.metrics}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
            <p className="mb-6 opacity-90">
              Ready to turn your ideas into reality? Let's collaborate on your next project.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition duration-300 transform hover:scale-105"
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
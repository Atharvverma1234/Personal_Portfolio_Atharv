import React from 'react';

const Volunteering = () => {
  const volunteerCards = [
    {
      id: 1,
      role: "Tech Mentor",
      organization: "Girls Who Code",
      timeframe: "2021 - Present",
      description: "Mentoring young women in programming and tech careers",
      icon: "👩‍💻",
      color: "bg-pink-100 dark:bg-pink-900/30 border-pink-200 dark:border-pink-800"
    },
    {
      id: 2,
      role: "Open Source Contributor",
      organization: "freeCodeCamp",
      timeframe: "2020 - Present",
      description: "Contributing to open-source educational platform",
      icon: "🌐",
      color: "bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800"
    },
    {
      id: 3,
      role: "Disaster Relief Developer",
      organization: "Red Cross",
      timeframe: "2022",
      description: "Built emergency response tools for disaster coordination",
      icon: "🚨",
      color: "bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800"
    },
    {
      id: 4,
      role: "Youth Coding Instructor",
      organization: "Community Center",
      timeframe: "2019 - 2021",
      description: "Teaching programming basics to underprivileged youth",
      icon: "🎓",
      color: "bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800"
    }
  ];

  return (
    <section id="volunteering" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Community <span className="text-blue-600 dark:text-blue-400">Service</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Volunteer initiatives and social contributions
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {volunteerCards.map((card) => (
            <div 
              key={card.id}
              className={`rounded-xl border ${card.color} p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{card.icon}</div>
              
              {/* Role */}
              <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-2">
                {card.role}
              </h3>
              
              {/* Organization */}
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                {card.organization}
              </p>
              
              {/* Timeframe */}
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {card.timeframe}
              </div>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full">
            <span className="text-gray-700 dark:text-gray-300">
              <span className="font-bold">4</span> volunteer roles
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-700 dark:text-gray-300">
              <span className="font-bold">3+</span> years active
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-700 dark:text-gray-300">
              <span className="font-bold">Community</span> focused
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
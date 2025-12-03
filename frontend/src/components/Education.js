import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      duration: "2020 - 2022",
      gpa: "3.9/4.0",
      description: "Specialized in Artificial Intelligence and Machine Learning.",
      logo: "🎓",
      highlight: true
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "MIT",
      location: "Cambridge, MA",
      duration: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Focused on Software Engineering and Web Technologies.",
      logo: "📚"
    }
  ];

  const courses = [
    "Advanced Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Distributed Systems",
    "Data Structures & Algorithms",
    "Web Development",
    "Database Systems"
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">Education</span> & Learning
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={edu.id}
                className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 ${
                  edu.highlight ? 'border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">{edu.logo}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{edu.degree}</h3>
                    <div className="flex items-center flex-wrap gap-2 mb-3">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{edu.institution}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 dark:text-gray-400">{edu.location}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 dark:text-gray-400">{edu.duration}</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4">
                      GPA: {edu.gpa}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Courses & Skills */}
          <div className="space-y-8">
            {/* Key Courses */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3">📖</span> Key Courses
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {courses.map((course, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-xl text-sm font-medium transition duration-300 transform hover:scale-105 cursor-default"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Journey */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="mb-6 opacity-90">
                "Education is not preparation for life; education is life itself."
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Daily coding practice</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Weekly tech articles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Monthly online courses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
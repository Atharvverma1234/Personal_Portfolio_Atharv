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
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Neural Networks for Natural Language Processing'.",
      courses: [
        "Advanced Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Distributed Systems"
      ],
      achievements: [
        "Graduated with Distinction",
        "Recipient of Dean's Scholarship",
        "Published research in IEEE Journal"
      ],
      logo: "/education/stanford-logo.png",
      website: "https://stanford.edu"
    },
    {
      id: 2,
      degree: "B. Tech, EEE",
      institution: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      duration: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Focused on Software Engineering and Web Technologies. Led the University Coding Club and organized multiple hackathons.",
      courses: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Web Development",
        "Software Engineering",
        "Computer Networks"
      ],
      achievements: [
        "Summa Cum Laude",
        "President of Coding Club",
        "Google Developer Student Club Lead"
      ],
      logo: "/education/mit-logo.png",
      website: "https://mit.edu"
    }
  ];

  const onlineCourses = [
    {
      title: "Advanced React & Redux",
      platform: "Udemy",
      duration: "40 hours",
      completed: "2023",
      certificate: "https://udemy.com/certificate/uc-xyz123"
    },
    {
      title: "AWS Solutions Architect",
      platform: "Coursera",
      duration: "60 hours",
      completed: "2023",
      certificate: "https://coursera.org/verify/abc456"
    },
    {
      title: "MongoDB University",
      platform: "MongoDB",
      duration: "35 hours",
      completed: "2022",
      certificate: "https://university.mongodb.com/certification"
    },
    {
      title: "Docker & Kubernetes",
      platform: "Pluralsight",
      duration: "25 hours",
      completed: "2022",
      certificate: "https://pluralsight.com/certificate/xyz789"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Education & Learning</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My academic journey and continuous learning path in technology and computer science.
        </p>

        {/* Two Column Education Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {educationData.map((edu) => (
            <div 
              key={edu.id}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200"
            >
              {/* Header with Logo */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <a 
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition duration-300 text-sm"
                    >
                      {edu.institution}
                    </a>
                  </div>
                </div>
              </div>

              {/* Education Details */}
              <div className="p-6">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{edu.gpa}</div>
                    <div className="text-sm text-gray-600">GPA Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">{edu.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {edu.location}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Courses */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Key Courses
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {edu.courses.map((course, index) => (
                      <span 
                        key={index}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm border border-blue-100"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
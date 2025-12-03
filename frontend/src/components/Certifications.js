import React, { useState } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "June 2023",
      icon: "☁️",
      color: "from-orange-500 to-yellow-500",
      skills: ["Cloud Architecture", "AWS Services", "Solution Design"]
    },
    {
      id: 2,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "April 2023",
      icon: "🍃",
      color: "from-green-500 to-emerald-500",
      skills: ["Database Design", "NoSQL", "Aggregation"]
    },
    {
      id: 3,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "March 2023",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 4,
      title: "Node.js Certified Developer",
      issuer: "OpenJS Foundation",
      date: "February 2023",
      icon: "🟢",
      color: "from-green-600 to-green-400",
      skills: ["Backend", "API Design", "JavaScript"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Professional <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Validated expertise through industry-recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className={`h-3 bg-gradient-to-r ${cert.color}`}></div>
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                    <span className="text-3xl">{cert.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex items-center flex-wrap gap-2 mb-4">
                      <span className="font-medium text-gray-600">{cert.issuer}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{cert.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Pass Rate</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-gray-600">Years Active</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
            <div className="text-gray-600">Providers</div>
          </div>
        </div>

        {/* Modal for Certificate Details */}
        {selectedCert && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-2xl w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedCert.title}</h3>
                  <p className="text-gray-600">{selectedCert.issuer}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">Issued:</span>
                  {selectedCert.date}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition duration-300">
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
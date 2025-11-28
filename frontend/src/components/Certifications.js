import React, { useState } from 'react';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "June 2023",
      image: "/certificates/aws-saa.jpg",
      credentialUrl: "https://www.credly.com/users/yourname/badges",
      skills: ["Cloud Architecture", "AWS Services", "Solution Design"]
    },
    {
      id: 2,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "April 2023",
      image: "/certificates/mongodb-cert.jpg",
      credentialUrl: "https://university.mongodb.com/certification/yourname",
      skills: ["Database Design", "NoSQL", "Aggregation Framework"]
    },
    {
      id: 3,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "March 2023",
      image: "/certificates/react-cert.jpg",
      credentialUrl: "https://coursera.org/share/yourcertificate",
      skills: ["React", "JavaScript", "Frontend Development"]
    },
    {
      id: 4,
      title: "Node.js Certified Developer",
      issuer: "OpenJS Foundation",
      date: "February 2023",
      image: "/certificates/nodejs-cert.jpg",
      credentialUrl: "https://openjsf.org/certification",
      skills: ["Backend Development", "API Design", "JavaScript"]
    },
    {
      id: 5,
      title: "Google Cloud Associate",
      issuer: "Google Cloud",
      date: "January 2023",
      image: "/certificates/gcp-cert.jpg",
      credentialUrl: "https://cloud.google.com/certification",
      skills: ["Cloud Computing", "GCP Services", "Infrastructure"]
    },
    {
      id: 6,
      title: "Docker Certified Associate",
      issuer: "Docker",
      date: "December 2022",
      image: "/certificates/docker-cert.jpg",
      credentialUrl: "https://www.docker.com/certification",
      skills: ["Containerization", "DevOps", "Docker"]
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Certifications</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Professional certifications that validate my expertise and commitment to continuous learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100"
            >
              {/* Certificate Image */}
              <div 
                className="h-48 bg-gray-200 cursor-pointer relative overflow-hidden"
                onClick={() => openModal(cert.image)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 px-3 py-1 rounded">
                    Click to view
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-4">Issued: {cert.date}</p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verify Button */}
                <a 
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Verify Credential
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
              >
                ✕
              </button>
              <img 
                src={selectedImage} 
                alt="Certificate" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
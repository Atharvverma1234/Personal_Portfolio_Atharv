import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Your City, Country",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition duration-300">
                      <span className="text-xl">{info.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">{info.title}</div>
                      <div className="text-gray-600 dark:text-gray-300">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">Available for opportunities</div>
                  <div className="opacity-90">Response time: Within 24 hours</div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition duration-300 text-gray-800 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition duration-300 text-gray-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition duration-300 resize-none text-gray-800 dark:text-white"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-xl ${
                  submitMessage.includes('Error') 
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' 
                    : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
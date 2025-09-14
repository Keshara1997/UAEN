import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      details: [
        'Skills Development Training Institute',
        'UAE',
        'P.O. Box 12345'
      ],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: [
        '+971 XX XXX XXXX',
        '+971 XX XXX XXXX (Admissions)',
        '+971 XX XXX XXXX (General)'
      ],
      color: 'from-green-600 to-green-700'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: [
        'info@sdtiedu.ae',
        'admissions@sdtiedu.ae',
        'support@sdtiedu.ae'
      ],
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: 'fas fa-clock',
      title: 'Office Hours',
      details: [
        'Sunday - Thursday: 8:00 AM - 6:00 PM',
        'Friday: 9:00 AM - 1:00 PM',
        'Saturday: Closed'
      ],
      color: 'from-orange-600 to-orange-700'
    }
  ];

  const departments = [
    {
      name: 'Admissions Office',
      email: 'admissions@sdtiedu.ae',
      phone: '+971 XX XXX XXXX',
      description: 'For inquiries about programs, applications, and enrollment.'
    },
    {
      name: 'Student Services',
      email: 'studentservices@sdtiedu.ae',
      phone: '+971 XX XXX XXXX',
      description: 'For student support, counseling, and campus life inquiries.'
    },
    {
      name: 'Academic Affairs',
      email: 'academic@sdtiedu.ae',
      phone: '+971 XX XXX XXXX',
      description: 'For academic programs, curriculum, and faculty-related questions.'
    },
    {
      name: 'Career Services',
      email: 'careers@sdtiedu.ae',
      phone: '+971 XX XXX XXXX',
      description: 'For job placement, internships, and career guidance.'
    }
  ];

  const inquiryTypes = [
    'General Information',
    'Admissions Inquiry',
    'Program Information',
    'Student Services',
    'Career Services',
    'Partnership Opportunities',
    'Media Inquiry',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for any inquiries, questions, or support. 
            We're here to help you with your educational journey.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl card-hover">
                <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${info.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 dark:text-gray-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Our Location
                </h3>
                <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-map-marked-alt text-4xl text-gray-400 dark:text-gray-500 mb-4"></i>
                    <p className="text-gray-600 dark:text-gray-300">Interactive Map</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Skills Development Training Institute</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p><strong>Address:</strong> Skills Development Training Institute, UAE</p>
                  <p><strong>Nearest Metro:</strong> Metro Station Name</p>
                  <p><strong>Parking:</strong> Free parking available on campus</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-phone text-blue-600 mr-4"></i>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Call Now</p>
                      <p className="text-gray-600 dark:text-gray-300">+971 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-blue-600 mr-4"></i>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email Us</p>
                      <p className="text-gray-600 dark:text-gray-300">info@sdtiedu.ae</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock text-blue-600 mr-4"></i>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Office Hours</p>
                      <p className="text-gray-600 dark:text-gray-300">Sun-Thu: 8AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Contact by Department
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl card-hover">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {dept.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {dept.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-blue-600 mr-3"></i>
                    <span className="text-gray-700 dark:text-gray-300">{dept.email}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-blue-600 mr-3"></i>
                    <span className="text-gray-700 dark:text-gray-300">{dept.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Follow Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Stay connected with us on social media for the latest updates and news.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
              <i className="fab fa-facebook-f text-white text-xl"></i>
            </a>
            <a href="#" className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
              <i className="fab fa-twitter text-white text-xl"></i>
            </a>
            <a href="#" className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200">
              <i className="fab fa-linkedin-in text-white text-xl"></i>
            </a>
            <a href="#" className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200">
              <i className="fab fa-instagram text-white text-xl"></i>
            </a>
            <a href="#" className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200">
              <i className="fab fa-youtube text-white text-xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                How do I apply for admission?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can apply online through our admissions portal or visit our campus. 
                Complete the application form and submit required documents.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                What are the admission requirements?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Requirements vary by program. Generally, you need a high school diploma, 
                English proficiency, and program-specific prerequisites.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Do you offer financial aid?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer various financial aid options including scholarships, 
                payment plans, and student loans. Contact our financial aid office for details.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Can I visit the campus?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! We offer campus tours Monday through Thursday. 
                Contact us to schedule your visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

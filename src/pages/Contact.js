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
      color: 'from-[#111166] to-[#2a2a88]'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: [
        '+971 XX XXX XXXX',
        '+971 XX XXX XXXX (Admissions)',
        '+971 XX XXX XXXX (General)'
      ],
      color: 'from-[#b4b1f8] to-[#8a85f5]'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: [
        'info@sdtiedu.ae',
        'admissions@sdtiedu.ae',
        'support@sdtiedu.ae'
      ],
      color: 'from-[#ffa4ff] to-[#ff7bff]'
    },
    {
      icon: 'fas fa-clock',
      title: 'Office Hours',
      details: [
        'Sunday - Thursday: 8:00 AM - 6:00 PM',
        'Friday: 9:00 AM - 1:00 PM',
        'Saturday: Closed'
      ],
      color: 'from-[#111166] to-[#b4b1f8]'
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
      <section className="gradient-bg py-20 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#111166]/20 rounded-full blur-lg float-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-[#ffa4ff]/10 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Get In Touch
          </div>
          <h1 className="text-display text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for any inquiries, questions, or support. 
            We're here to help you with your educational journey.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#fff0ff] dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-phone-alt mr-2"></i>
              Contact Information
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="modern-card text-center p-8 group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-modern`}>
                  <i className={`${info.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-heading text-xl text-gray-900 dark:text-[#fff0ff] mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 dark:text-[#85828d] text-sm">
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
      <section className="py-20 bg-gradient-to-br from-[#ffe3ff] via-[#fff0ff] to-[#ffe3ff] dark:from-[#000000] dark:via-[#073763] dark:to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="modern-card p-8 bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
              <h2 className="text-heading text-2xl text-gray-900 dark:text-[#fff0ff] mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-[#85828d] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="modern-input bg-[#fff0ff] dark:bg-[#4d5464] border border-[#b4b1f8] dark:border-[#073763] text-gray-900 dark:text-[#fff0ff]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-[#85828d] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="modern-input bg-[#fff0ff] dark:bg-[#4d5464] border border-[#b4b1f8] dark:border-[#073763] text-gray-900 dark:text-[#fff0ff]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-[#85828d] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="modern-input bg-[#fff0ff] dark:bg-[#4d5464] border border-[#b4b1f8] dark:border-[#073763] text-gray-900 dark:text-[#fff0ff]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-[#85828d] mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="modern-input bg-[#fff0ff] dark:bg-[#4d5464] border border-[#b4b1f8] dark:border-[#073763] text-gray-900 dark:text-[#fff0ff]"
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
                  <label className="block text-sm font-semibold text-gray-700 dark:text-[#85828d] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="modern-input bg-[#fff0ff] dark:bg-[#4d5464] border border-[#b4b1f8] dark:border-[#073763] text-gray-900 dark:text-[#fff0ff]"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-[#85828d] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="modern-input bg-[#fff0ff] dark:bg-[#4d5464] border border-[#b4b1f8] dark:border-[#073763] text-gray-900 dark:text-[#fff0ff]"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-br from-[#111166] to-[#2a2a88] hover:from-[#2a2a88] hover:to-[#111166] hover:-translate-y-1 hover:shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <i className="fas fa-paper-plane ml-2"></i>
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="modern-card p-8 bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <h3 className="text-heading text-xl text-gray-900 dark:text-[#fff0ff] mb-6">
                  Our Location
                </h3>
                <div className="h-64 bg-gray-200 dark:bg-[#4d5464] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-map-marked-alt text-4xl text-gray-400 dark:text-gray-500 mb-4"></i>
                    <p className="text-gray-600 dark:text-[#85828d]">Interactive Map</p>
                    <p className="text-sm text-gray-500 dark:text-[#67666e]">Skills Development Training Institute</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-[#85828d]">
                  <p><strong>Address:</strong> Skills Development Training Institute, UAE</p>
                  <p><strong>Nearest Metro:</strong> Metro Station Name</p>
                  <p><strong>Parking:</strong> Free parking available on campus</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="modern-card p-8 bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <h3 className="text-heading text-xl text-gray-900 dark:text-[#fff0ff] mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-phone text-[#111166] dark:text-[#ffa4ff] mr-4"></i>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-[#fff0ff]">Call Now</p>
                      <p className="text-gray-600 dark:text-[#85828d]">+971 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-[#111166] dark:text-[#ffa4ff] mr-4"></i>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-[#fff0ff]">Email Us</p>
                      <p className="text-gray-600 dark:text-[#85828d]">info@sdtiedu.ae</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock text-[#111166] dark:text-[#ffa4ff] mr-4"></i>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-[#fff0ff]">Office Hours</p>
                      <p className="text-gray-600 dark:text-[#85828d]">Sun-Thu: 8AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-[#fff0ff] dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#ffa4ff] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-building mr-2"></i>
              Department Contacts
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Contact by Department
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Reach out to specific departments for specialized assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="modern-card p-8 group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <h3 className="text-heading text-xl text-gray-900 dark:text-[#fff0ff] mb-4">
                  {dept.name}
                </h3>
                <p className="text-gray-600 dark:text-[#85828d] mb-6 leading-relaxed">
                  {dept.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-[#111166] dark:text-[#ffa4ff] mr-3"></i>
                    <span className="text-gray-700 dark:text-[#fff0ff]">{dept.email}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-[#111166] dark:text-[#ffa4ff] mr-3"></i>
                    <span className="text-gray-700 dark:text-[#fff0ff]">{dept.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-br from-[#ffe3ff] via-[#fff0ff] to-[#ffe3ff] dark:from-[#000000] dark:via-[#073763] dark:to-[#000000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
            <i className="fas fa-share-alt mr-2"></i>
            Follow Us
          </div>
          <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-8">
            Follow Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-[#85828d] mb-12">
            Stay connected with us on social media for the latest updates and news.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-16 h-16 bg-gradient-to-br from-[#111166] to-[#2a2a88] rounded-full flex items-center justify-center hover:from-[#2a2a88] hover:to-[#111166] transition-all duration-300 shadow-modern">
              <i className="fab fa-facebook-f text-white text-xl"></i>
            </a>
            <a href="#" className="w-16 h-16 bg-gradient-to-br from-[#b4b1f8] to-[#8a85f5] rounded-full flex items-center justify-center hover:from-[#8a85f5] hover:to-[#b4b1f8] transition-all duration-300 shadow-modern">
              <i className="fab fa-twitter text-white text-xl"></i>
            </a>
            <a href="#" className="w-16 h-16 bg-gradient-to-br from-[#111166] to-[#2a2a88] rounded-full flex items-center justify-center hover:from-[#2a2a88] hover:to-[#111166] transition-all duration-300 shadow-modern">
              <i className="fab fa-linkedin-in text-white text-xl"></i>
            </a>
            <a href="#" className="w-16 h-16 bg-gradient-to-br from-[#ffa4ff] to-[#ff7bff] rounded-full flex items-center justify-center hover:from-[#ff7bff] hover:to-[#ffa4ff] transition-all duration-300 shadow-modern">
              <i className="fab fa-instagram text-white text-xl"></i>
            </a>
            <a href="#" className="w-16 h-16 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-full flex items-center justify-center hover:from-[#b4b1f8] hover:to-[#111166] transition-all duration-300 shadow-modern">
              <i className="fab fa-youtube text-white text-xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#fff0ff] dark:bg-[#000000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#ffa4ff] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-question-circle mr-2"></i>
              Common Questions
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Quick answers to common questions about admissions and campus life.
            </p>
          </div>
          <div className="space-y-6">
            <div className="modern-card p-6 bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-[#fff0ff] mb-3">
                How do I apply for admission?
              </h3>
              <p className="text-gray-600 dark:text-[#85828d]">
                You can apply online through our admissions portal or visit our campus. 
                Complete the application form and submit required documents.
              </p>
            </div>
            <div className="modern-card p-6 bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-[#fff0ff] mb-3">
                What are the admission requirements?
              </h3>
              <p className="text-gray-600 dark:text-[#85828d]">
                Requirements vary by program. Generally, you need a high school diploma, 
                English proficiency, and program-specific prerequisites.
              </p>
            </div>
            <div className="modern-card p-6 bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-[#fff0ff] mb-3">
                Do you offer financial aid?
              </h3>
              <p className="text-gray-600 dark:text-[#85828d]">
                Yes, we offer various financial aid options including scholarships, 
                payment plans, and student loans. Contact our financial aid office for details.
              </p>
            </div>
            <div className="modern-card p-6 bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-[#fff0ff] mb-3">
                Can I visit the campus?
              </h3>
              <p className="text-gray-600 dark:text-[#85828d]">
                Absolutely! We offer campus tours Monday through Thursday. 
                Contact us to schedule your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #111166 0%, #2a2a88 50%, #4a4aaa 100%);
        }
        
        .dark .gradient-bg {
          background: linear-gradient(135deg, #000000 0%, #073763 50%, #4d5464 100%);
        }
        
        .modern-card {
          background: white;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(17, 17, 102, 0.1);
          transition: all 0.3s ease;
        }
        
        .dark .modern-card {
          background: #000000;
          box-shadow: 0 10px 40px rgba(255, 164, 255, 0.1);
        }
        
        .modern-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(17, 17, 102, 0.15);
        }
        
        .dark .modern-card:hover {
          box-shadow: 0 20px 60px rgba(255, 164, 255, 0.15);
        }
        
        .modern-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          outline: none;
        }
        
        .modern-input:focus {
          box-shadow: 0 0 0 3px rgba(180, 177, 248, 0.3);
        }
        
        .dark .modern-input:focus {
          box-shadow: 0 0 0 3px rgba(255, 164, 255, 0.3);
        }
        
        .shadow-modern {
          box-shadow: 0 8px 32px rgba(17, 17, 102, 0.15);
        }
        
        .dark .shadow-modern {
          box-shadow: 0 8px 32px rgba(255, 164, 255, 0.15);
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
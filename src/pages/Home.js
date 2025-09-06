import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    {
      icon: 'fas fa-award',
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed by industry experts to meet current market demands.'
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Experienced Lecturers',
      description: 'Learn from qualified professionals with extensive industry experience and teaching expertise.'
    },
    {
      icon: 'fas fa-university',
      title: 'Campus Life',
      description: 'Vibrant campus environment with modern facilities, clubs, and extracurricular activities.'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Job Support',
      description: 'Dedicated career services including job placement assistance and industry connections.'
    }
  ];

  const featuredCourses = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Information Technology',
      description: 'Comprehensive IT training covering programming, networking, and system administration.',
      duration: '2 Years',
      level: 'Diploma'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Engineering Technology',
      description: 'Practical engineering skills with focus on modern manufacturing and automation.',
      duration: '2 Years',
      level: 'Diploma'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Business Management',
      description: 'Essential business skills including management, marketing, and entrepreneurship.',
      duration: '1 Year',
      level: 'Certificate'
    }
  ];

  const testimonials = [
    {
      content: "SDTI provided me with the practical skills and knowledge that directly led to my current position as a Software Developer. The hands-on approach and industry-relevant curriculum made all the difference.",
      author: "Ahmed Al-Rashid",
      position: "Software Developer, Tech Solutions Inc."
    },
    {
      content: "The Business Management program at SDTI gave me the confidence and skills to start my own company. The lecturers were supportive and the practical projects were invaluable.",
      author: "Fatima Hassan",
      position: "Entrepreneur, Digital Marketing Agency"
    },
    {
      content: "The Engineering Technology course provided excellent practical training. I was able to secure a job immediately after graduation thanks to the industry connections and job placement support.",
      author: "Mohammed Al-Zahra",
      position: "Engineering Technician, Manufacturing Corp."
    }
  ];

  const quickLinks = [
    { icon: 'fas fa-file-alt', label: 'Apply Now', link: '/admissions' },
    { icon: 'fas fa-phone', label: 'Contact Us', link: '/contact' },
    { icon: 'fas fa-download', label: 'Download Prospectus', link: '#' },
    { icon: 'fas fa-calendar', label: 'Upcoming Events', link: '/news' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Empowering Futures Through Quality Education
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Join SDTI and unlock your potential with industry-relevant training, 
                experienced lecturers, and comprehensive career support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions" className="btn-primary text-center">
                  Apply Now
                </Link>
                <Link to="/programs" className="btn-secondary text-center">
                  Explore Courses
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 glass-effect rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-6xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to SDTI
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Skills Development Training Institute (SDTI) is committed to providing quality education 
            and practical training that prepares students for successful careers in various industries. 
            Our comprehensive programs combine theoretical knowledge with hands-on experience.
          </p>
        </div>
      </section>

      {/* Why Choose SDTI Highlights */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Why Choose SDTI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center card-hover bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${highlight.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="h-40 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <i className={`${course.icon} text-4xl text-white`}></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <i className="fas fa-clock mr-2"></i>
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-signal mr-2"></i>
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/programs" className="btn-outline">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-blue-600 card-hover">
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Quick Links
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl text-center shadow-lg card-hover group"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <i className={`${link.icon} text-2xl text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

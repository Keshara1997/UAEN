import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {

  const featuredCourses = [
    {
      image: "/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg",
      title: 'Information Technology',
      description: 'Comprehensive IT training covering programming, networking, and system administration.',
      duration: '2 Years',
      level: 'Diploma'
    },
    {
      image: "/images/Graduation%20Special/473576898_1161969612595416_1303676268995549737_n.jpg",
      title: 'Engineering Technology',
      description: 'Practical engineering skills with focus on modern manufacturing and automation.',
      duration: '2 Years',
      level: 'Diploma'
    },
    {
      
      image: "/images/Graduation%20Special/473620187_1161969932595384_8195860307286033297_n.jpg",
      title: 'Business Management',
      description: 'Essential business skills including management, marketing, and entrepreneurship.',
      duration: '1 Year',
      level: 'Certificate'
    }
  ];

  const testimonials = [
    {
      image: "/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg",
      content: "SDTI provided me with the practical skills and knowledge that directly led to my current position as a Software Developer. The hands-on approach and industry-relevant curriculum made all the difference.",
      author: "Ahmed Al-Rashid",
      position: "Software Developer, Tech Solutions Inc."
    },
    {
      image: "/images/Graduation%20Special/473576898_1161969612595416_1303676268995549737_n.jpg",
      content: "The Business Management program at SDTI gave me the confidence and skills to start my own company. The lecturers were supportive and the practical projects were invaluable.",
      author: "Fatima Hassan",
      position: "Entrepreneur, Digital Marketing Agency"
    },
    {
      image: "/images/Graduation%20Special/473620187_1161969932595384_8195860307286033297_n.jpg",
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

  const images = [
    "/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg",
    "/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg",
    "/images/Graduation%20Special/473576898_1161969612595416_1303676268995549737_n.jpg", 
    "/images/Graduation%20Special/473620187_1161969932595384_8195860307286033297_n.jpg",
    "/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg"
  ];

  const [current, setCurrent] = useState(0);
  const [imageErrors, setImageErrors] = useState(new Set());
  
  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle image load errors
  const handleImageError = (index) => {
    setImageErrors(prev => new Set([...prev, index]));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              backgroundImage: imageErrors.has(index) 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : `url(${img})` 
            }}
          >
           
            {/* Hidden img element for error detection */}
            <img 
              src={img} 
              alt="" 
              style={{ display: 'none' }}
              onError={() => handleImageError(index)}
            />
          </div>
        ))}
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Slideshow Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            “ The Sky is Your Limit ”

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
          <div className="w-80 h-80 glass-effect rounded-full flex items-center justify-center overflow-hidden">
    <img 
      src="/images/logos/sdti.png" 
      alt="Graduation" 
      className="w-full h-full object-cover"
    />
  </div>
          </div>
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
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
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
                <div className="flex flex-col items-center mb-6">
                  <div className="w-64 h-54 glass-effect rounded-full flex items-center justify-center overflow-hidden mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-center">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {testimonial.position}
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-center">
                  "{testimonial.content}"
                </p>
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

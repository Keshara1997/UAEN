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
    "/images/logo/SDTIDUBAI4.png",
    "/images/logo/SDTIDUBAI5.png",

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
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)' 
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
          {/* Modern overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          
          {/* Floating geometric shapes */}
          {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl float-animation"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg float-animation" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-400/5 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
          </div> */}
          
          {/* Slideshow Navigation Dots */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 backdrop-blur-sm ${
                  index === current 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <h1 className="text-display text-white mb-6 leading-tight">
                "The Sky is Your Limit"
              </h1>
            {/* <div className="text-white fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Now Accepting Applications
              </div>
             
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl">
                Join SDTI and unlock your potential with industry-relevant training, 
                experienced lecturers, and comprehensive career support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/admissions" className="btn-primary text-center group">
                  <span className="flex items-center justify-center">
                    Apply Now
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </Link>
                <Link to="/programs" className="btn-secondary text-center group">
                  <span className="flex items-center justify-center">
                    Explore Courses
                    <i className="fas fa-play ml-2 group-hover:scale-110 transition-transform"></i>
                  </span>
                </Link>
              </div> */}
              
              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="text-sm text-white/70">Graduates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm text-white/70">Job Placement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-white/70">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center slide-in-right">
              <div className="relative">
                <div className="w-96 h-96 glass-effect rounded-3xl flex items-center justify-center overflow-hidden shadow-modern-xl">
                  <img 
                    src="/images/logos/sdti.png" 
                    alt="SDTI Logo" 
                    className="w-full h-full object-contain p-8"
                  />
                </div> */}
                {/* Floating badges */}
                {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-check text-white text-xl"></i>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-graduation-cap text-white text-2xl"></i>
                </div>
              </div>
            </div>*/}
          </div> 
        </div>
      </section>

  
     
      {/* Featured Courses */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
              <i className="fas fa-star mr-2"></i>
              Popular Programs
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our industry-leading programs designed to prepare you for success in today's competitive job market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredCourses.map((course, index) => (
              <div key={index} className="modern-card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center text-white">
                      <i className="fas fa-clock mr-2"></i>
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-heading text-xl text-gray-900 dark:text-white mb-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/programs" 
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                    >
                      Learn More
                      <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                    <div className="flex items-center text-yellow-500">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">(4.9)</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/programs" className="btn-outline group">
              <span >
                View All Programs
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>


      {/* Industry Recognition */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-sm font-medium text-green-700 dark:text-green-300 mb-6">
              <i className="fas fa-award mr-2"></i>
              Trusted & Certified
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Industry Recognition & Accreditation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our certifications and accreditations demonstrate our commitment to maintaining the highest standards of education and training.
            </p>
          </div>

          {/* Logo Grid */}
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <h3 className="text-heading text-2xl md:text-3xl text-center text-gray-900 dark:text-white mb-12">
              Our Certifications & Accreditations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
              {[
                { src: "/images/logos/ugc_recognized.png", alt: "UGC Recognized" },
                { src: "/images/logos/IIC1.png", alt: "IIC Certification" },
                { src: "/images/logos/iso.png", alt: "ISO Certification" },
                { src: "/images/logos/LOGO-1-927x1024.png", alt: "Institution Logo" },
                { src: "/images/logos/193375.png", alt: "Certification Logo" },
                { src: "/images/logos/iqa logo png.png", alt: "IQA Logo" },
                { src: "/images/logos/SILVER-WES-logo-NEW.png", alt: "Silver WES Logo" },
                { src: "/images/logos/sdti.png", alt: "SDTI Logo" },
                { src: "/images/logos/Logo---EDU (2).png", alt: "Education Logo" },
                { src: "/images/logos/HQ.png", alt: "HQ Logo" },
              ].map((logo, index) => (
                <div key={index} className="group flex items-center justify-center p-6 bg-white dark:bg-white rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-16 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="mt-16 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-globe text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Internationally Recognized</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Global standards and recognition</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-shield-alt text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quality Assured</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Rigorous quality standards</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-industry text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry Approved</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Endorsed by leading companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-6">
              <i className="fas fa-quote-left mr-2"></i>
              Student Success Stories
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our graduates who have achieved remarkable success in their careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="modern-card p-8 group">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 glass-effect rounded-full flex items-center justify-center overflow-hidden shadow-modern">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <i className="fas fa-quote-left text-white text-xs"></i>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-center">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 text-center font-medium">
                    {testimonial.position}
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-blue-200 dark:text-blue-800 opacity-50">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-center relative z-10">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <div className="flex items-center text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-sm font-medium text-orange-700 dark:text-orange-300 mb-6">
              <i className="fas fa-rocket mr-2"></i>
              Get Started Today
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Quick Links
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Take the next step in your educational journey with these quick actions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="modern-card p-8 text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-modern">
                    <i className={`${link.icon} text-2xl text-white`}></i>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-lg">
                    {link.label}
                  </span>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fas fa-arrow-right text-blue-600 dark:text-blue-400"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

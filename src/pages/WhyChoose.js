import React, { useState, useEffect, useMemo } from 'react';

const WhyChoose = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const keyStrengths = [
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Qualified Lecturers',
      description: 'Our faculty consists of industry experts and experienced educators who bring real-world knowledge to the classroom.',
      details: [
        'Industry professionals with 10+ years experience',
        'Advanced degrees in their respective fields',
        'Continuous professional development',
        'Mentorship and career guidance'
      ],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: 'fas fa-tools',
      title: 'Practical & Job-oriented Training',
      description: 'We focus on hands-on learning and practical skills that directly apply to real-world job requirements.',
      details: [
        'Industry-standard equipment and software',
        'Project-based learning approach',
        'Internship opportunities',
        'Industry partnerships for practical training'
      ],
      color: 'from-green-600 to-green-700'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Student Success Stories',
      description: 'Our graduates have achieved remarkable success in their careers, with many securing positions in top companies.',
      details: [
        '95% job placement rate',
        'Average salary increase of 40%',
        'Alumni network of 5000+ professionals',
        'Success stories across various industries'
      ],
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Industry Links',
      description: 'Strong partnerships with leading companies provide students with networking opportunities and career prospects.',
      details: [
        'Partnerships with 100+ companies',
        'Guest lectures from industry leaders',
        'Job placement assistance',
        'Industry advisory board'
      ],
      color: 'from-orange-600 to-orange-700'
    }
  ];

  const statistics = [
    { number: '5000+', label: 'Graduates' },
    { number: '95%', label: 'Job Placement Rate' },
    { number: '100+', label: 'Industry Partners' },
    { number: '15+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      name: 'Sarah Al-Mansouri',
      program: 'Information Technology',
      position: 'Software Developer at TechCorp',
      quote: 'SDTI gave me the practical skills and industry connections that launched my career. The hands-on approach and experienced lecturers made all the difference.',
      image: "/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg",

    },
    {
      name: 'Ahmed Hassan',
      program: 'Engineering Technology',
      position: 'Senior Engineer at Manufacturing Inc.',
      quote: 'The practical training and industry partnerships at SDTI prepared me perfectly for my current role. I was hired immediately after graduation.',
      image: "/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg",
    },
    {
      name: 'Fatima Al-Zahra',
      program: 'Business Management',
      position: 'Marketing Manager at Digital Agency',
      quote: 'SDTI not only taught me business skills but also helped me develop leadership qualities. The career support was exceptional.',
      image: "/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg",
    }
  ];

  const facilities = useMemo(() => [
    {
      title: 'Modern Computer Labs',
      description: 'State-of-the-art computer labs with latest hardware and software for hands-on learning',
      image : ['/images/Graduation Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg',
        '/images/Graduation Special/473576898_1161969612595416_1303676268995549737_n.jpg',
        '/images/Graduation Special/473620187_1161969932595384_8195860307286033297_n.jpg',
        '/images/Graduation Special/501491371_1278045884321121_5884436298341591632_n.jpg'
      ]
    },
    {
      title: 'Engineering Workshops',
      description: 'Fully equipped workshops with advanced machinery for practical engineering training',
      image : ['/images/Graduation Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg',
        '/images/Graduation Special/473576898_1161969612595416_1303676268995549737_n.jpg',
        '/images/Graduation Special/473620187_1161969932595384_8195860307286033297_n.jpg',
        '/images/Graduation Special/501491371_1278045884321121_5884436298341591632_n.jpg'
      ]    },
    {
      title: 'Library & Study Areas',
      description: 'Modern library with digital resources, quiet study spaces, and collaborative areas',
      image: ['/images/Graduation Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg',
        '/images/Graduation Special/473576898_1161969612595416_1303676268995549737_n.jpg',
        '/images/Graduation Special/473620187_1161969932595384_8195860307286033297_n.jpg',
        '/images/Graduation Special/501491371_1278045884321121_5884436298341591632_n.jpg'
      ]    },
    {
      title: 'Student Lounge',
      description: 'Contemporary spaces designed for relaxation, networking, and student interaction',
      image : ['/images/Graduation Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg',
        '/images/Graduation Special/473576898_1161969612595416_1303676268995549737_n.jpg',
        '/images/Graduation Special/473620187_1161969932595384_8195860307286033297_n.jpg',
        '/images/Graduation Special/501491371_1278045884321121_5884436298341591632_n.jpg'
      ]    }
  ], []);

  // Auto slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newState = {};
        facilities.forEach((facility, facilityIndex) => {
          newState[facilityIndex] = ((prev[facilityIndex] || 0) + 1) % facility.image.length;
        });
        return newState;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [facilities]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-24 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg float-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-400/5 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Excellence in Education
          </div>
          <h1 className="text-display text-white mb-6">
            Why Choose SDTI?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover what makes SDTI the preferred choice for students seeking 
            quality education and successful career outcomes.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-modern group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">{stat.number}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
              <i className="fas fa-star mr-2"></i>
              Our Strengths
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Our Key Strengths
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the unique advantages that set SDTI apart from other educational institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {keyStrengths.map((strength, index) => (
              <div key={index} className="modern-card p-8 group">
                <div className="flex items-start mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${strength.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-modern`}>
                    <i className={`${strength.icon} text-3xl text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading text-2xl text-gray-900 dark:text-white mb-4">
                      {strength.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {strength.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visuals - Campus Facilities */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-sm font-medium text-green-700 dark:text-green-300 mb-6">
              <i className="fas fa-building mr-2"></i>
              Modern Facilities
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Campus Facilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience our state-of-the-art facilities designed to enhance your learning journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="modern-card overflow-hidden group">
                <div className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img 
                    src={facility.image[currentImageIndex[index] || 0]} 
                    alt={facility.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110" 
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {facility.image.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                          (currentImageIndex[index] || 0) === imgIndex 
                            ? 'bg-white scale-125 shadow-lg' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {(currentImageIndex[index] || 0) + 1} / {facility.image.length}
                  </div>
                  
                  {/* Facility Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <i className="fas fa-university text-blue-600 text-lg"></i>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-heading text-xl text-gray-900 dark:text-white mb-4">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {facility.description}
                  </p>
                  <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    <span>Explore Facility</span>
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-6">
              <i className="fas fa-graduation-cap mr-2"></i>
              Alumni Success
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real stories from our graduates who have achieved remarkable success in their careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="modern-card p-8 group">
                <div className="flex items-center mb-6">
                  <div className="relative mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-modern"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading text-lg text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {testimonial.program} Graduate
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-3xl text-blue-200 dark:text-blue-800 opacity-50">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Verified Graduate
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Career Support */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-sm font-medium text-orange-700 dark:text-orange-300 mb-6">
                <i className="fas fa-briefcase mr-2"></i>
                Career Services
              </div>
              <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
                Comprehensive Career Support
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our dedicated career services team works closely with students to ensure 
                successful job placement and career development.
              </p>
              <div className="space-y-6">
                {[
                  'Resume writing and interview preparation',
                  'Job placement assistance and networking events',
                  'Career counseling and mentorship programs',
                  'Alumni network and ongoing career support'
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center slide-in-right">
              <div className="relative">
                <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-modern-xl">
                  <div className="text-center text-white">
                    <i className="fas fa-briefcase text-6xl mb-4"></i>
                    <h3 className="text-2xl font-bold mb-2">Career Success</h3>
                    <p className="text-white/80">95% Job Placement Rate</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-trophy text-white text-xl"></i>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-star text-white text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg float-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-400/5 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Start Your Journey
          </div>
          <h2 className="text-heading text-4xl md:text-5xl text-white mb-6">
            Ready to Join SDTI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference that quality education and comprehensive support can make in your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="btn-primary group">
              <span className="flex items-center justify-center">
                Apply Now
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>
            <a href="/programs" className="btn-secondary group">
              <span className="flex items-center justify-center">
                Explore Programs
                <i className="fas fa-play ml-2 group-hover:scale-110 transition-transform"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;

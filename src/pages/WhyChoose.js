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
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose SDTI?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover what makes SDTI the preferred choice for students seeking 
            quality education and successful career outcomes.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Our Key Strengths
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {keyStrengths.map((strength, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 card-hover">
                <div className={`w-20 h-20 bg-gradient-to-br ${strength.color} rounded-full flex items-center justify-center mb-6`}>
                  <i className={`${strength.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {strength.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {strength.description}
                </p>
                <ul className="space-y-3">
                  {strength.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                      <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visuals - Campus Facilities */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Campus Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img 
                    src={facility.image[currentImageIndex[index] || 0]} 
                    alt={facility.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                  />
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {facility.image.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          (currentImageIndex[index] || 0) === imgIndex 
                            ? 'bg-white scale-110' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Image Counter */}
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-sm font-medium">
                    {(currentImageIndex[index] || 0) + 1} / {facility.image.length}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg card-hover">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {testimonial.program} Graduate
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Industry Recognition & Accreditation
          </h2>
          
          {/* Enhanced Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-green-700">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="fas fa-award text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Accredited Programs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All our programs are accredited by relevant industry bodies and educational authorities.
              </p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="fas fa-star text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regular quality assessments ensure our programs meet the highest educational standards.
              </p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200 dark:border-purple-700">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="fas fa-handshake text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Industry Partnerships
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strong partnerships with leading companies provide excellent career opportunities.
              </p>
            </div>
          </div> */}

          {/* Logo Grid */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Certifications & Accreditations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="group flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logos/sdti.png" 
                  alt="SDTI Logo" 
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
              <div className="group flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logos/ugc_recognized.png" 
                  alt="UGC Recognized" 
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
              <div className="group flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logos/IIC1.png" 
                  alt="IIC Certification" 
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
              <div className="group flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logos/iso.png" 
                  alt="ISO Certification" 
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
              <div className="group flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logos/iqa logo png.png" 
                  alt="IQA Logo" 
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
              <div className="group flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logos/SILVER-WES-logo-NEW.png" 
                  alt="Silver WES Logo" 
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
              <div className="group flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logos/Logo---EDU (2).png" 
                  alt="Education Logo" 
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
              <div className="group flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logos/LOGO-1-927x1024.png" 
                  alt="Institution Logo" 
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
              <div className="group flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logos/HQ.png" 
                  alt="HQ Logo" 
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
              <div className="group flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/images/logos/193375.png" 
                  alt="Certification Logo" 
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                These certifications demonstrate our commitment to maintaining the highest standards of education and training.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Internationally Recognized
                </span>
                <span className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Quality Assured
                </span>
                <span className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  Industry Approved
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Support */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Comprehensive Career Support
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our dedicated career services team works closely with students to ensure 
                successful job placement and career development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span className="text-gray-600 dark:text-gray-300">Resume writing and interview preparation</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span className="text-gray-600 dark:text-gray-300">Job placement assistance and networking events</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span className="text-gray-600 dark:text-gray-300">Career counseling and mentorship programs</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span className="text-gray-600 dark:text-gray-300">Alumni network and ongoing career support</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <i className="fas fa-briefcase text-6xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join SDTI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the difference that quality education and comprehensive support can make in your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="btn-primary">
              Apply Now
            </a>
            <a href="/programs" className="btn-secondary">
              Explore Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;

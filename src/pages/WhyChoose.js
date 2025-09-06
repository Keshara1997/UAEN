import React from 'react';

const WhyChoose = () => {
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
      image: 'https://via.placeholder.com/80x80/2563eb/ffffff?text=SA'
    },
    {
      name: 'Ahmed Hassan',
      program: 'Engineering Technology',
      position: 'Senior Engineer at Manufacturing Inc.',
      quote: 'The practical training and industry partnerships at SDTI prepared me perfectly for my current role. I was hired immediately after graduation.',
      image: 'https://via.placeholder.com/80x80/3b82f6/ffffff?text=AH'
    },
    {
      name: 'Fatima Al-Zahra',
      program: 'Business Management',
      position: 'Marketing Manager at Digital Agency',
      quote: 'SDTI not only taught me business skills but also helped me develop leadership qualities. The career support was exceptional.',
      image: 'https://via.placeholder.com/80x80/8b5cf6/ffffff?text=FZ'
    }
  ];

  const facilities = [
    {
      title: 'Modern Computer Labs',
      description: 'State-of-the-art computer labs with latest hardware and software',
      image: 'https://via.placeholder.com/400x300/2563eb/ffffff?text=Computer+Lab'
    },
    {
      title: 'Engineering Workshops',
      description: 'Fully equipped workshops for hands-on engineering training',
      image: 'https://via.placeholder.com/400x300/059669/ffffff?text=Workshop'
    },
    {
      title: 'Library & Study Areas',
      description: 'Comprehensive library with digital resources and quiet study spaces',
      image: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Library'
    },
    {
      title: 'Student Lounge',
      description: 'Comfortable spaces for relaxation and student interaction',
      image: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Lounge'
    }
  ];

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Campus Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-600">
                      {testimonial.program} Graduate
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Industry Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-award text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Accredited Programs
              </h3>
              <p className="text-gray-600">
                All our programs are accredited by relevant industry bodies and educational authorities.
              </p>
            </div>
            <div className="text-center bg-gray-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-star text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Regular quality assessments ensure our programs meet the highest educational standards.
              </p>
            </div>
            <div className="text-center bg-gray-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industry Partnerships
              </h3>
              <p className="text-gray-600">
                Strong partnerships with leading companies provide excellent career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Career Support
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our dedicated career services team works closely with students to ensure 
                successful job placement and career development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span className="text-gray-600">Resume writing and interview preparation</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span className="text-gray-600">Job placement assistance and networking events</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span className="text-gray-600">Career counseling and mentorship programs</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span className="text-gray-600">Alumni network and ongoing career support</span>
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

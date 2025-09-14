import React from 'react';

const About = () => {
  const facilities = [
    {
      icon: 'fas fa-flask',
      title: 'Modern Laboratories',
      description: 'State-of-the-art labs equipped with latest technology for hands-on learning.'
    },
    {
      icon: 'fas fa-book',
      title: 'Comprehensive Library',
      description: 'Extensive collection of books, journals, and digital resources.'
    },
    {
      icon: 'fas fa-users',
      title: 'Student Services',
      description: 'Dedicated support services including counseling, career guidance, and academic support.'
    },
    {
      icon: 'fas fa-wifi',
      title: 'IT Infrastructure',
      description: 'High-speed internet, computer labs, and modern IT facilities.'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Cafeteria',
      description: 'Comfortable dining facilities serving healthy meals and snacks.'
    },
    {
      icon: 'fas fa-car',
      title: 'Parking Facilities',
      description: 'Convenient parking spaces for students and staff.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Ahmed Al-Mansouri',
      position: 'Chairman',
      message: 'Our vision is to be the leading institute in providing quality technical education that meets the demands of the modern workforce.',
      image: '/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg'
    },
    {
      name: 'Prof. Fatima Al-Zahra',
      position: 'Principal',
      message: 'We are committed to fostering innovation, creativity, and excellence in education while preparing students for successful careers.',
      image: '/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About SDTI
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn about our history, mission, and commitment to providing quality education 
            and practical training for the next generation of professionals.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our History
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2010, Skills Development Training Institute (SDTI) has been at the 
                  forefront of technical education in the UAE. What started as a small training center 
                  has grown into a comprehensive institute serving thousands of students.
                </p>
                <p>
                  Over the years, we have continuously evolved our curriculum to meet the changing 
                  demands of industries, ensuring our graduates are well-prepared for the modern workforce. 
                  Our commitment to excellence has earned us recognition as a leading technical education provider.
                </p>
                <p>
                  Today, SDTI stands as a beacon of quality education, offering diverse programs 
                  that combine theoretical knowledge with practical skills, preparing students for 
                  successful careers in various industries.
                </p>
              </div>
            </div>
           <div className="flex justify-center">
  <div className="flex justify-center">
  <div className="w-full max-w-md h-80 relative rounded-2xl overflow-hidden">
    <img 
      src="/images/Graduation%20Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg" 
      alt="Background" 
      className="w-full h-full object-cover" 
    />
  </div>
</div>
</div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to excellence in technical education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide high-quality technical education and training that empowers students 
                with the knowledge, skills, and competencies needed to excel in their chosen fields 
                and contribute meaningfully to society and the economy.
              </p>
              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Excellence in Education</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading technical education institute in the region, recognized for 
                excellence in teaching, innovation in curriculum design, and success in 
                producing highly skilled professionals who drive economic growth and development.
              </p>
              <div className="mt-6 flex items-center text-purple-600 dark:text-purple-400">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">Leading Innovation</span>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Integrity</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Maintaining the highest ethical standards in all our endeavors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Embracing new technologies and teaching methodologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Excellence</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Striving for the highest quality in education and service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16">
            Accreditation & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-certificate text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ministry of Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accredited by the UAE Ministry of Education for all our diploma and certificate programs.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-award text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Industry Partnerships
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strong partnerships with leading companies for internships and job placements.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-star text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regular quality assessments and continuous improvement in all our programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Leadership Message
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {leader.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">
                  {leader.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  "{leader.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Campus Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-center card-hover">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${facility.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {facility.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful graduates who have built their careers with SDTI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="btn-primary">
              Apply Now
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

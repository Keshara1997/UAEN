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
      image: 'https://via.placeholder.com/150x150/2563eb/ffffff?text=AM'
    },
    {
      name: 'Prof. Fatima Al-Zahra',
      position: 'Principal',
      message: 'We are committed to fostering innovation, creativity, and excellence in education while preparing students for successful careers.',
      image: 'https://via.placeholder.com/150x150/3b82f6/ffffff?text=FZ'
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
              <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <i className="fas fa-university text-6xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide high-quality technical education and training that empowers students 
                with the knowledge, skills, and competencies needed to excel in their chosen fields 
                and contribute meaningfully to society and the economy.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-eye text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading technical education institute in the region, recognized for 
                excellence in teaching, innovation in curriculum design, and success in 
                producing highly skilled professionals who drive economic growth and development.
              </p>
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

import React from "react";
import { Link } from "react-router-dom";
const Home = () => {

  const degreePrograms = [
    {
      title: 'Bachelor Programs',
      description: 'Comprehensive undergraduate degrees in Information Technology, Business Administration, and Engineering Technology.',
      duration: '3-4 Years',
      level: 'Bachelor',
      accreditation: 'UGC Recognized, ISO Certified'
    },
    {
      title: 'Master Programs',
      description: 'Advanced postgraduate programs designed for career advancement and specialized expertise.',
      duration: '1-2 Years',
      level: 'Master',
      accreditation: 'Internationally Accredited'
    },
    {
      title: 'Professional Development',
      description: 'Short-term courses and certifications for skill enhancement and career growth.',
      duration: '3-12 Months',
      level: 'Certificate',
      accreditation: 'Industry Certified'
    },
    {
      title: 'Language Training',
      description: 'English proficiency programs and specialized language courses for international students.',
      duration: '6-12 Months',
      level: 'Certificate',
      accreditation: 'IELTS/TOEFL Preparation'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Open Day 2024',
      date: 'March 15, 2024',
      description: 'Join us for our annual Open Day and discover all that SDTI has to offer.',
      type: 'Open Day'
    },
    {
      title: 'Tech Innovation Conference',
      date: 'April 20, 2024',
      description: 'Explore the latest trends in technology and innovation.',
      type: 'Conference'
    },
    {
      title: 'Cultural Festival',
      date: 'May 10, 2024',
      description: 'Celebrate diversity and cultural exchange at our annual festival.',
      type: 'Festival'
    }
  ];

  const podcasts = [
    {
      title: 'Future of Technology',
      description: 'Exploring emerging technologies and their impact on education and industry.',
      duration: '45 min',
      category: 'Technology'
    },
    {
      title: 'Career Development Insights',
      description: 'Expert advice on building successful careers in various industries.',
      duration: '35 min',
      category: 'Career'
    },
    {
      title: 'Global Education Trends',
      description: 'Discussion on international education standards and opportunities.',
      duration: '50 min',
      category: 'Education'
    }
  ];

  const videoSrc = "/videos/SDTIDubaiWEBReleaseVideo.mp4";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Modern overlay with theme-aware gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/70"></div>
          
          {/* Floating geometric shapes */}
          {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl float-animation"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg float-animation" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-400/5 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
          </div> */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Welcome to SDTI Dubai
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Your Gateway to Excellence in International Education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="btn-primary text-lg px-8 py-4">
                Apply Now
              </Link>
              <Link to="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

  
     
      {/* Introduction Section */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary mb-6">
              <i className="fas fa-graduation-cap mr-2"></i>
              About SDTI Dubai
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-text mb-6">
              Excellence in International Education
            </h2>
            <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed">
              SDTI Dubai stands as a premier institution offering internationally accredited degree programs across diverse fields. 
              Our commitment to academic excellence is supported by highly qualified faculty members and strengthened by our extensive global alumni network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-globe text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">International Accreditation</h3>
              <p className="text-muted">Globally recognized programs meeting international standards of excellence.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">Expert Faculty</h3>
              <p className="text-muted">Highly qualified instructors with industry experience and academic excellence.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-network-wired text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">Global Alumni Network</h3>
              <p className="text-muted">Connect with successful graduates worldwide for career opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-contrast mb-6">
            Join Our Global Community
          </h2>
          <p className="text-xl text-primary-contrast/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your future success. Join thousands of students who have chosen SDTI Dubai 
            as their pathway to academic excellence and career advancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="bg-primary-contrast text-primary hover:bg-primary-contrast/90 font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
              Start Your Application
            </Link>
            <Link to="/contact" className="border-2 border-primary-contrast text-primary-contrast hover:bg-primary-contrast hover:text-primary font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose SDTI */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent mb-6">
              <i className="fas fa-star mr-2"></i>
              Why Choose Us
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-text mb-6">
              Why Choose SDTI Dubai?
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Discover the unique advantages and benefits that make SDTI Dubai the preferred choice for international education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="modern-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-award text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">World-Class Accreditation</h3>
              <p className="text-muted">
                Internationally recognized programs with UGC recognition and ISO certification ensuring global standards.
              </p>
            </div>
            
            <div className="modern-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-briefcase text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">Industry-Ready Programs</h3>
              <p className="text-muted">
                Curriculum designed with industry input to ensure graduates are job-ready from day one.
              </p>
            </div>
            
            <div className="modern-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">Expert Faculty</h3>
              <p className="text-muted">
                Learn from highly qualified professors and industry experts with years of practical experience.
              </p>
            </div>
            
            <div className="modern-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">Career Support</h3>
              <p className="text-muted">
                Comprehensive career guidance, job placement assistance, and ongoing alumni support.
              </p>
            </div>
            
            <div className="modern-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-building text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">Modern Facilities</h3>
              <p className="text-muted">
                State-of-the-art laboratories, libraries, and learning spaces equipped with latest technology.
              </p>
            </div>
            
            <div className="modern-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-globe-americas text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">Global Network</h3>
              <p className="text-muted">
                Access to international partnerships and exchange programs with universities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>


         {/* Industry Recognition */}
         <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent mb-6">
              <i className="fas fa-award mr-2"></i>
              Trusted & Certified
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-text mb-6">
              Industry Recognition & Accreditation
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Our certifications and accreditations demonstrate our commitment to maintaining the highest standards of education and training.
            </p>
          </div>
      {/* Logo Grid */}
      <div className="glass-card rounded-3xl p-8 md:p-12">
            <h3 className="text-heading text-2xl md:text-3xl text-center text-text mb-12">
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
                <div key={index} className="group flex items-center justify-center p-6 bg-card rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:scale-105 border border-border">
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
                  <h4 className="font-semibold text-text mb-2">Internationally Recognized</h4>
                  <p className="text-sm text-muted">Global standards and recognition</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-shield-alt text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-text mb-2">Quality Assured</h4>
                  <p className="text-sm text-muted">Rigorous quality standards</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-industry text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-text mb-2">Industry Approved</h4>
                  <p className="text-sm text-muted">Endorsed by leading companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Degrees & Courses */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary mb-6">
              <i className="fas fa-graduation-cap mr-2"></i>
              Academic Programs
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-text mb-6">
              Degrees & Courses
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Explore our comprehensive range of accredited programs designed to meet diverse educational and career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {degreePrograms.map((program, index) => (
              <div key={index} className="modern-card p-8 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <i className="fas fa-graduation-cap text-white text-2xl"></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-text">
                        {program.title}
                      </h3>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {program.level}
                      </span>
                    </div>
                    <p className="text-muted mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted">
                        <i className="fas fa-clock w-4 mr-2"></i>
                        <span>Duration: {program.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted">
                        <i className="fas fa-certificate w-4 mr-2"></i>
                        <span>Accreditation: {program.accreditation}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link 
                        to="/programs" 
                        className="text-secondary font-semibold hover:text-secondary/80 transition-colors group"
                      >
                        Learn More
                        <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/programs" className="btn-outline group">
              <span>
                View All Programs
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent mb-6">
              <i className="fas fa-calendar-alt mr-2"></i>
              Stay Updated
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-text mb-6">
              Latest News & Events
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Don't miss out on our exciting upcoming events, festivals, open days, and conferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="modern-card p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-calendar text-white text-2xl"></i>
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {event.title}
                  </h3>
                  <p className="text-secondary font-medium mb-4">
                    {event.date}
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <Link 
                    to="/news" 
                    className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
                  >
                    Learn More
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/news" className="btn-outline group">
              <span>
                View All Events
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary mb-6">
              <i className="fas fa-microphone mr-2"></i>
              Educational Content
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-text mb-6">
              SDTI Podcasts
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Listen to our educational and topical podcasts featuring expert discussions relevant to various university disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {podcasts.map((podcast, index) => (
              <div key={index} className="modern-card p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-podcast text-white text-2xl"></i>
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                      {podcast.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {podcast.title}
                  </h3>
                  <p className="text-secondary font-medium mb-4">
                    Duration: {podcast.duration}
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    {podcast.description}
                  </p>
                  <button className="bg-secondary hover:bg-secondary/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center mx-auto">
                    <i className="fas fa-play mr-2"></i>
                    Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlight */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-contrast/20 rounded-full text-sm font-medium text-primary-contrast/90 mb-6">
              <i className="fas fa-star mr-2"></i>
              Featured Event
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary-contrast mb-6">
              Open Day 2024
            </h2>
            <p className="text-xl text-primary-contrast/90 mb-8 leading-relaxed">
              Join us on <span className="font-semibold text-accent">March 15, 2024</span> for our annual Open Day! 
              Discover our programs, meet faculty, tour our facilities, and take the first step towards your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="bg-primary-contrast text-primary hover:bg-primary-contrast/90 font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
                Register Now
              </Link>
              <Link to="/contact" className="border-2 border-primary-contrast text-primary-contrast hover:bg-primary-contrast hover:text-primary font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
                Get More Info
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-contrast/90">
              <div>
                <i className="fas fa-clock text-2xl mb-2"></i>
                <p className="font-semibold">Time</p>
                <p>9:00 AM - 4:00 PM</p>
              </div>
              <div>
                <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
                <p className="font-semibold">Location</p>
                <p>SDTI Dubai Campus</p>
              </div>
              <div>
                <i className="fas fa-users text-2xl mb-2"></i>
                <p className="font-semibold">Activities</p>
                <p>Campus Tours, Info Sessions, Faculty Meetings</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

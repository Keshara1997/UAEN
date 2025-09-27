import React, { useState } from 'react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'announcements', name: 'Announcements' },
    { id: 'events', name: 'Events' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'academic', name: 'Academic' }
  ];

  const newsItems = [
    {
      id: 1,
      category: 'announcements',
      title: 'Fall 2024 Intake Applications Now Open',
      date: 'March 15, 2024',
      excerpt: 'Applications for Fall 2024 intake are now open. Apply before August 15, 2024 to secure your place.',
      content: 'We are pleased to announce that applications for our Fall 2024 intake are now open. Prospective students can apply for all our diploma and certificate programs. The application deadline is August 15, 2024. Early applications are encouraged as places are limited.',
      image: '/images/Graduation Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg',
      featured: true
    },
    {
      id: 2,
      category: 'events',
      title: 'Tech Innovation Fair 2024 - Registration Open',
      date: 'March 10, 2024',
      excerpt: 'Join us for the annual Tech Innovation Fair showcasing student projects and industry innovations.',
      content: 'The annual Tech Innovation Fair will be held on October 15, 2024. This event showcases innovative projects by our students and provides networking opportunities with industry professionals. Registration is now open for participants and attendees.',
      image: '/images/Graduation Special/473576898_1161969612595416_1303676268995549737_n.jpg',
      featured: false
    },
    {
      id: 3,
      category: 'achievements',
      title: 'SDTI Students Win Regional Programming Competition',
      date: 'March 5, 2024',
      excerpt: 'Our IT students secured first place in the regional programming competition held in Dubai.',
      content: 'Congratulations to our Information Technology students who won first place in the Regional Programming Competition held in Dubai. The team demonstrated exceptional problem-solving skills and technical expertise, competing against 20 other institutions.',
      image: '/images/Graduation Special/473620187_1161969932595384_8195860307286033297_n.jpg',
      featured: true
    },
    {
      id: 4,
      category: 'academic',
      title: 'New Industry Partnership with TechCorp',
      date: 'February 28, 2024',
      excerpt: 'SDTI announces new partnership with TechCorp for internship and job placement opportunities.',
      content: 'We are excited to announce a new partnership with TechCorp, a leading technology company. This partnership will provide our students with internship opportunities, guest lectures, and direct job placement pathways upon graduation.',
      image: '/images/Graduation Special/501491371_1278045884321121_5884436298341591632_n.jpg',
      featured: false
    },
    {
      id: 5,
      category: 'events',
      title: 'Cultural Festival 2024 - Call for Performers',
      date: 'February 20, 2024',
      excerpt: 'We are looking for talented students to perform at our annual Cultural Festival in November.',
      content: 'The Cultural Festival 2024 will celebrate the diversity of our student community. We are looking for students interested in performing traditional dances, music, or other cultural presentations. Applications are due by September 30, 2024.',
      image: '/images/Graduation Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg',
      featured: false
    },
    {
      id: 6,
      category: 'announcements',
      title: 'Exam Schedule Released for Spring 2024',
      date: 'February 15, 2024',
      excerpt: 'The examination schedule for Spring 2024 semester has been published on the student portal.',
      content: 'The examination schedule for the Spring 2024 semester is now available on the student portal. Students are advised to check their individual schedules and prepare accordingly. All exams will be conducted on campus.',
      image: '/images/Graduation Special/473576898_1161969612595416_1303676268995549737_n.jpg',
      featured: false
    }
  ];

  const upcomingEvents = [
    {
      title: 'Orientation Week',
      date: 'September 2-6, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Campus',
      description: 'Welcome new students with campus tours and orientation activities.'
    },
    {
      title: 'Career Fair 2024',
      date: 'December 10, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Student Center',
      description: 'Connect with potential employers and explore career opportunities.'
    },
    {
      title: 'Graduation Ceremony',
      date: 'January 15, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Auditorium',
      description: 'Celebrate the achievements of our graduating students.'
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);

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
            Latest Updates
          </div>
          <h1 className="text-display text-white mb-6">
            News & Events
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, announcements, events, and achievements 
            from SDTI and our vibrant student community.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-[#fff0ff] dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-star mr-2"></i>
              Featured News
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Featured News
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Catch up on the most important updates and announcements from SDTI.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((news) => (
              <div key={news.id} className="modern-card overflow-hidden group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <div className="h-64 bg-gray-200 dark:bg-[#4d5464] flex items-center justify-center overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#b4b1f8] dark:bg-[#073763] text-[#111166] dark:text-[#fff0ff] px-3 py-1 rounded-full text-sm font-semibold">
                      {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                    </span>
                    <span className="ml-4 text-gray-500 dark:text-[#85828d] text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-heading text-2xl text-gray-900 dark:text-[#fff0ff] mb-4">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-[#85828d] leading-relaxed mb-6">
                    {news.content}
                  </p>
                  <button className="text-[#111166] dark:text-[#ffa4ff] font-semibold hover:text-[#2a2a88] dark:hover:text-[#ff7bff] transition-colors duration-200 group">
                    <span className="flex items-center">
                      Read More
                      <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Filter */}
      <section className="py-12 bg-gradient-to-br from-[#ffe3ff] via-[#fff0ff] to-[#ffe3ff] dark:from-[#000000] dark:via-[#073763] dark:to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-br from-[#111166] to-[#2a2a88] text-white shadow-lg'
                    : 'bg-white dark:bg-[#4d5464] text-[#111166] dark:text-[#fff0ff] hover:bg-[#fff0ff] dark:hover:bg-[#073763] border border-[#b4b1f8] dark:border-[#073763]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-[#fff0ff] dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#ffa4ff] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-newspaper mr-2"></i>
              Latest News
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Browse through all the recent updates and announcements from our institution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <div key={news.id} className="modern-card overflow-hidden group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <div className="h-48 bg-gray-200 dark:bg-[#4d5464] flex items-center justify-center overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#b4b1f8] dark:bg-[#073763] text-[#111166] dark:text-[#fff0ff] px-2 py-1 rounded-full text-xs font-semibold">
                      {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                    </span>
                    <span className="ml-3 text-gray-500 dark:text-[#85828d] text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-heading text-lg text-gray-900 dark:text-[#fff0ff] mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-[#85828d] text-sm leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <button className="text-[#111166] dark:text-[#ffa4ff] font-semibold text-sm hover:text-[#2a2a88] dark:hover:text-[#ff7bff] transition-colors duration-200 group">
                    <span className="flex items-center">
                      Read More
                      <i className="fas fa-arrow-right ml-1 group-hover:translate-x-1 transition-transform"></i>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-[#ffe3ff] via-[#fff0ff] to-[#ffe3ff] dark:from-[#000000] dark:via-[#073763] dark:to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-calendar-alt mr-2"></i>
              Upcoming Events
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Mark your calendar for these exciting upcoming events at SDTI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="modern-card p-8 group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#111166] to-[#2a2a88] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-calendar-alt text-2xl text-white"></i>
                  </div>
                  <h3 className="text-heading text-xl text-gray-900 dark:text-[#fff0ff] mb-2">
                    {event.title}
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-[#85828d]">
                    <i className="fas fa-calendar text-[#111166] dark:text-[#ffa4ff] mr-3"></i>
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-[#85828d]">
                    <i className="fas fa-clock text-[#111166] dark:text-[#ffa4ff] mr-3"></i>
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-[#85828d]">
                    <i className="fas fa-map-marker-alt text-[#111166] dark:text-[#ffa4ff] mr-3"></i>
                    {event.location}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-[#85828d] text-sm mt-4 leading-relaxed">
                  {event.description}
                </p>
                <button className="w-full mt-6 bg-gradient-to-br from-[#111166] to-[#2a2a88] text-white py-3 px-4 rounded-lg hover:from-[#2a2a88] hover:to-[#111166] transition-all duration-300 font-semibold">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-20 bg-[#fff0ff] dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#ffa4ff] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-bullhorn mr-2"></i>
              Important Announcements
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Important Announcements
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Critical updates and notices for all students and staff.
            </p>
          </div>
          <div className="modern-card p-8 bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-[#b4b1f8]/20 dark:bg-[#073763]/30 rounded-lg border border-[#b4b1f8] dark:border-[#073763]">
                <i className="fas fa-info-circle text-[#111166] dark:text-[#ffa4ff] mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-[#fff0ff] mb-2">
                    Spring 2024 Exam Schedule Released
                  </h3>
                  <p className="text-gray-600 dark:text-[#85828d] text-sm">
                    The examination schedule for Spring 2024 semester is now available on the student portal. 
                    Please check your individual schedules and prepare accordingly.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-[#ffa4ff]/20 dark:bg-[#073763]/30 rounded-lg border border-[#ffa4ff] dark:border-[#073763]">
                <i className="fas fa-check-circle text-[#111166] dark:text-[#ffa4ff] mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-[#fff0ff] mb-2">
                    Fall 2024 Applications Open
                  </h3>
                  <p className="text-gray-600 dark:text-[#85828d] text-sm">
                    Applications for Fall 2024 intake are now open. Apply before August 15, 2024 to secure your place.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-[#b4b1f8]/20 dark:bg-[#073763]/30 rounded-lg border border-[#b4b1f8] dark:border-[#073763]">
                <i className="fas fa-exclamation-triangle text-[#111166] dark:text-[#ffa4ff] mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-[#fff0ff] mb-2">
                    Campus Maintenance Notice
                  </h3>
                  <p className="text-gray-600 dark:text-[#85828d] text-sm">
                    Scheduled maintenance will be conducted on the library system from March 20-22, 2024. 
                    Online services may be temporarily unavailable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#111166]/20 rounded-full blur-lg float-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-[#ffa4ff]/10 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Stay Connected
          </div>
          <h2 className="text-heading text-4xl md:text-5xl text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white text-gray-900 placeholder-gray-500 bg-white/90 backdrop-blur-sm"
            />
            <button className="bg-white text-[#111166] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
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

export default News;
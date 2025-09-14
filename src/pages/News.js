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
      image: 'https://via.placeholder.com/400x300/2563eb/ffffff?text=Fall+Intake',
      featured: true
    },
    {
      id: 2,
      category: 'events',
      title: 'Tech Innovation Fair 2024 - Registration Open',
      date: 'March 10, 2024',
      excerpt: 'Join us for the annual Tech Innovation Fair showcasing student projects and industry innovations.',
      content: 'The annual Tech Innovation Fair will be held on October 15, 2024. This event showcases innovative projects by our students and provides networking opportunities with industry professionals. Registration is now open for participants and attendees.',
      image: 'https://via.placeholder.com/400x300/059669/ffffff?text=Tech+Fair',
      featured: false
    },
    {
      id: 3,
      category: 'achievements',
      title: 'SDTI Students Win Regional Programming Competition',
      date: 'March 5, 2024',
      excerpt: 'Our IT students secured first place in the regional programming competition held in Dubai.',
      content: 'Congratulations to our Information Technology students who won first place in the Regional Programming Competition held in Dubai. The team demonstrated exceptional problem-solving skills and technical expertise, competing against 20 other institutions.',
      image: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Programming+Win',
      featured: true
    },
    {
      id: 4,
      category: 'academic',
      title: 'New Industry Partnership with TechCorp',
      date: 'February 28, 2024',
      excerpt: 'SDTI announces new partnership with TechCorp for internship and job placement opportunities.',
      content: 'We are excited to announce a new partnership with TechCorp, a leading technology company. This partnership will provide our students with internship opportunities, guest lectures, and direct job placement pathways upon graduation.',
      image: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Partnership',
      featured: false
    },
    {
      id: 5,
      category: 'events',
      title: 'Cultural Festival 2024 - Call for Performers',
      date: 'February 20, 2024',
      excerpt: 'We are looking for talented students to perform at our annual Cultural Festival in November.',
      content: 'The Cultural Festival 2024 will celebrate the diversity of our student community. We are looking for students interested in performing traditional dances, music, or other cultural presentations. Applications are due by September 30, 2024.',
      image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Cultural+Fest',
      featured: false
    },
    {
      id: 6,
      category: 'announcements',
      title: 'Exam Schedule Released for Spring 2024',
      date: 'February 15, 2024',
      excerpt: 'The examination schedule for Spring 2024 semester has been published on the student portal.',
      content: 'The examination schedule for the Spring 2024 semester is now available on the student portal. Students are advised to check their individual schedules and prepare accordingly. All exams will be conducted on campus.',
      image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Exam+Schedule',
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
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            News & Events
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, events, and achievements 
            from SDTI and our vibrant student community.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Featured News
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((news) => (
              <div key={news.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                      {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                    </span>
                    <span className="ml-4 text-gray-500 dark:text-gray-400 text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {news.content}
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Filter */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <div key={news.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-semibold">
                      {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                    </span>
                    <span className="ml-3 text-gray-500 dark:text-gray-400 text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl card-hover">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-calendar-alt text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <i className="fas fa-calendar text-blue-500 mr-3"></i>
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <i className="fas fa-clock text-blue-500 mr-3"></i>
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <i className="fas fa-map-marker-alt text-blue-500 mr-3"></i>
                    {event.location}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 leading-relaxed">
                  {event.description}
                </p>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Important Announcements
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <i className="fas fa-info-circle text-blue-600 dark:text-blue-400 mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Spring 2024 Exam Schedule Released
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    The examination schedule for Spring 2024 semester is now available on the student portal. 
                    Please check your individual schedules and prepare accordingly.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <i className="fas fa-check-circle text-green-600 dark:text-green-400 mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Fall 2024 Applications Open
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Applications for Fall 2024 intake are now open. Apply before August 15, 2024 to secure your place.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <i className="fas fa-exclamation-triangle text-yellow-600 dark:text-yellow-400 mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Campus Maintenance Notice
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
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
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

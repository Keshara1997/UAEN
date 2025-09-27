import React, { useState } from 'react';

const CampusLife = () => {
  const [selectedGallery, setSelectedGallery] = useState('all');

  const activities = [
    {
      title: 'Student Clubs',
      description: 'Join various clubs and societies based on your interests and hobbies.',
      activities: [
        'Technology Club',
        'Business Society',
        'Sports Club',
        'Art & Design Society',
        'Debate Society',
        'Community Service Club'
      ],
      icon: 'fas fa-users',
      color: 'from-[#111166] to-[#2a2a88]'
    },
    {
      title: 'Sports & Recreation',
      description: 'Stay active and healthy with our sports facilities and recreational activities.',
      activities: [
        'Football Team',
        'Basketball League',
        'Tennis Courts',
        'Fitness Center',
        'Swimming Pool',
        'Table Tennis'
      ],
      icon: 'fas fa-running',
      color: 'from-[#b4b1f8] to-[#8a85f5]'
    },
    {
      title: 'Cultural Events',
      description: 'Celebrate diversity and cultural heritage through various events and festivals.',
      activities: [
        'Cultural Week',
        'International Day',
        'Art Exhibitions',
        'Music Concerts',
        'Drama Performances',
        'Food Festivals'
      ],
      icon: 'fas fa-music',
      color: 'from-[#ffa4ff] to-[#ff7bff]'
    },
    {
      title: 'Academic Competitions',
      description: 'Participate in competitions and contests to showcase your skills.',
      activities: [
        'Hackathons',
        'Business Plan Competitions',
        'Design Contests',
        'Debate Championships',
        'Science Fairs',
        'Innovation Challenges'
      ],
      icon: 'fas fa-trophy',
      color: 'from-[#111166] to-[#b4b1f8]'
    }
  ];

  const events = [
    {
      title: 'Orientation Week',
      date: 'September 2-6, 2024',
      description: 'Welcome new students with campus tours, meet & greet sessions, and fun activities.',
      image: '/images/Graduation Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg'
    },
    {
      title: 'Tech Innovation Fair',
      date: 'October 15, 2024',
      description: 'Showcase student projects and innovations in technology and engineering.',
      image: '/images/Graduation Special/473576898_1161969612595416_1303676268995549737_n.jpg'
    },
    {
      title: 'Cultural Festival',
      date: 'November 20-22, 2024',
      description: 'Celebrate diversity with cultural performances, food, and traditional activities.',
      image: '/images/Graduation Special/473620187_1161969932595384_8195860307286033297_n.jpg'
    },
    {
      title: 'Career Fair',
      date: 'December 10, 2024',
      description: 'Connect with potential employers and explore career opportunities.',
      image: '/images/Graduation Special/501491371_1278045884321121_5884436298341591632_n.jpg'
    }
  ];

  const galleryCategories = [
    { id: 'all', name: 'All' },
    { id: 'campus', name: 'Campus' },
    { id: 'events', name: 'Events' },
    { id: 'sports', name: 'Sports' },
    { id: 'academic', name: 'Academic' }
  ];

  const galleryImages = [
    { id: 1, category: 'campus', title: 'Main Campus Building', image: '/images/Graduation Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg' },
    { id: 2, category: 'events', title: 'Graduation Ceremony', image: '/images/Graduation Special/473576898_1161969612595416_1303676268995549737_n.jpg' },
    { id: 3, category: 'sports', title: 'Football Match', image: '/images/Graduation Special/473620187_1161969932595384_8195860307286033297_n.jpg' },
    { id: 4, category: 'academic', title: 'Computer Lab', image: '/images/Graduation Special/501491371_1278045884321121_5884436298341591632_n.jpg' },
    { id: 5, category: 'events', title: 'Cultural Festival', image: '/images/Graduation Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg' },
    { id: 6, category: 'sports', title: 'Basketball Game', image: '/images/Graduation Special/473576898_1161969612595416_1303676268995549737_n.jpg' },
    { id: 7, category: 'campus', title: 'Library', image: '/images/Graduation Special/473620187_1161969932595384_8195860307286033297_n.jpg' },
    { id: 8, category: 'academic', title: 'Workshop Session', image: '/images/Graduation Special/501491371_1278045884321121_5884436298341591632_n.jpg' },
    { id: 9, category: 'events', title: 'Tech Fair', image: '/images/Graduation Special/379923268_251494751199518_8158933241376544005_n-mi.jpeg' }
  ];

  const filteredImages = selectedGallery === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedGallery);

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
            Vibrant Community
          </div>
          <h1 className="text-display text-white mb-6">
            Campus Life
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience a vibrant campus life with diverse activities, clubs, events, 
            and opportunities to grow both academically and personally.
          </p>
        </div>
      </section>

      {/* Student Activities */}
      <section className="py-20 bg-[#fff0ff] dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-users mr-2"></i>
              Student Activities
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Student Activities
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Discover a wide range of activities that cater to diverse interests and passions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="modern-card p-8 text-center group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <div className={`w-20 h-20 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-modern`}>
                  <i className={`${activity.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-heading text-xl text-gray-900 dark:text-[#fff0ff] mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-[#85828d] mb-6 leading-relaxed">
                  {activity.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-[#85828d]">
                  {activity.activities.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-center">
                      <i className="fas fa-check-circle text-[#ffa4ff] dark:text-[#ffa4ff] mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-[#ffe3ff] via-[#fff0ff] to-[#ffe3ff] dark:from-[#000000] dark:via-[#073763] dark:to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#ffa4ff] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-calendar-alt mr-2"></i>
              Upcoming Events
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Stay updated with our exciting campus events and activities throughout the year.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="modern-card overflow-hidden group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <div className="h-64 bg-gray-200 dark:bg-[#4d5464] flex items-center justify-center overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-heading text-2xl text-gray-900 dark:text-[#fff0ff] mb-3">
                    {event.title}
                  </h3>
                  <p className="text-[#111166] dark:text-[#ffa4ff] font-semibold mb-4">
                    {event.date}
                  </p>
                  <p className="text-gray-600 dark:text-[#85828d] leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-20 bg-[#fff0ff] dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-handshake mr-2"></i>
              Clubs & Societies
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Clubs & Societies
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Join our diverse range of clubs and societies to pursue your passions and interests.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="modern-card p-8 group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-modern`}>
                  <i className={`${activity.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-heading text-xl text-gray-900 dark:text-[#fff0ff] mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-[#85828d] mb-6 leading-relaxed">
                  {activity.description}
                </p>
                <div className="space-y-2">
                  {activity.activities.slice(0, 3).map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-600 dark:text-[#85828d]">
                      <i className="fas fa-circle text-[#111166] dark:text-[#ffa4ff] mr-3 text-xs"></i>
                      {item}
                    </div>
                  ))}
                  {activity.activities.length > 3 && (
                    <div className="text-sm text-[#111166] dark:text-[#ffa4ff] font-semibold">
                      +{activity.activities.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-to-br from-[#ffe3ff] via-[#fff0ff] to-[#ffe3ff] dark:from-[#000000] dark:via-[#073763] dark:to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#ffa4ff] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-images mr-2"></i>
              Campus Gallery
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              Campus Gallery
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Explore our campus through stunning visuals of facilities, events, and student life.
            </p>
          </div>
          
          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedGallery(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedGallery === category.id
                    ? 'bg-gradient-to-br from-[#111166] to-[#2a2a88] text-white shadow-lg'
                    : 'bg-white dark:bg-[#4d5464] text-[#111166] dark:text-[#fff0ff] hover:bg-[#fff0ff] dark:hover:bg-[#073763] border border-[#b4b1f8] dark:border-[#073763]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div key={image.id} className="modern-card overflow-hidden group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
                <div className="h-64 bg-gray-200 dark:bg-[#4d5464] flex items-center justify-center overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-heading text-lg text-gray-900 dark:text-[#fff0ff]">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-[#fff0ff] dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#073763] rounded-full text-sm font-medium text-[#111166] dark:text-[#fff0ff] mb-6">
              <i className="fas fa-comments mr-2"></i>
              Student Voices
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-[#fff0ff] mb-6">
              What Students Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#85828d] max-w-3xl mx-auto">
              Hear from our students about their experiences and life at SDTI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="modern-card p-8 text-center group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
              <div className="w-20 h-20 bg-gradient-to-br from-[#111166] to-[#2a2a88] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-quote-left text-2xl text-white"></i>
              </div>
              <p className="text-gray-600 dark:text-[#85828d] italic mb-6 leading-relaxed">
                "The campus life at SDTI is amazing! There's always something happening, 
                from sports events to cultural festivals. I've made lifelong friends here."
              </p>
              <h4 className="font-semibold text-gray-900 dark:text-[#fff0ff]">Ahmed Al-Rashid</h4>
              <p className="text-sm text-gray-600 dark:text-[#85828d]">IT Student</p>
            </div>
            <div className="modern-card p-8 text-center group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
              <div className="w-20 h-20 bg-gradient-to-br from-[#b4b1f8] to-[#8a85f5] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-quote-left text-2xl text-white"></i>
              </div>
              <p className="text-gray-600 dark:text-[#85828d] italic mb-6 leading-relaxed">
                "The clubs and societies have helped me develop leadership skills and 
                connect with like-minded students. It's been an incredible experience."
              </p>
              <h4 className="font-semibold text-gray-900 dark:text-[#fff0ff]">Fatima Hassan</h4>
              <p className="text-sm text-gray-600 dark:text-[#85828d]">Business Student</p>
            </div>
            <div className="modern-card p-8 text-center group bg-white dark:bg-[#000000] border border-[#b4b1f8] dark:border-[#073763]">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ffa4ff] to-[#ff7bff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-quote-left text-2xl text-white"></i>
              </div>
              <p className="text-gray-600 dark:text-[#85828d] italic mb-6 leading-relaxed">
                "SDTI provides the perfect balance between academics and extracurricular 
                activities. The campus facilities are top-notch and the community is welcoming."
              </p>
              <h4 className="font-semibold text-gray-900 dark:text-[#fff0ff]">Mohammed Al-Zahra</h4>
              <p className="text-sm text-gray-600 dark:text-[#85828d]">Engineering Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
            Join Our Community
          </div>
          <h2 className="text-heading text-4xl md:text-5xl text-white mb-6">
            Join Our Vibrant Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience campus life at SDTI and become part of our diverse and dynamic student community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="btn-primary group bg-gradient-to-br from-[#111166] to-[#2a2a88] hover:from-[#2a2a88] hover:to-[#111166] text-white">
              <span className="flex items-center justify-center">
                Apply Now
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>
            <a href="/contact" className="btn-secondary group border border-white text-white hover:bg-white hover:text-[#111166] dark:border-[#ffa4ff] dark:text-[#ffa4ff] dark:hover:bg-[#ffa4ff] dark:hover:text-[#000000]">
              <span className="flex items-center justify-center">
                Learn More
                <i className="fas fa-play ml-2 group-hover:scale-110 transition-transform"></i>
              </span>
            </a>
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
        
        .shadow-modern {
          box-shadow: 0 8px 32px rgba(17, 17, 102, 0.15);
        }
        
        .dark .shadow-modern {
          box-shadow: 0 8px 32px rgba(255, 164, 255, 0.15);
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        .btn-primary {
          padding: 16px 32px;
          border-radius: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
        }
        
        .btn-secondary {
          padding: 16px 32px;
          border-radius: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default CampusLife;
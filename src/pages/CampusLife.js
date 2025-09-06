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
      color: 'from-blue-600 to-blue-700'
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
      color: 'from-green-600 to-green-700'
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
      color: 'from-purple-600 to-purple-700'
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
      color: 'from-orange-600 to-orange-700'
    }
  ];

  const events = [
    {
      title: 'Orientation Week',
      date: 'September 2-6, 2024',
      description: 'Welcome new students with campus tours, meet & greet sessions, and fun activities.',
      image: 'https://via.placeholder.com/400x300/2563eb/ffffff?text=Orientation'
    },
    {
      title: 'Tech Innovation Fair',
      date: 'October 15, 2024',
      description: 'Showcase student projects and innovations in technology and engineering.',
      image: 'https://via.placeholder.com/400x300/059669/ffffff?text=Tech+Fair'
    },
    {
      title: 'Cultural Festival',
      date: 'November 20-22, 2024',
      description: 'Celebrate diversity with cultural performances, food, and traditional activities.',
      image: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Cultural+Fest'
    },
    {
      title: 'Career Fair',
      date: 'December 10, 2024',
      description: 'Connect with potential employers and explore career opportunities.',
      image: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Career+Fair'
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
    { id: 1, category: 'campus', title: 'Main Campus Building', image: 'https://via.placeholder.com/400x300/2563eb/ffffff?text=Campus+Building' },
    { id: 2, category: 'events', title: 'Graduation Ceremony', image: 'https://via.placeholder.com/400x300/059669/ffffff?text=Graduation' },
    { id: 3, category: 'sports', title: 'Football Match', image: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Football' },
    { id: 4, category: 'academic', title: 'Computer Lab', image: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Computer+Lab' },
    { id: 5, category: 'events', title: 'Cultural Festival', image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Cultural+Fest' },
    { id: 6, category: 'sports', title: 'Basketball Game', image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Basketball' },
    { id: 7, category: 'campus', title: 'Library', image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Library' },
    { id: 8, category: 'academic', title: 'Workshop Session', image: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Workshop' },
    { id: 9, category: 'events', title: 'Tech Fair', image: 'https://via.placeholder.com/400x300/06b6d4/ffffff?text=Tech+Fair' }
  ];

  const filteredImages = selectedGallery === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedGallery);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Campus Life
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience a vibrant campus life with diverse activities, clubs, events, 
            and opportunities to grow both academically and personally.
          </p>
        </div>
      </section>

      {/* Student Activities */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Student Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-center card-hover">
                <div className={`w-20 h-20 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${activity.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {activity.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {activity.activities.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {event.date}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Clubs & Societies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl card-hover">
                <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center mb-6`}>
                  <i className={`${activity.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {activity.description}
                </p>
                <div className="space-y-2">
                  {activity.activities.slice(0, 3).map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-circle text-blue-500 mr-3 text-xs"></i>
                      {item}
                    </div>
                  ))}
                  {activity.activities.length > 3 && (
                    <div className="text-sm text-blue-600 font-semibold">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Campus Gallery
          </h2>
          
          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedGallery(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedGallery === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div key={image.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            What Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-quote-left text-2xl text-white"></i>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "The campus life at SDTI is amazing! There's always something happening, 
                from sports events to cultural festivals. I've made lifelong friends here."
              </p>
              <h4 className="font-semibold text-gray-900">Ahmed Al-Rashid</h4>
              <p className="text-sm text-gray-600">IT Student</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-quote-left text-2xl text-white"></i>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "The clubs and societies have helped me develop leadership skills and 
                connect with like-minded students. It's been an incredible experience."
              </p>
              <h4 className="font-semibold text-gray-900">Fatima Hassan</h4>
              <p className="text-sm text-gray-600">Business Student</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-quote-left text-2xl text-white"></i>
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "SDTI provides the perfect balance between academics and extracurricular 
                activities. The campus facilities are top-notch and the community is welcoming."
              </p>
              <h4 className="font-semibold text-gray-900">Mohammed Al-Zahra</h4>
              <p className="text-sm text-gray-600">Engineering Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Vibrant Community
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience campus life at SDTI and become part of our diverse and dynamic student community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="btn-primary">
              Apply Now
            </a>
            <a href="/contact" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;

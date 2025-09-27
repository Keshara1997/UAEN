import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ImageSlideshow from "../components/ImageSlideshow";

const Home = () => {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const featuredCourses = [
    {
      image: "/images/DubaiWeb/Premium Photo 14.png",
      title: "Information Technology",
      description: "Comprehensive IT training covering programming, networking, cybersecurity, and system administration.",
      duration: "2 Years",
      level: "Diploma",
    },
    {
      image: "/images/DubaiWeb/Premium Photo 13.png",
      title: "Engineering Technology",
      description: "Practical engineering skills with focus on modern manufacturing, robotics, and automation.",
      duration: "2 Years",
      level: "Diploma",
    },
    {
      image: "/images/DubaiWeb/Premium Photo 05.png",
      title: "Business Management",
      description: "Essential business skills including leadership, marketing, finance, and entrepreneurship.",
      duration: "1 Year",
      level: "Certificate",
    },
    {
      image: "/images/DubaiWeb/Premium Photo 11.png",
      title: "Digital Media & Design",
      description: "Creative training in graphic design, video editing, and digital storytelling for the modern world.",
      duration: "1 Year",
      level: "Certificate",
    },
    {
      image: "/images/DubaiWeb/Premium Photo 10.png",
      title: "Health Science",
      description: "Introduction to healthcare systems, anatomy, and medical technology for aspiring health professionals.",
      duration: "3 Years",
      level: "Diploma",
    },
    {
      image: "/images/DubaiWeb/Premium Photo 04.png",
      title: "Hotel & Tourism Management",
      description: "Professional training in hospitality, tourism operations, and customer experience management.",
      duration: "2 Years",
      level: "Diploma",
    },
    {
      image: "/images/DubaiWeb/Premium Photo 12.png",
      title: "Mechanical Engineering",
      description: "Advanced mechanical systems, CAD design, and manufacturing processes for modern industry applications.",
      duration: "3 Years",
      level: "Diploma",
    },
    {
      image: "/images/DubaiWeb/Premium Photo 06.png",
      title: "Accounting & Finance",
      description: "Comprehensive financial management, accounting principles, and business analytics for career advancement.",
      duration: "2 Years",
      level: "Diploma",
    },
  ];


  const images = [
    {image: "/images/DubaiWeb/Premium Photo 01.png"},
    {image: "/images/DubaiWeb/Premium Photo 05.png"},
    {image: "/images/DubaiWeb/Premium Photo 11.png"},
    {image: "/images/DubaiWeb/Premium Photo 12.png"},
    {image: "/images/DubaiWeb/Premium Photo 13.png"},
    {image: "/images/DubaiWeb/Premium Photo 14.png"},
    {image: "/images/DubaiWeb/Premium Photo 15.png"},
    {image: "/images/DubaiWeb/Premium Photo 16.png"},
    {image: "/images/DubaiWeb/Premium Photo 17.png"},
    ]


  const upcomingEvents = [
    {
      title: 'Open Day 2024',
      date: 'March 15, 2024',
      description: 'Join us for our annual Open Day and discover all that SDTI has to offer.',
      type: 'Open Day',
      image: "/images/DubaiWeb/Premium Photo 11.png"
    },
    {
      title: 'Tech Innovation Conference',
      date: 'April 20, 2024',
      description: 'Explore the latest trends in technology and innovation.',
      type: 'Conference',
      image: "/images/DubaiWeb/Premium Photo 01.png"
    },
    {
      title: 'Cultural Festival',
      date: 'May 10, 2024',
      description: 'Celebrate diversity and cultural exchange at our annual festival.',
      type: 'Festival',
      image: "/images/DubaiWeb/image.png"
    }
  ];

  const testimonials = [
    {
      image: "/images/DubaiWeb/Premium Photo 07.png",
      content: "SDTI provided me with the practical skills and knowledge that directly led to my current position as a Software Developer. The hands-on approach and industry-relevant curriculum made all the difference.",
      author: "Ahmed Al-Rashid",
      position: "Software Developer, Tech Solutions Inc."
    },
    {
      image: "/images/DubaiWeb/Premium Photo 08.png",
      content: "The Business Management program at SDTI gave me the confidence and skills to start my own company. The lecturers were supportive and the practical projects were invaluable.",
      author: "Fatima Hassan",
      position: "Entrepreneur, Digital Marketing Agency"
    },
    {
      image: "/images/DubaiWeb/Premium Photo 07.png",
      content: "The Engineering Technology course provided excellent practical training. I was able to secure a job immediately after graduation thanks to the industry connections and job placement support.",
      author: "Mohammed Al-Zahra",
      position: "Engineering Technician, Manufacturing Corp."
    }
  ];

  const quickLinks = [
    { icon: 'fas fa-file-alt', label: 'Apply Now', link: '/admissions' },
    { icon: 'fas fa-phone', label: 'Contact Us', link: '/contact' },
    { icon: 'fas fa-download', label: 'Download Prospectus', link: '#' },
    { icon: 'fas fa-calendar', label: 'Upcoming Events', link: '/news' }
  ];

  const videoSrc = "/videos/SDTIDubaiWEBReleaseVideo.mp4";

  // DubaiWeb Images for Slideshow
  const dubaiWebImages = [
    {
      src: "/images/DubaiWeb/Premium Photo 01.png",
      alt: "Modern Campus Facilities",
      caption: "State-of-the-Art Campus",
      description: "Experience learning in our modern, fully-equipped facilities"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 02.png",
      alt: "Technology Labs",
      caption: "Advanced Technology Labs",
      description: "Cutting-edge equipment and technology for hands-on learning"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 03.png",
      alt: "Student Life",
      caption: "Vibrant Student Life",
      description: "Join our diverse community and create lasting memories"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 04.png",
      alt: "Learning Environment",
      caption: "Interactive Learning",
      description: "Engaging classrooms designed for collaborative learning"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 05.png",
      alt: "Professional Development",
      caption: "Career-Focused Education",
      description: "Programs designed to prepare you for real-world success"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 06.png",
      alt: "Industry Connections",
      caption: "Industry Partnerships",
      description: "Strong connections with leading companies and organizations"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 07.png",
      alt: "Expert Faculty",
      caption: "Expert Instructors",
      description: "Learn from experienced professionals and industry experts"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 08.png",
      alt: "Practical Training",
      caption: "Hands-On Training",
      description: "Practical skills development through real-world projects"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 09.png",
      alt: "Modern Infrastructure",
      caption: "Modern Infrastructure",
      description: "Contemporary facilities designed for optimal learning"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 10.png",
      alt: "Student Success",
      caption: "Student Success Stories",
      description: "Join thousands of successful graduates worldwide"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 11.png",
      alt: "Innovation Hub",
      caption: "Innovation & Creativity",
      description: "Fostering innovation and creative thinking in all programs"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 12.png",
      alt: "Global Recognition",
      caption: "Internationally Recognized",
      description: "Globally accredited programs and certifications"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 13.png",
      alt: "Engineering Excellence",
      caption: "Engineering Excellence",
      description: "Advanced engineering programs with industry applications"
    },
    {
      src: "/images/DubaiWeb/Premium Photo 14.png",
      alt: "Technology Innovation",
      caption: "Technology Innovation",
      description: "Leading-edge technology programs for the digital age"
    },
    {
      src: "/images/DubaiWeb/image.png",
      alt: "Campus Overview",
      caption: "Campus Overview",
      description: "A comprehensive view of our modern educational campus"
    },
    {
      src: "/images/DubaiWeb/photo1.jpg",
      alt: "Student Experience",
      caption: "Student Experience",
      description: "Creating memorable experiences and lifelong friendships"
    },
    {
      src: "/images/DubaiWeb/WhatsApp Image 2024-11-07 at 12.46.jpg",
      alt: "Campus Activities",
      caption: "Campus Activities",
      description: "Engaging activities and events throughout the year"
    },
    {
      src: "/images/DubaiWeb/WhatsApp Image 2024-11-07 at 12.46.37_b8c25702.jpg",
      alt: "Learning Spaces",
      caption: "Modern Learning Spaces",
      description: "Comfortable and inspiring environments for effective learning"
    },
    {
      src: "/images/DubaiWeb/WhatsApp Image 2024-11-07 at 16.48.47_89c0a4fd.jpg",
      alt: "Campus Life",
      caption: "Dynamic Campus Life",
      description: "Experience the vibrant energy of campus life at SDTI"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentCourseIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % featuredCourses.length;
          scrollToCourse(nextIndex);
          return nextIndex;
        });
      }, 8000);
    } else {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, featuredCourses.length]);

  const scrollToCourse = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const courseWidth = 300 + 24;
      const scrollPosition = index * courseWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCourseClick = (index) => {
    setCurrentCourseIndex(index);
    scrollToCourse(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[60vh] sm:h-screen overflow-hidden flex items-center justify-center pt-16">
        <video
          className="flex absolute inset-0 w-full h-full object-contain sm:object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      
      <section className="py-24 bg-gradient-to-br from-[#ffe3ff] via-[#fff0ff] to-[#b4b1f8] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#111166] rounded-full text-sm font-medium text-[#111166] dark:text-[#b4b1f8] mb-6">
              <i className="fas fa-heart mr-2"></i>
              Why Choose Us
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Why Choose SDTI Dubai?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover what makes SDTI Dubai the premier choice for technical education and career advancement in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Industry-Relevant Curriculum */}
            <div className="modern-card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <i className="fas fa-industry text-white text-3xl relative z-10"></i>
              </div>
              <h3 className="text-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Industry-Relevant Curriculum
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our programs are designed in collaboration with industry leaders to ensure you gain practical skills that employers value most.
              </p>
            </div>

            {/* Expert Faculty */}
            <div className="modern-card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <i className="fas fa-chalkboard-teacher text-white text-3xl relative z-10"></i>
              </div>
              <h3 className="text-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Expert Faculty
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Learn from experienced professionals and industry experts who bring real-world knowledge to the classroom.
              </p>
            </div>

            {/* Modern Facilities */}
            <div className="modern-card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <i className="fas fa-building text-white text-3xl relative z-10"></i>
              </div>
              <h3 className="text-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Modern Facilities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                State-of-the-art laboratories, workshops, and learning spaces equipped with the latest technology and equipment.
              </p>
            </div>

            {/* Career Support */}
            <div className="modern-card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <i className="fas fa-briefcase text-white text-3xl relative z-10"></i>
              </div>
              <h3 className="text-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Career Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Comprehensive career services including job placement assistance, internship opportunities, and industry networking.
              </p>
            </div>

            {/* Flexible Learning */}
            <div className="modern-card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <i className="fas fa-clock text-white text-3xl relative z-10"></i>
              </div>
              <h3 className="text-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Flexible Learning Options
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Choose from full-time, part-time, and evening programs designed to fit your schedule and lifestyle.
              </p>
            </div>

            {/* International Recognition */}
            <div className="modern-card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <i className="fas fa-globe text-white text-3xl relative z-10"></i>
              </div>
              <h3 className="text-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">
                International Recognition
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Globally recognized certifications and accreditations that enhance your career prospects worldwide.
              </p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-[#111166] dark:text-[#b4b1f8] mb-2 group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                  Employment Rate
                </div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-[#111166] dark:text-[#b4b1f8] mb-2 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-[#111166] dark:text-[#b4b1f8] mb-2 group-hover:scale-110 transition-transform duration-300">
                  1000+
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                  Graduates
                </div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-[#111166] dark:text-[#b4b1f8] mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                  Industry Partners
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link to="/admissions" className="btn-primary group">
              <span>
                Start Your Journey Today
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>




      {/* Featured Courses */}
      <section className="py-24 bg-gradient-to-br from-[#ffe3ff] via-[#fff0ff] to-[#b4b1f8] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#111166] rounded-full text-sm font-medium text-[#111166] dark:text-[#b4b1f8] mb-6">
              <i className="fas fa-star mr-2"></i>
              Popular Programs
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our industry-leading programs designed to prepare you for success in today's competitive job market.
            </p>
          </div>

          {/* Horizontal scroll row */}
          <div className="relative">
           

         

            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {featuredCourses.map((course, index) => (
                <div 
                  key={index} 
                  onClick={() => handleCourseClick(index)}
                  className={`modern-card min-w-[300px] max-w-sm flex-shrink-0 overflow-hidden rounded-2xl shadow-md bg-white dark:bg-gray-800 group snap-start cursor-pointer transition-all duration-300 ${
                    index === currentCourseIndex ? 'ring-2 ring-[#111166] scale-105' : 'hover:scale-102'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center text-white">
                        <i className="fas fa-clock mr-2"></i>
                        <span className="text-sm font-medium">{course.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-heading text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link 
                        to="/programs" 
                        className="text-[#111166] dark:text-[#b4b1f8] font-semibold hover:text-[#0a0a4a] dark:hover:text-[#ffa4ff] transition-colors group"
                      >
                        Learn More
                        <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                      </Link>
                      <div className="flex items-center text-yellow-500">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">(4.9)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/programs" className="btn-outline group">
              <span>
                View All Programs
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-24 bg-gradient-to-br from-[#ffe3ff] via-[#fff0ff] to-[#b4b1f8] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#111166] rounded-full text-sm font-medium text-[#111166] dark:text-[#b4b1f8] mb-6">
              <i className="fas fa-award mr-2"></i>
              Trusted & Certified
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Industry Recognition & Accreditation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our certifications and accreditations demonstrate our commitment to maintaining the highest standards of education and training.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12">
            <h3 className="text-heading text-2xl md:text-3xl text-center text-gray-900 dark:text-white mb-12">
              Our Certifications & Accreditations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center justify-items-center">
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
                <div
                  key={index}
                  className="group flex items-center justify-center p-6 bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <i className="fas fa-globe text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Internationally Recognized</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Global standards and recognition</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <i className="fas fa-shield-alt text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Quality Assured</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Rigorous quality standards</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <i className="fas fa-industry text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Industry Approved</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Endorsed by leading companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-gradient-to-br from-[#ffe3ff] via-[#fff0ff] to-[#b4b1f8] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#111166] rounded-full text-sm font-medium text-[#111166] dark:text-[#b4b1f8] mb-6">
              <i className="fas fa-calendar-alt mr-2"></i>
              Stay Updated
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Latest News & Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don&apos;t miss out on our exciting upcoming events, festivals, open days, and conferences.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className="modern-card overflow-hidden rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#111166] text-white px-3 py-1 text-sm font-medium rounded-full shadow-md">
                    {event.date}
                  </div>
                </div>

                <div className="p-6 text-center">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-[#b4b1f8]/20 text-[#111166] text-sm font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#111166] transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <Link 
                    to="/news" 
                    className="inline-flex items-center text-[#111166] font-semibold hover:text-[#0a0a4a] transition-colors"
                  >
                    Learn More
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All */}
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


      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-[#ffe3ff] via-[#eb70eb] to-[#9994ec] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#111166] rounded-full text-sm font-medium text-[#111166] dark:text-[#b4b1f8] mb-6">
              <i className="fas fa-quote-left mr-2"></i>
              Student Success Stories
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our graduates who have achieved remarkable success in their careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="modern-card p-8 group">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className=" glass-effect rounded-full flex items-center justify-center ">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-full flex items-center justify-center">
                      <i className="fas fa-quote-left text-white text-xs"></i>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-center">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-[#111166] dark:text-[#b4b1f8] text-center font-medium">
                    {testimonial.position}
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-[#b4b1f8] dark:text-[#111166] opacity-50">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-center relative z-10">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <div className="flex items-center text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#b4b1f8] dark:bg-[#111166] rounded-full text-sm font-medium text-[#111166] dark:text-[#b4b1f8] mb-6">
              <i className="fas fa-rocket mr-2"></i>
              Get Started Today
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Quick Links
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Take the next step in your educational journey with these quick actions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="modern-card p-8 text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffe3ff] to-[#b4b1f8] dark:from-[#111166] dark:to-[#b4b1f8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#111166] to-[#b4b1f8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-modern">
                    <i className={`${link.icon} text-2xl text-white`}></i>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white group-hover:text-[#111166] dark:group-hover:text-[#b4b1f8] transition-colors duration-300 text-lg">
                    {link.label}
                  </span>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fas fa-arrow-right text-[#111166] dark:text-[#b4b1f8]"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
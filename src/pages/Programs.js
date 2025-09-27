import React, { useState } from 'react';

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'diploma', name: 'Diplomas' },
    { id: 'certificate', name: 'Certificates' },
    { id: 'short', name: 'Short Courses' },
    { id: 'degree', name: 'Degrees' },
    { id: 'master', name: 'Masters' },
    { id: 'phd', name: 'PhD' },
  ];

  const programs = [
  // Diplomas
  {
    id: 1,
    category: "diploma",
    title: "Information Technology",
    duration: "2 Years",
    level: "Diploma",
    overview:
      "Comprehensive IT training covering programming, networking, system administration, and software development.",
    objectives: [
      "Master programming languages (Python, Java, C++)",
      "Understand network architecture and security",
      "Learn database design and management",
      "Develop web and mobile applications",
    ],
    requirements: [
      "High school diploma or equivalent",
      "Basic computer literacy",
      "Mathematics proficiency",
      "English language skills",
    ],
    careerOpportunities: [
      "Software Developer",
      "Network Administrator",
      "System Analyst",
      "IT Support Specialist",
      "Web Developer",
    ],
    Image: "/images/programs/diploma-it.jpg",
    color: "from-[#111166] to-[#b4b1f8]",
  },
  {
    id: 2,
    category: "diploma",
    title: "Engineering Technology",
    duration: "2 Years",
    level: "Diploma",
    overview:
      "Practical engineering skills with focus on modern manufacturing, automation, and technical problem-solving.",
    objectives: [
      "Master engineering principles and practices",
      "Learn CAD/CAM software applications",
      "Understand manufacturing processes",
      "Develop technical problem-solving skills",
    ],
    requirements: [
      "High school diploma with science subjects",
      "Mathematics and physics proficiency",
      "Technical aptitude",
      "English language skills",
    ],
    careerOpportunities: [
      "Engineering Technician",
      "Manufacturing Engineer",
      "Quality Control Specialist",
      "CAD Designer",
      "Production Supervisor",
    ],
    Image: "/images/programs/diploma-engineering.jpg",
    color: "from-[#111166] to-[#ffa4ff]",
  },

  // Certificates
  {
    id: 3,
    category: "certificate",
    title: "Business Management",
    duration: "1 Year",
    level: "Certificate",
    overview:
      "Essential business skills including management principles, marketing strategies, and entrepreneurship.",
    objectives: [
      "Understand business management principles",
      "Learn marketing and sales strategies",
      "Develop leadership and communication skills",
      "Master financial management basics",
    ],
    requirements: [
      "High school diploma",
      "Basic English proficiency",
      "Interest in business and management",
      "Communication skills",
    ],
    careerOpportunities: [
      "Business Manager",
      "Marketing Coordinator",
      "Sales Representative",
      "Administrative Assistant",
      "Entrepreneur",
    ],
    Image: "/images/programs/certificate-business.jpg",
    color: "from-[#b4b1f8] to-[#ffa4ff]",
  },
  {
    id: 4,
    category: "certificate",
    title: "Digital Marketing",
    duration: "6 Months",
    level: "Certificate",
    overview:
      "Modern digital marketing strategies including social media, SEO, content marketing, and analytics.",
    objectives: [
      "Master social media marketing",
      "Learn SEO and SEM techniques",
      "Understand content marketing strategies",
      "Analyze marketing performance metrics",
    ],
    requirements: [
      "High school diploma",
      "Basic computer skills",
      "English proficiency",
      "Creative thinking ability",
    ],
    careerOpportunities: [
      "Digital Marketing Specialist",
      "Social Media Manager",
      "SEO Specialist",
      "Content Creator",
      "Marketing Analyst",
    ],
    Image: "/images/programs/certificate-marketing.jpg",
    color: "from-[#ffa4ff] to-[#ffe3ff]",
  },

  // Short Courses
  {
    id: 5,
    category: "short",
    title: "Web Development",
    duration: "3 Months",
    level: "Short Course",
    overview:
      "Intensive web development course covering front-end and back-end technologies.",
    objectives: [
      "Master HTML, CSS, and JavaScript",
      "Learn React and Node.js",
      "Understand database integration",
      "Build responsive web applications",
    ],
    requirements: [
      "Basic computer literacy",
      "Logical thinking ability",
      "English language skills",
      "Commitment to learning",
    ],
    careerOpportunities: [
      "Front-end Developer",
      "Back-end Developer",
      "Full-stack Developer",
      "Web Designer",
      "Freelance Developer",
    ],
    Image: "/images/programs/short-webdev.jpg",
    color: "from-[#ffe3ff] to-[#fff0ff]",
  },
  {
    id: 6,
    category: "short",
    title: "Graphic Design",
    duration: "4 Months",
    level: "Short Course",
    overview:
      "Creative design skills using industry-standard software and design principles.",
    objectives: [
      "Master Adobe Creative Suite",
      "Learn design principles and typography",
      "Develop branding and identity design skills",
      "Create print and digital designs",
    ],
    requirements: [
      "Creative aptitude",
      "Basic computer skills",
      "Artistic ability",
      "English language skills",
    ],
    careerOpportunities: [
      "Graphic Designer",
      "UI/UX Designer",
      "Brand Designer",
      "Print Designer",
      "Freelance Designer",
    ],
    Image: "/images/programs/short-graphicdesign.jpg",
    color: "from-[#111166] to-[#ffe3ff]",
  },

  // Degrees
  {
    id: 7,
    category: "degree",
    title: "Bachelor of Computer Science",
    duration: "4 Years",
    level: "Degree",
    overview:
      "In-depth computer science education covering algorithms, data structures, AI, software engineering, and cybersecurity.",
    objectives: [
      "Develop strong foundation in computer science",
      "Master software engineering principles",
      "Learn artificial intelligence & machine learning",
      "Understand cybersecurity and cloud computing",
    ],
    requirements: [
      "High school diploma with mathematics",
      "Strong analytical and problem-solving skills",
      "English proficiency",
    ],
    careerOpportunities: [
      "Software Engineer",
      "Data Scientist",
      "Cybersecurity Analyst",
      "AI/ML Engineer",
      "Cloud Architect",
    ],
    Image: "/images/programs/degree-cs.jpg",
    color: "from-[#b4b1f8] to-[#fff0ff]",
  },

  // Masters
  {
    id: 8,
    category: "master",
    title: "Master of Business Administration (MBA)",
    duration: "2 Years",
    level: "Master",
    overview:
      "Advanced program developing leadership, strategic management, and global business decision-making skills.",
    objectives: [
      "Enhance leadership and decision-making abilities",
      "Master corporate strategy and business analytics",
      "Understand global business and finance",
      "Develop advanced entrepreneurship skills",
    ],
    requirements: [
      "Bachelor's degree in business or related field",
      "Work experience preferred",
      "Strong English communication skills",
    ],
    careerOpportunities: [
      "CEO / Executive Manager",
      "Business Consultant",
      "Project Manager",
      "Financial Analyst",
      "Entrepreneur",
    ],
    Image: "/images/programs/master-mba.jpg",
    color: "from-[#ffa4ff] to-[#b4b1f8]",
  },

  // PhD
  {
    id: 9,
    category: "phd",
    title: "PhD in Artificial Intelligence",
    duration: "3-5 Years",
    level: "Doctorate",
    overview:
      "Research-focused program exploring advanced AI concepts, machine learning models, and real-world applications.",
    objectives: [
      "Conduct cutting-edge research in AI & ML",
      "Publish in international journals and conferences",
      "Contribute to AI ethics and policy-making",
      "Innovate in robotics, automation, and NLP",
    ],
    requirements: [
      "Master's degree in Computer Science, AI, or related field",
      "Research proposal submission",
      "Strong academic and analytical background",
    ],
    careerOpportunities: [
      "AI Research Scientist",
      "University Professor",
      "Chief Data Officer",
      "AI Policy Advisor",
      "Research Lab Director",
    ],
    Image: "/images/programs/phd-ai.jpg",
    color: "from-[#111166] to-[#ffa4ff]",
  },
];


  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#111166] via-[#b4b1f8] to-[#ffa4ff] dark:from-[#000000] dark:via-[#073763] dark:to-[#4d5464] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-[#ffe3ff] dark:text-[#85828d] max-w-3xl mx-auto">
            Explore our comprehensive range of programs designed to prepare you for 
            successful careers in various industries.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#111166] text-white shadow-lg dark:bg-[#073763]'
                    : 'bg-[#ffe3ff] dark:bg-[#4d5464] text-[#111166] dark:text-[#fff0ff] hover:bg-[#fff0ff] dark:hover:bg-[#67666e]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gradient-to-br from-[#ffe3ff] to-[#fff0ff] dark:bg-gradient-to-br dark:from-[#000000] dark:to-[#073763]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="bg-white dark:bg-[#073763] rounded-2xl shadow-lg overflow-hidden card-hover hover:shadow-xl transition-all duration-300 border border-[#b4b1f8] dark:border-[#4d5464]">
                {/* Program Header */}
                <div className={`h-48 bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-graduation-cap text-3xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{program.level}</h3>
                  </div>
                </div>

                <div className="p-8">
                  {/* Program Title and Details */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-[#fff0ff] mb-2">
                      {program.title}
                    </h3>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-[#85828d] mb-4">
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-2"></i>
                        {program.duration}
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-signal mr-2"></i>
                        {program.level}
                      </span>
                    </div>
                  </div>

                  {/* Program Overview */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-[#fff0ff] mb-3">Overview</h4>
                    <p className="text-gray-600 dark:text-[#85828d] leading-relaxed">
                      {program.overview}
                    </p>
                  </div>

                  {/* Program Objectives */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-[#fff0ff] mb-3">Learning Objectives</h4>
                    <ul className="space-y-2">
                      {program.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-[#85828d]">
                          <i className="fas fa-check-circle text-[#111166] dark:text-[#b4b1f8] mr-3 mt-1"></i>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Entry Requirements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-[#fff0ff] mb-3">Entry Requirements</h4>
                    <ul className="space-y-2">
                      {program.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-[#85828d]">
                          <i className="fas fa-arrow-right text-[#111166] dark:text-[#ffa4ff] mr-3 mt-1"></i>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Opportunities */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-[#fff0ff] mb-3">Career Opportunities</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.careerOpportunities.map((career, index) => (
                        <span key={index} className="bg-[#b4b1f8] dark:bg-[#4d5464] text-[#111166] dark:text-[#fff0ff] px-3 py-1 rounded-full text-sm">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#111166] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0a0a4a] dark:bg-[#073763] dark:hover:bg-[#052a52] transition-all duration-300 flex-1 text-center">
                      Apply Now
                    </button>
                    <button className="border-2 border-[#111166] text-[#111166] dark:border-[#b4b1f8] dark:text-[#b4b1f8] px-6 py-3 rounded-full font-semibold hover:bg-[#111166] hover:text-white dark:hover:bg-[#b4b1f8] dark:hover:text-[#111166] transition-all duration-300 flex-1 text-center">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-20 bg-white dark:bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-[#fff0ff] mb-16">
            Program Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-[#073763] rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-[#ffe3ff] dark:bg-[#4d5464]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#111166] dark:text-[#fff0ff]">Program</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#111166] dark:text-[#fff0ff]">Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#111166] dark:text-[#fff0ff]">Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#111166] dark:text-[#fff0ff]">Career Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#b4b1f8] dark:divide-[#67666e]">
                {programs.map((program) => (
                  <tr key={program.id} className="hover:bg-[#fff0ff] dark:hover:bg-[#4d5464] transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mr-4`}>
                          <i className="fas fa-graduation-cap text-white"></i>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-[#fff0ff]">{program.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-[#85828d]">{program.duration}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-[#85828d]">{program.level}</td>
                    <td className="px-6 py-4">
                      <span className="bg-[#b4b1f8] dark:bg-[#4d5464] text-[#111166] dark:text-[#fff0ff] px-3 py-1 rounded-full text-sm">
                        {program.careerOpportunities[0]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#111166] via-[#b4b1f8] to-[#ffa4ff] dark:bg-gradient-to-br dark:from-[#000000] dark:via-[#073763] dark:to-[#4d5464]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-[#ffe3ff] dark:text-[#85828d] mb-8">
            Choose the program that best fits your career goals and apply today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="bg-white text-[#111166] px-8 py-3 rounded-full font-semibold hover:bg-[#ffe3ff] dark:bg-[#fff0ff] dark:text-[#073763] dark:hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Apply Now
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white dark:border-[#fff0ff] dark:text-[#fff0ff] px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#111166] dark:hover:bg-[#fff0ff] dark:hover:text-[#073763] transition-all duration-300 transform hover:-translate-y-1">
              Get More Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
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
    color: "from-blue-600 to-blue-700",
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
    color: "from-green-600 to-green-700",
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
    color: "from-purple-600 to-purple-700",
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
    color: "from-pink-600 to-pink-700",
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
    color: "from-orange-600 to-orange-700",
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
    color: "from-teal-600 to-teal-700",
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
    color: "from-indigo-600 to-indigo-700",
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
      "Bachelor’s degree in business or related field",
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
    color: "from-red-600 to-red-700",
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
      "Master’s degree in Computer Science, AI, or related field",
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
    color: "from-yellow-600 to-yellow-700",
  },
];


  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our comprehensive range of programs designed to prepare you for 
            successful careers in various industries.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden card-hover">
                {/* Program Header */}
                <div className={`h-48 bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                  <i className={`${program.icon} text-5xl text-white`}></i>
                </div>

                <div className="p-8">
                  {/* Program Title and Details */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {program.title}
                    </h3>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
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
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Overview</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {program.overview}
                    </p>
                  </div>

                  {/* Program Objectives */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Learning Objectives</h4>
                    <ul className="space-y-2">
                      {program.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                          <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Entry Requirements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Entry Requirements</h4>
                    <ul className="space-y-2">
                      {program.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                          <i className="fas fa-arrow-right text-blue-500 mr-3 mt-1"></i>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Opportunities */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Career Opportunities</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.careerOpportunities.map((career, index) => (
                        <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-primary flex-1 text-center">
                      Apply Now
                    </button>
                    <button className="btn-outline flex-1 text-center">
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
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Program Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Program</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Career Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {programs.map((program) => (
                  <tr key={program.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mr-4`}>
                          <i className={`${program.icon} text-white`}></i>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">{program.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{program.duration}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{program.level}</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
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
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose the program that best fits your career goals and apply today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="btn-primary">
              Apply Now
            </a>
            <a href="/contact" className="btn-secondary">
              Get More Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

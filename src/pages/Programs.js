import React, { useState } from 'react';

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'degree', name: 'Undergraduate / Degrees' },
    { id: 'postgraduate', name: 'Postgraduate / Masters' },
    { id: 'doctorate', name: 'Doctorate / PhD' },
    { id: 'diploma', name: 'Diplomas' },
    { id: 'certificate', name: 'Certificates' },
    { id: 'short-course', name: 'Short Courses' },
    { id: 'language', name: 'Language Courses' },

  ];

const programs = [
  // === Undergraduate Degrees ===
  {
    id: 10,
    category: "degree",
    title: "Bachelor of Business Management",
    duration: "4 Years",
    level: "Degree",
    overview:
      "Comprehensive program in modern business management covering leadership, operations, and global strategies.",
    objectives: [
      "Understand management and leadership principles",
      "Develop problem-solving and decision-making skills",
      "Learn strategic planning and operations management",
      "Gain knowledge of international business trends",
    ],
    requirements: [
      "High school diploma or equivalent",
      "Mathematics and English proficiency",
      "Strong analytical and communication skills",
    ],
    careerOpportunities: [
      "Business Manager",
      "Operations Analyst",
      "Management Consultant",
      "Entrepreneur",
      "Corporate Strategist",
    ],
    Image: "/images/programs/degree-bbm.jpg",
    color: "from-[#111166] to-[#ffa4ff]",
  },
  {
    id: 11,
    category: "degree",
    title: "Bachelor of Business Administration (BBA)",
    duration: "4 Years",
    level: "Degree",
    overview:
      "Focuses on foundational business skills including marketing, finance, HR, and entrepreneurship.",
    objectives: [
      "Develop a strong foundation in business principles",
      "Understand financial and marketing strategies",
      "Enhance leadership and communication skills",
      "Learn HR and organizational management",
    ],
    requirements: [
      "High school diploma",
      "English proficiency",
      "Interest in business and entrepreneurship",
    ],
    careerOpportunities: [
      "Administrative Manager",
      "Business Development Officer",
      "Marketing Executive",
      "HR Specialist",
      "Entrepreneur",
    ],
    Image: "/images/programs/degree-bba.jpg",
    color: "from-[#b4b1f8] to-[#fff0ff]",
  },
  {
    id: 12,
    category: "degree",
    title: "Bachelor of Business – Marketing",
    duration: "4 Years",
    level: "Degree",
    overview:
      "Explores marketing strategies, consumer behavior, branding, and digital marketing trends.",
    objectives: [
      "Understand marketing theories and applications",
      "Learn consumer research and analytics",
      "Develop digital and social media marketing skills",
      "Design and manage branding campaigns",
    ],
    requirements: [
      "High school diploma",
      "English proficiency",
      "Creative and analytical mindset",
    ],
    careerOpportunities: [
      "Marketing Manager",
      "Brand Strategist",
      "Digital Marketing Specialist",
      "Market Research Analyst",
      "Advertising Executive",
    ],
    Image: "/images/programs/degree-marketing.jpg",
    color: "from-[#ffa4ff] to-[#ffe3ff]",
  },
  {
    id: 13,
    category: "degree",
    title: "Bachelor of Business – Accounting",
    duration: "4 Years",
    level: "Degree",
    overview:
      "Provides deep knowledge in financial accounting, auditing, taxation, and corporate finance.",
    objectives: [
      "Master financial reporting and analysis",
      "Understand taxation and auditing principles",
      "Learn corporate and managerial finance",
      "Gain knowledge of global accounting standards",
    ],
    requirements: [
      "High school diploma with mathematics",
      "English proficiency",
      "Interest in finance and numbers",
    ],
    careerOpportunities: [
      "Chartered Accountant",
      "Financial Analyst",
      "Auditor",
      "Tax Consultant",
      "Corporate Treasurer",
    ],
    Image: "/images/programs/degree-accounting.jpg",
    color: "from-[#111166] to-[#ffe3ff]",
  },
  {
    id: 14,
    category: "degree",
    title: "Bachelor of Business – Human Resource Management (HRM)",
    duration: "4 Years",
    level: "Degree",
    overview:
      "Covers workforce management, organizational development, labor law, and strategic HR planning.",
    objectives: [
      "Learn HR principles and practices",
      "Understand employee relations and labor laws",
      "Develop organizational leadership skills",
      "Enhance recruitment and talent management strategies",
    ],
    requirements: [
      "High school diploma",
      "English proficiency",
      "Good communication and people skills",
    ],
    careerOpportunities: [
      "HR Manager",
      "Recruitment Specialist",
      "Training & Development Officer",
      "Labor Relations Manager",
      "Organizational Development Consultant",
    ],
    Image: "/images/programs/degree-hrm.jpg",
    color: "from-[#ffa4ff] to-[#b4b1f8]",
  },
  {
    id: 15,
    category: "degree",
    title: "Bachelor of Tourism in Hospitality Management",
    duration: "4 Years",
    level: "Degree",
    overview:
      "Prepares students for global hospitality careers with focus on tourism, hotel management, and customer service excellence.",
    objectives: [
      "Gain knowledge of tourism and hospitality industries",
      "Develop hotel and event management skills",
      "Learn customer service and guest relations",
      "Understand sustainable tourism strategies",
    ],
    requirements: [
      "High school diploma",
      "English proficiency",
      "Interest in travel and hospitality",
    ],
    careerOpportunities: [
      "Hotel Manager",
      "Tourism Consultant",
      "Event Manager",
      "Resort Operations Manager",
      "Hospitality Entrepreneur",
    ],
    Image: "/images/programs/degree-tourism.jpg",
    color: "from-[#b4b1f8] to-[#ffe3ff]",
  },
  {
    id: 16,
    category: "degree",
    title: "Bachelor of Science Information Technology",
    duration: "4 Years",
    level: "Degree",
    overview:
      "Comprehensive IT program covering software, networking, databases, and system administration.",
    objectives: [
      "Master programming and software development",
      "Understand database design and management",
      "Gain networking and security knowledge",
      "Develop web and mobile applications",
    ],
    requirements: [
      "High school diploma with mathematics",
      "English proficiency",
      "Strong analytical and logical thinking",
    ],
    careerOpportunities: [
      "Software Developer",
      "IT Administrator",
      "Network Engineer",
      "Database Manager",
      "System Analyst",
    ],
    Image: "/images/programs/degree-it.jpg",
    color: "from-[#111166] to-[#ffa4ff]",
  },
  {
    id: 17,
    category: "degree",
    title: "Bachelor of Science Software Engineering",
    duration: "4 Years",
    level: "Degree",
    overview:
      "In-depth study of software design, development methodologies, and project management.",
    objectives: [
      "Learn software development life cycle",
      "Master software architecture and design patterns",
      "Understand testing and quality assurance",
      "Develop project management skills",
    ],
    requirements: [
      "High school diploma with mathematics",
      "Programming knowledge preferred",
      "English proficiency",
    ],
    careerOpportunities: [
      "Software Engineer",
      "Project Manager",
      "QA Engineer",
      "Systems Architect",
      "DevOps Engineer",
    ],
    Image: "/images/programs/degree-se.jpg",
    color: "from-[#ffa4ff] to-[#fff0ff]",
  },
  {
    id: 18,
    category: "degree",
    title: "Bachelor of Science Cyber Security",
    duration: "4 Years",
    level: "Degree",
    overview:
      "Focuses on security strategies, ethical hacking, cryptography, and cyber law.",
    objectives: [
      "Learn network and system security",
      "Master ethical hacking and penetration testing",
      "Understand cryptography and data protection",
      "Study cyber law and digital forensics",
    ],
    requirements: [
      "High school diploma with mathematics",
      "Strong problem-solving skills",
      "English proficiency",
    ],
    careerOpportunities: [
      "Cybersecurity Analyst",
      "Penetration Tester",
      "Security Engineer",
      "Digital Forensic Specialist",
      "Information Security Officer",
    ],
    Image: "/images/programs/degree-cyber.jpg",
    color: "from-[#111166] to-[#b4b1f8]",
  },
  {
    id: 19,
    category: "degree",
    title: "Bachelor of Science Artificial Intelligence",
    duration: "4 Years",
    level: "Degree",
    overview:
      "Specialized program on AI, machine learning, deep learning, and robotics.",
    objectives: [
      "Master machine learning algorithms",
      "Understand neural networks and deep learning",
      "Develop AI applications in robotics and NLP",
      "Study AI ethics and policy frameworks",
    ],
    requirements: [
      "High school diploma with mathematics",
      "Programming background preferred",
      "English proficiency",
    ],
    careerOpportunities: [
      "AI Engineer",
      "Machine Learning Specialist",
      "Data Scientist",
      "Robotics Engineer",
      "AI Researcher",
    ],
    Image: "/images/programs/degree-ai.jpg",
    color: "from-[#b4b1f8] to-[#ffe3ff]",
  },
  // === Postgraduate (Masters) ===
{
  id: 20,
  category: "master",
  title: "Master of Marketing",
  duration: "2 Years",
  level: "Master",
  overview:
    "Advanced marketing degree focusing on consumer behavior, branding, digital marketing, and strategic planning.",
  objectives: [
    "Develop advanced marketing strategies",
    "Understand consumer behavior and analytics",
    "Learn international and digital marketing trends",
    "Design and evaluate branding campaigns",
  ],
  requirements: [
    "Bachelor’s degree in marketing, business, or related field",
    "English proficiency",
    "Work experience preferred",
  ],
  careerOpportunities: [
    "Marketing Director",
    "Brand Manager",
    "Digital Marketing Strategist",
    "Market Research Director",
    "Advertising Consultant",
  ],
  Image: "/images/programs/master-marketing.jpg",
  color: "from-[#ffa4ff] to-[#ffe3ff]",
},
{
  id: 21,
  category: "master",
  title: "Master of Human Resource Management",
  duration: "2 Years",
  level: "Master",
  overview:
    "Equips professionals with skills in organizational leadership, labor law, employee development, and strategic HR planning.",
  objectives: [
    "Master organizational behavior and HR policies",
    "Develop advanced recruitment and training programs",
    "Understand labor relations and employment law",
    "Enhance leadership and change management skills",
  ],
  requirements: [
    "Bachelor’s degree in HR, management, or related field",
    "English proficiency",
    "Work experience preferred",
  ],
  careerOpportunities: [
    "HR Director",
    "Organizational Development Consultant",
    "Talent Acquisition Manager",
    "Compensation & Benefits Specialist",
    "Employee Relations Manager",
  ],
  Image: "/images/programs/master-hrm.jpg",
  color: "from-[#b4b1f8] to-[#fff0ff]",
},
{
  id: 22,
  category: "master",
  title: "Master of Education",
  duration: "2 Years",
  level: "Master",
  overview:
    "Designed for educators and administrators, focusing on advanced teaching, curriculum design, and education policy.",
  objectives: [
    "Understand advanced educational theories",
    "Develop leadership skills in education",
    "Design curriculum and assessment methods",
    "Research modern pedagogy and policy-making",
  ],
  requirements: [
    "Bachelor’s degree in Education or related field",
    "Teaching experience preferred",
    "English proficiency",
  ],
  careerOpportunities: [
    "School Principal",
    "Education Consultant",
    "Curriculum Developer",
    "Policy Advisor",
    "University Lecturer",
  ],
  Image: "/images/programs/master-education.jpg",
  color: "from-[#111166] to-[#ffa4ff]",
},
{
  id: 23,
  category: "master",
  title: "Master of Tourism and Hospitality Management",
  duration: "2 Years",
  level: "Master",
  overview:
    "Prepares graduates for leadership roles in the tourism and hospitality industry with global perspectives.",
  objectives: [
    "Master hotel and resort management",
    "Understand sustainable tourism practices",
    "Develop international hospitality strategies",
    "Enhance customer service leadership skills",
  ],
  requirements: [
    "Bachelor’s degree in tourism, hospitality, or business",
    "English proficiency",
    "Work experience preferred",
  ],
  careerOpportunities: [
    "Hotel General Manager",
    "Tourism Development Director",
    "Event Planning Director",
    "Hospitality Consultant",
    "Resort Operations Executive",
  ],
  Image: "/images/programs/master-tourism.jpg",
  color: "from-[#ffa4ff] to-[#b4b1f8]",
},
{
  id: 24,
  category: "master",
  title: "Master of Law (LLM)",
  duration: "2 Years",
  level: "Master",
  overview:
    "Provides specialization in areas of law such as international law, human rights, business law, and legal research.",
  objectives: [
    "Deepen knowledge of legal frameworks",
    "Develop advanced legal research skills",
    "Understand international and comparative law",
    "Specialize in corporate or human rights law",
  ],
  requirements: [
    "Bachelor of Laws (LLB) or equivalent",
    "English proficiency",
    "Strong analytical and research background",
  ],
  careerOpportunities: [
    "Legal Consultant",
    "Corporate Lawyer",
    "International Law Specialist",
    "Human Rights Advocate",
    "Policy Advisor",
  ],
  Image: "/images/programs/master-law.jpg",
  color: "from-[#111166] to-[#b4b1f8]",
},
{
  id: 25,
  category: "master",
  title: "Master of Nursing",
  duration: "2 Years",
  level: "Master",
  overview:
    "Designed for registered nurses seeking advanced practice, leadership, and research skills in healthcare.",
  objectives: [
    "Advance clinical nursing practices",
    "Develop leadership in healthcare settings",
    "Conduct nursing and health-related research",
    "Enhance patient care and public health strategies",
  ],
  requirements: [
    "Bachelor of Nursing degree",
    "Valid nursing license",
    "Work experience in healthcare",
  ],
  careerOpportunities: [
    "Advanced Practice Nurse",
    "Nurse Educator",
    "Healthcare Administrator",
    "Clinical Nurse Specialist",
    "Public Health Officer",
  ],
  Image: "/images/programs/master-nursing.jpg",
  color: "from-[#ffa4ff] to-[#ffe3ff]",
},
{
  id: 26,
  category: "master",
  title: "Master of Science in Psychology",
  duration: "2 Years",
  level: "Master",
  overview:
    "Explores advanced topics in clinical, counseling, and organizational psychology, preparing for professional practice or research.",
  objectives: [
    "Understand advanced psychological theories",
    "Develop counseling and therapy techniques",
    "Conduct psychological research",
    "Apply psychology in organizational and clinical settings",
  ],
  requirements: [
    "Bachelor’s degree in psychology or related field",
    "English proficiency",
    "Strong interpersonal skills",
  ],
  careerOpportunities: [
    "Clinical Psychologist",
    "Counseling Specialist",
    "Organizational Psychologist",
    "Researcher",
    "University Lecturer",
  ],
  Image: "/images/programs/master-psychology.jpg",
  color: "from-[#b4b1f8] to-[#fff0ff]",
},
{
  id: 27,
  category: "master",
  title: "Master of Science in Information Technology",
  duration: "2 Years",
  level: "Master",
  overview:
    "Advanced IT degree focusing on software engineering, networking, databases, cloud computing, and cybersecurity.",
  objectives: [
    "Master advanced IT concepts and technologies",
    "Develop research and innovation skills",
    "Understand enterprise systems and cloud computing",
    "Specialize in software, data, or network security",
  ],
  requirements: [
    "Bachelor’s degree in Computer Science or IT",
    "English proficiency",
    "Programming knowledge",
  ],
  careerOpportunities: [
    "IT Manager",
    "Systems Architect",
    "Data Scientist",
    "Cybersecurity Specialist",
    "University Lecturer",
  ],
  Image: "/images/programs/master-it.jpg",
  color: "from-[#111166] to-[#ffa4ff]",
},
{
  id: 28,
  category: "master",
  title: "Master of Science in Cyber Security",
  duration: "2 Years",
  level: "Master",
  overview:
    "Specialized program in cybersecurity, ethical hacking, cryptography, and digital forensics with research focus.",
  objectives: [
    "Master advanced network and system security",
    "Learn cryptography and secure system design",
    "Conduct penetration testing and ethical hacking",
    "Study cyber law, digital forensics, and governance",
  ],
  requirements: [
    "Bachelor’s degree in IT, computer science, or related field",
    "English proficiency",
    "Strong analytical and problem-solving skills",
  ],
  careerOpportunities: [
    "Chief Information Security Officer (CISO)",
    "Cybersecurity Consultant",
    "Penetration Tester",
    "Forensics Investigator",
    "Security Architect",
  ],
  Image: "/images/programs/master-cyber.jpg",
  color: "from-[#ffa4ff] to-[#b4b1f8]",
},
// === Doctorate (PhD) ===
{
  id: 29,
  category: "phd",
  title: "Doctor of Philosophy (PhD) in Business Management",
  duration: "3-5 Years",
  level: "Doctorate",
  overview:
    "Research-based program advancing knowledge in management, entrepreneurship, corporate governance, and global business strategies.",
  objectives: [
    "Conduct original research in business management",
    "Contribute to academic journals and conferences",
    "Develop innovative solutions for business challenges",
    "Advance theories in leadership, strategy, and governance",
  ],
  requirements: [
    "Master’s degree in Business, Management, or related field",
    "Research proposal submission",
    "Strong academic and analytical background",
  ],
  careerOpportunities: [
    "University Professor",
    "Business Researcher",
    "Management Consultant",
    "Corporate Strategy Advisor",
    "Policy Analyst",
  ],
  Image: "/images/programs/phd-business.jpg",
  color: "from-[#111166] to-[#ffa4ff]",
},
{
  id: 30,
  category: "phd",
  title: "Doctor of Philosophy (PhD) in Education",
  duration: "3-5 Years",
  level: "Doctorate",
  overview:
    "Focuses on advanced educational theories, pedagogy, curriculum design, and education policy through original research.",
  objectives: [
    "Conduct research in curriculum and pedagogy",
    "Develop innovative teaching and learning strategies",
    "Publish research in education journals",
    "Influence national and international education policy",
  ],
  requirements: [
    "Master’s degree in Education or related field",
    "Teaching or administrative experience preferred",
    "Strong academic writing and research skills",
  ],
  careerOpportunities: [
    "Educational Researcher",
    "University Lecturer",
    "Policy Advisor",
    "Curriculum Specialist",
    "School System Administrator",
  ],
  Image: "/images/programs/phd-education.jpg",
  color: "from-[#b4b1f8] to-[#fff0ff]",
},
{
  id: 31,
  category: "phd",
  title: "Doctor of Philosophy (PhD) in Law",
  duration: "3-5 Years",
  level: "Doctorate",
  overview:
    "Research degree focused on international law, human rights, corporate law, and comparative legal systems.",
  objectives: [
    "Produce original legal scholarship",
    "Explore international and comparative law",
    "Contribute to legal reforms and policy-making",
    "Publish legal research in high-impact journals",
  ],
  requirements: [
    "Master of Laws (LLM) or equivalent",
    "Research proposal in chosen legal field",
    "Strong academic and analytical skills",
  ],
  careerOpportunities: [
    "Law Professor",
    "Legal Researcher",
    "International Law Consultant",
    "Human Rights Advocate",
    "Policy Advisor",
  ],
  Image: "/images/programs/phd-law.jpg",
  color: "from-[#ffa4ff] to-[#b4b1f8]",
},
{
  id: 32,
  category: "phd",
  title: "Doctor of Philosophy (PhD) in Tourism and Hospitality Management",
  duration: "3-5 Years",
  level: "Doctorate",
  overview:
    "Research-intensive program in sustainable tourism, global hospitality practices, and innovation in travel management.",
  objectives: [
    "Conduct research in tourism and hospitality",
    "Develop sustainable tourism strategies",
    "Contribute to academic and industry knowledge",
    "Publish in tourism and hospitality journals",
  ],
  requirements: [
    "Master’s degree in Tourism, Hospitality, or Business",
    "Research proposal submission",
    "English proficiency and academic writing skills",
  ],
  careerOpportunities: [
    "Tourism Researcher",
    "University Professor",
    "Hospitality Consultant",
    "Policy Developer",
    "International Tourism Advisor",
  ],
  Image: "/images/programs/phd-tourism.jpg",
  color: "from-[#111166] to-[#b4b1f8]",
},
{
  id: 33,
  category: "phd",
  title: "Doctor of Philosophy (PhD) in Information Technology",
  duration: "3-5 Years",
  level: "Doctorate",
  overview:
    "Explores cutting-edge IT research including artificial intelligence, cybersecurity, data science, and cloud computing.",
  objectives: [
    "Conduct original IT research and innovation",
    "Publish findings in international conferences",
    "Contribute to advancements in AI, cybersecurity, and data science",
    "Collaborate with industry on applied research projects",
  ],
  requirements: [
    "Master’s degree in IT, Computer Science, or related field",
    "Research proposal submission",
    "Strong technical and analytical background",
  ],
  careerOpportunities: [
    "IT Research Scientist",
    "University Professor",
    "Chief Technology Officer (CTO)",
    "AI/Cybersecurity Consultant",
    "Data Innovation Leader",
  ],
  Image: "/images/programs/phd-it.jpg",
  color: "from-[#b4b1f8] to-[#ffe3ff]",
},
// === Diplomas ===
{
  id: 34,
  category: "diploma",
  title: "Diploma in Business Management",
  duration: "1 Year",
  level: "Diploma",
  overview:
    "Provides practical skills in business planning, operations, and management for entry-level professionals.",
  objectives: [
    "Introduce fundamentals of business operations",
    "Develop skills in leadership and communication",
    "Apply management concepts to real-world cases",
  ],
  requirements: [
    "Completion of secondary education (O/L or A/L equivalent)",
    "Basic English proficiency",
  ],
  careerOpportunities: [
    "Business Assistant",
    "Administrative Executive",
    "Operations Coordinator",
  ],
  Image: "/images/programs/diploma-business.jpg",
  color: "from-[#ffa4ff] to-[#b4b1f8]",
},
{
  id: 35,
  category: "diploma",
  title: "Diploma in Information Technology",
  duration: "1 Year",
  level: "Diploma",
  overview:
    "Covers computer systems, databases, networking, and programming to prepare students for IT careers.",
  objectives: [
    "Build foundational knowledge of IT systems",
    "Develop programming and database skills",
    "Introduce cybersecurity and networking concepts",
  ],
  requirements: [
    "Secondary education completion",
    "Basic computer literacy",
  ],
  careerOpportunities: [
    "IT Support Technician",
    "Junior Developer",
    "Database Assistant",
  ],
  Image: "/images/programs/diploma-it.jpg",
  color: "from-[#111166] to-[#ffa4ff]",
},
{
  id: 36,
  category: "diploma",
  title: "Diploma in Cyber Security",
  duration: "1 Year",
  level: "Diploma",
  overview:
    "Focuses on information security, threat management, and ethical hacking for cybersecurity beginners.",
  objectives: [
    "Understand core cybersecurity principles",
    "Learn to identify and mitigate cyber threats",
    "Introduce ethical hacking practices",
  ],
  requirements: [
    "Secondary education with IT background preferred",
    "English language proficiency",
  ],
  careerOpportunities: [
    "Cybersecurity Analyst (entry-level)",
    "IT Security Technician",
    "Systems Support Officer",
  ],
  Image: "/images/programs/diploma-cyber.jpg",
  color: "from-[#b4b1f8] to-[#ffe3ff]",
},
{
  id: 37,
  category: "diploma",
  title: "Diploma in Education",
  duration: "1 Year",
  level: "Diploma",
  overview:
    "Equips future educators with teaching methodologies, classroom management, and student development strategies.",
  objectives: [
    "Introduce educational psychology and pedagogy",
    "Develop effective teaching skills",
    "Apply classroom management techniques",
  ],
  requirements: [
    "Completion of secondary education",
    "Interest in teaching profession",
  ],
  careerOpportunities: [
    "Teaching Assistant",
    "Tutor",
    "Early Childhood Educator",
  ],
  Image: "/images/programs/diploma-education.jpg",
  color: "from-[#ffa4ff] to-[#111166]",
},
{
  id: 38,
  category: "diploma",
  title: "Diploma in Psychology",
  duration: "1 Year",
  level: "Diploma",
  overview:
    "Provides foundational knowledge in psychology, human behavior, and counseling basics.",
  objectives: [
    "Understand fundamental psychological theories",
    "Introduce counseling and mental health practices",
    "Prepare for advanced psychology studies",
  ],
  requirements: [
    "Completion of secondary education",
    "Interest in psychology and social sciences",
  ],
  careerOpportunities: [
    "Assistant Counselor",
    "Mental Health Support Worker",
    "Community Outreach Assistant",
  ],
  Image: "/images/programs/diploma-psychology.jpg",
  color: "from-[#ffe3ff] to-[#b4b1f8]",
},
{
  id: 39,
  category: "diploma",
  title: "Diploma in Tourism & Hospitality",
  duration: "1 Year",
  level: "Diploma",
  overview:
    "Introduces hospitality management, tourism operations, and customer service excellence.",
  objectives: [
    "Develop skills in hospitality operations",
    "Understand global tourism trends",
    "Enhance customer service and event planning skills",
  ],
  requirements: [
    "Secondary education",
    "Good communication skills",
  ],
  careerOpportunities: [
    "Front Office Assistant",
    "Travel Consultant",
    "Hospitality Coordinator",
  ],
  Image: "/images/programs/diploma-tourism.jpg",
  color: "from-[#111166] to-[#b4b1f8]",
},
{
  id: 40,
  category: "diploma",
  title: "Diploma in Law",
  duration: "1 Year",
  level: "Diploma",
  overview:
    "Introduces legal principles, contracts, human rights, and corporate law fundamentals.",
  objectives: [
    "Provide foundational understanding of law",
    "Familiarize students with legal systems and ethics",
    "Prepare students for paralegal and legal support roles",
  ],
  requirements: [
    "Secondary education completion",
    "Interest in legal studies",
  ],
  careerOpportunities: [
    "Paralegal Assistant",
    "Legal Clerk",
    "Compliance Officer (entry-level)",
  ],
  Image: "/images/programs/diploma-law.jpg",
  color: "from-[#b4b1f8] to-[#ffa4ff]",
},
// === Certificates ===
{
  id: 41,
  category: "certificate",
  title: "Certificate in Business Administration",
  duration: "6 Months",
  level: "Certificate",
  overview:
    "Introduces key principles of business management, administration, and communication for beginners.",
  objectives: [
    "Develop basic administrative skills",
    "Understand business operations",
    "Enhance written and verbal communication",
  ],
  requirements: [
    "Completion of secondary education",
    "Basic English skills",
  ],
  careerOpportunities: [
    "Office Assistant",
    "Administrative Clerk",
    "Junior Business Executive",
  ],
  Image: "/images/programs/certificate-business.jpg",
  color: "from-[#ffa4ff] to-[#b4b1f8]",
},
{
  id: 42,
  category: "certificate",
  title: "Certificate in Information Technology",
  duration: "6 Months",
  level: "Certificate",
  overview:
    "Covers computer applications, MS Office, internet tools, and basic IT troubleshooting.",
  objectives: [
    "Build computer literacy",
    "Learn MS Office and productivity tools",
    "Understand basic networking and troubleshooting",
  ],
  requirements: [
    "Basic education",
    "Interest in computer skills",
  ],
  careerOpportunities: [
    "IT Support Assistant",
    "Data Entry Clerk",
    "Help Desk Technician",
  ],
  Image: "/images/programs/certificate-it.jpg",
  color: "from-[#111166] to-[#ffa4ff]",
},
{
  id: 43,
  category: "certificate",
  title: "Certificate in Cyber Security Fundamentals",
  duration: "6 Months",
  level: "Certificate",
  overview:
    "Provides essential skills in information security, threat awareness, and safe computing practices.",
  objectives: [
    "Understand core security principles",
    "Learn safe internet and data protection practices",
    "Identify common cyber threats",
  ],
  requirements: [
    "Basic computer knowledge",
    "Secondary education preferred",
  ],
  careerOpportunities: [
    "Cybersecurity Support Technician",
    "IT Security Assistant",
    "Network Support Staff",
  ],
  Image: "/images/programs/certificate-cyber.jpg",
  color: "from-[#b4b1f8] to-[#ffe3ff]",
},
{
  id: 44,
  category: "certificate",
  title: "Certificate in Early Childhood Education",
  duration: "6 Months",
  level: "Certificate",
  overview:
    "Provides foundational training for working with young children in educational and daycare settings.",
  objectives: [
    "Introduce child psychology and development",
    "Teach classroom management for young learners",
    "Develop creative teaching and play-based methods",
  ],
  requirements: [
    "Completion of secondary education",
    "Interest in teaching profession",
  ],
  careerOpportunities: [
    "Preschool Teacher Assistant",
    "Childcare Worker",
    "Daycare Coordinator",
  ],
  Image: "/images/programs/certificate-education.jpg",
  color: "from-[#ffa4ff] to-[#111166]",
},
{
  id: 45,
  category: "certificate",
  title: "Certificate in Counseling Skills",
  duration: "6 Months",
  level: "Certificate",
  overview:
    "Introduces counseling techniques, listening skills, and basics of mental health support.",
  objectives: [
    "Understand fundamental counseling methods",
    "Develop empathy and communication skills",
    "Provide entry-level support in mental health settings",
  ],
  requirements: [
    "Secondary education",
    "Interest in psychology and social work",
  ],
  careerOpportunities: [
    "Assistant Counselor",
    "Community Support Worker",
    "Peer Support Assistant",
  ],
  Image: "/images/programs/certificate-psychology.jpg",
  color: "from-[#ffe3ff] to-[#b4b1f8]",
},
{
  id: 46,
  category: "certificate",
  title: "Certificate in Tourism & Hospitality",
  duration: "6 Months",
  level: "Certificate",
  overview:
    "Covers basics of hospitality services, tourism operations, and customer care.",
  objectives: [
    "Develop customer service skills",
    "Learn fundamentals of tourism operations",
    "Understand event and hotel service basics",
  ],
  requirements: [
    "Secondary education",
    "Good communication skills",
  ],
  careerOpportunities: [
    "Hospitality Assistant",
    "Travel Agency Support Staff",
    "Front Desk Clerk",
  ],
  Image: "/images/programs/certificate-tourism.jpg",
  color: "from-[#111166] to-[#b4b1f8]",
},
{
  id: 47,
  category: "certificate",
  title: "Certificate in Legal Studies",
  duration: "6 Months",
  level: "Certificate",
  overview:
    "Introduces basic legal systems, contracts, and professional ethics for entry-level legal support.",
  objectives: [
    "Understand foundations of law",
    "Learn about contracts and compliance",
    "Gain basic legal documentation skills",
  ],
  requirements: [
    "Secondary education completion",
    "Interest in law and governance",
  ],
  careerOpportunities: [
    "Legal Clerk",
    "Office Assistant (Law Firm)",
    "Compliance Assistant",
  ],
  Image: "/images/programs/certificate-law.jpg",
  color: "from-[#b4b1f8] to-[#ffa4ff]",
},
// === Short Courses ===
{
  id: 48,
  category: "short-course",
  title: "Short Course in Digital Marketing",
  duration: "3 Months",
  level: "Short Course",
  overview:
    "Covers SEO, social media, Google Ads, and content marketing for business growth.",
  objectives: [
    "Understand fundamentals of online marketing",
    "Learn SEO and content marketing strategies",
    "Run social media and Google Ads campaigns",
  ],
  requirements: [
    "Basic computer skills",
    "Interest in marketing",
  ],
  careerOpportunities: [
    "Social Media Assistant",
    "Digital Marketing Intern",
    "Freelance Marketer",
  ],
  Image: "/images/programs/short-digital-marketing.jpg",
  color: "from-[#ffa4ff] to-[#b4b1f8]",
},
{
  id: 49,
  category: "short-course",
  title: "Short Course in Web Development",
  duration: "3 Months",
  level: "Short Course",
  overview:
    "Practical training in HTML, CSS, JavaScript, and basic web design for beginners.",
  objectives: [
    "Learn fundamentals of front-end development",
    "Build responsive websites",
    "Understand hosting and domain basics",
  ],
  requirements: [
    "Basic computer literacy",
    "Interest in coding",
  ],
  careerOpportunities: [
    "Junior Web Developer",
    "Freelance Web Designer",
    "Front-End Assistant",
  ],
  Image: "/images/programs/short-web-dev.jpg",
  color: "from-[#111166] to-[#ffa4ff]",
},
{
  id: 50,
  category: "short-course",
  title: "Short Course in Graphic Design",
  duration: "2 Months",
  level: "Short Course",
  overview:
    "Covers Photoshop, Illustrator, and Canva for creating professional designs.",
  objectives: [
    "Learn graphic design tools",
    "Understand color, typography, and branding",
    "Create posters, logos, and digital content",
  ],
  requirements: [
    "Basic computer knowledge",
    "Creative interest",
  ],
  careerOpportunities: [
    "Freelance Designer",
    "Digital Content Creator",
    "Marketing Assistant",
  ],
  Image: "/images/programs/short-graphic-design.jpg",
  color: "from-[#b4b1f8] to-[#ffe3ff]",
},
{
  id: 51,
  category: "short-course",
  title: "Short Course in Spoken English",
  duration: "2 Months",
  level: "Short Course",
  overview:
    "Improves English speaking, listening, and presentation skills for professional use.",
  objectives: [
    "Develop conversational English",
    "Improve grammar and vocabulary",
    "Enhance public speaking and confidence",
  ],
  requirements: [
    "Open to all learners",
    "Willingness to practice speaking",
  ],
  careerOpportunities: [
    "Customer Service Staff",
    "Front Office Assistant",
    "Tourism and Hospitality Worker",
  ],
  Image: "/images/programs/short-english.jpg",
  color: "from-[#ffa4ff] to-[#111166]",
},
{
  id: 52,
  category: "short-course",
  title: "Short Course in Office Applications (MS Office)",
  duration: "2 Months",
  level: "Short Course",
  overview:
    "Practical training in MS Word, Excel, PowerPoint, and basic office IT skills.",
  objectives: [
    "Master productivity tools (Word, Excel, PowerPoint)",
    "Perform data entry and reporting",
    "Prepare professional documents and presentations",
  ],
  requirements: [
    "Basic education",
    "Computer literacy",
  ],
  careerOpportunities: [
    "Office Clerk",
    "Administrative Assistant",
    "Data Entry Operator",
  ],
  Image: "/images/programs/short-office.jpg",
  color: "from-[#ffe3ff] to-[#b4b1f8]",
},
{
  id: 53,
  category: "short-course",
  title: "Short Course in Entrepreneurship",
  duration: "3 Months",
  level: "Short Course",
  overview:
    "Equips learners with practical skills to start and manage small businesses.",
  objectives: [
    "Understand small business planning",
    "Learn basics of finance and marketing",
    "Develop entrepreneurial mindset",
  ],
  requirements: [
    "Open to aspiring entrepreneurs",
  ],
  careerOpportunities: [
    "Small Business Owner",
    "Startup Founder",
    "Business Assistant",
  ],
  Image: "/images/programs/short-entrepreneurship.jpg",
  color: "from-[#111166] to-[#b4b1f8]",
},
{
  id: 54,
  category: "short-course",
  title: "Short Course in Event Management",
  duration: "3 Months",
  level: "Short Course",
  overview:
    "Provides training in planning, organizing, and managing professional events.",
  objectives: [
    "Plan corporate and social events",
    "Manage budgeting and logistics",
    "Develop communication and teamwork skills",
  ],
  requirements: [
    "Secondary education preferred",
    "Good organizational skills",
  ],
  careerOpportunities: [
    "Event Coordinator",
    "Hospitality Assistant",
    "Event Planning Freelancer",
  ],
  Image: "/images/programs/short-event.jpg",
  color: "from-[#b4b1f8] to-[#ffa4ff]",
},

// === Language Programs ===
{
  id: 55,
  category: "language",
  title: "English Language Program",
  duration: "3-12 Months",
  level: "Beginner to Advanced",
  overview:
    "Enhances English speaking, listening, reading, and writing skills for academic, professional, and personal use.",
  objectives: [
    "Develop conversational English",
    "Improve grammar, vocabulary, and pronunciation",
    "Prepare for IELTS, TOEFL, or professional communication",
  ],
  requirements: [
    "Open to all learners",
    "Willingness to practice regularly",
  ],
  careerOpportunities: [
    "Customer Service Representative",
    "Front Office Staff",
    "Translator/Interpreter",
    "Tourism & Hospitality Professional",
  ],
  Image: "/images/programs/language-english.jpg",
  color: "from-[#ffa4ff] to-[#b4b1f8]",
},
{
  id: 56,
  category: "language",
  title: "Arabic Language Program",
  duration: "3-12 Months",
  level: "Beginner to Advanced",
  overview:
    "Teaches reading, writing, and speaking Arabic for communication, business, and cultural understanding.",
  objectives: [
    "Develop conversational Arabic",
    "Learn Arabic script and grammar",
    "Understand cultural context and business etiquette",
  ],
  requirements: [
    "Open to all learners",
    "Interest in Middle Eastern culture",
  ],
  careerOpportunities: [
    "Translator/Interpreter",
    "Tourism & Hospitality Staff",
    "Customer Service in Arabic-speaking regions",
  ],
  Image: "/images/programs/language-arabic.jpg",
  color: "from-[#b4b1f8] to-[#ffe3ff]",
},
{
  id: 57,
  category: "language",
  title: "French Language Program",
  duration: "3-12 Months",
  level: "Beginner to Advanced",
  overview:
    "Covers French grammar, vocabulary, and communication skills for travel, business, and cultural purposes.",
  objectives: [
    "Develop conversational French",
    "Learn reading and writing skills",
    "Understand French culture and business etiquette",
  ],
  requirements: [
    "Open to all learners",
    "Interest in French language and culture",
  ],
  careerOpportunities: [
    "Translator/Interpreter",
    "Tourism & Hospitality Professional",
    "International Business Associate",
  ],
  Image: "/images/programs/language-french.jpg",
  color: "from-[#ffa4ff] to-[#111166]",
},
{
  id: 58,
  category: "language",
  title: "Chinese (Mandarin) Language Program",
  duration: "3-12 Months",
  level: "Beginner to Advanced",
  overview:
    "Teaches speaking, listening, reading, and writing Mandarin Chinese for business, travel, and cultural understanding.",
  objectives: [
    "Develop conversational Mandarin",
    "Learn Chinese characters and grammar",
    "Understand Chinese culture and business etiquette",
  ],
  requirements: [
    "Open to all learners",
    "Interest in China and Mandarin language",
  ],
  careerOpportunities: [
    "Translator/Interpreter",
    "Tourism & Hospitality Staff",
    "International Trade Professional",
  ],
  Image: "/images/programs/language-chinese.jpg",
  color: "from-[#111166] to-[#b4b1f8]",
},
{
  id: 59,
  category: "language",
  title: "Japanese Language Program",
  duration: "3-12 Months",
  level: "Beginner to Advanced",
  overview:
    "Covers speaking, reading, writing, and cultural etiquette of Japanese for business, travel, and personal use.",
  objectives: [
    "Develop conversational Japanese",
    "Learn Hiragana, Katakana, and basic Kanji",
    "Understand Japanese culture and business etiquette",
  ],
  requirements: [
    "Open to all learners",
    "Interest in Japan and Japanese culture",
  ],
  careerOpportunities: [
    "Translator/Interpreter",
    "Tourism & Hospitality Staff",
    "International Business Associate",
  ],
  Image: "/images/programs/language-japanese.jpg",
  color: "from-[#b4b1f8] to-[#ffa4ff]",
},
{
  id: 60,
  category: "language",
  title: "IELTS Preparation Program",
  duration: "2-6 Months",
  level: "Intermediate to Advanced",
  overview:
    "Focuses on improving English language skills to achieve high scores in IELTS examination for academic or migration purposes.",
  objectives: [
    "Develop reading, writing, listening, and speaking skills",
    "Learn exam strategies and time management",
    "Practice mock tests to assess performance",
  ],
  requirements: [
    "Basic to intermediate English proficiency",
    "Commitment to regular practice",
  ],
  careerOpportunities: [
    "Student applying abroad",
    "Professional migrating to English-speaking countries",
    "Academic researcher requiring IELTS",
  ],
  Image: "/images/programs/language-ielts.jpg",
  color: "from-[#ffa4ff] to-[#b4b1f8]",
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
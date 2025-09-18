import React, { useState } from 'react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    education: '',
    experience: '',
    message: '',
    agreeToTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const admissionSteps = [
    { step: 1, title: 'Application Submission', description: 'Submit your online application form' },
    { step: 2, title: 'Document Review', description: 'We review your documents and qualifications' },
    { step: 3, title: 'Interview/Assessment', description: 'Attend interview or assessment if required' },
    { step: 4, title: 'Admission Decision', description: 'Receive admission decision and offer letter' },
    { step: 5, title: 'Enrollment', description: 'Complete enrollment and payment process' }
  ];

  const programs = [
    'Information Technology',
    'Engineering Technology',
    'Business Management',
    'Digital Marketing',
    'Web Development',
    'Graphic Design'
  ];

  const educationLevels = [
    'High School Diploma',
    'Associate Degree',
    'Bachelor Degree',
    'Master Degree',
    'Other'
  ];

  const importantDates = [
    { event: 'Fall Intake Application Deadline', date: 'August 15, 2024' },
    { event: 'Spring Intake Application Deadline', date: 'December 15, 2024' },
    { event: 'Summer Intake Application Deadline', date: 'April 15, 2024' },
    { event: 'Orientation Week', date: 'September 2-6, 2024' },
    { event: 'Classes Begin', date: 'September 9, 2024' }
  ];

  const entryRequirements = [
    {
      program: 'Information Technology',
      requirements: [
        'High school diploma or equivalent',
        'Mathematics proficiency',
        'Basic computer literacy',
        'English language skills (IELTS 5.5 or equivalent)'
      ]
    },
    {
      program: 'Engineering Technology',
      requirements: [
        'High school diploma with science subjects',
        'Mathematics and physics proficiency',
        'Technical aptitude',
        'English language skills (IELTS 5.5 or equivalent)'
      ]
    },
    {
      program: 'Business Management',
      requirements: [
        'High school diploma',
        'Basic English proficiency',
        'Interest in business and management',
        'Communication skills'
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Application submitted successfully! We will contact you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: '',
        education: '',
        experience: '',
        message: '',
        agreeToTerms: false
      });
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < admissionSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-24 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg float-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-400/5 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Applications Open
          </div>
          <h1 className="text-display text-white mb-6">
            Admissions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Start your journey towards a successful career. Apply to SDTI and join 
            thousands of students who have achieved their professional goals.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
              <i className="fas fa-list-ol mr-2"></i>
              Simple Process
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined admission process makes it easy to start your educational journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-modern transition-all duration-300 group-hover:scale-110 ${
                    currentStep >= step.step 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }`}>
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  {currentStep >= step.step && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                  )}
                </div>
                <h3 className="text-heading text-lg text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Important Dates */}
      {/* <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Important Dates
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importantDates.map((date, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {date.event}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {date.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Application Form */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-sm font-medium text-green-700 dark:text-green-300 mb-6">
              <i className="fas fa-file-alt mr-2"></i>
              Apply Online
            </div>
            <h2 className="text-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Online Application Form
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete your application in just a few minutes. All fields marked with * are required.
            </p>
          </div>
          
          <div className="modern-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-heading text-2xl text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-user text-white text-sm"></i>
                  </div>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="modern-input"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="modern-input"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="modern-input"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="modern-input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div className="space-y-6">
                <h3 className="text-heading text-2xl text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-graduation-cap text-white text-sm"></i>
                  </div>
                  Program Selection
                </h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Program of Interest *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                    className="modern-input"
                  >
                    <option value="">Select a program</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Highest Education Level *
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="modern-input"
                  >
                    <option value="">Select education level</option>
                    {educationLevels.map((level, index) => (
                      <option key={index} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-heading text-2xl text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-info-circle text-white text-sm"></i>
                  </div>
                  Additional Information
                </h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Work Experience
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={4}
                    className="modern-input"
                    placeholder="Describe your work experience (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="modern-input"
                    placeholder="Any additional information you'd like to share"
                  />
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 mr-4 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="text-sm text-gray-600 dark:text-gray-300">
                  I agree to the terms and conditions and privacy policy. I understand that 
                  my information will be used for admission purposes only. *
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-16 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'btn-primary'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Submit Application
                      <i className="fas fa-paper-plane ml-2"></i>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Download Prospectus */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="modern-card p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-download text-white text-2xl"></i>
            </div>
            <h2 className="text-heading text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
              Download Our Prospectus
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get detailed information about our programs, facilities, and admission requirements.
            </p>
            <button className="btn-outline group">
              <span className="flex items-center justify-center">
                <i className="fas fa-download mr-2"></i>
                Download Prospectus (PDF)
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl float-animation"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg float-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-400/5 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Get Support
          </div>
          <h2 className="text-heading text-4xl md:text-5xl text-white mb-8">
            Need Help with Your Application?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Our admissions team is here to help you through the application process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="text-heading text-xl text-white mb-3">Call Us</h3>
              <p className="text-white/80 text-lg">+971 XX XXX XXXX</p>
              <p className="text-white/60 text-sm mt-2">Mon-Fri, 9AM-6PM</p>
            </div>
            
            <div className="glass-card p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <h3 className="text-heading text-xl text-white mb-3">Email Us</h3>
              <p className="text-white/80 text-lg">admissions@sdtiedu.ae</p>
              <p className="text-white/60 text-sm mt-2">24/7 Support</p>
            </div>
            
            <div className="glass-card p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-heading text-xl text-white mb-3">Visit Us</h3>
              <p className="text-white/80 text-lg">UAE</p>
              <p className="text-white/60 text-sm mt-2">Schedule a Visit</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

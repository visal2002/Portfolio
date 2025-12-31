import React, { useEffect, useState } from 'react'
import StarBackground from './components/StarBackground'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  useScrollAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const skillsData = {
    'Programming & Analytics': ['Python (Pandas, NumPy, Scikit-learn)', 'SQL', 'MySQL'],
    'Machine Learning': ['Regression', 'NLP', 'Hypothesis Testing', 'Predictive Modeling'],
    'Data Visualization': ['Power BI', 'Excel (PivotTables, VLOOKUP)'],
    'Tools': ['GitHub', 'Firebase', 'AWS', 'OCR (PyMuPDF)'],
    'Web Development': ['HTML', 'CSS', 'JavaScript'],
    'Creative & Design': ['Canva', 'Adobe Lightroom', 'Adobe Rush']
  }

  const softSkillsData = [
    'Analytical Thinking',
    'Effective Communication',
    'Cross-functional Collaboration',
    'Attention to Detail',
    'Team Player'
  ]

  const projectsData = [
    {
      title: 'AI Mental Health Assistant',
      organization: 'GovTech Bhutan & Omdena',
      duration: 'May 2025 – June 2025',
      description: 'Led development of an AI-powered mental health assistant using transformer models (MentalBERT, MentalRoBERTa) for emotion detection and mental health condition classification.',
      technologies: ['Python', 'Transformer Models', 'NLP', 'Machine Learning'],
      achievements: ['Fine-tuned state-of-the-art models', 'Real-time AI support system', 'Personalized recommendations'],
      image: `${import.meta.env.BASE_URL}assets/images/ai-mental-health.webp`
    },
    {
      title: 'Agricultural & Livestock Data Dashboard',
      organization: 'Personal Project',
      duration: 'May 2025 – June 2025',
      description: 'Developed interactive Power BI dashboard for agriculture and livestock survey data visualization with region-wise analysis capabilities.',
      technologies: ['Power BI', 'Excel', 'SQL', 'Data Visualization'],
      achievements: ['Interactive KPIs and charts', 'Map visualizations', 'Multilingual data labels'],
      image: `${import.meta.env.BASE_URL}assets/images/agricultural-dashboard.png`
    },
    {
      title: 'Smart Resume Analyzer',
      organization: 'Final Year College Project',
      duration: 'Jan 2025 – April 2025',
      description: 'Built AI-powered tool with Gemini AI for ATS scoring, improving parsing accuracy by 35% with automated text extraction and quality scoring.',
      technologies: ['Python', 'Gemini AI', 'PyMuPDF', 'OCR', 'Firebase', 'AWS', 'Streamlit'],
      achievements: ['35% improved parsing accuracy', 'Real-time feedback system', 'Cloud storage integration'],
      image: `${import.meta.env.BASE_URL}assets/images/smart-resume-analyzer.webp`
    },
    {
      title: 'Customer Churn Prediction Model',
      organization: 'Bharat Intern',
      duration: 'Aug 2024 – Dec 2024',
      description: 'Achieved 80% accuracy using Scikit-learn and reduced churn rate by 12% through Power BI insights and predictive modeling.',
      technologies: ['Python', 'Scikit-learn', 'Power BI', 'Machine Learning'],
      achievements: ['80% model accuracy', '12% churn rate reduction', 'Automated alerts system'],
      image: `${import.meta.env.BASE_URL}assets/images/customer-churn.png`
    },
    {
      title: 'Sales Forecasting Dashboard',
      organization: 'Semester Project',
      duration: 'May 2024 – July 2024',
      description: 'Applied ARIMA time-series analysis boosting prediction accuracy by 15% with interactive Power BI dashboards.',
      technologies: ['Power BI', 'ARIMA', 'Time Series Analysis', 'DAX'],
      achievements: ['15% improved accuracy', 'Interactive dashboards', 'Automated reporting'],
      image: `${import.meta.env.BASE_URL}assets/images/sales-analysis.webp`
    },
    {
      title: 'Sentiment Analysis',
      organization: 'YBI Foundation',
      duration: 'Oct 2023 – Nov 2023',
      description: 'Scraped and analyzed 1,000+ tweets with 80% sentiment classification accuracy using NLTK and TextBlob.',
      technologies: ['Python', 'NLTK', 'TextBlob', 'Data Scraping'],
      achievements: ['80% classification accuracy', '1,000+ tweets analyzed', 'Keyword frequency analysis'],
      image: `${import.meta.env.BASE_URL}assets/images/sentiment-analysis.jpeg`
    }
  ]

  const experiencesData = [
    {
      title: 'Intern- Project Management Unit (PMU), Department of Tourism',
      company: 'UNDP Bhutan (Onsite)',
      duration: 'Oct 2025 – Present',
      description: 'Supporting the Project Management Unit under the Department of Tourism in project coordination, monitoring and evaluation, documentation, and data-driven reporting. Assisting in project implementation aligned with UNDP\'s sustainable development goals and tourism sector initiatives.',
    },
    {
      title: 'Research Analyst',
      company: 'Dragale Aviation (Remote)',
      duration: 'Jul 2025 – Sep 2025',
      description: 'Conducted data-driven research and analysis to support aviation operations and business decisions. Collected, organized, and interpreted datasets to identify trends and insights. Prepared concise reports and visual presentations to assist management in strategic planning and performance evaluation. Authored 5+ data-driven articles using Python visualizations, increasing engagement by 15%.',
    },
    {
      title: 'Data Science Content Writer',
      company: 'Earth5R (Remote)',
      duration: 'May 2024 – Jul 2024',
      description: 'Developed clear and engaging content on data science applications in aviation, focusing on analytics, predictive modeling, and operational optimization. Created technical articles, reports, and documentation to simplify complex data concepts for diverse audiences. Collaborated with teams to ensure content accuracy, relevance, and alignment with organizational goals.',
    },
    {
      title: 'ML Intern',
      company: 'YBI Foundation (Remote)',
      duration: 'Oct 2023 – Nov 2023',
      description: 'Developed and tested machine learning models to enhance operational efficiency and data-driven decision-making in aviation. Worked on data preprocessing, feature engineering, and model evaluation using Python and related libraries. Collaborated with the analytics team to translate data insights into actionable business solutions.',
    },
  ]

  const certificationsData = [
    'Google Data Analytics',
    'IBM Python for Data Science',
    'edX Machine Learning (Harvard)',
    'Microsoft Excel (Data Analysis)',
    'Power BI Visualization',
    'Accenture SWE Simulation'
  ]

  const languagesData = [
    'English (Fluent)',
    'Hindi (Fluent)',
    'Dzongkha (Native)',
    'Nepali (Fluent)',
    'Tshangla (Fluent)'
  ]

  const getSkillIcon = (category) => {
    const icons = {
      'Programming & Analytics': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-blue-400"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      'Machine Learning': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-blue-400"><path d="M12 2a3 3 0 0 0-3 3v.17a2 2 0 0 1-.46 1.36L5.13 10.5a2 2 0 0 0-.5 1.4v.2c0 1.1.9 2 2 2h.17a2 2 0 0 1 1.36.46L10.5 18.87a2 2 0 0 0 1.4.5h.2c1.1 0 2-.9 2-2v-.17a2 2 0 0 1 .46-1.36L18.87 13.5a2 2 0 0 0 .5-1.4v-.2c0-1.1-.9-2-2-2h-.17a2 2 0 0 1-1.36-.46L13.5 5.13a2 2 0 0 0-1.4-.5H12z"/></svg>,
      'Data Visualization': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-blue-400"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-6"/></svg>,
      'Tools': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-blue-400"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M12 12V19"/></svg>,
      'Web Development': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-blue-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
      'Creative & Design': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-blue-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    }
    return icons[category] || null
  }

  return (
    <div className="min-h-screen bg-black relative z-0">
      <StarBackground />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-slate-700 z-50 transition-all glass-soft ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">Vishal Chettri</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              VISHAL <span className="text-blue-400">CHETTRI</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in">
              Data Scientist & AI Enthusiast
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12 animate-fade-in">
              Results-driven Data Scientist with expertise in Python, SQL, Machine Learning, and Business Intelligence, 
              specializing in transforming complex data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button onClick={() => scrollToSection('projects')} className="button bg-blue-600 hover:bg-blue-700">View Projects</button>
              <button onClick={() => scrollToSection('contact')} className="button outline">Contact Me</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-transparent relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left-on-scroll">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden">
                <img src={`${import.meta.env.BASE_URL}assets/images/profile.jpeg`} alt="Vishal Chettri" className="w-full h-full object-cover rounded-full animate-float" />
              </div>
            </div>
            <div className="slide-in-right-on-scroll">
              <p className="text-lg text-slate-300 mb-6">
                Results-driven Data Scientist with expertise in Python, SQL, Machine Learning, and Business Intelligence, specializing in transforming complex datasets into actionable insights. Proven track record in predictive modeling, ETL pipeline development, and data visualization (Power BI) to enable data-informed strategies.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Adapt at designing and implementing AI-powered solutions to optimize operational efficiency and support strategic decision-making. Combines strong technical proficiency with analytical acumen to deliver scalable, data-driven results.
              </p>
              <div className="flex items-center text-slate-300 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-blue-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Thimphu, Bhutan</span>
              </div>
              <div className="flex items-center text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-blue-400"><path d="M22 16.92v3a2 2 0 0 1-2 2A16 16 0 0 1 3.08 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 10 10 0 0 0 10 10 2 2 0 0 1 2 2z"/></svg>
                <span>17548947</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-transparent relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skillsData).map(([category, skills], index) => (
                <div key={category} className="card fade-in-on-scroll stagger-1" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="card-header">
                    <div className="card-title flex items-center">
                      {getSkillIcon(category)}
                      {category}
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="flex flex-wrap gap-2">
                      {skills.map(skill => (
                        <span key={skill} className="badge secondary">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkillsData.map((skill, index) => (
                <span key={skill} className="badge outline scale-in-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-transparent relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projectsData.map((project, index) => (
              <div key={index} className="card fade-in-on-scroll stagger-1" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="card-header">
                  <div className="card-title">{project.title}</div>
                  <div className="card-description">
                    {project.organization} • {project.duration}
                  </div>
                </div>
                <div className="card-content">
                  {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />}
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map(tech => (
                        <span key={tech} className="badge secondary">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-slate-300 space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-transparent relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8">
              {experiencesData.map((exp, index) => (
                <div key={index} className="card fade-in-on-scroll stagger-1" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="card-header">
                    <div className="card-title">{exp.title}</div>
                    <div className="card-description">{exp.company} • {exp.duration}</div>
                  </div>
                  <div className="card-content">
                    <p className="text-slate-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Bachelor of Computer Application (Data Science)</div>
                  <div className="card-description">Maharishi Markandeshwar (Deemed to be University)</div>
                </div>
                <div className="card-content">
                  <p className="text-slate-300"></p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <div className="card-title">High School</div>
                  <div className="card-description">Drametse Central School</div>
                </div>
                <div className="card-content">
                  <p className="text-slate-400"></p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificationsData.map((cert, index) => (
                <div key={cert} className="card text-center fade-in-on-scroll stagger-1" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="card-content pt-6">
                    <p className="font-medium text-white">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languagesData.map((lang, index) => (
                <span key={lang} className="badge outline scale-in-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-transparent relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-blue-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <span className="text-slate-300">chettrivishal677@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-blue-400"><path d="M22 16.92v3a2 2 0 0 1-2 2A16 16 0 0 1 3.08 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 10 10 0 0 0 10 10 2 2 0 0 1 2 2z"/></svg>
                    <span className="text-slate-300">17548947</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-blue-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span className="text-slate-300">Thimphu, Bhutan</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-blue-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="text-slate-300"><a href="https://linkedin.com/in/vishal-chettri-3122831b1" className="hover:text-blue-400">LinkedIn Profile</a></span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                <p className="text-slate-300 mb-6">
                  I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow data enthusiasts. 
                  Feel free to reach out!
                </p>
                <div className="flex gap-4">
                  <a href="mailto:chettrivishal677@gmail.com" className="button bg-blue-600 hover:bg-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    Send Email
                  </a>
                  <a href="/home/ubuntu/upload/.recovery/VISHALCHETTRIResume.pdf" download="VISHALCHETTRIResume.pdf" className="button outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Vishal Chettri</h3>
            <p className="text-slate-400 mb-6">Data Scientist & AI Enthusiast</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.5 0 4.1-2.3 4.1-5.7 0-1.1-.2-2.3-1.1-3.4 0 0-1.4 0-2.8 1.3a9.9 9.9 0 0 0-5.6 0c-1.4-1.3-2.8-1.3-2.8-1.3-.9 1.1-1.1 2.3-1.1 3.4 0 3.4.6 5.7 4.1 5.7a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.2-4.5-2-5-3"/></svg>
              </a>
              <a href="https://linkedin.com/in/vishal-chettri-3122831b1" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="mailto:chettrivishal677@gmail.com" className="text-slate-400 hover:text-white transition-colors" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 Vishal Chettri. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


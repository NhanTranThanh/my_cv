import './App.css'

import profileImage from './assets/nhan_tran_profile.jpeg'

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  techStack: string
}

interface Education {
  degree: string
  institution: string
  location: string
  period: string
}

// interface Strength {
//   title: string
//   description: string
//   icon: 'check' | 'clock'
// }

function App() {
  // Sample data - replace with your own information
  const personalInfo = {
    name: 'NHAN TRAN',
    title: 'Frontend Developer',
    email: 'nhan.tran.it92@gmail.com',
    phone: '+84 356 056 911',
    location: 'Ho Chi Minh City',
    linkedin: 'https://www.linkedin.com/in/nhan-tran-0a449b165/',
    profileImage,
  }

  const experiences: Experience[] = [
    {
      title: 'Frontend Developer',
      company: 'Sinch MessageMedia',
      location: 'Ho Chi Minh City, Vietnam',
      period: '08/2022 - 04/2025',
      description: [
        'Product: Support Tooling for supporters to help clients using messaging platform',
        'Building user interface for managing accounts, users and executing tasks of numbers, senders, campaigns',
      ],
      techStack: 'React, AWS S3, CloudFront, BuildKite,..',
    },
    {
      title: 'React Developer',
      company: 'Star Global',
      location: 'Ho Chi Minh City, Vietnam',
      period: '04/2021 - 07/2022',
      description: [
        'Create new MVP shopping feature for mobile application, build new CMS to manage the data of application.',
        'Working remotely with client\'s teammates in Agile team',
        'Tech stack: React Native, ReactJS, React Hooks, Redux Toolkit, React Sortable,...',
      ],
      techStack: 'React Native, ReactJS, React Hooks, Redux Toolkit',
    },
    {
      title: 'Frontend Developer',
      company: 'CXA Group',
      location: 'Ho Chi Minh City, Vietnam',
      period: '10/2019 - 04/2021',
      description: [
        'Startup for building healthcare insurance platform that provide benefits to clients and their employees',
        'Contribute to developing healthcare insurance mobile application',
      ],
      techStack: 'React Native, React, Firebase',
    },
    {
      title: 'Frontend Developer',
      company: 'Saigon Technology',
      location: 'Ho Chi Minh City, Vietnam',
      period: '05/2019 - 10/2019',
      description: [
        'Develop internal social web application that users can post news, upload images, catch up company status',
      ],
      techStack: 'React, Redux, Redux Saga',
    },
    {
      title: 'Frontend Developer',
      company: 'Aleph-Labs',
      location: 'Bangkok, Thailand',
      period: '08/2018 - 05/2019',
      description: [
        'Develop SPA web application and cross-platform mobile application for insurance company in Thailand',
        'Working onsite, communicate to client in person for getting requirements',
        'Support the release of web and mobile applications into production environments'
      ],
      techStack: 'React, React Native',
    },
  ]

  const education: Education[] = [
    {
      degree: 'Degree of Engineering',
      institution: 'Posts and Telecommunications Institute of Technology',
      location: '',
      period: '09/2010 - 05/2015',
    },
  ]

  const skills = [
    'React',
    'Redux',
    'Javascript',
    'Git',
    'TypeScript',
    'HTML',
    'CSS',
  ]

  // const strengths: Strength[] = [
  //   {
  //     title: 'Accountability',
  //     description: 'Always finish every task when I get assigned.',
  //     icon: 'check',
  //   },
  //   {
  //     title: 'Time management',
  //     description: 'Leverage peak performance time to work as productive as possible.',
  //     icon: 'clock',
  //   },
  // ]

  return (
    <div className="cv-container">
      {/* Background Pattern */}
      {/* <div className="cv-background-pattern"></div> */}

      {/* Header Section */}
      <header className="cv-header">
        <div className="header-left">
          <h1 className="cv-name">{personalInfo.name}</h1>
          <h2 className="cv-title">{personalInfo.title}</h2>
          <div className="cv-contact">
            <div className="contact-row">
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>{personalInfo.linkedin}</span>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>{personalInfo.email}</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="profile-picture">
            <img src={personalInfo.profileImage} alt="Profile" onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling?.classList.remove('hidden')
            }} />
            <div className="profile-placeholder hidden">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Two Columns */}
      <div className="cv-content">
        {/* Left Column - Experience */}
        <div className="cv-column-left">
          <section className="cv-section">
            <h3 className="section-title">EXPERIENCE</h3>
            {experiences.map((exp) => (
              <div key={`${exp.company}-${exp.period}`} className="experience-item">
                <div className="experience-header">
                  <div className="experience-title-company">
                    <h4 className="experience-title">{exp.title}</h4>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                </div>
                <div className="experience-meta">
                  <div className="meta-item">
                    <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, itemIdx) => (
                    <li key={`${exp.company}-desc-${itemIdx}`}>{item}</li>
                  ))}
                </ul>
                <p className="experience-tech">
                  <strong>Tech stack:</strong> {exp.techStack}
                </p>
                {experiences.indexOf(exp) < experiences.length - 1 && <div className="experience-divider"></div>}
              </div>
            ))}
          </section>
        </div>

        {/* Right Column - Skills, Strengths, Education */}
        <div className="cv-column-right">
          {/* Skills Section */}
          <section className="cv-section">
            <h3 className="section-title">SKILLS</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-box">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Strengths Section */}
          {/* <section className="cv-section">
            <h3 className="section-title">STRENGTHS</h3>
            {strengths.map((strength) => (
              <div key={strength.title} className="strength-item">
                <div className="strength-icon">
                  {strength.icon === 'check' ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                </div>
                <div className="strength-content">
                  <strong>{strength.title}:</strong> {strength.description}
                </div>
              </div>
            ))}
          </section> */}

          {/* Education Section */}
          <section className="cv-section">
            <h3 className="section-title">EDUCATION</h3>
            {education.map((edu) => (
              <div key={`${edu.institution}-${edu.period}`} className="education-item">
                <h4 className="education-degree">{edu.degree}</h4>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-meta">
                  <div className="meta-item">
                    <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{edu.period}</span>
                  </div>
                  {edu.location && (
                    <div className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

export default App

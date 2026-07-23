import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('internships');

  const internships = [
    {
      role: 'Machine Learning Intern',
      company: 'Winways Pvt. Ltd.',
      location: 'Dindigul, India',
      period: 'Recent Internship',
      type: 'Internship',
      achievements: [
        'Developed hands-on experience in Machine Learning concepts, data preprocessing, and model implementation strategies.',
        'Collaborated with senior engineers to analyze dataset patterns and optimize algorithmic accuracy.'
      ],
      skills: ['Python', 'Machine Learning', 'Data Preprocessing', 'Algorithmic Logic']
    },
    {
      role: 'Python Programming Intern',
      company: 'Codsoft',
      location: 'Remote',
      period: 'Recent Internship',
      type: 'Internship',
      achievements: [
        'Engineered Python-based software applications focusing on computational performance and clean OOP logic.',
        'Built automated scripts and solved algorithmic challenges during the technical internship period.'
      ],
      skills: ['Python', 'Data Structures', 'OOP', 'Algorithm Design', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'PSNA College of Engineering and Technology',
      location: 'Dindigul, India',
      period: 'Pursuing (Current)',
      score: 'Current CGPA: 7.89',
      details: 'Focusing on Data Structures & Algorithms, Full Stack Web Development (MEAN Stack), Database Management Systems, and Software Engineering.'
    },
    {
      degree: 'CBSE (12th Grade - Higher Secondary)',
      institution: 'Akshaya Academy',
      location: 'Oddanchathram, India',
      period: 'Completed 2023',
      score: 'Percentage: 82%',
      details: 'Physics, Chemistry, Mathematics, and Computer Science specialization.'
    },
    {
      degree: 'CBSE (10th Grade - Secondary School)',
      institution: 'Prasiddhi Vidyodaya',
      location: 'Dindigul, India',
      period: 'Completed 2021',
      score: 'Percentage: 70%',
      details: 'Foundational sciences, mathematics, and computer literacy.'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Briefcase size={16} /> Track Record
          </div>
          <h2 className="section-title">
            Internships & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My technical internship experiences and academic background in Computer Science & Engineering.
          </p>

          {/* Toggle Switch */}
          <div className="exp-toggle-group">
            <button
              className={`exp-toggle-btn ${activeTab === 'internships' ? 'active' : ''}`}
              onClick={() => setActiveTab('internships')}
            >
              <Briefcase size={16} /> Technical Internships
            </button>
            <button
              className={`exp-toggle-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap size={16} /> Academic Background
            </button>
          </div>
        </div>

        {/* Internships View */}
        {activeTab === 'internships' ? (
          <div className="timeline-container">
            <div className="timeline-line" />

            {internships.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot">
                  <Briefcase size={18} color="#7C3AED" />
                </div>

                <div className="timeline-content glass-card">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company-info">
                        <span className="exp-company">{exp.company}</span>
                        <span className="dot-separator">•</span>
                        <span className="exp-location"><MapPin size={14} /> {exp.location}</span>
                      </div>
                    </div>

                    <div className="exp-badge-group">
                      <span className="exp-badge">
                        <Calendar size={14} /> {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="achievements-list">
                    {exp.achievements.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <CheckCircle size={16} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="exp-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Education View */
          <div className="timeline-container">
            <div className="timeline-line" />

            {education.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" style={{ borderColor: '#38BDF8' }}>
                  <GraduationCap size={18} color="#38BDF8" />
                </div>

                <div className="timeline-content glass-card">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{edu.degree}</h3>
                      <div className="exp-company-info">
                        <span className="exp-company" style={{ color: '#38BDF8' }}>{edu.institution}</span>
                        <span className="dot-separator">•</span>
                        <span className="exp-location"><MapPin size={14} /> {edu.location}</span>
                      </div>
                    </div>

                    <div className="exp-badge-group">
                      <span className="exp-badge" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#0284C7', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .exp-toggle-group {
          display: inline-flex;
          gap: 10px;
          background: var(--bg-glass-card);
          padding: 6px;
          border-radius: var(--pill-radius);
          border: 1px solid var(--border-light);
          margin-top: 24px;
        }

        .exp-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: var(--pill-radius);
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .exp-toggle-btn.active {
          background: var(--accent-gradient);
          color: white;
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35);
        }

        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 28px;
          width: 3px;
          background: linear-gradient(180deg, var(--accent-purple) 0%, rgba(124, 58, 237, 0.15) 100%);
          border-radius: 3px;
        }

        .timeline-item {
          position: relative;
          padding-left: 72px;
          margin-bottom: 40px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: 10px;
          top: 24px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2px solid var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(124, 58, 237, 0.4);
          z-index: 2;
        }

        .timeline-content {
          padding: 28px;
          border-radius: var(--card-radius);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }

        .exp-role {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .exp-company-info {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }

        .exp-company {
          font-weight: 700;
          color: var(--accent-purple);
        }

        .dot-separator {
          color: var(--text-muted);
        }

        .exp-location {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--text-muted);
        }

        .exp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--pill-radius);
          background: var(--badge-bg);
          color: var(--badge-text);
          border: 1px solid var(--badge-border);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .achievements-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .achievements-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .check-icon {
          color: var(--accent-purple);
          flex-shrink: 0;
          margin-top: 4px;
        }

        .exp-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .exp-skill-tag {
          padding: 4px 12px;
          border-radius: 8px;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }
          .timeline-dot {
            left: 2px;
          }
          .timeline-item {
            padding-left: 56px;
          }
        }
      `}</style>
    </section>
  );
}

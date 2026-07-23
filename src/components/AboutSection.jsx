import React from 'react';
import { User, MapPin, GraduationCap, Mail, Code2, Layers, Award, CheckCircle2, Globe, Brain, Users, FileCheck, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  const personalInfo = [
    { icon: <User size={20} color="#7C3AED" />, label: 'Full Name', value: 'Hariraj M' },
    { icon: <MapPin size={20} color="#38BDF8" />, label: 'Location', value: 'Dindigul, Tamil Nadu, 624005' },
    { icon: <GraduationCap size={20} color="#10B981" />, label: 'Degree', value: 'B.E. Computer Science (CGPA: 7.89)' },
    { icon: <Mail size={20} color="#F59E0B" />, label: 'Email', value: 'mhariraj2005@gmail.com' },
  ];

  const metrics = [
    {
      icon: <GraduationCap size={28} color="#7C3AED" />,
      value: '7.89',
      title: 'Current CGPA',
      subtitle: 'B.E. Computer Science & Engineering',
      bgGlow: 'rgba(124, 58, 237, 0.1)'
    },
    {
      icon: <Layers size={28} color="#38BDF8" />,
      value: '4+',
      title: 'Full-Stack Projects',
      subtitle: 'EduStream, SmartStock & Web Apps',
      bgGlow: 'rgba(56, 189, 248, 0.1)'
    },
    {
      icon: <Award size={28} color="#10B981" />,
      value: '3+',
      title: 'Certifications',
      subtitle: 'MongoDB, Gen AI & Java Certs',
      bgGlow: 'rgba(16, 185, 129, 0.1)'
    },
    {
      icon: <Code2 size={28} color="#F59E0B" />,
      value: '2',
      title: 'Tech Internships',
      subtitle: 'Machine Learning & Python Programming',
      bgGlow: 'rgba(245, 158, 11, 0.1)'
    },
  ];

  const certifications = [
    { name: 'MongoDB Professional Certification', issuer: 'MongoDB University' },
    { name: 'Generative AI for Beginners', issuer: 'Great Learning' },
    { name: 'Java Internship Certification', issuer: '1Stop' },
  ];

  const softSkills = ['Team Collaboration', 'Agile Methodology', 'Project Documentation', 'Problem Solving'];
  const languagesSpoken = ['English (Professional)', 'Tamil (Native)'];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)', borderRadius: '32px', margin: '40px 0' }}>
      <div className="container">
        <div className="about-grid">
          {/* Left Column */}
          <div className="about-left">
            <div className="section-tag">
              <User size={16} /> About Me
            </div>
            <h2 className="section-title">
              Aspiring Software Engineer & <span className="gradient-text">Full Stack Developer</span>
            </h2>
            <p className="about-description">
              Enthusiastic and detail-oriented Full Stack Developer with a strong foundation in Java, Python, and modern web technologies. Passionate about learning MEAN stack development and contributing to real-world software solutions.
            </p>
            <p className="about-description" style={{ marginTop: '-12px' }}>
              Currently pursuing my Bachelor of Engineering in Computer Science at PSNA College of Engineering and Technology. Seeking an entry-level position to apply my technical skills in a dynamic, collaborative team environment.
            </p>

            {/* Personal Details Grid */}
            <div className="info-list">
              {personalInfo.map((item, idx) => (
                <div key={idx} className="info-card glass-card">
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills & Spoken Languages */}
            <div className="extra-about-badges" style={{ marginTop: '28px' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                Core Competencies & Spoken Languages
              </h4>
              <div className="badges-flex">
                {softSkills.map(skill => (
                  <span key={skill} className="soft-badge">
                    <ShieldCheck size={14} color="#7C3AED" /> {skill}
                  </span>
                ))}
                {languagesSpoken.map(lang => (
                  <span key={lang} className="lang-badge">
                    <Globe size={14} color="#38BDF8" /> {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Glassmorphism Statistics Card & Certifications */}
          <div className="about-right">
            <div className="stats-glass-container glass-card">
              <div className="stats-header">
                <CheckCircle2 size={24} color="#7C3AED" />
                <h3>Academic & Internship Highlights</h3>
              </div>

              <div className="metrics-grid">
                {metrics.map((metric, index) => (
                  <div key={index} className="metric-card" style={{ '--card-glow': metric.bgGlow }}>
                    <div className="metric-icon-wrapper">{metric.icon}</div>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-title">{metric.title}</div>
                    <div className="metric-subtitle">{metric.subtitle}</div>
                  </div>
                ))}
              </div>

              {/* Certifications Highlight Box */}
              <div className="cert-box">
                <h4 className="cert-box-title">
                  <Award size={18} color="#7C3AED" /> Professional Certifications
                </h4>
                <div className="cert-list">
                  {certifications.map((cert, i) => (
                    <div key={i} className="cert-item">
                      <div className="cert-bullet" />
                      <div>
                        <span className="cert-name">{cert.name}</span>
                        <span className="cert-issuer">{cert.issuer}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .info-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 32px;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          border-radius: 16px;
        }

        .info-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--badge-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          display: block;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .badges-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .soft-badge, .lang-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--pill-radius);
          font-size: 0.82rem;
          font-weight: 600;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
        }

        /* Right Stats Container */
        .stats-glass-container {
          padding: 36px;
          border-radius: var(--card-radius);
        }

        .stats-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }

        .stats-header h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        .metric-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: 18px;
          padding: 24px;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .metric-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-active);
          box-shadow: 0 10px 25px var(--card-glow);
        }

        .metric-icon-wrapper {
          margin-bottom: 12px;
        }

        .metric-value {
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .metric-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .metric-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .cert-box {
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: 18px;
          padding: 20px;
        }

        .cert-box-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 14px;
        }

        .cert-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cert-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-purple);
        }

        .cert-name {
          display: block;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .cert-issuer {
          display: block;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .info-list {
            grid-template-columns: 1fr;
          }
          .metrics-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

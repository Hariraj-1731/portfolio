import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = [
    // Languages
    { name: 'Java', category: 'Languages', color: '#ED8B00', icon: '☕', level: 'Core & OOP' },
    { name: 'Python', category: 'Languages', color: '#3776AB', icon: '🐍', level: 'Advanced' },
    { name: 'JavaScript', category: 'Languages', color: '#F7DF1E', icon: '✨', level: 'Advanced' },
    { name: 'C', category: 'Languages', color: '#A8B9CC', icon: '💻', level: 'Foundational' },
    { name: 'C++', category: 'Languages', color: '#00599C', icon: '⚡', level: 'Foundational' },
    { name: 'HTML5', category: 'Languages', color: '#E34F26', icon: '🌐', level: 'Expert' },
    { name: 'CSS3', category: 'Languages', color: '#1572B6', icon: '🎨', level: 'Expert' },

    // Frameworks
    { name: 'React', category: 'Frameworks', color: '#61DAFB', icon: '⚛️', level: 'Frontend' },
    { name: 'Node.js', category: 'Frameworks', color: '#339933', icon: '🟢', level: 'Backend' },
    { name: 'ExpressJS', category: 'Frameworks', color: '#7C3AED', icon: '🚀', level: 'REST APIs' },
    { name: 'AngularJS', category: 'Frameworks', color: '#DD0031', icon: '🅰️', level: 'MEAN Stack' },
    { name: 'Flask', category: 'Frameworks', color: '#000000', icon: '🧪', level: 'Python Web' },

    // Databases
    { name: 'MySQL', category: 'Databases', color: '#4479A1', icon: '🐬', level: 'Relational DB' },
    { name: 'MongoDB', category: 'Databases', color: '#47A248', icon: '🍃', level: 'NoSQL & Certified' },

    // Tools & Cloud
    { name: 'Git', category: 'Tools & Cloud', color: '#F05032', icon: '🌿', level: 'Version Control' },
    { name: 'GitHub', category: 'Tools & Cloud', color: '#181717', icon: '🐙', level: 'Collaboration' },
    { name: 'VS Code', category: 'Tools & Cloud', color: '#007ACC', icon: '💙', level: 'IDE' },
    { name: 'AWS S3', category: 'Tools & Cloud', color: '#FF9900', icon: '☁️', level: 'Cloud Storage' },
    { name: 'Excel', category: 'Tools & Cloud', color: '#1D6F42', icon: '📊', level: 'Data Analysis' },
  ];

  const categories = ['All', 'Languages', 'Frameworks', 'Databases', 'Tools & Cloud'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Cpu size={16} /> Tech Stack & Tools
          </div>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My technical repertoire spanning core programming languages, modern full-stack web frameworks, databases, and cloud tools.
          </p>

          {/* Category Filter Tabs */}
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((tech) => (
            <div key={tech.name} className="skill-card glass-card">
              <div className="skill-icon-bubble" style={{ '--skill-color': tech.color }}>
                <span className="emoji-icon">{tech.icon}</span>
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{tech.name}</h3>
                <span className="skill-level">{tech.level}</span>
              </div>
              <div className="skill-glow-bg" style={{ background: tech.color }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .category-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .tab-btn {
          padding: 8px 20px;
          border-radius: var(--pill-radius);
          background: var(--bg-glass-card);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tab-btn:hover {
          color: var(--accent-purple);
          border-color: var(--accent-purple);
        }

        .tab-btn.active {
          background: var(--accent-gradient);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 20px;
        }

        .skill-card {
          position: relative;
          padding: 24px 20px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          overflow: hidden;
          cursor: default;
        }

        .skill-icon-bubble {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: var(--badge-bg);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          transition: transform var(--transition-fast);
        }

        .skill-card:hover .skill-icon-bubble {
          transform: scale(1.15) rotate(6deg);
        }

        .skill-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .skill-level {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .skill-glow-bg {
          position: absolute;
          bottom: -40px;
          right: -40px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0;
          transition: opacity var(--transition-normal);
          pointer-events: none;
        }

        .skill-card:hover .skill-glow-bg {
          opacity: 0.25;
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}

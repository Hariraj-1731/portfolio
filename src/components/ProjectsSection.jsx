import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'EduStream — Full Stack E-Learning Platform',
      description: 'Full stack learning management system using Angular for the student/instructor dashboard and Node.js/Express for REST APIs. Implemented secure JWT authentication and media asset management via AWS S3.',
      image: '/project-ai.png',
      tags: ['AngularJS', 'Node.js', 'ExpressJS', 'MongoDB', 'JWT', 'AWS S3'],
      demoUrl: 'https://github.com/Hariraj-1731/EduStream',
      githubUrl: 'https://github.com/Hariraj-1731/EduStream',
      featured: true
    },
    {
      id: 2,
      title: 'SmartStock — Real-Time Inventory Dashboard',
      description: 'Real-time inventory tracking system built with Socket.io for live updates and Chart.js for data analytics. Optimized MongoDB database schemas to effectively process high-frequency transaction logs.',
      image: '/project-cloud.png',
      tags: ['MEAN Stack', 'Socket.io', 'Chart.js', 'MongoDB', 'Express', 'Node.js'],
      demoUrl: 'https://github.com/Hariraj-1731/SmartStock',
      githubUrl: 'https://github.com/Hariraj-1731/SmartStock',
      featured: true
    },
    {
      id: 3,
      title: 'Food Ordering System',
      description: 'Python Flask web application designed to streamline food ordering workflows, prevent stockouts, and ensure ingredient freshness through automated stock tracking.',
      image: '/project-fintech.png',
      tags: ['Flask', 'Python', 'HTML5', 'CSS3', 'MySQL'],
      demoUrl: 'https://github.com/Hariraj-1731/Food-Ordering-System',
      githubUrl: 'https://github.com/Hariraj-1731/Food-Ordering-System',
      featured: true
    },
    {
      id: 4,
      title: 'Interactive Login Page & UI System',
      description: 'A visually dynamic, responsive authentication UI built with modern HTML5 and CSS3, featuring frosted glass aesthetics and fluid form animations for user engagement.',
      image: '/hero-programmer.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Glassmorphism', 'Responsive UI'],
      demoUrl: 'https://github.com/Hariraj-1731/Interactive-Login-Page',
      githubUrl: 'https://github.com/Hariraj-1731/Interactive-Login-Page',
      featured: true
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', borderRadius: '32px', margin: '40px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag">
            <FolderGit2 size={16} /> Portfolio Highlights
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real-world software solutions built with MEAN stack, Python, Flask, AWS S3, and modern UI engineering.
          </p>
        </div>

        {/* 4 Project Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Image Preview Container */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                    >
                      View Repository <GithubIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="external-icon-btn"
                    title="View GitHub Repository"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Technology Badges */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .project-card {
          border-radius: var(--card-radius);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 52%;
          overflow: hidden;
          background: var(--bg-primary);
        }

        .project-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .project-card:hover .project-image {
          transform: scale(1.06);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .overlay-buttons {
          display: flex;
          gap: 12px;
          transform: translateY(15px);
          transition: transform var(--transition-normal);
        }

        .project-card:hover .overlay-buttons {
          transform: translateY(0);
        }

        .project-content {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .project-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .external-icon-btn {
          color: var(--text-muted);
          transition: color var(--transition-fast);
          padding: 4px;
        }

        .external-icon-btn:hover {
          color: var(--accent-purple);
        }

        .project-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 24px;
          flex: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-badge {
          padding: 4px 12px;
          border-radius: var(--pill-radius);
          background: var(--badge-bg);
          color: var(--badge-text);
          border: 1px solid var(--badge-border);
          font-size: 0.78rem;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

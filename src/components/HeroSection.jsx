import React from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, Download, Mail, Code, Terminal, Cpu, Database, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function HeroSection() {
  const handleDownloadResume = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7C3AED', '#A855F7', '#C084FC', '#38BDF8']
    });

    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Hariraj_M_Resume.pdf';
    alert('🎉 Hariraj M Resume download initiated!');
  };

  return (
    <section id="home" className="section" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container hero-grid">
        {/* Left Content Column */}
        <div className="hero-left">
          {/* Greeting Badge */}
          <div className="section-tag" style={{ animation: 'fadeIn 0.6s ease' }}>
            <span className="pulse-dot" />
            <span>👋 Open to Entry-Level & Full Stack Roles</span>
          </div>

          {/* Large Bold Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Hariraj M</span>
          </h1>

          {/* Gradient Highlighted Role */}
          <div className="hero-role-wrapper">
            <span className="gradient-text hero-role">Full Stack Developer</span>
            <span className="role-subtext"> & MEAN Stack Enthusiast</span>
          </div>

          {/* Short Professional Description */}
          <p className="hero-description">
            Enthusiastic and detail-oriented Full Stack Developer with a strong foundation in Java, Python, and modern web technologies. Passionate about MEAN stack development and building real-world software solutions.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <button onClick={handleDownloadResume} className="btn btn-secondary">
              <Download size={18} /> Download Resume
            </button>
          </div>

          {/* Social Icons in Rounded Square Glass Buttons */}
          <div className="social-links-wrapper">
            <span className="social-label">Connect with me:</span>
            <div className="social-buttons">
              <a
                href="https://github.com/Hariraj-1731"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/hari-raj-m-cs-student-24b461299"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:mhariraj2005@gmail.com"
                className="btn-icon"
                title="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right 3D Visual Column */}
        <div className="hero-right">
          <div className="hero-visual-card">
            {/* Glowing Abstract Blob Background */}
            <div className="visual-glow-blob" />
            
            {/* Main 3D Hooded Programmer Image */}
            <img
              src="/hero-programmer.png"
              alt="Hariraj M 3D Developer Persona"
              className="hero-3d-img"
            />

            {/* Floating Coding Tech Badges */}
            <div className="floating-badge badge-top-left">
              <Code size={18} color="#A855F7" />
              <span>Full Stack</span>
            </div>

            <div className="floating-badge badge-top-right">
              <Cpu size={18} color="#38BDF8" />
              <span>MEAN Stack</span>
            </div>

            <div className="floating-badge badge-bottom-left">
              <Database size={18} color="#10B981" />
              <span>Java & Python</span>
            </div>

            <div className="floating-badge badge-bottom-right">
              <Award size={18} color="#F59E0B" />
              <span>MongoDB Cert</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10B981;
          display: inline-block;
          box-shadow: 0 0 10px #10B981;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.25); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .hero-name {
          color: var(--text-primary);
        }

        .hero-role-wrapper {
          margin-bottom: 20px;
        }

        .hero-role {
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .role-subtext {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .social-links-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .social-buttons {
          display: flex;
          gap: 12px;
        }

        .hero-right {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero-visual-card {
          position: relative;
          width: 100%;
          max-width: 480px;
          border-radius: 28px;
          padding: 16px;
          background: var(--bg-glass-card);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-lg);
          transition: transform var(--transition-normal);
        }

        .hero-visual-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-active);
        }

        .visual-glow-blob {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.35), transparent 70%);
          filter: blur(40px);
          z-index: 0;
          pointer-events: none;
        }

        .hero-3d-img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
          position: relative;
          z-index: 1;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .floating-badge {
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 14px;
          background: var(--bg-glass-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-light);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          box-shadow: var(--shadow-md);
          animation: floatIcon 6s ease-in-out infinite;
        }

        .badge-top-left {
          top: -15px;
          left: -20px;
          animation-delay: 0s;
        }

        .badge-top-right {
          top: 25px;
          right: -25px;
          animation-delay: 1.5s;
        }

        .badge-bottom-left {
          bottom: 30px;
          left: -25px;
          animation-delay: 3s;
        }

        .badge-bottom-right {
          bottom: -15px;
          right: -15px;
          animation-delay: 4.5s;
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-role {
            font-size: 1.8rem;
          }
          .hero-visual-card {
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

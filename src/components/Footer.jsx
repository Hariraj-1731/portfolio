import React, { useState, useEffect } from 'react';
import { ArrowUp, Code2 } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Left Side Branding */}
        <div className="footer-left">
          <a href="#home" className="footer-logo">
            <div className="logo-badge" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>
              <Code2 size={16} />
            </div>
            <span>Hariraj<span className="gradient-text">.dev</span></span>
          </a>
          <p className="footer-copy">
            © {new Date().getFullYear()} Hariraj M. All rights reserved. Full Stack & Computer Science Engineer.
          </p>
        </div>

        {/* Center Tech Note */}
        <div className="footer-center">
          <span className="built-with">
            Built with React, MEAN Stack & Soft Glassmorphism
          </span>
        </div>

        {/* Right Side Social Quick Links */}
        <div className="footer-right">
          <a href="https://github.com/Hariraj-1731" target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/hari-raj-m-cs-student-24b461299" target="_blank" rel="noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="mailto:mhariraj2005@gmail.com" className="footer-link">
            Contact
          </a>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>

      <style>{`
        .footer {
          padding: 40px 0;
          border-top: 1px solid var(--border-light);
          background: var(--bg-primary);
          margin-top: 60px;
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .footer-copy {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-center {
          font-size: 0.85rem;
          color: var(--text-muted);
          background: var(--badge-bg);
          padding: 6px 16px;
          border-radius: var(--pill-radius);
          border: 1px solid var(--badge-border);
        }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .footer-link {
          font-size: 0.88rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--accent-purple);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
          .footer-left {
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}

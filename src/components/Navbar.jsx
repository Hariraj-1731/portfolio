import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, Sparkles } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          <div className="logo-badge">
            <Code2 size={20} />
          </div>
          <span>Hariraj<span className="gradient-text">.dev</span></span>
        </a>

        {/* Desktop Links */}
        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeNav === sectionId ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Side Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Dark Mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={20} color="#FBBF24" /> : <Moon size={20} color="#7C3AED" />}
          </button>

          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
            <Sparkles size={16} /> Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

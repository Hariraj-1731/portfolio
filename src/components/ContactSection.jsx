import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#7C3AED', '#A855F7', '#38BDF8']
    });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('mhariraj2005@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', borderRadius: '32px', margin: '40px 0' }}>
      <div className="container">
        <div className="contact-layout">
          {/* Left Column: Headline & Quick CTA */}
          <div className="contact-left">
            <div className="section-tag">
              <MessageSquare size={16} /> Get In Touch
            </div>
            <h2 className="contact-heading">
              Let's Connect & Build <span className="gradient-text">Real-World Software</span>
            </h2>
            <p className="contact-subtext">
              I am actively seeking entry-level software engineering and full stack development roles. Feel free to send a message or connect directly!
            </p>

            <a href="mailto:mhariraj2005@gmail.com" className="btn btn-primary contact-cta-btn">
              <Mail size={18} /> Email Hariraj Directly <Sparkles size={16} />
            </a>
          </div>

          {/* Center Column: Direct Contact Info Cards */}
          <div className="contact-center">
            <div className="contact-info-stack">
              {/* Email Card with Copy Feature */}
              <div className="contact-item-card glass-card" onClick={copyEmailToClipboard} style={{ cursor: 'pointer' }}>
                <div className="contact-item-icon" style={{ background: 'rgba(124, 58, 237, 0.12)', color: '#7C3AED' }}>
                  <Mail size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <span className="contact-item-label">Email Address</span>
                  <span className="contact-item-value">mhariraj2005@gmail.com</span>
                </div>
                <button className="copy-btn" title="Copy email">
                  {copiedEmail ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-item-card glass-card">
                <div className="contact-item-icon" style={{ background: 'rgba(56, 189, 248, 0.12)', color: '#38BDF8' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <span className="contact-item-label">Mobile Phone</span>
                  <span className="contact-item-value">+91 6381467734</span>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-item-card glass-card">
                <div className="contact-item-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10B981' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="contact-item-label">Location</span>
                  <span className="contact-item-value">Dindigul, Tamil Nadu, 624005</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Form + Social Glass Buttons */}
          <div className="contact-right">
            <div className="form-glass-card glass-card">
              {submitted ? (
                <div className="success-state">
                  <div className="success-icon-ring">
                    <CheckCircle2 size={48} color="#10B981" />
                  </div>
                  <h3>Message Sent to Hariraj!</h3>
                  <p>Thank you for reaching out. I'll get back to you shortly at your email address.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary" style={{ marginTop: '16px' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-title">Send Me a Message</h3>

                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="Full Stack Developer Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share project details or job role expectations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <span>Send Message</span> <Send size={18} />
                  </button>
                </form>
              )}

              {/* Social Icons Inside Glass Buttons */}
              <div className="social-glass-row">
                <span className="social-row-label">Connect on socials:</span>
                <div className="social-glass-buttons">
                  <a href="https://github.com/Hariraj-1731" target="_blank" rel="noreferrer" className="glass-social-btn" title="GitHub Profile">
                    <GithubIcon size={18} />
                  </a>
                  <a href="https://linkedin.com/in/hari-raj-m-cs-student-24b461299" target="_blank" rel="noreferrer" className="glass-social-btn" title="LinkedIn Profile">
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 0.9fr 1.1fr;
          gap: 36px;
          align-items: start;
        }

        .contact-heading {
          font-size: 2.6rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .contact-subtext {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .contact-cta-btn {
          width: fit-content;
        }

        .contact-info-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border-radius: 18px;
          position: relative;
        }

        .contact-item-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-item-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-item-value {
          display: block;
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .copy-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          transition: background var(--transition-fast);
        }

        .copy-btn:hover {
          background: var(--badge-bg);
          color: var(--accent-purple);
        }

        .form-glass-card {
          padding: 32px;
          border-radius: var(--card-radius);
        }

        .form-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: all var(--transition-fast);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-purple);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
        }

        .form-submit-btn {
          width: 100%;
          margin-top: 8px;
        }

        .social-glass-row {
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .social-row-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .social-glass-buttons {
          display: flex;
          gap: 10px;
        }

        .glass-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .glass-social-btn:hover {
          background: var(--accent-gradient);
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
        }

        .success-state {
          text-align: center;
          padding: 40px 10px;
        }

        .success-icon-ring {
          margin-bottom: 16px;
        }

        .success-state h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .success-state p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        @media (max-width: 1100px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}

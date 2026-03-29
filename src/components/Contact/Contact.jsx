import { useState } from 'react';
import './Contact.css';

const socials = [
  { label: 'GitHub',   href: '#', icon: 'GH' },
  { label: 'LinkedIn', href: '#', icon: 'LI' },
  { label: 'Twitter',  href: '#', icon: 'TW' },
  { label: 'Dribbble', href: '#', icon: 'DR' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Wire up your own backend / EmailJS / Resend here
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-grid">
        {/* Left */}
        <div className="contact-left">
          <p className="section-label">Say hello</p>
          <h2 className="section-title">
            Let's build<br />
            something great.
          </h2>
          <p className="contact-blurb">
            Have a project in mind, a role to fill, or just want to connect? My inbox is always open.
          </p>

          <a className="contact-email" href="mailto:alex@porter.dev">
            alex@porter.dev
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>

          <div className="social-links">
            {socials.map(s => (
              <a key={s.label} href={s.href} className="social-link">
                <span className="social-icon">{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-right">
          {sent ? (
            <div className="sent-state">
              <div className="sent-icon">✓</div>
              <h3>Message sent!</h3>
              <p>I'll get back to you within 24–48 hours.</p>
              <button className="btn-ghost-sm" onClick={() => setSent(false)}>Send another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-submit">
                Send Message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
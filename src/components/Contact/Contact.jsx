import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
// Import the icons
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import './Contact.css';

const MAX_MSG = 500;

const socials = [
  { label: 'GitHub',   href: 'https://github.com/shifan-mhd', icon: <FaGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anuja-pramodh-77819538b/', icon: <FaLinkedinIn /> },
  { label: 'Facebook',  href: '#', icon: <FaFacebookF /> },
  { label: 'TikTok', href: 'https://www.tiktok.com/@anuja_pramodh', icon: <FaTiktok /> },
];

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sectionRef, inView] = useInView();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX_MSG) return;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_43wzegv';
    const templateID = 'template_b6vzuwh';
    const publicKey = 'YZz9posTYc6UKeHe4';

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setLoading(false);
        alert("පණිවිඩය යැවීමට නොහැකි වුණා. නැවත උත්සාහ කරන්න.");
      });
  };

  const delay = (d) => ({ animationDelay: `${d}ms` });

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-inner">
        {inView && (
          <p className="section-label animate-slide-right" style={delay(0)}>Say hello</p>
        )}

        {inView && (
          <h2 className="section-title animate-fade-up" style={delay(80)}>
            Let's <span className="accent">Connect.</span>
          </h2>
        )}

        <div className="contact-grid">
          <div className="contact-left">
            {inView && (
              <>
                <p className="contact-blurb animate-fade-up" style={delay(160)}>
                  Have a project in mind, a role to fill, or just want to connect?
                  My inbox is always open — I read every message.
                </p>
                <a className="contact-email animate-fade-up" href="mailto:pramodhanuja4@gmail.com" style={delay(220)}>
                  pramodhanuja4@gmail.com
                  <FiArrowUpRight className="email-arrow" />
                </a>
                <div className="social-links">
                  {socials.map((s, i) => (
                    <a key={s.label} href={s.href} className="social-link animate-slide-right" style={delay(280 + i * 60)}>
                      <span className="social-icon">{s.icon}</span>
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="contact-right">
            {sent ? (
              <div className="sent-state">
                <div className="sent-icon">✓</div>
                <h3>Message sent!</h3>
                <p>I'll get back to you within 24–48 hours.</p>
                <button className="btn-ghost-sm" onClick={() => setSent(false)}>
                  Send another <FiArrowRight />
                </button>
              </div>
            ) : (
              inView && (
                <form className="contact-form animate-scale-in" style={delay(200)} onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="field">
                      <label>Name</label>
                      <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="field">
                    <label>Message</label>
                    <textarea name="message" rows="6" placeholder="Tell me about your project…" value={form.message} onChange={handleChange} required />
                    <div className="field-meta">
                      <span className="char-count">{form.message.length} / {MAX_MSG}</span>
                    </div>
                  </div>
                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? (
                      <>Sending <div className="loading-dots"><span/><span/><span/></div></>
                    ) : (
                      <>Send Message <FiArrowRight /></>
                    )}
                  </button>
                </form>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu එක සඳහා

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      
      {/* Mobile Menu Button (Hamburger) */}
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Nav Links - Desktop එකේ මැදටත්, Mobile එකේ Slide එකක් ලෙසත් */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
        <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#contactme" onClick={() => setIsMenuOpen(false)}>Contact Me</a></li>
      </ul>

      {/* Download CV Button */}
      <a href="/resume.pdf" className="nav-cta" download>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>Download CV</span>
      </a>
    </nav>
  );
};

export default Navbar;
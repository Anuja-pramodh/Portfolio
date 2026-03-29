import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="logo">AP.</div>

      <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        {links.map((link, i) => (
          <li key={link} style={{ '--i': i }}>
            <a
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-index">0{i + 1}</span>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
};

export default Navbar;
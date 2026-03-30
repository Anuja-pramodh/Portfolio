import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">AP.</div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Anuja Pramodh. Designed & built with care.
        </p>
        <a href="#home" className="footer-back">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
import DotGrid from '../Animation/DotGrid/DotGrid';
import './Hero.css';
import profileImg from '../..//assets/abimg.png';

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-bg">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={150}
          shockRadius={2500}
          shockStrength={5}
          resistance={750}
          returnDuration={5}
        />
      </div>

      {/* Glow */}
      <div className="hero-blob hero-blob--1" />
      <div className="hero-blob hero-blob--2" />

      {/* Content Wrapper */}
      <div className="hero-wrapper">

        {/* LEFT SIDE */}
        <div className="hero-content">
          <h1 className="hero-name">
            Anuja <br />
            <span className="hero-name--outline">Pramodh</span>
          </h1>

          <div className="hero-meta">
            <p className="hero-role">Full-Stack Developer</p>
            <span className="hero-divider"></span>
            <p className="hero-location">📍 Sri Lanka</p>
          </div>

          <p className="hero-tagline">
            I craft fast, elegant digital products — from pixel-perfect UIs to robust back-end systems.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img src={profileImg} alt="Anuja Pramodh" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
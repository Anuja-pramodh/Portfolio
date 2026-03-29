import React from 'react';
import DotGrid from '../Animation/DotGrid/DotGrid';
import './Hero.css';
import profileImg from '../../assets/abimg.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Dynamic Background */}
      <div className="hero-bg">
        <DotGrid
          dotSize={3}
          gap={25}
          baseColor="#1e1b4b"
          activeColor="#7c3aed"
          proximity={120}
          shockRadius={180}
          shockStrength={3}
          resistance={1000}
          returnDuration={2}
        />
      </div>

      <div className="hero-wrapper">
        {/* LEFT SIDE: Typography */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-icon"></span>
            Available for Hire
          </div>

          <h1 className="hero-name">
            Anuja <br />
            <span className="hero-name--outline">Pramodh</span>
          </h1>

          <div className="hero-meta">
            <span className="hero-role">Full-Stack Developer</span>
            <div className="hero-sep"></div>
            <span className="hero-loc">Sri Lanka</span>
          </div>

          <p className="hero-description">
            I build high-performance web applications with a focus on 
            clean architecture and intuitive user experiences.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>
        </div>

        {/* RIGHT SIDE: 3D Image Card */}
        <div className="hero-image-container">
          <div className="glass-card">
            <img src={profileImg} alt="Anuja Pramodh" className="hero-photo" />
            <div className="card-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
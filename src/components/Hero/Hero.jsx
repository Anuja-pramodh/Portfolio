import React from 'react';
import DotGrid from '../Animation/DotGrid/DotGrid';
import './Hero.css';
import profileImg from '../../assets/abimg.png';

// 🔥 Dynamic Data (easy to update later)
const HERO_DATA = {
  firstName: "Anuja",
  lastName: "Pramodh",
  roles: ["Full-Stack Developer", "Unity Game Developer", "Creative Video Editor"],
  location: "Sri Lanka",
  description:
    "I build high-performance web applications, interactive games, and creative video content with a focus on clean architecture and smooth user experiences.",
  projectsCount: "10+",
};

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="Hero section">
      
      {/* Background */}
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
        
        {/* LEFT */}
        <div className="hero-content">
          
          <div className="hero-badge">
            <span className="pulse-icon"></span>
            Available for Hire
          </div>

          <h1 className="hero-name">
            {HERO_DATA.firstName} <br />
            <span className="hero-name--outline">
              {HERO_DATA.lastName}
            </span>
          </h1>

          <div className="hero-meta">
            <span className="hero-role">
              {HERO_DATA.roles[0]}
            </span>
            <div className="hero-sep"></div>
            <span className="hero-loc">
              {HERO_DATA.location}
            </span>
          </div>

          <p className="hero-description">
            {HERO_DATA.description}
          </p>

          {/* 🔥 Social Proof */}
          <div className="hero-proof">
            🚀 Projects Built: {HERO_DATA.projectsCount}
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-image-container">
          <div className="glass-card">
            <img 
              src={profileImg} 
              alt="Anuja Pramodh profile"
              className="hero-photo"
              loading="lazy"
            />
            <div className="card-glow"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
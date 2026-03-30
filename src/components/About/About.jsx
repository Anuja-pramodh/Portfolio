import { useState, useEffect, useRef } from 'react';
import './About.css';
import Particles from '../Animation/Particles/Particles';

const skillGroups = [
  { 
    category: 'Development', 
    items: ['React', 'Vite', 'JavaScript', 'Vanilla CSS', 'Git/GitHub'] 
  },
  { 
    category: 'Design', 
    items: ['Figma', 'Canva', 'Photoshop', 'Logo Design', 'UI Layouts'] 
  },
  { 
    category: 'Creative', 
    items: ['Photography', 'Photo Manipulation', 'Cinematic Edits', 'Video Intros'] 
  },
];

// Custom Hook for Scroll Animation
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // එකපාරක් පෙනුනට පස්සේ දිගටම තියාගන්න
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

const About = () => {
  const [sectionRef, inView] = useInView(0.15);

  const delay = (d) => ({ animationDelay: `${d}ms` });

  return (
    <section className="about" id="about" ref={sectionRef}>
      {/* Background Particles Layer */}
      <div className="about-bg-animation">
        <Particles
          particleColors={["#ffffff", "#7c3aed"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="about-grid">
        
        {/* Left Side: Bio & Identity */}
        <div className="about-left">
          {inView && (
            <>
              <p className="section-label animate-label" style={delay(0)}>About me</p>
              
              <h2 className="section-title animate-reveal" style={delay(200)}>
                Merging Code with<br />
                <span className="about-title-accent">Visual Artistry.</span>
              </h2>

              <div className="about-content animate-reveal" style={delay(400)}>
                <p className="about-bio">
                  Hey — I'm <strong>Anuja Pramodh</strong>. I'm a developer and designer who genuinely loves the intersection of technology and aesthetics. I don't just build websites; I create cohesive digital experiences.
                </p>
                <p className="about-bio">
                  Currently affiliated with <strong>CINEC Students Media Circle</strong>, I balance clean React components with high-end graphic design and professional photography.
                </p>
              </div>

              <div className="about-badges">
                {['Developer', 'Designer', 'Photographer', 'CINEC SMC'].map((b, i) => (
                  <span 
                    className="badge animate-reveal" 
                    key={b} 
                    style={delay(600 + (i * 100))}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Side: Integrated Skills & Focus */}
        <div className="about-right">
          <div className="skills-container">
            {skillGroups.map((group, index) => (
              inView && (
                <div 
                  className="skill-section animate-reveal" 
                  key={group.category}
                  style={delay(300 + (index * 150))}
                >
                  <p className="skill-group-label">{group.category}</p>
                  <div className="skill-pills">
                    {group.items.map((item, i) => (
                      <span 
                        className="skill-pill" 
                        key={item}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Active Status Card */}
          {inView && (
            <div className="current-focus animate-reveal" style={delay(800)}>
              <div className="focus-header">
                <span className="focus-dot"></span>
                <p className="skill-group-label">Current Focus</p>
              </div>
              <div className="focus-card">
                <h4>Project UNISPHERE</h4>
                <p>Lead Design & Web Development</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default About;
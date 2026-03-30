import './About.css';

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

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        
        {/* Left Side: Bio & Identity */}
        <div className="about-left">
          <p className="section-label animate-label">About me</p>
          
          <h2 className="section-title animate-reveal delay-1">
            Merging Code with<br />
            <span className="about-title-accent">Visual Artistry.</span>
          </h2>

          <div className="about-content animate-reveal delay-2">
            <p className="about-bio">
              Hey — I'm <strong>Anuja Pramodh</strong>. I'm a developer and designer who genuinely loves the intersection of technology and aesthetics. I don't just build websites; I create cohesive digital experiences.
            </p>
            <p className="about-bio">
              Currently affiliated with <strong>CINEC Students Media Circle</strong>, I balance clean React components with high-end graphic design and professional photography.
            </p>
          </div>

          <div className="about-badges animate-reveal delay-3">
            {['Developer', 'Designer', 'Photographer', 'CINEC SMC'].map((b) => (
              <span className="badge" key={b}>{b}</span>
            ))}
          </div>
        </div>

        {/* Right Side: Integrated Skills & Focus */}
        <div className="about-right">
          <div className="skills-container">
            {skillGroups.map((group, index) => (
              <div 
                className={`skill-section animate-reveal delay-${index + 2}`} 
                key={group.category}
              >
                <p className="skill-group-label">{group.category}</p>
                <div className="skill-pills">
                  {group.items.map(item => (
                    <span className="skill-pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Active Status Card */}
          <div className="current-focus animate-reveal delay-5">
            <div className="focus-header">
              <span className="focus-dot"></span>
              <p className="skill-group-label">Current Focus</p>
            </div>
            <div className="focus-card">
              <h4>Project UNISPHERE</h4>
              <p>Lead Design & Web Development</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
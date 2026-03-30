import { useEffect, useRef } from 'react';
import { Code2, Terminal, Globe, Gamepad2, Palette, Cpu } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  const skillCategories = [
    { title: 'Programming Languages', icon: <Code2 size={18} />, skills: ['Java','C#','JavaScript','HTML5','CSS3'] },
    { title: 'Frameworks & Engines', icon: <Gamepad2 size={18} />, skills: ['Unity Engine','JavaFX','React.js'] },
    { title: 'Web Technologies', icon: <Globe size={18} />, skills: ['REST APIs','Responsive Design','DOM Manipulation'] },
    { title: 'Tools & Platforms', icon: <Terminal size={18} />, skills: ['VS Code','Eclipse IDE','Git','GitHub'] },
    { title: 'Design & Creative', icon: <Palette size={18} />, skills: ['Canva','UI/UX Basics','Figma'] },
    { title: 'Core Concepts', icon: <Cpu size={18} />, skills: ['OOP','Data Structures','System Design','GUI Development'] },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((card) => { if (card) observer.observe(card); });

    return () => observer.disconnect();
  }, []);

  return (
    <section id ="skill" className="skills">
      <div className="skills-container">
        <div className="skills-header" ref={headerRef}>
          <span className="skills-subtitle">My Expertise</span>
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-description">Technologies and tools I use to bring ideas to life</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card"
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="card-header">
                <div className="card-icon">{category.icon}</div>
                <h3 className="card-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
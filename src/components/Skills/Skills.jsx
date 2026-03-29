import { 
  Code2, 
  Terminal, 
  Globe, 
  Gamepad2, 
  Database, 
  GitBranch, 
  Palette,
  Cpu
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={20} />,
      skills: ['Java', 'C#', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Frameworks & Engines',
      icon: <Gamepad2 size={20} />,
      skills: ['Unity Engine', 'JavaFX', 'React.js']
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={20} />,
      skills: ['REST APIs', 'Responsive Design', 'DOM Manipulation']
    },
    {
      title: 'Tools & Platforms',
      icon: <Terminal size={20} />,
      skills: ['VS Code', 'Eclipse IDE', 'Git', 'GitHub']
    },
    {
      title: 'Design & Creative',
      icon: <Palette size={20} />,
      skills: ['Canva', 'UI/UX Basics', 'Figma']
    },
    {
      title: 'Core Concepts',
      icon: <Cpu size={20} />,
      skills: ['OOP', 'Data Structures', 'System Design', 'GUI Development']
    }
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="skills-subtitle">My Expertise</span>
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-description">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">
                    {skill}
                  </span>
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
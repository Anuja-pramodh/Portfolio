import './About.css';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend',  items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST / GraphQL'] },
  { category: 'Tooling',  items: ['Git', 'Docker', 'Vite', 'Figma', 'AWS (S3, EC2)'] },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        {/* Left column */}
        <div className="about-left">
          <p className="section-label">About me</p>
          <h2 className="section-title">
            Building things<br />
            <span className="about-title-accent">that matter.</span>
          </h2>

          <p className="about-bio">
            Hey — I'm Alex. A full-stack developer who genuinely loves the intersection of engineering and design. I believe the best software is invisible: it just works, beautifully.
          </p>
          <p className="about-bio">
            With 3+ years building production-grade apps, I've worked across early-stage startups and larger teams, shipping everything from design systems to complex data pipelines.
          </p>

          <div className="about-badges">
            {['Open to remote', 'Freelance friendly', 'Fast learner'].map(b => (
              <span className="badge" key={b}>{b}</span>
            ))}
          </div>
        </div>

        {/* Right column — skills */}
        <div className="about-right">
          {skills.map(({ category, items }) => (
            <div className="skill-group" key={category}>
              <p className="skill-category">{category}</p>
              <div className="skill-pills">
                {items.map(item => (
                  <span className="skill-pill" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}

          <div className="experience-row">
            <div className="exp-item">
              <span className="exp-company">Acme Corp</span>
              <span className="exp-role">Senior Dev · 2023–Now</span>
            </div>
            <div className="exp-item">
              <span className="exp-company">BuildStudio</span>
              <span className="exp-role">Full-Stack · 2022–23</span>
            </div>
            <div className="exp-item">
              <span className="exp-company">Freelance</span>
              <span className="exp-role">Dev & Design · 2021–22</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
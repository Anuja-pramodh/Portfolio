import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'Orbit Dashboard',
    category: 'Full-Stack App',
    desc: 'Real-time analytics dashboard for SaaS metrics. Built with React, Node.js, and WebSockets. Handles 50k+ data points per second.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    year: '2024',
    link: '#',
  },
  {
    id: '02',
    title: 'Folio CMS',
    category: 'Web Application',
    desc: 'Headless CMS with a custom rich-text editor, media pipeline, and GraphQL API. Used by 200+ content creators.',
    tags: ['Next.js', 'GraphQL', 'Prisma', 'S3'],
    year: '2024',
    link: '#',
  },
  {
    id: '03',
    title: 'Trace CLI',
    category: 'Dev Tooling',
    desc: 'Command-line tool for distributed tracing in Node.js microservices. 1.2k stars on GitHub.',
    tags: ['Node.js', 'CLI', 'OpenTelemetry'],
    year: '2023',
    link: '#',
  },
  {
    id: '04',
    title: 'Palate — Recipe App',
    category: 'Mobile-First Web',
    desc: 'AI-assisted recipe discovery with dietary filters, smart pantry tracking, and social sharing.',
    tags: ['React', 'OpenAI API', 'Supabase'],
    year: '2023',
    link: '#',
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Projects</h2>
        </div>
        <a href="#" className="view-all-link">
          All work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div className="projects-list">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link}
            className={`project-row ${hovered && hovered !== p.id ? 'project-row--dim' : ''}`}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="project-id">{p.id}</span>

            <div className="project-info">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>

            <div className="project-meta">
              <span className="project-category">{p.category}</span>
              <span className="project-year">{p.year}</span>
            </div>

            <div className="project-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
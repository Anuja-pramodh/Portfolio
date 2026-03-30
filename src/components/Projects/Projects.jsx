import React, { useRef, useEffect, useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: "01",
    title: "UniSphere",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=70",
    description:
      "A web-based platform delivering a seamless, user-friendly experience. Focused on UI/UX consistency, team coordination, and risk management.",
    category: "Web Development",
    year: "2026",
    tags: ["React", "CSS", "UI/UX", "Project Management"],
  },
  {
    id: "02",
    title: "NovaDash",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70",
    description:
      "Real-time analytics dashboard with customisable widgets, live data streaming, and deep integrations with third-party APIs.",
    category: "Dashboard",
    year: "2025",
    tags: ["TypeScript", "D3.js", "WebSocket", "REST API"],
  },
  {
    id: "03",
    title: "PulseAI",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=70",
    description:
      "An AI-powered content generation tool with context-aware suggestions, brand voice training, and collaborative editing workflows.",
    category: "AI / ML",
    year: "2025",
    tags: ["Python", "FastAPI", "LLM", "Next.js"],
  },
  {
    id: "04",
    title: "TerraNest",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=70",
    description:
      "A sustainability tracker that gamifies eco-friendly habits, visualises your carbon footprint reduction, and connects local green communities.",
    category: "Mobile App",
    year: "2024",
    tags: ["React Native", "Node.js", "PostgreSQL"],
  },
];

const ProjectRow = ({ project, index }) => {
  const rowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#projects"
      className={`project-row ${visible ? "project-row--visible" : ""}`}
      ref={rowRef}
      style={{ "--delay": `${index * 120}ms` }}
    >
      <span className="project-id">{project.id}</span>

      <div className="project-img-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-inline-img"
          loading="lazy"
        />
      </div>

      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag" style={{ "--ti": i }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="project-meta">
        <span className="project-category">{project.category}</span>
        <span className="project-year">{project.year}</span>
      </div>

      <div className="project-arrow" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 12L12 2M12 2H6M12 2V8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="project-row__glow" aria-hidden="true" />
    </a>
  );
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-heading">
            My <span>Projects</span>
          </h2>
          <span className="projects-count">
            {String(projectsData.length).padStart(2, "0")} total
          </span>
        </div>
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">

        {/* Portfolio Project */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Designed and deployed a responsive portfolio website showcasing projects and skills.
          </p>
          <a
            href="https://portfolio-mys4.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <br/>
          <a
            href="https://github.com/lbhavanak/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div>

        {/* Color Picker Project */}
        <div className="project-card">
          <h3>Color Picker Web Application</h3>
          <p>
            Developed a responsive color picker tool for efficient UI color selection and preview.
          </p>
          <a
            href="https://tail-color-code-aff5.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <br/>
          <a
            href="https://github.com/lbhavanak/tail-color-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div>

      </div>
    </section>
  );
}

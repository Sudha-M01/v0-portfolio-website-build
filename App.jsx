import { useState } from "react";
import {
  profile,
  skills,
  experience,
  projects,
  certifications,
  education,
  awards,
  languages,
} from "./data.js";
import CertModal from "./components/CertModal.jsx";

function App() {
  const [activeCert, setActiveCert] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["certifications", "Certifications"],
    ["contact", "Contact"],
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#home" className="nav-mark" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
            SM
          </a>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navLinks.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                {label}
              </a>
            ))}
          </nav>
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-inner">
            <p className="eyebrow-plain">{profile.location}</p>
            <h1>
              {profile.name}
              <span className="hero-title">{profile.title}</span>
            </h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <a href={profile.resumeFile} download className="btn-primary">
                Download Resume
              </a>
              <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                View Resume
              </a>
              <button className="btn-ghost" onClick={() => scrollTo("projects")}>
                See Projects
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2>About</h2>
          <p className="section-text">{profile.summary}</p>

          <div className="about-grid">
            <div className="about-block">
              <h4>Education</h4>
              <p className="about-line-strong">{education.degree} — {education.field}</p>
              <p className="about-line">{education.institution}, {education.location}</p>
              <p className="about-line">Expected {education.year}</p>
            </div>
            <div className="about-block">
              <h4>Languages</h4>
              <p className="about-line">{languages.join(" · ")}</p>
              <h4 className="mt">Awards</h4>
              <ul className="plain-list">
                {awards.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>

          {experience.length > 0 && (
            <div className="experience-block">
              <h4>Experience</h4>
              {experience.map((exp) => (
                <div key={exp.role} className="experience-item">
                  <div className="experience-head">
                    <strong>{exp.role}</strong>
                    <span className="experience-meta">{exp.company} · {exp.location}</span>
                  </div>
                  <ul className="plain-list">
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SKILLS */}
        <section id="skills" className="section alt">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-group">
                <h4>{group.category}</h4>
                {group.items.map((item) => (
                  <div key={item.name} className="skill-row">
                    <div className="skill-row-top">
                      <span>{item.name}</span>
                      <span className="skill-pct">{item.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: `${item.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((proj) => (
              <div key={proj.title} className="project-card">
                <div className="project-card-top">
                  <h3>{proj.title}</h3>
                  {proj.period && <span className="project-period">{proj.period}</span>}
                </div>
                <p>{proj.description}</p>
                <div className="tag-row">
                  {proj.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section alt">
          <h2>Certifications</h2>
          <p className="section-text">Tap any certificate to view its verified credential.</p>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <button
                key={cert.title}
                className="cert-card"
                onClick={() => setActiveCert(cert)}
              >
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-title">{cert.title}</span>
                <span className="cert-action">{cert.link ? "View Certificate →" : "Details →"}</span>
              </button>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2>Let's Connect</h2>
          <p className="section-text">
            Open to Full Stack Developer / Software Engineer internships. Reach out through any of these:
          </p>
          <div className="contact-grid">
            <a href={`mailto:${profile.email}`} className="contact-card">
              <span className="contact-label">Email</span>
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-card">
              <span className="contact-label">Phone</span>
              <span>{profile.phone}</span>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-label">GitHub</span>
              <span>github.com/Sudha-M01</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-label">LinkedIn</span>
              <span>linkedin.com/in/sudha-tech</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>

      <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </>
  );
}

export default App;

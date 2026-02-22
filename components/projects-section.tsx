"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
}

const projects: Project[] = [
  {
    title: "Real-Time Public Transport Tracking System",
    description:
      "IoT-based GPS tracking solution integrated with microcontroller and Flutter mobile app for real-time bus monitoring.",
    tech: ["IoT", "GPS Module", "Microcontroller", "Flutter", "Dart", "Firebase", "Google Maps API"],
    github: "https://github.com/Sudha-M01",
    demo: "#",
  },
  {
    title: "E-Commerce Landing Page",
    description:
      "Responsive landing page with promotional banners and modern UI built with clean HTML and CSS.",
    tech: ["HTML5", "CSS3"],
    github: "https://github.com/Sudha-M01",
    demo: "#",
  },
  {
    title: "To-Do List Application",
    description:
      "Interactive task manager using LocalStorage for persistence with full CRUD operations.",
    tech: ["HTML5", "CSS3", "JavaScript (ES6)", "LocalStorage API"],
    github: "https://github.com/Sudha-M01",
    demo: "#",
  },
  {
    title: "Gym Website",
    description:
      "Responsive static website using Bootstrap grid layout with modern fitness-themed design.",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    github: "https://github.com/Sudha-M01",
    demo: "#",
  },
  {
    title: "Digital Resume Website",
    description:
      "Personal portfolio with dark/light toggle feature and smooth transitions.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Sudha-M01",
    demo: "#",
  },
  {
    title: "Responsive Registration Form",
    description:
      "Client-side validated form with structured layout and real-time error feedback.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Sudha-M01",
    demo: "#",
  },
]

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  return (
    <div
      className={`glass group relative overflow-hidden rounded-xl transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(88,166,255,0.12)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${200 + index * 100}ms`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-primary/20 transition-all group-hover:bg-primary/60 group-hover:shadow-[0_0_10px_rgba(88,166,255,0.5)]" />

      <div className="p-6">
        {/* Title */}
        <h3 className="mb-3 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-all hover:bg-primary/20"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="projects" className="relative py-24 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            My recent work
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

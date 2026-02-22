"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface SkillBar {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  skills: SkillBar[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript (ES6+)", level: 82 },
      { name: "React.js", level: 75 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "DOM Manipulation", level: 80 },
      { name: "REST API Integration", level: 70 },
      { name: "Responsive Web Design", level: 90 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 78 },
      { name: "VS Code", level: 92 },
      { name: "Python (Basics)", level: 55 },
    ],
  },
]

function AnimatedBar({ skill, isVisible, delay }: { skill: SkillBar; isVisible: boolean; delay: number }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs font-medium text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
            background: "linear-gradient(90deg, #58a6ff 0%, #79c0ff 100%)",
            boxShadow: isVisible ? "0 0 8px rgba(88, 166, 255, 0.4)" : "none",
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="skills" className="relative py-24 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            What I work with
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Skills & Technologies
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Skill categories grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`glass glass-hover rounded-xl p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + catIndex * 150}ms` }}
            >
              <h3 className="mb-6 text-lg font-semibold text-primary">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <AnimatedBar
                  key={skill.name}
                  skill={skill}
                  isVisible={isVisible}
                  delay={400 + catIndex * 150 + skillIndex * 100}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

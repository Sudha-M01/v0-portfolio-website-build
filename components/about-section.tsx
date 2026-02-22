"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Code, Palette, Zap, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code following best practices.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting visually appealing and user-friendly interfaces.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and delivering smooth experiences.",
  },
  {
    icon: Globe,
    title: "Responsive",
    description: "Building layouts that work flawlessly across all devices.",
  },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="about" className="relative py-24 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Get to know me
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Electronics and Communication Engineering student with a strong
              passion for frontend development. Experienced in building responsive
              and interactive web applications using modern technologies like HTML,
              CSS, JavaScript, and React.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              Focused on clean UI, performance, and usability. I love turning
              ideas into polished digital experiences that users enjoy interacting
              with. Currently expanding my skills in React ecosystem and modern web
              development practices.
            </p>

            <div className="flex flex-wrap gap-3">
              {["ECE Student", "Frontend Focused", "React Learner", "UI Enthusiast"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass glass-hover group rounded-xl p-5 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon size={20} />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

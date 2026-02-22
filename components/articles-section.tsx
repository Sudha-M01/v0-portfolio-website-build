"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, BookOpen } from "lucide-react"

const articles = [
  {
    title: "How I Built a Real-Time Transport Tracking System",
    excerpt:
      "An in-depth look at integrating IoT hardware with a Flutter mobile app, using Firebase for real-time data sync and Google Maps API for live bus tracking.",
    date: "Jan 2026",
    readTime: "8 min read",
  },
  {
    title: "Mastering Responsive Web Design",
    excerpt:
      "Key strategies and CSS techniques for building layouts that adapt beautifully from mobile to desktop, including Flexbox, Grid, and media query best practices.",
    date: "Dec 2025",
    readTime: "6 min read",
  },
  {
    title: "From ECE Student to Frontend Developer -- My Journey",
    excerpt:
      "A personal story of transitioning from electronics engineering to web development, the challenges faced, and the resources that helped me grow as a developer.",
    date: "Nov 2025",
    readTime: "5 min read",
  },
]

export function ArticlesSection() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="articles" className="relative py-24 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Sharing knowledge
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Featured Articles
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Articles grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={`glass glass-hover group cursor-pointer rounded-xl p-6 transition-all duration-700 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen size={18} />
              </div>

              {/* Date and read time */}
              <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span>{article.date}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                <span>{article.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>

              {/* Read more link */}
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                Read Article
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { ArrowDown, ExternalLink } from "lucide-react"

const typingTexts = [
  "Aspiring Frontend Developer",
  "Electronics & Communication Engineer",
]

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1))
        }, 70)
      } else {
        // Pause longer at full text, then start fade-out before deleting
        timeout = setTimeout(() => {
          setIsFading(true)
          setTimeout(() => {
            setIsDeleting(true)
            setIsFading(false)
          }, 400)
        }, 2500)
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 35)
      } else {
        // Brief pause before typing next text
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }, 500)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentTextIndex])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #58a6ff 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full opacity-15 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #58a6ff 0%, transparent 70%)",
            animation: "float 10s ease-in-out infinite 2s",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Avatar */}
        <div
          className={`mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border-2 border-primary/50 transition-all duration-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          style={{
            background: "linear-gradient(135deg, #161b22 0%, #1c2333 100%)",
            boxShadow: "0 0 30px rgba(88, 166, 255, 0.2)",
          }}
        >
          <span className="text-3xl font-bold text-primary">SM</span>
        </div>

        {/* Greeting */}
        <p
          className={`mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Welcome to my portfolio
        </p>

        {/* Name */}
        <h1
          className={`mb-4 text-4xl font-bold leading-tight text-foreground transition-all duration-700 delay-300 sm:text-5xl md:text-6xl lg:text-7xl ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {"Hi, I'm "}
          <span className="text-primary neon-text">Sudha Mareeswaran</span>
        </h1>

        {/* Typing text */}
        <div
          className={`mb-6 h-10 transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span
            className="text-lg font-semibold text-primary sm:text-xl md:text-2xl transition-opacity duration-400"
            style={{
              opacity: isFading ? 0.3 : 1,
              textShadow: "0 0 10px rgba(88, 166, 255, 0.6), 0 0 20px rgba(88, 166, 255, 0.3), 0 0 40px rgba(88, 166, 255, 0.15)",
            }}
          >
            {displayedText}
          </span>
          <span
            className="ml-1 inline-block w-[3px] h-7 rounded-full bg-primary align-middle"
            style={{
              animation: "typing-cursor 0.8s ease-in-out infinite",
              boxShadow: "0 0 8px rgba(88, 166, 255, 0.6), 0 0 16px rgba(88, 166, 255, 0.3)",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          className={`mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground transition-all duration-700 delay-700 sm:text-base ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Crafting modern, responsive, and performance-driven web experiences
          with clean code and creative design.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-[900ms] sm:flex-row ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(88,166,255,0.4)]"
          >
            View Projects
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg border border-border bg-transparent px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
          >
            Download Resume
            <ExternalLink size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[1100ms] ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1"
        >
          <div
            className="h-2 w-1 rounded-full bg-primary"
            style={{ animation: "float 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  )
}

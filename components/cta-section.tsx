"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function CTASection() {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <section className="relative py-24 px-6">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <h2
          className={`mb-6 text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl md:text-5xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {"Let's Build Something "}
          <span className="text-primary neon-text">Exceptional</span>
          {" Together."}
        </h2>
        <p
          className={`mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Have a project in mind or just want to say hello? I would love to hear from you.
        </p>
        <a
          href="#contact"
          className={`inline-block rounded-lg bg-primary px-10 py-4 text-sm font-semibold text-primary-foreground transition-all duration-700 delay-400 hover:shadow-[0_0_30px_rgba(88,166,255,0.4)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            animation: isVisible ? "pulse-glow 3s ease-in-out infinite" : "none",
          }}
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

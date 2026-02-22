"use client"

import { Navigation } from "@/components/navigation"
import { Loader } from "@/components/loader"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ArticlesSection } from "@/components/articles-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <>
      <Loader />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ArticlesSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

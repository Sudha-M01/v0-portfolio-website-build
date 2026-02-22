"use client"

import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Sudha-M01", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sudha-tech", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sudhamarees05@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          {"\u00A9 2026 Sudha Mareeswaran. All Rights Reserved."}
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

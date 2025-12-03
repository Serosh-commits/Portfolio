"use client"

import { Github, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-glow text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Let's Connect</span>
        </h2>

        <div className="bg-card/50 border border-primary/30 rounded-lg p-12 glow-neon animate-glow-pulse">
          <p className="text-lg text-muted-foreground text-center mb-12">
            I'm always eager to collaborate, discuss ideas, or explore new opportunities in system programming and AI.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="https://github.com/Serosh-commits"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 hover:bg-primary/10 rounded-lg transition-all duration-300 group hover:scale-105 hover:-translate-y-1"
            >
              <Github size={32} className="text-primary group-hover:text-accent transition-colors" />
              <span className="font-medium text-foreground">GitHub</span>
              <span className="text-sm text-muted-foreground">@Serosh-commits</span>
            </a>

            <a
              href="mailto:janmejayapanda400@gmail.com"
              className="flex flex-col items-center gap-3 p-6 hover:bg-accent/10 rounded-lg transition-all duration-300 group hover:scale-105 hover:-translate-y-1"
            >
              <Mail size={32} className="text-accent group-hover:text-primary transition-colors" />
              <span className="font-medium text-foreground">Email</span>
              <span className="text-sm text-muted-foreground">janmejayapanda400@gmail.com</span>
            </a>
          </div>

          <div className="bg-background/50 border border-border rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-foreground font-mono text-primary">Open to:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent">→</span> Open source collaboration
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span> System programming projects
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span> ML + Systems research
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span> Internships & learning opportunities
              </li>
            </ul>
          </div>

          <p className="text-center text-sm text-muted-foreground font-mono">
            <span className="text-primary">$</span> echo "The best way to predict the future is to build it"
          </p>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">© 2025 Serosh. Crafted with curiosity and code.</p>
        </div>
      </div>
    </section>
  )
}

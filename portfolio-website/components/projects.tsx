"use client"

import { Github, Star } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      name: "Nexus-1",
      description:
        "AI-Powered Operating System combining system-level optimization with machine learning. Launching soon.",
      languages: ["C++", "Python", "ASM"],
      status: "In Development",
      github: "https://github.com/Serosh-commits",
      featured: true,
    },
    {
      name: "Inter-CPP",
      description: "High-performance bytecode interpreter written in modern C++17. Designed for speed and efficiency.",
      languages: ["C++"],
      stars: 5,
      github: "https://github.com/Serosh-commits/inter-cpp",
    },
    {
      name: "BGKernel",
      description: "A real working kernel model built in C++. Deep dive into OS fundamentals and kernel architecture.",
      languages: ["C++"],
      stars: 3,
      github: "https://github.com/Serosh-commits/bgkernel",
    },
    {
      name: "Process Analyzer (P.A)",
      description:
        "Detects zombie and orphan state processes. User-friendly tool for system process management and cleanup.",
      languages: ["C++"],
      stars: 1,
      github: "https://github.com/Serosh-commits/P.A",
    },
    {
      name: "Prace-",
      description: "LDE Polymonitor project. Exploring advanced monitoring and analysis techniques.",
      languages: ["C++"],
      github: "https://github.com/Serosh-commits/prace-",
    },
    {
      name: "ML Systems Research",
      description:
        "Exploring the intersection of system programming and machine learning. Building intelligent, efficient systems.",
      languages: ["Python", "C++"],
      status: "Exploring",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-glow">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-muted-foreground mb-16 max-w-2xl">
          Showcase of my work in system programming, OS development, and ML integration.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group border rounded-lg p-6 transition-all duration-300 ${
                project.featured
                  ? "md:col-span-2 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50 glow-neon-lg"
                  : "bg-card/50 border-primary/30 hover:border-accent/50 glow-neon"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary/30 border border-primary/50 rounded text-xs text-primary font-mono"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {project.status && (
                    <span className="px-3 py-1 bg-secondary/20 border border-secondary/50 rounded-full text-xs text-secondary font-mono">
                      {project.status}
                    </span>
                  )}
                </div>
                {project.stars && (
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Star size={16} fill="currentColor" />
                    {project.stars}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

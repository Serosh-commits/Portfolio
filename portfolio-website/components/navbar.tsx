"use client"

import Link from "next/link"
import { Github, Mail } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border/50 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="#" className="text-2xl font-bold text-glow">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SEROSH</span>
        </Link>

        <div className="hidden md:flex gap-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-accent transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Serosh-commits"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-accent transition-colors duration-300"
          >
            <Github size={20} />
          </a>
          <a href="mailto:your-email@example.com" className="p-2 hover:text-accent transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}

"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating squares */}
        <div
          className="absolute w-96 h-96 border border-primary/30 rounded-lg"
          style={{
            transform: `rotate(${scrollY * 0.1}deg)`,
            left: "50%",
            top: "50%",
            marginLeft: "-192px",
            marginTop: "-192px",
          }}
        />
        <div
          className="absolute w-96 h-96 border border-accent/30 rounded-lg"
          style={{
            transform: `rotate(${-scrollY * 0.15}deg)`,
            left: "50%",
            top: "50%",
            marginLeft: "-192px",
            marginTop: "-192px",
          }}
        />

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
        <div
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-secondary rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-6 animate-float-slow">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-sm font-mono text-primary mb-8 glow-neon">
            &gt; Welcome to my digital space
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-foreground">Crafting Systems</span>
          <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            with Intelligence
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          BTech Student • System Programmer • ML Enthusiast
          <br />
          <span className="text-primary font-mono text-sm">Building Nexus-1: AI-Powered OS</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 glow-neon hover:scale-105 hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Learn More
          </a>
        </div>

        <div className="text-xs font-mono text-muted-foreground bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 mb-16 text-left max-w-xl mx-auto glow-neon">
          <div className="flex gap-2">
            <span className="text-secondary">$</span> <span>echo "Curious about everything in this world"</span>
          </div>
          <div className="flex gap-2">
            <span className="text-secondary">$</span>{" "}
            <span className="text-accent">// Seeking knowledge • Imagining solutions</span>
          </div>
        </div>
      </div>
    </section>
  )
}

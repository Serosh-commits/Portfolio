"use client"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 text-glow">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Who am I?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a curious BTech student with an insatiable appetite for knowledge. Currently exploring the depths of{" "}
              <span className="text-primary font-mono">system programming</span> and{" "}
              <span className="text-primary font-mono">machine learning</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My mission is to bridge two worlds: build systems that are not just powerful, but intelligent. I believe
              the future lies in combining low-level optimization with AI capabilities.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of code, I'm fascinated by <span className="text-accent">rocket science</span>,{" "}
              <span className="text-accent">astronomy</span>, and <span className="text-accent">quantum physics</span>.
              These cosmic interests fuel my imagination and push me to think bigger.
            </p>
          </div>

          <div className="bg-card/50 border border-primary/30 rounded-lg p-8 glow-neon">
            <h3 className="text-xl font-bold mb-6 text-primary">Core Philosophy</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-accent">—</span>
                <span>Always learning, never settling</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">—</span>
                <span>Build systems that scale and adapt</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">—</span>
                <span>Innovation through imagination</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">—</span>
                <span>Code with purpose, not just syntax</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">—</span>
                <span>Transform complex ideas into elegant solutions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4 text-foreground">Current Focus</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="text-secondary font-mono">Nexus-1</span> - An ambitious AI-powered operating system that
            combines system-level optimization with machine learning capabilities. Launching soon on GitHub.
          </p>
          <p className="text-sm text-muted-foreground font-mono text-primary">
            → Merging system programming mastery with cutting-edge ML
          </p>
        </div>
      </div>
    </section>
  )
}

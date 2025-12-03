"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Python", "Golang", "Java", "Haskell", "ASM", "TypeScript", "JavaScript"],
    },
    {
      title: "Expertise",
      skills: ["System Programming", "OS Development", "Machine Learning", "Kernel Design", "Performance Optimization"],
    },
    {
      title: "Interests",
      skills: ["Rocket Science", "Astronomy", "Quantum Physics", "AI Architectures", "Distributed Systems"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-glow">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Interests
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card/50 border border-primary/30 rounded-lg p-8 hover:border-accent/50 transition-all duration-300 glow-neon group"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-sm text-primary font-mono hover:bg-primary/40 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

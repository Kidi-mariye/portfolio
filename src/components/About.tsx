"use client";

import { motion } from "framer-motion";

export default function About() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "React / Next.js", level: 92 },
        { name: "TypeScript", level: 87 }
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Express", level: 84 },
        { name: "Node.js", level: 84 },
        { name: "API Integration", level: 86 }
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 78 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git / GitHub", level: 88 },
        { name: "Figma / VS Code", level: 85 },
      ],
    },
  ];

  return (
    <section id="about" className="section border-t border-[var(--border)]">
      <div className="grid md:grid-cols-[1.08fr_0.92fr] gap-5 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card about-copy p-5 md:p-6"
        >
          <span className="section-kicker">About</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-subtitle space-y-3 max-w-none">
            <p>
              I am Mariamawit Nejib, a software engineering student and
              full-stack developer who enjoys building products that are clean,
              fast, and practical for real users.
            </p>
            <p>
              I care about thoughtful design, maintainable code, and strong
              collaboration. My goal is to deliver digital experiences that feel
              professional and easy to use.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            <span className="chip">Addis Ababa, Ethiopia</span>
            <span className="chip">Open to Internship</span>
          </div>

          <div className="mt-5">
            <p className="text-sm font-bold mb-3">Core Skills</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="about-skill-card">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--text)] mb-2">
                    {group.title}
                  </p>
                  <div className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className="font-semibold text-[var(--text-soft)]">{skill.name}</span>
                          <span className="font-bold text-[var(--accent)]">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/70 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-dark))]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="about-scene"
        >
          <div className="about-scene-image about-scene-image-maris" />
          <div className="about-scene-overlay" />
          <div className="about-scene-grid" />
          <div className="about-scene-glow" />
          <div className="about-scene-glow-two" />
        </motion.div>
      </div>
    </section>
  );
}

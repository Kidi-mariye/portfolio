"use client";

import { motion } from "framer-motion";

export default function About() {
  const expertise = [
    {
      category: "Frontend",
      level: 90,
      levelClass: "w-[90%]",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    },
    {
      category: "Backend",
      level: 82,
      levelClass: "w-[82%]",
      skills: ["Node.js", "Express", "REST APIs", "PHP"],
    },
    {
      category: "Database",
      level: 78,
      levelClass: "w-[78%]",
      skills: ["MySQL", "MongoDB", "Data Modeling"],
    },
    {
      category: "Tools",
      level: 86,
      levelClass: "w-[86%]",
      skills: ["Git", "GitHub", "Vercel", "Postman"],
    },
  ];

  return (
    <section id="about" className="section border-t border-[var(--border)] !pt-16 !pb-16 md:!pt-20 md:!pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl"
      >
        <p className="text-[clamp(1.3rem,1.8vw,1.65rem)] font-semibold text-[var(--accent)]">My Intro</p>
        <h2 className="mt-1 text-[clamp(2rem,4.1vw,3rem)] font-bold text-[var(--text)]">About Me</h2>

        <div className="mt-8 max-w-[72ch] space-y-4 text-[clamp(1.05rem,1.6vw,1.9rem)] font-semibold leading-[1.72] text-[color-mix(in_oklab,var(--text-soft)_72%,var(--text)_28%)]">
          <p>
            Hello! I&apos;m Mariamawit Nejib, a university student and full-stack developer
            passionate about solving problems through code. My developer journey began when
            I started studying Software Engineering at university. From the very beginning,
            I wished to write code, develop applications, and solve meaningful problems and
            that goal has guided me ever since.
          </p>
          <p>
            I enjoy creating scalable, user-friendly applications and continuously exploring
            new technologies. For me, coding is more than just writing lines of code; it&apos;s
            about turning ideas into impactful digital solutions that make life easier and
            more efficient.
          </p>
        </div>

        <div className="mt-16 rounded-[20px] border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-soft)_78%,var(--bg)_22%)] px-5 py-8 md:px-10 md:py-10">
          <p className="text-center text-[clamp(1.2rem,1.8vw,1.65rem)] font-semibold text-[var(--accent)]">Why Choose Me</p>
          <h3 className="mt-1 text-center text-[clamp(1.95rem,3.6vw,2.8rem)] font-bold text-[var(--text)]">My Expertise Area</h3>

          <div className="mt-10 grid gap-x-12 gap-y-7 md:grid-cols-2">
            {expertise.map((group) => (
              <div key={group.category} className="space-y-2.5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[clamp(1.05rem,1.4vw,1.4rem)] font-semibold text-[var(--text)]">{group.category}</p>
                  <p className="text-sm font-semibold text-[var(--text-soft)]">{group.level}%</p>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--text)_16%,transparent)]">
                  <div className={`h-full rounded-full bg-[var(--accent)] ${group.levelClass}`} />
                </div>

                <p className="text-sm leading-relaxed text-[var(--text-soft)]">{group.skills.join(" • ")}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

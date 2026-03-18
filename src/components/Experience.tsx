"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const data = [
    {
      title: "Software Engineering Student",
      company: "Arbaminch University",
      period: "2021 - Present",
    },
    {
      title: "Software Engineering Intern",
      company: "Tewos Technology",
      period: "2026 - Present",
    },
  ];

  return (
    <section id="experience" className="section border-t border-[var(--border-subtle)]">
      <h2 className="mb-16 heading-underline">Experience</h2>

      <div className="space-y-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-[var(--bg-soft)] rounded-xl"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-[var(--ink-muted)]">{item.company}</p>
            <p className="text-sm text-[var(--accent-primary)] mt-2">
                {item.period}
              </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

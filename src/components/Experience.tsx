"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const data = [
    {
      title: "Full Stack Developer",
      company: "Selected Work",
      period: "Jan 2025 - Present",
      highlights: [
        "Built and optimized user management features, improving workflow efficiency by 30%.",
        "Developed a task manager module to streamline daily operations.",
        "Implemented secure authentication and role-based access control.",
        "Designed and deployed an e-commerce platform, enabling seamless product management and transactions.",
        "Participated in the development of an ERP system, contributing to modules for finance, HR, and operations.",
        "Built a CRM solution to enhance customer engagement and relationship tracking.",
        "Developed a Documents Page for centralized file management and collaboration.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Tewos Technology",
      period: "Feb 2026 - Present",
      highlights: [
        "Developed responsive web components using React and Node.js.",
        "Contributed to team documentation and knowledge sharing.",
        "Involved in building and maintaining websites for internal and client use.",
        "Participated in developing applications to support business operations.",
        "Received training on interview preparation and techniques, strengthening communication and problem-solving skills.",
        "Collaborated with senior engineers on project planning and execution.",
      ],
    },
    {
      title: "Self-Learning & Independent Projects",
      company: "Personal Development",
      period: "2024 - Present",
      highlights: [
        "Learned full-stack development independently through online courses and tutorials.",
        "Built personal projects to practice React, Node.js, and database integration.",
        "Experimented with deploying applications on cloud platforms like AWS, Azure, and Heroku.",
        "Explored UI/UX design principles to create user-friendly interfaces.",
        "Earned certificates from online platforms, including Udemy, to validate skills.",
        "Learned and applied Laravel to build dynamic web applications and APIs.",
      ],
    },
  ];

  const educationTrack = data.filter((item) => item.title.includes("Self-Learning"));
  const experienceTrack = data.filter((item) => !item.title.includes("Self-Learning"));

  return (
    <section id="experience" className="section border-t border-[var(--border)] !pt-14 !pb-14 md:!pt-18 md:!pb-18">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[clamp(1.2rem,1.8vw,1.65rem)] font-semibold text-[var(--accent)]">My Qualification</p>
        <h2 className="mt-1 text-center text-[clamp(2rem,3.8vw,3rem)] font-bold text-[var(--text)]">Awesome Journey</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="mb-5 text-[clamp(1.4rem,2.2vw,2rem)] font-bold text-[var(--text)]">Education</h3>

            <div className="space-y-5">
              {educationTrack.map((item) => (
                <motion.article
                  key={`${item.company}-${item.period}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative rounded-[14px] border border-[color-mix(in_oklab,var(--border)_58%,transparent)] bg-[color-mix(in_oklab,var(--bg-soft)_90%,var(--bg)_10%)] p-4.5"
                >
                  <span className="absolute -left-[11px] top-5.5 h-5 w-5 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)]" />
                  <span className="absolute -left-[1px] top-10 h-[calc(100%-2.1rem)] w-[2px] bg-[color-mix(in_oklab,var(--accent)_52%,transparent)]" />

                  <h4 className="text-[clamp(1.12rem,1.55vw,1.34rem)] font-bold text-[var(--text)]">{item.title}</h4>
                  <p className="mt-0.5 text-[0.95rem] text-[var(--text-soft)]">{item.company}</p>
                  <p className="mt-1 text-[0.9rem] font-semibold text-[var(--accent)]">{item.period}</p>

                  <ul className="mt-3.5 space-y-2 text-[0.92rem] leading-relaxed text-[var(--text-soft)]">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5">
                        <span className="mt-[0.5rem] h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[clamp(1.4rem,2.2vw,2rem)] font-bold text-[var(--text)]">Experience</h3>

            <div className="space-y-5">
              {experienceTrack.map((item) => (
                <motion.article
                  key={`${item.company}-${item.period}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative rounded-[14px] border border-[color-mix(in_oklab,var(--border)_58%,transparent)] bg-[color-mix(in_oklab,var(--bg-soft)_90%,var(--bg)_10%)] p-4.5"
                >
                  <span className="absolute -left-[11px] top-5.5 h-5 w-5 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)]" />
                  <span className="absolute -left-[1px] top-10 h-[calc(100%-2.1rem)] w-[2px] bg-[color-mix(in_oklab,var(--accent)_52%,transparent)]" />

                  <h4 className="text-[clamp(1.12rem,1.55vw,1.34rem)] font-bold text-[var(--text)]">{item.title}</h4>
                  <p className="mt-0.5 text-[0.95rem] text-[var(--text-soft)]">{item.company}</p>
                  <p className="mt-1 text-[0.9rem] font-semibold text-[var(--accent)]">{item.period}</p>

                  <ul className="mt-3.5 space-y-2 text-[0.92rem] leading-relaxed text-[var(--text-soft)]">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5">
                        <span className="mt-[0.5rem] h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Project = {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    id: "fruit-delivery",
    date: "Dec 2023",
    title: "Fruit delivery web app",
    description: "A full-stack fruit delivery web solution with modern system integration.",
    tags: ["HTML", "CSS", "Vanilla JavaScript", "MySQL", "PHP"],
    image: "/projects/commerce.svg",
    projectUrl: "#",
  },
  {
    id: "weather-dashboard",
    date: "Coming 2026",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with forecast insights and location snapshots.",
    tags: ["Vite", "TypeScript", "Node.js"],
    image: "/projects/pipeline.svg",
    projectUrl: "#",
  },
  {
    id: "fitness-tracker",
    date: "Coming 2026",
    title: "Fitness Tracker",
    description: "Personal fitness tracking and progress monitoring with weekly reporting.",
    tags: ["Vite", "TypeScript", "Node.js"],
    image: "/projects/identity.svg",
    projectUrl: "#",
  },
  {
    id: "amu-hub",
    date: "Coming 2026",
    title: "AMU Hub",
    description: "A digital campus hub that connects students to services and updates.",
    tags: ["Node.js", "MySQL", "TypeScript"],
    image: "/projects/narrative.svg",
    projectUrl: "#",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = useMemo(() => projects, []);

  const goPrevious = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % items.length);

  const getRelativeIndex = (index: number) => {
    const total = items.length;
    let diff = index - activeIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  const getCardStateClass = (distance: number) => {
    if (distance === 0) return "project-card-state-active";
    if (distance === 1) return "project-card-state-next";
    if (distance === -1) return "project-card-state-prev";
    return "project-card-state-hidden";
  };

  return (
    <section id="projects" className="section border-t border-[var(--border)] !pt-16 !pb-14">
      <div className="mb-6 max-w-3xl">
        <span className="section-kicker">Portfolio</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Stacked Card Carousel</p>
      </div>

      <div className="mx-auto w-full max-w-[1600px]">
        <div className="relative h-[560px] overflow-hidden rounded-[24px] border border-[var(--border)] bg-[linear-gradient(180deg,var(--bg-soft),var(--bg))] px-3 py-4 md:h-[600px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_58%)]" />
          <div className="pointer-events-none absolute inset-x-4 top-4 bottom-4 rounded-[24px] border border-[color-mix(in_oklab,var(--text)_16%,transparent)]" />

          {items.map((project, index) => {
            const active = index === activeIndex;
            const distance = getRelativeIndex(index);

            return (
              <article
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`project-card-state absolute left-1/2 top-1/2 w-[min(64vw,700px)] overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--bg-soft)] shadow-[0_22px_55px_rgba(0,0,0,0.38)] cursor-pointer transition-all duration-500 ease-out ${getCardStateClass(distance)}`}
              >
                <div className="grid md:grid-cols-[0.96fr_1.04fr]">
                  <div className="relative flex h-[180px] items-center justify-center border-b border-[var(--border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--bg)_82%,var(--accent)_18%),var(--bg-soft))] p-4 md:h-full md:min-h-[255px] md:border-b-0 md:border-r md:p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_22%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)]" />
                    <div className="relative z-[1] h-[132px] w-[132px] rounded-full border-2 border-[color-mix(in_oklab,var(--border)_70%,var(--accent)_30%)] bg-[color-mix(in_oklab,var(--bg)_88%,var(--accent)_12%)] p-2 shadow-[0_10px_24px_rgba(0,0,0,0.3)] md:h-[164px] md:w-[164px]">
                      <div className="relative h-full w-full overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg)]">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          sizes="164px"
                          className="object-contain p-4"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-5">
                    <p className="text-[clamp(0.82rem,1.15vw,0.95rem)] font-semibold uppercase tracking-[0.08em] text-[var(--text-soft)]">
                      {project.date}
                    </p>
                    <h3 className="mt-1 text-[clamp(1.2rem,2.2vw,1.75rem)] font-bold leading-[1.08] text-[var(--text)]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-[clamp(0.9rem,1.35vw,1.08rem)] leading-[1.45] text-[var(--text-soft)]">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.id}-${tag}`}
                          className="rounded-full border border-[var(--border)] bg-[var(--text)] px-2.5 py-0.5 text-[clamp(0.75rem,1.05vw,0.9rem)] font-semibold text-[var(--bg)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.projectUrl}
                      className="mt-4 inline-flex items-center gap-2 text-[clamp(0.95rem,1.45vw,1.2rem)] font-bold text-[var(--accent)] hover:text-[color-mix(in_oklab,var(--accent)_70%,var(--text)_30%)]"
                    >
                      Learn more
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>

                {active && (
                  <>
                    <div className="pointer-events-none absolute inset-0 border border-[var(--accent)] opacity-70" />
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(242,255,253,0.16)]" />
                  </>
                )}
              </article>
            );
          })}

          <button
            type="button"
            onClick={goPrevious}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--text)] text-4xl leading-none text-[var(--accent-dark)] shadow-[0_8px_18px_rgba(0,0,0,0.24)] hover:bg-[color-mix(in_oklab,var(--text)_92%,white_8%)]"
            aria-label="Previous project"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--text)] text-4xl leading-none text-[var(--accent-dark)] shadow-[0_8px_18px_rgba(0,0,0,0.24)] hover:bg-[color-mix(in_oklab,var(--text)_92%,white_8%)]"
            aria-label="Next project"
          >
            ›
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-12 bg-[var(--text)] ring-2 ring-[var(--accent)]" : "w-5 bg-[var(--border)]"
              }`}
              aria-label={`Jump to ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

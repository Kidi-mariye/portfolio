"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type UIEvent } from "react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: "Platform" | "Systems" | "Brand" | "AI";
  year: number;
  impact: string;
  tech: string[];
  spotlight: string;
  projectUrl: string;
  githubUrl: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "commerce",
    title: "EthioMarket",
    subtitle: "Unified storefront, payments, and order intelligence.",
    category: "Platform",
    year: 2025,
    impact: "+31% conversion lift",
    tech: ["Next.js", "Node.js", "Stripe", "MongoDB"],
    spotlight: "Built modular checkout orchestration and resilient payment fallbacks.",
    projectUrl: "https://ethio-market-rho-ten-53.vercel.app",
    githubUrl: "https://github.com/Kidi-mariye/e-commerce.git",
    image: "https://ethio-market-rho-ten-53.vercel.app/images/ecommerce.jpg",
  },
  {
    id: "identity",
    title: "Identity Grid",
    subtitle: "SSO, audit timeline, and policy-based permissions.",
    category: "Systems",
    year: 2024,
    impact: "-46% admin overhead",
    tech: ["Next.js", "Laravel", "MySQL", "Redis"],
    spotlight: "Mapped access governance into reusable policy templates.",
    projectUrl: "#",
    githubUrl: "#",
    image: "/projects/identity.svg",
  },
  {
    id: "narrative",
    title: "Narrative Portfolio",
    subtitle: "Editorial web experience with high intent conversion flow.",
    category: "Brand",
    year: 2026,
    impact: "+52% engagement",
    tech: ["Next.js", "Framer Motion", "TypeScript"],
    spotlight: "Structured visual storytelling around trust and proof points.",
    projectUrl: "#",
    githubUrl: "#",
    image: "/projects/narrative.svg",
  },
  {
    id: "copilot",
    title: "Support Copilot",
    subtitle: "Context-aware AI assistant for customer operations.",
    category: "AI",
    year: 2026,
    impact: "-38% first reply time",
    tech: ["Next.js", "Python", "OpenAI API", "PostgreSQL"],
    spotlight: "Added quality guardrails and confidence scoring before send.",
    projectUrl: "#",
    githubUrl: "#",
    image: "/projects/copilot.svg",
  },
  {
    id: "pipeline",
    title: "Campaign Studio",
    subtitle: "Planning and analytics workspace for launch velocity.",
    category: "Systems",
    year: 2025,
    impact: "+2.2x launch speed",
    tech: ["React", "Node.js", "ClickHouse"],
    spotlight: "Connected planning inputs to near-real-time attribution dashboards.",
    projectUrl: "#",
    githubUrl: "#",
    image: "/projects/pipeline.svg",
  },
];

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);
  const [progress, setProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const slideRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  const filteredProjects = useMemo(() => [...projects].sort((a, b) => b.year - a.year), []);

  useEffect(() => {
    if (!filteredProjects.length) {
      return;
    }

    const stillVisible = filteredProjects.some((project) => project.id === activeProjectId);
    if (!stillVisible) {
      setActiveProjectId(filteredProjects[0].id);
    }
  }, [filteredProjects, activeProjectId]);

  const activeProject =
    filteredProjects.find((project) => project.id === activeProjectId) ??
    filteredProjects[0] ??
    projects[0];

  const activeIndex = Math.max(
    0,
    filteredProjects.findIndex((project) => project.id === activeProject.id)
  );

  const updateActiveFromRail = (container: HTMLDivElement) => {
    const max = container.scrollWidth - container.clientWidth;
    const ratio = max <= 0 ? 0 : container.scrollLeft / max;
    setProgress(ratio);

    const center = container.scrollLeft + container.clientWidth / 2;
    let nearestId = activeProjectId;
    let nearestDistance = Number.POSITIVE_INFINITY;

    filteredProjects.forEach((project) => {
      const card = cardRefs.current[project.id];
      if (!card) {
        return;
      }
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - center);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestId = project.id;
      }
    });

    if (nearestId !== activeProjectId) {
      setActiveProjectId(nearestId);
    }
  };

  const onSlideScroll = (event: UIEvent<HTMLDivElement>) => {
    updateActiveFromRail(event.currentTarget);
  };

  useEffect(() => {
    const rail = slideRef.current;
    if (!rail) {
      return;
    }

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }
      event.preventDefault();
      rail.scrollBy({ left: event.deltaY, behavior: "auto" });
    };

    rail.addEventListener("wheel", onWheel, { passive: false });
    return () => rail.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const rail = slideRef.current;
    if (!rail) {
      return;
    }
    updateActiveFromRail(rail);
  }, [filteredProjects]);

  const jumpToProject = (projectId: string) => {
    const target = cardRefs.current[projectId];
    setActiveProjectId(projectId);
    target?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const scrollRail = (direction: "left" | "right") => {
    const rail = slideRef.current;
    if (!rail) {
      return;
    }

    const amount = Math.round(rail.clientWidth * 0.78);
    rail.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="section border-t border-[var(--border)]">
      <div className="mb-9 max-w-3xl">
        <span className="section-kicker">Portfolio</span>
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A curated set of selected builds focused on product quality, performance,
          and delightful user experience.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[1220px] overflow-hidden rounded-[30px] border border-[var(--border)] bg-[linear-gradient(180deg,#091223,#060d1a)] px-3 py-4 md:px-5 md:py-5">
        <div className="pointer-events-none absolute -left-12 top-0 h-44 w-44 rounded-full bg-[var(--accent)]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-[#00d4aa]/20 blur-3xl" />

        <div className="mb-3 flex items-center justify-between gap-3 px-2 md:px-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
            {String(activeIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")} in focus
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollRail("left")}
              className="btn-secondary !px-3 !py-2"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollRail("right")}
              className="btn-secondary !px-3 !py-2"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-[#18274a]">
          <motion.div
            animate={{ width: `${Math.max(8, progress * 100)}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),#00d4aa)]"
          />
        </div>

        <div
          ref={slideRef}
          onScroll={onSlideScroll}
          className="project-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-1"
        >
          {filteredProjects.map((project, index) => {
            const isActive = project.id === activeProject.id;
            return (
              <motion.article
                key={project.id}
                ref={(node) => {
                  cardRefs.current[project.id] = node;
                }}
                onClick={() => jumpToProject(project.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    jumpToProject(project.id);
                  }
                }}
                role="button"
                tabIndex={0}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`group relative aspect-[16/9] min-w-[94%] md:min-w-[80%] lg:min-w-[72%] xl:min-w-[66%] shrink-0 snap-center overflow-hidden rounded-[24px] border text-left transition-all duration-300 ${
                  isActive
                    ? "border-[var(--accent)]"
                    : "border-[var(--border)] opacity-90"
                }`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,20,0.2)_8%,rgba(6,12,24,0.45)_42%,rgba(6,10,20,0.92)_90%)]" />
                <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(8,15,30,0.64))]" />

                <span className="absolute right-4 top-3 text-7xl font-black tracking-tighter text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex h-full flex-col p-5 md:p-7">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-white/20 bg-[#0c1b36a8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75">
                      {project.year}
                    </span>
                  </div>

                  <div className="mt-auto max-w-3xl">
                    <h3 className="text-[1.7rem] md:text-[2.4rem] font-bold leading-[1] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-[65ch] text-sm md:text-base text-white/84">{project.subtitle}</p>
                    <p className="mt-3 text-sm md:text-lg font-semibold text-[#7dd3ff]">{project.impact}</p>

                    <p className="mt-3 max-w-[72ch] text-xs md:text-sm text-white/78">{project.spotlight}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={`${project.id}-${tech}`} className="chip !bg-[#0a1732cc] !text-white/90 !border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="btn-secondary mt-5 w-fit !border-white/20 !bg-[#0b1a36c2] !text-white"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {filteredProjects.map((project) => {
            const selected = project.id === activeProject.id;
            return (
              <button
                key={`${project.id}-dot`}
                type="button"
                onClick={() => jumpToProject(project.id)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selected ? "w-10 bg-[var(--accent)]" : "w-3 bg-[var(--border)]"
                }`}
                aria-label={`Jump to ${project.title}`}
              />
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#030712cc] p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22 }}
            className="w-full max-w-3xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-64 w-full md:h-80">
              <Image
                src={selectedProject.image}
                alt={`${selectedProject.title} image`}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,20,0.15),rgba(6,10,20,0.8))]" />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-3 top-3 rounded-full border border-white/30 bg-[#091731bf] px-3 py-1 text-sm font-semibold text-white"
              >
                Close
              </button>
              <div className="absolute bottom-4 left-4 pr-4">
                <h3 className="text-2xl font-bold text-white md:text-3xl">{selectedProject.title}</h3>
              </div>
            </div>

            <div className="p-5 md:p-6">
              <p className="text-sm text-[var(--text-soft)]">{selectedProject.spotlight}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a href={selectedProject.projectUrl} className="btn-primary">
                  Go to Project
                </a>
                <a href={selectedProject.githubUrl} className="btn-secondary">
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

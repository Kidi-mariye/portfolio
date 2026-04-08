"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
const sectionVariants = {
  hidden: { opacity: 0, y: 42, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Hero />
      {[About, Projects, Experience, CTA, Contact].map(
        (Section, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
          >
            <Section />
          </motion.div>
        )
      )}
      <footer className="mt-16 w-full px-0 pb-6">
        <div className="relative mx-0 overflow-hidden rounded-none border-t border-[color-mix(in_oklab,var(--text)_12%,transparent)] bg-[linear-gradient(180deg,var(--bg-soft),var(--bg))] px-6 py-10 md:px-12 md:py-12">
          <div className="pointer-events-none absolute inset-x-0 inset-y-auto opacity-30 [background-image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:10px_10px]" />
          <div className="relative z-[1] mx-auto flex max-w-[1320px] flex-col items-center text-center">
            <div className="text-[clamp(2rem,3vw,3rem)] font-bold tracking-[0.18em] text-[var(--accent)]">
              &lt;S&gt;
            </div>

            <p className="mt-8 max-w-4xl text-[clamp(0.98rem,1.35vw,1.08rem)] leading-relaxed text-[var(--text)]">
              I’m open to thoughtful collaborations and impactful digital work.
              If you want to build something useful and memorable, let’s connect.
            </p>

            <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-between md:self-stretch">
              <a
                href="#contact"
                className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[var(--accent)] shadow-[0_10px_22px_rgba(0,0,0,0.14)] transition hover:bg-[color-mix(in_oklab,#ffffff_92%,var(--bg-soft)_8%)]"
              >
                Download CV
              </a>

              <div className="flex items-center gap-4">
                {[
                  { label: "f", href: "#contact" },
                  { label: "ig", href: "#contact" },
                  { label: "t", href: "#contact" },
                  { label: "in", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold uppercase text-white transition hover:bg-[var(--accent-dark)]"
                    aria-label={item.label}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 text-sm text-[var(--text-soft)]">
              © {new Date().getFullYear()} Mariamawit Nejib. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

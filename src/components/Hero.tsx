"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section relative overflow-hidden hero-surface pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14">
      <span className="hero-grid-bg" />
      <span className="hero-gradient-ring" />
      <span className="floating-orb one" />
      <span className="floating-orb two" />

      <div className="grid items-center gap-8 md:grid-cols-[1.14fr_0.86fr] md:gap-9 lg:gap-11">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="space-y-4 md:space-y-5"
        >
          <span className="section-kicker !border-[var(--border)] !bg-[color-mix(in_oklab,var(--bg-soft)_84%,var(--bg-mute)_16%)] !text-[var(--text)]">
            Mariamawit Nejib | Full Stack Developer
          </span>

          <h2 className="hero-type-line text-[clamp(0.88rem,1.05vw,1rem)]">
            Problem Solver | Code Enthusiast
          </h2>

          <h1 className="max-w-[19ch] text-[clamp(1.85rem,4.1vw,3rem)] leading-[1.06] tracking-[-0.01em]">
            Engineering clean products with real-world impact.
          </h1>

          <p className="max-w-[56ch] text-[clamp(0.96rem,1.2vw,1.03rem)] leading-relaxed text-[var(--text-soft)]">
            I am Mariamawit Nejib, a full-stack developer focused on shipping
            responsive, maintainable applications. I enjoy turning complex ideas
            into practical software that teams can trust and users can enjoy.
          </p>

          <motion.div
            className="flex flex-wrap items-center gap-2.5 pt-1.5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            <a href="#projects" className="btn-primary !px-5 !py-2.5 !text-[1.05rem] md:!px-5.5 md:!py-2.5 !shadow-[0_10px_22px_rgba(20,155,131,0.34)]">
              View My Projects
            </a>
            <a href="#contact" className="btn-secondary !px-5 !py-2.5 !text-[1.05rem] md:!px-5.5 md:!py-2.5 !border-[var(--border)] !text-[var(--text)] !bg-[color-mix(in_oklab,var(--bg-soft)_84%,var(--bg-mute)_16%)]">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mt-1 flex justify-center md:mt-0 md:justify-end"
        >
          <motion.div
            className="hero-portrait-wrap hero-portrait-wrap-balanced"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="hero-portrait">
              <Image
                src="/Maris.jpg"
                alt="Mariamawit Profile"
                fill
                className="object-cover object-[center_28%] scale-[1.01]"
                sizes="(max-width: 768px) 78vw, 360px"
                priority
              />
              <div className="hero-portrait-shine" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

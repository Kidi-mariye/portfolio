"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section pt-32 relative overflow-hidden">
      <span className="floating-orb one" />
      <span className="floating-orb two" />

      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="space-y-6"
        >
          <span className="section-kicker">Full-Stack Developer</span>

          <h1 className="text-[clamp(2.1rem,5.6vw,4rem)]">
            Building clean, reliable products for modern teams.
          </h1>

          <p className="text-[1.05rem] text-[var(--text-soft)] max-w-xl leading-relaxed">
            I design and implement web applications that feel elegant, perform
            fast, and stay maintainable as they scale.
          </p>

          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s Work Together
            </a>
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            className="hero-portrait-wrap"
            animate={{ rotate: [0, 0.6, -0.6, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="hero-portrait">
              <Image
                src="/Maris.jpg"
                alt="Mariamawit Profile"
                fill
                className="object-cover scale-[1.03]"
                sizes="500px"
                priority
              />
              <div className="hero-portrait-shine" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/58 via-black/22 to-transparent text-white">
                <p className="text-sm font-semibold tracking-wide">Mariamawit Nejib</p>
                <p className="text-xs opacity-90">Software Engineer</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

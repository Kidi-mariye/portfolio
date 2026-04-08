"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-[var(--border)] !pt-14 !pb-14 md:!pt-16 md:!pb-16">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[20px] border border-[color-mix(in_oklab,var(--text)_14%,transparent)] bg-[linear-gradient(180deg,var(--bg-soft),var(--bg))] px-5 py-8 md:px-10 md:py-10">
        <div className="pointer-events-none absolute inset-0 opacity-22 [background-image:radial-gradient(circle,rgba(255,255,255,0.18)_1.2px,transparent_1.2px)] [background-size:6px_6px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(59,130,246,0.18),transparent_48%),radial-gradient(circle_at_76%_66%,rgba(255,255,255,0.08),transparent_52%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-[1] text-center"
        >
          <p className="text-[clamp(1.1rem,1.7vw,1.5rem)] font-semibold text-[var(--accent)]">Contact</p>
          <h2 className="mt-1 text-[clamp(1.6rem,2.9vw,2.25rem)] font-bold text-[var(--text)]">Let&apos;s build something impactful.</h2>
        </motion.div>

        <div className="relative z-[1] mt-8 grid gap-7 lg:grid-cols-[1.28fr_0.72fr] lg:gap-9">
          <motion.form
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <p className="pb-1 text-sm font-semibold text-[var(--text-soft)]">Tell me about your project</p>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-[8px] border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_72%,var(--bg-soft)_28%)] px-4 py-3 text-[1rem] text-[var(--text)] placeholder:text-[var(--text-soft)] outline-none transition focus:border-[var(--accent)]"
            />

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-[8px] border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_72%,var(--bg-soft)_28%)] px-4 py-3 text-[1rem] text-[var(--text)] placeholder:text-[var(--text-soft)] outline-none transition focus:border-[var(--accent)]"
            />

            <textarea
              placeholder="Tell me about your project"
              rows={6}
              className="w-full resize-y rounded-[8px] border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_72%,var(--bg-soft)_28%)] px-4 py-3 text-[1rem] text-[var(--text)] placeholder:text-[var(--text-soft)] outline-none transition focus:border-[var(--accent)]"
            />

            <button className="inline-flex rounded-full bg-[var(--accent)] px-10 py-2.5 text-lg font-semibold text-white transition hover:bg-[var(--accent-dark)]">
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-1"
          >
            <p className="mb-4 text-[1.03rem] leading-relaxed text-[var(--text-soft)]">
              If you are hiring, collaborating, or discussing a product idea,
              I&apos;d be glad to connect.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-xl text-white">✉</span>
                <div>
                  <p className="text-[1.12rem] font-semibold leading-none text-[var(--text)]">Email</p>
                  <p className="mt-1 text-[1.05rem] text-[var(--text-soft)]">mariamawitnejib@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-xl text-white">⌖</span>
                <div>
                  <p className="text-[1.12rem] font-semibold leading-none text-[var(--text)]">Location</p>
                  <p className="mt-1 text-[1.05rem] text-[var(--text-soft)]">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

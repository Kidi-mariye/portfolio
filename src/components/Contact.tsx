"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-[var(--border)]">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let&apos;s build something impactful.</h2>
          <p className="section-subtitle">
            If you are hiring, collaborating, or discussing a product idea,
            I&apos;d be glad to connect.
          </p>

          <div className="mt-6 grid gap-3 max-w-sm">
            <div className="card !rounded-xl p-3">
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-soft)]">Email</p>
              <p className="text-sm font-semibold">mariamawitnejib@gmail.com</p>
            </div>
            <div className="card !rounded-xl p-3">
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-soft)]">Location</p>
              <p className="text-sm font-semibold">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="card p-6 space-y-4"
        >
          <p className="text-sm font-bold">Tell me about your project</p>

          <label className="block">
            <span className="text-sm font-semibold text-[var(--text-soft)]">Name</span>
            <input type="text" placeholder="Your Name" className="input-field mt-1.5" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[var(--text-soft)]">Email</span>
            <input type="email" placeholder="you@example.com" className="input-field mt-1.5" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-[var(--text-soft)]">Message</span>
            <textarea
              placeholder="Tell me about your project"
              rows={5}
              className="input-field mt-1.5 resize-y"
            />
          </label>

          <button className="btn-primary w-full">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}

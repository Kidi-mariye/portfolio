"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
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
      {[About, Projects, Experience, Contact].map(
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
      <footer className="border-t border-[var(--border)] mt-16 bg-[#08122699] backdrop-blur-sm">
        <div className="container py-8 text-center text-[var(--text-soft)] text-sm">
          © {new Date().getFullYear()} Mariamawit Nejib. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

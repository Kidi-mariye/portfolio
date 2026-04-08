"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="section border-t border-[var(--border)] !pt-6 !pb-6 md:!pt-8 md:!pb-8">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[18px] border border-[color-mix(in_oklab,var(--text)_10%,transparent)] bg-[linear-gradient(180deg,var(--bg-soft),var(--bg))]">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_10px,transparent_10px),radial-gradient(circle_at_32%_38%,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_8px,transparent_8px),radial-gradient(circle_at_18%_72%,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_8px,transparent_8px),radial-gradient(circle_at_74%_22%,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_7px,transparent_7px),radial-gradient(circle_at_86%_64%,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_7px,transparent_7px)] [background-size:190px_190px]" />
          <div className="grid items-center gap-4 px-6 py-6 md:grid-cols-[1.08fr_0.92fr] md:gap-6 md:px-12 md:py-8 lg:px-14 lg:py-9">
          <div className="relative z-[1] max-w-2xl text-[var(--text)]">
            <h2 className="text-[clamp(2rem,4vw,3.15rem)] font-bold leading-[1.03] tracking-[-0.02em] text-[var(--text)]">
              Have a Project on Your Mind
            </h2>

            <p className="mt-4 max-w-[34rem] text-[clamp(0.98rem,1.4vw,1.08rem)] leading-relaxed text-[var(--text-soft)]">
              I’m open to new ideas, collaborations, and meaningful digital work.
              If you want to build something thoughtful and useful, let’s talk.
            </p>

            <a
              href="#contact"
              className="btn-primary mt-6 inline-flex rounded-full px-5.5 py-2.5 shadow-[0_10px_22px_rgba(0,0,0,0.12)]"
            >
              Contact Me
            </a>
          </div>

          <div className="relative flex justify-center md:justify-end md:self-end">
            <div className="relative h-[250px] w-[250px] translate-y-1 overflow-hidden rounded-full border border-[color-mix(in_oklab,var(--text)_12%,transparent)] bg-[color-mix(in_oklab,var(--bg)_86%,var(--bg-soft)_14%)] md:h-[300px] md:w-[300px] md:translate-y-2 lg:h-[330px] lg:w-[330px] lg:translate-y-3">
              <Image
                src="/mariss.jpg"
                alt="Mariamawit with laptop"
                fill
                sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 330px"
                className="object-cover object-[center_72%]"
                priority={false}
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

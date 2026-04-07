"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["about", "projects", "experience", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_82%,var(--bg-soft)_18%)]/90 backdrop-blur-lg z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-black text-lg tracking-tight text-[var(--text)] flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          Mariamawit.
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((id) => (
            <a key={id} href={`#${id}`} className="nav-link">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="#contact" className="btn-primary !py-2 !px-4 text-xs">
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-sm font-semibold px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-soft)] shadow-sm"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-soft)]">
          <div className="flex flex-col p-5 gap-2.5">
            {links.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-[var(--text-soft)] hover:text-[var(--text)] rounded-md px-2 py-2 hover:bg-[var(--bg-mute)]"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

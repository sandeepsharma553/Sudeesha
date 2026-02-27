import React, { useState } from "react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const navItem =
    "px-3 py-2 text-sm font-extrabold tracking-[0.12em] uppercase text-slate-700 hover:text-slate-950 transition";

  return (
    <nav
      id="menu"
      className="fixed top-0 left-0 right-0 z-[9999] bg-white/90 backdrop-blur-md border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-[76px] flex items-center justify-between">
          {/* Logo */}
          <a href="#header" className="flex  gap-3">
            <img
              src="/logo.png"
              alt="Sudeesha Solutions"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-2">
            <a href="#header" className={navItem}>Home</a>
            <a href="#features" className={navItem}>Why Us</a>
            <a href="#services" className={navItem}>Services</a>
            <a href="#portfolio" className={navItem}>Our Work</a>
            <a href="#about" className={navItem}>About</a>
            <a href="#contact" className={navItem}>Contact</a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 bg-white shadow-sm"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-slate-900" />
              <span className="block w-5 h-0.5 bg-slate-900" />
              <span className="block w-5 h-0.5 bg-slate-900" />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <a onClick={() => setOpen(false)} href="#header" className={navItem}>Home</a>
              <a onClick={() => setOpen(false)} href="#features" className={navItem}>Why Us</a>
              <a onClick={() => setOpen(false)} href="#services" className={navItem}>Services</a>
              <a onClick={() => setOpen(false)} href="#portfolio" className={navItem}>Our Work</a>
              <a onClick={() => setOpen(false)} href="#about" className={navItem}>About</a>
              <a onClick={() => setOpen(false)} href="#contact" className={navItem}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
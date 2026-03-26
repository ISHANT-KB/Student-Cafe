import React, { useState } from "react";
import { useScrollY } from "../hooks/useScrollY";
import { COLORS, NAV_LINKS } from "../data/constants";
import { BtnGold } from "./ui/BtnGold";

export function Navbar() {
  const scrollY       = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled      = scrollY > 60;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
      style={{
        transition: "background .4s, box-shadow .4s",
        background: scrolled ? "rgba(26,15,8,.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,.5)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* ── Logo */}
        <a href="#hero" className="flex items-center gap-2 select-none">
          <span className="text-2xl">☕</span>
          <span
            className="text-xl font-semibold"
            style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}
          >
            Student{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#c8874a 20%,#f5d99a 50%,#c8874a 80%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 4s linear infinite",
              }}
            >
              Café
            </span>
          </span>
        </a>

        {/* ── Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm"
            style={{ color: `${COLORS.cream}99`, fontFamily: "'DM Sans', sans-serif" }}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}
                 className="transition-colors duration-200"
                 onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.gold; }}
                 onMouseLeave={(e) => { e.currentTarget.style.color = `${COLORS.cream}99`; }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA */}
        <BtnGold href="tel:+919876543210" className="hidden md:inline-block !py-2.5 !px-5">
          Order Now
        </BtnGold>

        {/* ── Hamburger */}
        <button
          className="md:hidden p-2 focus:outline-none"
          style={{ color: COLORS.cream }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* ── Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0", opacity: open ? 1 : 0 }}
      >
        <div className="pt-4 pb-2 mt-3 border-t"
             style={{ borderColor: `${COLORS.cream}15` }}>
          <ul className="flex flex-col gap-3 px-2 text-sm"
              style={{ color: `${COLORS.cream}99`, fontFamily: "'DM Sans', sans-serif" }}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}
                   onClick={() => setOpen(false)}
                   className="block py-1.5 transition-colors duration-200"
                   onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.gold; }}
                   onMouseLeave={(e) => { e.currentTarget.style.color = `${COLORS.cream}99`; }}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <BtnGold href="tel:+919876543210" className="mt-1 text-center w-full">
                Order Now
              </BtnGold>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

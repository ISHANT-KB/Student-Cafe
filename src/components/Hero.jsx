import React from "react";
import { COLORS } from "../data/constants";
import { BtnGold } from "./ui/BtnGold";
import { BtnOutline } from "./ui/BtnOutline";

function HeroStat({ value, label, delay }) {
  return (
    <div className="text-center"
         style={{ animation: `fadeUp .9s ease ${delay}s forwards`, opacity: 0 }}>
      <p className="text-3xl font-bold"
         style={{ fontFamily: "'Playfair Display', serif", color: COLORS.gold }}>{value}</p>
      <p className="text-xs uppercase tracking-widest mt-1"
         style={{ color: `${COLORS.cream}55`, fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
    </div>
  );
}

export function Hero({ onMenuOpen }) {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-6 min-h-screen"
      style={{
        background: `
          linear-gradient(to bottom, rgba(26,15,8,.15) 0%, rgba(26,15,8,.6) 50%, rgba(26,15,8,1) 100%),
          url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1800&q=80') center/cover no-repeat
        `,
      }}
    >
      {/* Floating badge */}
      <div
        className="absolute top-28 right-5 md:right-16 z-10 text-xs font-bold px-4 py-2 rounded-full shadow-lg"
        style={{ background: "rgba(200,135,74,.9)", color: COLORS.espresso, animation: "float 3.5s ease-in-out infinite" }}
      >
        🌿 100% Veg
      </div>

      <div className="max-w-4xl mx-auto text-center pt-28 pb-40">

        {/* Script intro */}
        <p style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.gold, fontSize: "1.75rem",
                    animation: "fadeIn 1s ease .2s forwards", opacity: 0 }} className="mb-3">
          Welcome to
        </p>

        {/* Main heading */}
        <h1
          className="text-6xl md:text-8xl font-bold leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream,
                   animation: "fadeUp .9s ease .4s forwards", opacity: 0 }}
        >
          Student<br />
          <em style={{
            background: "linear-gradient(90deg,#c8874a 20%,#f5d99a 50%,#c8874a 80%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 4s linear infinite",
          }}>Café</em>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: `${COLORS.cream}bb`, fontFamily: "'DM Sans', sans-serif",
                   animation: "fadeUp .9s ease .7s forwards", opacity: 0 }}
        >
          Desi flavours. Desi prices. A place to hang, eat, and belong.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
             style={{ animation: "fadeUp .9s ease .9s forwards", opacity: 0 }}>
          <BtnGold href="#menu">View Menu</BtnGold>
          <BtnOutline href="#contact">Visit Us Today</BtnOutline>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <HeroStat value="₹30"  label="Starts From" delay={1.1} />
          <HeroStat value="28+"  label="Menu Items"  delay={1.2} />
          <HeroStat value="100%" label="Vegetarian"  delay={1.3} />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
           style={{ color: `${COLORS.cream}55`, animation: "fadeIn 1s ease 1.5s forwards", opacity: 0 }}>
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

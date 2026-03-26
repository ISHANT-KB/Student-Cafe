import React from "react";
import { COLORS } from "../../data/constants";
import { useInView } from "../../hooks/useInView";

export function Testimonial() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="mt-16 rounded-3xl p-8 md:p-12 text-center"
      style={{
        background: "linear-gradient(135deg,rgba(74,44,26,.4),rgba(45,26,14,.6))",
        border: "1px solid rgba(200,135,74,.15)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: "opacity .7s ease .3s, transform .7s ease .3s",
      }}
    >
      <span className="text-5xl block mb-4 opacity-30" style={{ color: COLORS.cream }}>"</span>
      <p className="text-xl md:text-2xl italic max-w-2xl mx-auto leading-relaxed"
         style={{ fontFamily: "'Playfair Display', serif", color: `${COLORS.cream}ee` }}>
        The Chana Chilly here changed my life. No cap. Best ₹50 I've ever spent.
      </p>
      <p className="mt-5 text-sm font-medium"
         style={{ color: COLORS.caramel, fontFamily: "'DM Sans', sans-serif" }}>
        — Arjun, B.Tech 3rd Year
      </p>
    </div>
  );
}

import React, { useState } from "react";
import { COLORS } from "../../data/constants";
import { useInView } from "../../hooks/useInView";
import { IconCircle } from "../ui/IconCircle";

export function FeatureCard({ feature, delay = 0 }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-3xl p-8 text-center"
      style={{
        background: "linear-gradient(145deg,#2d1a0e,#1e1108)",
        border: `1px solid ${hovered ? "rgba(200,135,74,.4)" : "rgba(200,135,74,.12)"}`,
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        opacity: inView ? 1 : 0,
        transition: `opacity .7s ease ${delay}s, transform .3s, border-color .3s`,
      }}
    >
      <IconCircle>{feature.emoji}</IconCircle>
      <h3 className="text-xl font-semibold mt-4 mb-2"
          style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}>
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed"
         style={{ color: `${COLORS.cream}77`, fontFamily: "'DM Sans', sans-serif" }}>
        {feature.desc}
      </p>
    </div>
  );
}

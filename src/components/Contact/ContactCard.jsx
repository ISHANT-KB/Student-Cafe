import React, { useState } from "react";
import { COLORS } from "../../data/constants";
import { useInView } from "../../hooks/useInView";
import { IconCircle } from "../ui/IconCircle";

export function ContactCard({ card, delay = 0 }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const isExternal = card.href.startsWith("http");

  return (
    <a
      ref={ref}
      href={card.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 p-5 rounded-2xl no-underline"
      style={{
        background: "linear-gradient(145deg,#2d1a0e,#1e1108)",
        border: `1px solid ${hovered ? "rgba(200,135,74,.5)" : "rgba(200,135,74,.15)"}`,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        opacity: inView ? 1 : 0,
        transition: `opacity .7s ease ${delay}s, transform .3s, border-color .3s`,
      }}
    >
      <IconCircle size={48}>{card.emoji}</IconCircle>
      <div>
        <p className="text-xs uppercase tracking-widest mb-0.5"
           style={{ color: COLORS.caramel, fontFamily: "'DM Sans', sans-serif" }}>{card.label}</p>
        <p className="font-semibold text-sm"
           style={{ color: COLORS.cream, fontFamily: "'DM Sans', sans-serif" }}>{card.value}</p>
        <p className="text-xs mt-0.5"
           style={{ color: `${COLORS.cream}55`, fontFamily: "'DM Sans', sans-serif" }}>{card.sub}</p>
      </div>
    </a>
  );
}

import React, { useState } from "react";
import { COLORS } from "../../data/constants";
import { useInView } from "../../hooks/useInView";

export function MenuCard({ item, delay = 0 }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  const categoryLabel = item.category === "dosa" ? "South Indian" : item.category;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl p-5 cursor-default"
      style={{
        background: hovered ? "linear-gradient(145deg,#3a2214,#261510)" : "linear-gradient(145deg,#2d1a0e,#1e1108)",
        border: `1px solid ${hovered ? "rgba(200,135,74,.5)" : "rgba(200,135,74,.15)"}`,
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,.4)" : "none",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        opacity: inView ? 1 : 0,
        transition: `opacity .7s ease ${delay}s, transform .3s, border-color .3s, box-shadow .3s, background .3s`,
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="pr-2">
          <p className="text-xs uppercase tracking-widest mb-1 capitalize"
             style={{ color: `${COLORS.caramel}99`, fontFamily: "'DM Sans', sans-serif" }}>
            {categoryLabel}
          </p>
          <h3 className="text-lg font-semibold"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}>
            {item.name}
          </h3>
        </div>
        <span
          className="text-sm font-bold px-3 py-1 rounded-full flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#c8874a,#e8a84c)", color: COLORS.espresso }}
        >
          ₹{item.price}
        </span>
      </div>
      <p className="text-sm leading-relaxed"
         style={{ color: `${COLORS.cream}66`, fontFamily: "'DM Sans', sans-serif" }}>
        {item.desc}
      </p>
      <div className="mt-3 text-xl">{item.emoji}</div>
    </div>
  );
}

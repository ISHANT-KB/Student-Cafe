import React from "react";
import { useInView } from "../../hooks/useInView";
import { COLORS } from "../../data/constants";

export const SectionLabel = ({ script, heading, sub }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="text-center mb-14"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: "opacity .7s ease, transform .7s ease",
      }}
    >
      <p style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.gold, fontSize: "1.25rem" }}
         className="mb-2">{script}</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}
          className="text-4xl md:text-5xl font-bold">{heading}</h2>
      {sub && (
        <p className="mt-3 max-w-lg mx-auto text-sm"
           style={{ color: `${COLORS.cream}70`, fontFamily: "'DM Sans', sans-serif" }}>{sub}</p>
      )}
    </div>
  );
};

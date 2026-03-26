import React, { useState } from "react";
import { COLORS } from "../../data/constants";

export function GalleryItem({ image, className = "" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image.src}
        alt={image.label}
        className="w-full h-full object-cover"
        style={{ transition: "transform .55s ease", transform: hovered ? "scale(1.09)" : "scale(1)" }}
        loading="lazy"
      />
      <div
        className="absolute inset-0 flex items-end p-4"
        style={{
          background: "linear-gradient(to top, rgba(26,15,8,.82), transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity .35s",
        }}
      >
        <span className="font-semibold"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}>
          {image.label}
        </span>
      </div>
    </div>
  );
}

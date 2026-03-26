import React from "react";
import { COLORS } from "../../data/constants";

export function CategoryTabs({ categories, active, onTabChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((cat) => {
        const isActive = active === cat.key;
        return (
          <button
            key={cat.key}
            onClick={() => onTabChange(cat.key)}
            className="px-5 py-2 rounded-full text-sm transition-all duration-200"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: isActive ? "linear-gradient(135deg,#c8874a,#e8a84c)" : "transparent",
              color: isActive ? COLORS.espresso : `${COLORS.cream}99`,
              border: isActive ? "none" : "1.5px solid rgba(200,135,74,.3)",
              fontWeight: isActive ? 700 : 400,
            }}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

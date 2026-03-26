import React from "react";
import { COLORS } from "../../data/constants";

export const BtnOutline = ({ children, href, onClick, className = "" }) => (
  <a
    href={href}
    onClick={onClick}
    className={`inline-block px-6 py-3 rounded-full font-medium text-sm uppercase tracking-widest
                border cursor-pointer select-none transition-all duration-200 ${className}`}
    style={{ borderColor: COLORS.caramel, color: COLORS.caramel }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = COLORS.caramel;
      e.currentTarget.style.color = COLORS.espresso;
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "";
      e.currentTarget.style.color = COLORS.caramel;
      e.currentTarget.style.transform = "";
    }}
  >
    {children}
  </a>
);

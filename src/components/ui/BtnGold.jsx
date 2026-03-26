import React from "react";
import { COLORS } from "../../data/constants";

export const BtnGold = ({ children, href, onClick, className = "" }) => {
  const sharedStyle = {
    background: "linear-gradient(135deg, #c8874a, #e8a84c)",
    color: COLORS.espresso,
    boxShadow: "0 6px 24px rgba(200,135,74,.35)",
  };
  const shared = {
    className: `inline-block px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-widest
                transition-all duration-200 select-none cursor-pointer ${className}`,
    style: sharedStyle,
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(200,135,74,.55)";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = sharedStyle.boxShadow;
    },
  };
  return href
    ? <a href={href} {...shared}>{children}</a>
    : <button onClick={onClick} {...shared}>{children}</button>;
};

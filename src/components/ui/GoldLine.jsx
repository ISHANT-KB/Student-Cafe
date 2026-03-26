import React from "react";

export const GoldLine = ({ className = "" }) => (
  <div
    className={`h-px w-24 ${className}`}
    style={{ background: "linear-gradient(to right, transparent, #c8874a 50%, transparent)" }}
  />
);

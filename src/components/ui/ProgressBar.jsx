import React from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ProgressBar() {
  const p = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 z-50 h-0.5 pointer-events-none"
      style={{
        width: `${p}%`,
        background: "linear-gradient(to right, #c8874a, #e8a84c)",
        transition: "width .1s linear",
      }}
    />
  );
}

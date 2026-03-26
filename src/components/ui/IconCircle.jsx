import React from "react";

export const IconCircle = ({ children, size = 56 }) => (
  <div
    className="flex items-center justify-center rounded-full mx-auto flex-shrink-0"
    style={{
      width: size, height: size, fontSize: size * 0.38,
      background: "linear-gradient(135deg, rgba(200,135,74,.2), rgba(232,168,76,.3))",
      border: "1px solid rgba(200,135,74,.3)",
    }}
  >
    {children}
  </div>
);

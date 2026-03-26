import React, { useState, useEffect } from "react";
import { COLORS, MODAL_TABS } from "../data/constants";

export function MenuModal({ isOpen, onClose }) {
  const [tab, setTab] = useState(0);

  // Keyboard close
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,.88)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        style={{ animation: "fadeUp .3s ease forwards" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-5 -right-4 md:-right-5 z-10 w-9 h-9 rounded-full font-bold text-base
                     flex items-center justify-center transition-colors duration-200"
          style={{ background: COLORS.caramel, color: COLORS.espresso }}
          onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.gold; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = COLORS.caramel; }}
        >
          ✕
        </button>

        {/* Tab bar */}
        <div className="flex gap-3 mb-4 justify-center flex-wrap">
          {MODAL_TABS.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setTab(idx)}
              className="px-4 py-1.5 rounded-full text-sm transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: tab === idx ? "linear-gradient(135deg,#c8874a,#e8a84c)" : "transparent",
                color: tab === idx ? COLORS.espresso : `${COLORS.cream}88`,
                border: tab === idx ? "none" : "1px solid rgba(200,135,74,.4)",
                fontWeight: tab === idx ? 700 : 400,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <img
          src={MODAL_TABS[tab].src}
          alt={MODAL_TABS[tab].label}
          className="w-full rounded-2xl shadow-2xl"
          style={{ maxHeight: "80vh", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

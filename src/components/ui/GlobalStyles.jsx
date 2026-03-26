import React, { useEffect } from "react";

export function GlobalStyles() {
  useEffect(() => {
    const link = Object.assign(document.createElement("link"), {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&family=Dancing+Script:wght@700&display=swap",
    });
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.id = "sc-global";
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { background: #1a0f08; overflow-x: hidden; margin: 0; }

      /* Grain texture overlay */
      body::before {
        content: '';
        position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: .28;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      }

      @keyframes shimmer {
        0%   { background-position: -200% center; }
        100% { background-position:  200% center; }
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; } to { opacity: 1; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(-8px); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(link);
      document.getElementById("sc-global")?.remove();
    };
  }, []);
  return null;
}

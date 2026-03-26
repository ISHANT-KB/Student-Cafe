import React from "react";
import { COLORS } from "../data/constants";

export function Footer() {
  const footerLinks = [["About","#about"],["Menu","#menu"],["Gallery","#gallery"],["Contact","#contact"]];
  const infoRows = [
    ["📧","[EMAIL_ADDRESS]","mailto:[EMAIL_ADDRESS]"],
    ["📞","+91 xxxxx xxxxx","tel:+91xxxxxxxxxx"],
    ["📸","@studentcafe_bilaspur","https://instagram.com/studentcafe_bilaspur"],
    ["🕐","Mon–Sun: 8 AM – 10 PM", null],
  ];

  return (
    <footer className="pt-16 pb-8 px-6"
            style={{ background: COLORS.espresso, borderTop: `1px solid ${COLORS.cream}08` }}>
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <span className="text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}>
                Student{" "}
                <span style={{
                  background: "linear-gradient(90deg,#c8874a 20%,#f5d99a 50%,#c8874a 80%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 4s linear infinite",
                }}>Café</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs"
               style={{ color: `${COLORS.cream}66`, fontFamily: "'DM Sans', sans-serif" }}>
              Desi food, student prices, and a place that feels like home. Come as you are.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-5"
                style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif", color: `${COLORS.cream}66` }}>
              {footerLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors duration-200"
                     onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.gold; }}
                     onMouseLeave={(e) => { e.currentTarget.style.color = `${COLORS.cream}66`; }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-5"
                style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}>
              Info
            </h4>
            <ul className="space-y-3 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif", color: `${COLORS.cream}66` }}>
              {infoRows.map(([icon, text, href]) => (
                <li key={text} className="flex gap-3">
                  <span>{icon}</span>
                  {href
                    ? <a href={href} className="transition-colors duration-200"
                         onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.gold; }}
                         onMouseLeave={(e) => { e.currentTarget.style.color = `${COLORS.cream}66`; }}>{text}</a>
                    : <span>{text}</span>}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div
          className="w-full h-px mb-8"
          style={{ background: "linear-gradient(to right, transparent, #c8874a 50%, transparent)" }}
        />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
             style={{ color: `${COLORS.cream}44`, fontFamily: "'DM Sans', sans-serif" }}>
          <p>© 2025 Student Café, Bilaspur. All rights reserved.</p>
          <p>Made with ☕ & ❤️ for students</p>
        </div>

      </div>
    </footer>
  );
}

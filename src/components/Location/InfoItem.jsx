import React from "react";
import { COLORS } from "../../data/constants";
import { IconCircle } from "../ui/IconCircle";

export function InfoItem({ item }) {
  return (
    <div className="flex items-start gap-4">
      <IconCircle size={42}>{item.emoji}</IconCircle>
      <div>
        <p className="font-medium mb-1" style={{ color: COLORS.cream, fontFamily: "'DM Sans', sans-serif" }}>
          {item.title}
        </p>
        {item.lines.map((line, i) => (
          <p key={i} className="text-sm" style={{ color: `${COLORS.cream}77`, fontFamily: "'DM Sans', sans-serif" }}>
            {item.link
              ? <a href={item.link} className="transition-colors duration-200"
                   onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.gold; }}
                   onMouseLeave={(e) => { e.currentTarget.style.color = `${COLORS.cream}77`; }}>{line}</a>
              : line}
          </p>
        ))}
      </div>
    </div>
  );
}

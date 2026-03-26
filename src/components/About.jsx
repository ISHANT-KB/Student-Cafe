import React from "react";
import { COLORS } from "../data/constants";
import { FadeUp } from "./ui/FadeUp";
import { GoldLine } from "./ui/GoldLine";

export function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: COLORS.espresso }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image collage */}
        <FadeUp className="relative">
          <div className="rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
            <img
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=700&q=80"
              alt="Inside Student Café"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Accent card */}
          <div
            className="absolute -bottom-5 -right-3 md:-right-7 rounded-2xl p-4 shadow-2xl"
            style={{ background: COLORS.caramel, color: COLORS.espresso, maxWidth: 160 }}
          >
            <p className="text-3xl font-bold leading-none"
               style={{ fontFamily: "'Playfair Display', serif" }}>5★</p>
            <p className="text-xs font-semibold mt-1">Student Favourite</p>
          </div>
          {/* Decorative ring */}
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-50"
               style={{ border: `2px solid rgba(200,135,74,.5)` }} />
        </FadeUp>

        {/* Text */}
        <FadeUp delay={0.2}>
          <p className="text-xl mb-3" style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.gold }}>
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}>
            A Café Born<br /><em>for Students</em>
          </h2>
          <GoldLine className="mb-6" />
          <p className="leading-relaxed mb-4 text-sm"
             style={{ color: `${COLORS.cream}88`, fontFamily: "'DM Sans', sans-serif" }}>
            Student Café started with one simple idea — great food shouldn't break the bank. We serve
            piping-hot, freshly-made meals that fuel long study sessions, late-night craving runs,
            and everything in between.
          </p>
          <p className="leading-relaxed mb-8 text-sm"
             style={{ color: `${COLORS.cream}88`, fontFamily: "'DM Sans', sans-serif" }}>
            From crispy Chana Chilly to comforting Masala Dosa, every dish is made with love, real
            ingredients, and a whole lot of masala. Pull up a chair — this is your place.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Fresh Daily", "Pocket-Friendly", "Made with Love"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border text-sm"
                    style={{ borderColor: `rgba(200,135,74,.45)`, color: COLORS.caramel,
                             fontFamily: "'DM Sans', sans-serif" }}>
                {tag}
              </span>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}

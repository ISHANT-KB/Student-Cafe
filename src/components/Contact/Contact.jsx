import React from "react";
import { COLORS, CONTACT_CARDS } from "../../data/constants";
import { FadeUp } from "../ui/FadeUp";
import { BtnGold } from "../ui/BtnGold";
import { BtnOutline } from "../ui/BtnOutline";
import { ContactCard } from "./ContactCard";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6"
             style={{ background: "linear-gradient(135deg,#200d04,#2d1a0e)" }}>
      <div className="max-w-5xl mx-auto text-center">

        <FadeUp>
          <p className="text-xl mb-3" style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.gold }}>
            Let's Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}>
            Hungry? Come Over.
          </h2>
          <p className="max-w-lg mx-auto mb-12 leading-relaxed text-sm"
             style={{ color: `${COLORS.cream}88`, fontFamily: "'DM Sans', sans-serif" }}>
            Whether you want to order, ask about the menu, or just say hi — we're always here for you.
          </p>
        </FadeUp>

        {/* Contact cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {CONTACT_CARDS.map((card, i) => (
            <ContactCard key={card.label} card={card} delay={i * 0.1} />
          ))}
        </div>

        {/* Big CTA banner */}
        <FadeUp delay={0.3}>
          <div
            className="rounded-3xl p-10 md:p-14"
            style={{
              background: "linear-gradient(135deg,rgba(200,135,74,.15),rgba(232,168,76,.08))",
              border: "1px solid rgba(200,135,74,.2)",
            }}
          >
            <p className="text-2xl mb-3" style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.gold }}>
              Your next meal is waiting
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}>
              Visit Student Café Today
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BtnGold href="https://wa.me/919876543210">Order on WhatsApp</BtnGold>
              <BtnOutline href="#location">Get Directions</BtnOutline>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}

import React from "react";
import { COLORS, LOCATION_INFO } from "../../data/constants";
import { SectionLabel } from "../ui/SectionLabel";
import { GoldLine } from "../ui/GoldLine";
import { FadeUp } from "../ui/FadeUp";
import { InfoItem } from "./InfoItem";
import { MapEmbed } from "./MapEmbed";

export function Location() {
  return (
    <section id="location" className="py-24 px-6" style={{ background: COLORS.espresso }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <FadeUp>
          <p className="text-xl mb-2"
             style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.gold }}>Find Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.cream }}>
            Come Visit
          </h2>
          <GoldLine className="mb-8" />
          <div className="space-y-6">
            {LOCATION_INFO.map((item) => <InfoItem key={item.title} item={item} />)}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <MapEmbed />
        </FadeUp>

      </div>
    </section>
  );
}

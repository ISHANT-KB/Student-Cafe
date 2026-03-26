import React from "react";
import { FEATURES } from "../../data/constants";
import { SectionLabel } from "../ui/SectionLabel";
import { FeatureCard } from "./FeatureCard";
import { Testimonial } from "./Testimonial";

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-6"
             style={{ background: "linear-gradient(180deg,#1a0f08,#1e0e07,#1a0f08)" }}>
      <div className="max-w-6xl mx-auto">

        <SectionLabel
          script="The Student Café Difference"
          heading="Why Students Love Us"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 0.1} />
          ))}
        </div>

        <Testimonial />

      </div>
    </section>
  );
}

import React from "react";
import { COLORS, GALLERY_IMAGES } from "../../data/constants";
import { SectionLabel } from "../ui/SectionLabel";
import { FadeUp } from "../ui/FadeUp";
import { GalleryItem } from "./GalleryItem";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6" style={{ background: COLORS.espresso }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel
          script="Made Fresh Daily"
          heading="Food Gallery"
          sub="A feast for the eyes — before it becomes one for the stomach"
        />
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Tall feature item */}
            <GalleryItem image={GALLERY_IMAGES[0]}
                         className="col-span-2 md:col-span-1 row-span-2 h-72 md:h-auto" />
            {GALLERY_IMAGES.slice(1).map((img) => (
              <GalleryItem key={img.id} image={img} className="h-48 md:h-56" />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

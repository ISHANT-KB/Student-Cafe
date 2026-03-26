import React, { useState } from "react";
import { MENU_CATEGORIES, MENU_ITEMS, COLORS } from "../../data/constants";
import { SectionLabel } from "../ui/SectionLabel";
import { BtnGold } from "../ui/BtnGold";
import { CategoryTabs } from "./CategoryTabs";
import { MenuCard } from "./MenuCard";

export function Menu({ onMenuModalOpen }) {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === active);

  return (
    <section
      id="menu"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg,#1a0f08 0%,#200d04 50%,#1a0f08 100%)" }}
    >
      <div className="max-w-6xl mx-auto">

        <SectionLabel
          script="What We Serve"
          heading="Our Menu"
          sub="Homestyle desi flavours at prices every student will love"
        />

        <CategoryTabs 
          categories={MENU_CATEGORIES} 
          active={active} 
          onTabChange={setActive} 
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} delay={(i % 6) * 0.05} />
          ))}
        </div>

        {/* Full-menu CTA */}
        <div className="text-center mt-14">
          <p className="text-sm mb-5"
             style={{ color: `${COLORS.cream}55`, fontFamily: "'DM Sans', sans-serif" }}>
            Want to see the complete printed menu?
          </p>
          <BtnGold onClick={onMenuModalOpen}>View Full Menu</BtnGold>
        </div>

      </div>
    </section>
  );
}

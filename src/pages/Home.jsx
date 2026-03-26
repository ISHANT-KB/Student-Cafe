import React, { useState, useCallback } from "react";
import { GlobalStyles } from "../components/ui/GlobalStyles";
import { ProgressBar } from "../components/ui/ProgressBar";
import { FloatingWhatsApp } from "../components/ui/FloatingWhatsApp";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Menu } from "../components/Menu/Menu";
import { MenuModal } from "../components/MenuModal";
import { Gallery } from "../components/Gallery/Gallery";
import { WhyUs } from "../components/WhyUs/WhyUs";
import { Location } from "../components/Location/Location";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const openModal  = useCallback(() => setMenuModalOpen(true),  []);
  const closeModal = useCallback(() => setMenuModalOpen(false), []);

  return (
    <>
      <GlobalStyles />
      <ProgressBar />
      <Navbar />

      <main>
        <Hero onMenuOpen={openModal} />
        <About />
        <Menu onMenuModalOpen={openModal} />
        <Gallery />
        <WhyUs />
        <Location />
        <Contact />
      </main>

      <Footer />

      <MenuModal isOpen={menuModalOpen} onClose={closeModal} />
      <FloatingWhatsApp />
    </>
  );
}

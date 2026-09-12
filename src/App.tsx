/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { MenuBook } from './components/MenuBook';
import { GalleryCarousel } from './components/GalleryCarousel';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#110F0D] text-[#F9F6F0] selection:bg-[#D97706]/40 selection:text-[#FEF3C7]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenReservation={scrollToReservation} />

      {/* 1. Hero Section (plein écran, fond animé, slogan, boutons d'action) */}
      <main>
        <Hero
          onReserveClick={scrollToReservation}
          onDiscoverMenuClick={scrollToMenu}
        />

        {/* 2. Section « Notre Histoire » (Alexis & Adeline, Beuvron-en-Auge, Fait maison, Pomme Confite) */}
        <HistorySection />

        {/* 3. Section Menu (interactive, catégories claires, accords cidre sommelier) */}
        <MenuBook />

        {/* 4. Galerie photo (une seule grande photo visible à la fois + flèches + dots) */}
        <GalleryCarousel />

        {/* 5. Formulaire de demande de réservation (texte rassurant confirmation propriétaire) */}
        <ReservationSection />
      </main>

      {/* 6. Footer (Adresse, Horaires complets, Téléphone, Email, Mentions) */}
      <Footer />
    </div>
  );
}

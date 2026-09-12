import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MapPin, Menu, X, Clock } from 'lucide-react';
import { RESTAURANT_INFO, getRestaurantCurrentStatus } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getRestaurantCurrentStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Refresh status every 2 minutes
    const interval = setInterval(() => {
      setStatus(getRestaurantCurrentStatus());
    }, 120000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#110F0D]/95 backdrop-blur-md shadow-lg shadow-black/40 py-3 border-b border-[#342A20]'
          : 'bg-gradient-to-b from-[#110F0D]/90 via-[#110F0D]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D97706] rounded-lg p-1"
          id="navbar-brand-link"
        >
          {/* Stylized Apple Logo Mark */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D97706] via-[#B45309] to-[#78350F] flex items-center justify-center shadow-md shadow-amber-950/50 group-hover:scale-105 transition-transform duration-300 border border-amber-400/30">
            <svg
              className="w-6 h-6 text-[#FDFBF7]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Apple stem & leaf */}
              <path d="M12 2C12 4 13.5 5.5 15 5.5" stroke="#FDE68A" />
              <path d="M12 2C10.5 4 10.5 5 12 6" stroke="#FDE68A" />
              {/* Apple body */}
              <path d="M12 6c-3 0-6 2-6 6.5C6 17 9.5 21 12 21s6-4 6-8.5C18 8 15 6 12 6z" fill="currentColor" fillOpacity="0.15" />
            </svg>
          </div>
          <div>
            <span className="block font-serif-display text-xl sm:text-2xl font-bold tracking-wide text-[#FDFBF7] group-hover:text-[#FBBF24] transition-colors">
              La Pomme Confite
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-[#D4AF37] font-sans-body font-medium -mt-1">
              Dozulé • Pays d'Auge
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#D1C7BD]" id="desktop-nav">
          <button
            onClick={() => scrollToSection('histoire')}
            className="hover:text-[#FBBF24] transition-colors cursor-pointer py-1"
            id="nav-link-histoire"
          >
            Notre Histoire
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="hover:text-[#FBBF24] transition-colors cursor-pointer py-1"
            id="nav-link-menu"
          >
            La Carte
          </button>
          <button
            onClick={() => scrollToSection('galerie')}
            className="hover:text-[#FBBF24] transition-colors cursor-pointer py-1"
            id="nav-link-galerie"
          >
            Galerie
          </button>
          <button
            onClick={() => scrollToSection('horaires')}
            className="hover:text-[#FBBF24] transition-colors cursor-pointer py-1 flex items-center gap-1.5"
            id="nav-link-horaires"
          >
            <Clock className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Horaires & Accès</span>
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Status pill badge */}
          <div
            className={`hidden md:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
              status.isOpenNow
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40'
                : 'bg-amber-950/40 text-amber-300/90 border-amber-500/30'
            }`}
            title={status.nextOpeningMessage}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                status.isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-500'
              }`}
            />
            <span>{status.isOpenNow ? 'Ouvert' : 'Fermé'}</span>
          </div>

          {/* Quick Call */}
          <a
            href={`tel:${RESTAURANT_INFO.phoneClean}`}
            className="flex items-center gap-2 text-xs text-[#E6DED5] hover:text-[#FBBF24] py-1.5 px-3 rounded-lg border border-[#42362C] hover:border-[#D97706] transition-all bg-[#1D1814]/70"
            id="navbar-call-btn"
            title="Appeler la crêperie"
          >
            <Phone className="w-3.5 h-3.5 text-[#D97706]" />
            <span className="font-semibold tracking-wide">{RESTAURANT_INFO.phone}</span>
          </a>

          {/* Primary Book Table CTA */}
          <button
            onClick={() => {
              onOpenReservation();
              scrollToSection('reservation');
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#EA580C] hover:to-[#D97706] text-[#FFFFFF] text-sm font-semibold tracking-wide shadow-md shadow-amber-950/50 hover:shadow-amber-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            id="navbar-reserve-btn"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Réserver une table</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={`tel:${RESTAURANT_INFO.phoneClean}`}
            className="p-2 text-[#FBBF24] hover:bg-[#2A221B] rounded-lg border border-[#3A2E24]"
            aria-label="Appeler le restaurant"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#E6DED5] hover:text-white rounded-lg focus:outline-none"
            aria-label="Ouvrir le menu"
            id="navbar-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="sm:hidden bg-[#16120F] border-b border-[#3A2F25] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
          id="mobile-navigation-menu"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#2C241D]">
            <span className="text-xs uppercase tracking-wider text-[#A89C90]">Navigation</span>
            <div
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                status.isOpenNow ? 'bg-emerald-950 text-emerald-300' : 'bg-amber-950 text-amber-300'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${status.isOpenNow ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span>{status.statusMessage}</span>
            </div>
          </div>

          <div className="flex flex-col space-y-3 text-base">
            <button
              onClick={() => scrollToSection('histoire')}
              className="text-left text-[#E6DED5] hover:text-[#FBBF24] py-2"
            >
              Notre Histoire (Alexis & Adeline)
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-left text-[#E6DED5] hover:text-[#FBBF24] py-2"
            >
              La Carte & Menus
            </button>
            <button
              onClick={() => scrollToSection('galerie')}
              className="text-left text-[#E6DED5] hover:text-[#FBBF24] py-2"
            >
              Galerie Photos
            </button>
            <button
              onClick={() => scrollToSection('horaires')}
              className="text-left text-[#E6DED5] hover:text-[#FBBF24] py-2"
            >
              Horaires & Coordonnées
            </button>
          </div>

          <div className="pt-3 border-t border-[#2C241D] flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenReservation();
                scrollToSection('reservation');
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-semibold text-center shadow-lg"
            >
              Demander une réservation
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="w-full py-2.5 rounded-lg border border-[#42362C] text-center text-sm font-medium text-[#E6DED5] flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span>Appeler le {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

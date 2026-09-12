import React, { useEffect, useRef } from 'react';
import { Calendar, Utensils, MapPin, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onReserveClick: () => void;
  onDiscoverMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick, onDiscoverMenuClick }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle animated warm embers & floating apple golden particles in background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool: golden bubbles & tiny apple seeds/leaves
    const particleCount = 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.5 + 0.1,
      colorHue: Math.random() > 0.4 ? 38 : 75, // warm amber or gentle apple green
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient vignette
      const radialGlow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        50,
        width / 2,
        height / 2,
        width * 0.7
      );
      radialGlow.addColorStop(0, 'rgba(217, 119, 6, 0.08)');
      radialGlow.addColorStop(0.6, 'rgba(180, 83, 9, 0.03)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Render floating golden bubbles/embers
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.colorHue}, 90%, 65%, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.colorHue}, 90%, 55%, 0.4)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#12100E] pt-20 pb-16"
    >
      {/* Background imagery with warm atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Cinematic atmospheric photo layer */}
        <img
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=85"
          alt="Ambiance chaleureuse crêperie normande"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse [animation-duration:12s]"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/75 to-[#12100E]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/30 via-transparent to-black/80" />
      </div>

      {/* Subtle particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Heritage Pill Tag */}
        <div
          id="hero-heritage-tag"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A2017]/80 border border-[#D97706]/40 text-[#FDE68A] text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 shadow-md shadow-black/40 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Maison fondée en 2016 • Dozulé, Pays d'Auge</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
        </div>

        {/* Main Brand Title & Monogram */}
        <div className="mb-4">
          <h1
            id="hero-main-title"
            className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FDFBF7] drop-shadow-2xl"
          >
            La Pomme Confite
          </h1>
          <div className="h-1 w-24 sm:w-36 mx-auto mt-4 bg-gradient-to-r from-transparent via-[#D97706] to-transparent" />
        </div>

        {/* Slogan */}
        <p
          id="hero-slogan"
          className="font-serif-display italic text-xl sm:text-2xl md:text-3xl text-[#FCD34D] font-normal max-w-3xl mb-6 tracking-wide"
        >
          « Galettes au sarrasin, crêpes faites maison & notre fameuse pomme confite »
        </p>

        {/* Narrative Description */}
        <p
          id="hero-subtext"
          className="text-base sm:text-lg text-[#D6CCC2] max-w-2xl mb-10 leading-relaxed font-light"
        >
          Alexis et Adeline vous accueillent en toute simplicité au cœur de Dozulé pour un moment chaleureux, gourmand et généreux. Tout est préparé sur place avec le cœur : galettes pur sarrasin, saumon fumé maison, glaces artisanales et cidres de terroir.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          {/* Main Reserve Button */}
          <button
            onClick={onReserveClick}
            id="hero-cta-reserve"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#92400E] hover:from-[#EA580C] hover:via-[#D97706] hover:to-[#B45309] text-white font-semibold text-base sm:text-lg tracking-wide shadow-xl shadow-amber-950/60 hover:shadow-amber-600/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 border border-amber-400/30 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#FDE68A]" />
            <span>Réserver une table</span>
          </button>

          {/* Secondary Menu Button */}
          <button
            onClick={onDiscoverMenuClick}
            id="hero-cta-menu"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1D1814]/85 hover:bg-[#2A231C] text-[#FDFBF7] font-medium text-base sm:text-lg tracking-wide border border-[#524133] hover:border-[#D97706] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2.5 backdrop-blur-sm cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-[#D97706]" />
            <span>Découvrir la carte</span>
          </button>
        </div>

        {/* Discreet Address & Direct Phone */}
        <div
          id="hero-contact-bar"
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#A89C90] pt-6 border-t border-[#342A20]/80 w-full max-w-xl"
        >
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#FBBF24] transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#D97706]" />
            <span>71 Grande-Rue, 14430 Dozulé</span>
          </a>
          <span className="hidden sm:inline text-[#4A3D31]">•</span>
          <a
            href={`tel:${RESTAURANT_INFO.phoneClean}`}
            className="inline-flex items-center gap-2 hover:text-[#FBBF24] font-medium text-[#F3EFEA] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D97706]" />
            <span>02 31 79 31 31</span>
          </a>
        </div>
      </div>

      {/* Down Scroll Anchor */}
      <button
        onClick={onDiscoverMenuClick}
        aria-label="Faire défiler vers le contenu"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-[#A89C90] hover:text-[#FBBF24] transition-colors flex flex-col items-center gap-1 cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-widest font-light text-[#8A7D71]">Découvrir</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

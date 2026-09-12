import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, Camera } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/restaurantData';

export const GalleryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const currentPhoto = GALLERY_PHOTOS[currentIndex];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsZoomOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section id="galerie" className="py-24 bg-[#14100D] relative border-t border-[#2A2018] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#D97706] font-semibold block mb-2">
            Immersion & Ambiance
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#FDFBF7] tracking-tight mb-4">
            L'Atmosphère en Images
          </h2>
          <div className="w-16 h-0.5 bg-[#D97706] mx-auto mb-4" />
          <p className="text-[#AFA295] text-sm sm:text-base font-light">
            Une seule photo à la fois pour apprécier chaque détail : des dorures de nos galettes au décor intimiste de notre salle en Pays d'Auge.
          </p>
        </div>

        {/* Carousel Container (Single Large Photo view) */}
        <div
          className="relative rounded-3xl overflow-hidden bg-[#1D1713] border-2 border-[#382B20] shadow-2xl shadow-black/90 group"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          id="single-photo-stage"
        >
          {/* Main Photo Display */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden">
            <img
              key={currentPhoto.id}
              src={currentPhoto.url}
              alt={currentPhoto.title}
              className="w-full h-full object-cover object-center transition-all duration-500 transform scale-100 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Overlays for readability of captions */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-transparent to-[#0E0C0A]/30 pointer-events-none" />

            {/* Top Bar inside image */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#120F0C]/80 backdrop-blur-md text-[#FBBF24] text-xs font-semibold border border-[#3E3024]">
                <Sparkles className="w-3 h-3 text-[#D97706]" />
                <span>{currentPhoto.category}</span>
              </span>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#120F0C]/80 backdrop-blur-md text-[#E8DFD8] text-xs font-medium border border-[#3E3024]">
                  {currentIndex + 1} / {GALLERY_PHOTOS.length}
                </span>
                <button
                  onClick={() => setIsZoomOpen(true)}
                  className="p-2 rounded-full bg-[#120F0C]/80 backdrop-blur-md text-[#E8DFD8] hover:text-white border border-[#3E3024] hover:bg-[#2A2018] transition-colors cursor-pointer"
                  title="Agrandir la photo"
                  aria-label="Agrandir la photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-[#100D0B] via-[#100D0B]/85 to-transparent z-10">
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#FDFBF7] mb-1">
                {currentPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#CFC2B4] max-w-2xl leading-relaxed">
                {currentPhoto.description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            id="gallery-btn-prev"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#14100D]/85 hover:bg-[#D97706] text-white border border-[#443528] hover:border-amber-400 flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            id="gallery-btn-next"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#14100D]/85 hover:bg-[#D97706] text-white border border-[#443528] hover:border-amber-400 flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators (Dots) */}
        <div className="flex items-center justify-center gap-2.5 mt-6" id="gallery-dots">
          {GALLERY_PHOTOS.map((photo, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={photo.id}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Aller à la photo ${index + 1} : ${photo.title}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-8 h-2.5 bg-gradient-to-r from-[#D97706] to-[#F59E0B]'
                    : 'w-2.5 h-2.5 bg-[#382C22] hover:bg-[#574435]'
                }`}
              />
            );
          })}
        </div>

        {/* Discreet hint for mobile swipe */}
        <p className="text-center text-[11px] text-[#7A6D60] mt-3">
          Glissez vers la gauche ou la droite pour faire défiler les photos • Touches fléchées au clavier
        </p>
      </div>

      {/* Fullscreen Zoom Lightbox Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl font-light hover:text-[#FBBF24] p-3 cursor-pointer"
            aria-label="Fermer le plein écran"
          >
            ✕
          </button>
          <div className="max-w-6xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              className="max-h-[80vh] w-auto mx-auto object-contain rounded-xl shadow-2xl border border-[#3E2E20]"
              referrerPolicy="no-referrer"
            />
            <div className="text-center mt-4">
              <h4 className="font-serif-display text-xl text-[#FDFBF7]">{currentPhoto.title}</h4>
              <p className="text-xs text-[#A89C90] mt-1">{currentPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

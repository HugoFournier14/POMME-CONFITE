import React, { useState } from 'react';
import {
  Wheat,
  Sparkles,
  Award,
  Heart,
  Wine,
  ChevronLeft,
  ChevronRight,
  Info,
  Check,
  Flame,
  Bookmark
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { MenuCategoryId, MenuItem } from '../types';

export const MenuBook: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<MenuCategoryId>('galettes');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'signature' | 'vegetarian' | 'local'>('all');
  const [selectedItemForDetails, setSelectedItemForDetails] = useState<MenuItem | null>(null);

  const activeCategoryIndex = MENU_CATEGORIES.findIndex((c) => c.id === activeCategoryId);
  const currentCategory = MENU_CATEGORIES[activeCategoryIndex];

  // Filter items in active category
  const filteredItems = MENU_ITEMS.filter((item) => {
    if (item.category !== activeCategoryId) return false;
    if (selectedFilter === 'signature') return item.isSignature;
    if (selectedFilter === 'vegetarian') return item.isVegetarian;
    if (selectedFilter === 'local') return item.isLocal;
    return true;
  });

  const goToPreviousCategory = () => {
    const prevIndex = (activeCategoryIndex - 1 + MENU_CATEGORIES.length) % MENU_CATEGORIES.length;
    setActiveCategoryId(MENU_CATEGORIES[prevIndex].id);
  };

  const goToNextCategory = () => {
    const nextIndex = (activeCategoryIndex + 1) % MENU_CATEGORIES.length;
    setActiveCategoryId(MENU_CATEGORIES[nextIndex].id);
  };

  const getCategoryIcon = (id: MenuCategoryId) => {
    switch (id) {
      case 'galettes':
        return <Wheat className="w-4 h-4" />;
      case 'specialites':
        return <Award className="w-4 h-4" />;
      case 'crepes':
        return <Sparkles className="w-4 h-4" />;
      case 'desserts':
        return <Heart className="w-4 h-4" />;
      case 'boissons':
        return <Wine className="w-4 h-4" />;
    }
  };

  return (
    <section id="menu" className="py-24 bg-[#110F0D] relative border-t border-[#292018]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#D97706] font-semibold block mb-2">
            La Carte & Menus
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#FDFBF7] tracking-tight mb-4">
            Nos Galettes & Gourmandises
          </h2>
          <div className="w-16 h-0.5 bg-[#D97706] mx-auto mb-6" />
          <p className="text-[#B8ACA0] text-base leading-relaxed font-light">
            Feuilletez notre carte en toute simplicité : des galettes pur sarrasin bien beurrées, notre saumon fumé maison, la célèbre pomme confite au caramel et les bons cidres de Normandie sélectionnés par Alexis.
          </p>
        </div>

        {/* Categories Tab Navigation Bar */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#1B1612] border border-[#34271E] shadow-inner max-w-4xl w-full">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryId(cat.id);
                  }}
                  id={`tab-${cat.id}`}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md shadow-amber-950/60 font-semibold'
                      : 'text-[#C2B5A8] hover:text-[#FDFBF7] hover:bg-[#261E17]'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subcategory Description & Filter Pills */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#181310] p-4 sm:p-6 rounded-2xl border border-[#33261C]">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="font-serif-display text-2xl font-bold text-[#FDFBF7]">
                {currentCategory.title}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#2E2218] text-[#F59E0B] border border-[#483526]">
                {currentCategory.subtitle}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A89C90] max-w-xl">
              {currentCategory.description}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#3A2B1E] text-[#FBBF24] border-[#D97706]'
                  : 'bg-[#15110E] text-[#A89B8F] border-[#2E231B] hover:text-white'
              }`}
            >
              Tous ({MENU_ITEMS.filter((i) => i.category === activeCategoryId).length})
            </button>
            <button
              onClick={() => setSelectedFilter('signature')}
              className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
                selectedFilter === 'signature'
                  ? 'bg-[#3A2B1E] text-[#FBBF24] border-[#D97706]'
                  : 'bg-[#15110E] text-[#A89B8F] border-[#2E231B] hover:text-white'
              }`}
            >
              <Flame className="w-3 h-3 text-[#D97706]" />
              <span>Signatures</span>
            </button>
            <button
              onClick={() => setSelectedFilter('vegetarian')}
              className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
                selectedFilter === 'vegetarian'
                  ? 'bg-[#3A2B1E] text-[#84CC16] border-[#65A30D]'
                  : 'bg-[#15110E] text-[#A89B8F] border-[#2E231B] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
              <span>Végétarien</span>
            </button>
          </div>
        </div>

        {/* Menu Items Interactive Book / Grid Layout */}
        <div className="relative min-h-[380px]">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-[#16120E] rounded-2xl border border-[#2E2218]">
              <p className="text-[#A89B8E] text-sm mb-3">Aucun plat ne correspond à ce filtre dans cette catégorie.</p>
              <button
                onClick={() => setSelectedFilter('all')}
                className="text-xs text-[#FBBF24] underline hover:text-white"
              >
                Réinitialiser le filtre
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItemForDetails(item)}
                  className="p-5 sm:p-6 rounded-2xl bg-[#181310] border border-[#2F231A] hover:border-[#D97706]/70 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 group cursor-pointer relative flex flex-col justify-between"
                  id={`menu-item-${item.id}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#FDFBF7] group-hover:text-[#FBBF24] transition-colors">
                          {item.name}
                        </h3>
                        {item.isSignature && (
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#3B2514] text-[#F59E0B] border border-[#78350F] font-semibold">
                            <Flame className="w-2.5 h-2.5" />
                            Signature
                          </span>
                        )}
                        {item.isVegetarian && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#182612] text-[#84CC16] border border-[#2D4A1D]">
                            Végétarien
                          </span>
                        )}
                      </div>
                      <div className="font-serif-display text-xl sm:text-2xl font-bold text-[#F59E0B] shrink-0">
                        {item.price.toFixed(2).replace('.', ',')} €
                      </div>
                    </div>

                    <p className="text-sm text-[#B8ACA0] leading-relaxed mb-4 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Sommelier Pairing or Artisan Footnote */}
                  <div className="pt-3 border-t border-[#261D16] flex items-center justify-between text-xs text-[#8F8174]">
                    {item.sommelierPairing ? (
                      <div className="flex items-center gap-1.5 text-[#E0A96D] group-hover:text-[#FBBF24] transition-colors">
                        <Wine className="w-3.5 h-3.5 text-[#D97706]" />
                        <span className="italic truncate max-w-[280px]">
                          Accord Alexis : {item.sommelierPairing}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[11px] text-[#7A6E63]">Fait maison à Dozulé</span>
                    )}

                    <span className="text-[11px] text-[#A89A8E] group-hover:text-[#F59E0B] flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      Détails
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Page Switcher Navigation Arrows (Quick flip through categories) */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#2A2018]">
          <button
            onClick={goToPreviousCategory}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C1612] hover:bg-[#292019] text-xs sm:text-sm text-[#D1C7BD] hover:text-white border border-[#34271D] transition-colors cursor-pointer"
            id="menu-prev-cat"
          >
            <ChevronLeft className="w-4 h-4 text-[#D97706]" />
            <span className="hidden sm:inline">Catégorie précédente</span>
            <span className="sm:hidden">Précédent</span>
          </button>

          <div className="text-center text-xs text-[#A89A8E]">
            Page <span className="font-semibold text-[#FDFBF7]">{activeCategoryIndex + 1}</span> sur{' '}
            <span className="font-semibold text-[#FDFBF7]">{MENU_CATEGORIES.length}</span> •{' '}
            <span className="italic text-[#D97706]">{currentCategory.title}</span>
          </div>

          <button
            onClick={goToNextCategory}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C1612] hover:bg-[#292019] text-xs sm:text-sm text-[#D1C7BD] hover:text-white border border-[#34271D] transition-colors cursor-pointer"
            id="menu-next-cat"
          >
            <span className="hidden sm:inline">Catégorie suivante</span>
            <span className="sm:hidden">Suivant</span>
            <ChevronRight className="w-4 h-4 text-[#D97706]" />
          </button>
        </div>

        {/* Special Menu Notes Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#1B1511] via-[#211913] to-[#1B1511] border border-[#3E2E20] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#2D1F15] flex items-center justify-center text-[#D97706] shrink-0">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif-display text-lg font-bold text-[#FDFBF7]">
                Farine 100% Sarrasin Breton & Produits Frais
              </h4>
              <p className="text-xs text-[#A89A8E]">
                Toutes nos galettes de blé noir sont naturellement sans gluten. Viandes et cidres d'origine Normandie contrôlée.
              </p>
            </div>
          </div>
          <a
            href="#reservation"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-colors"
          >
            Réserver pour déguster
          </a>
        </div>
      </div>

      {/* Dish Detail / Sommelier Pairing Modal */}
      {selectedItemForDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedItemForDetails(null)}
        >
          <div
            className="bg-[#1A1410] border border-[#423224] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItemForDetails(null)}
              className="absolute top-4 right-4 text-[#998B7D] hover:text-white p-2 rounded-full hover:bg-[#2A2018]"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-[#D97706] font-semibold">
                {MENU_CATEGORIES.find((c) => c.id === selectedItemForDetails.category)?.title}
              </span>
              {selectedItemForDetails.isSignature && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3B2514] text-[#F59E0B] border border-[#78350F] font-semibold">
                  Coup de Cœur
                </span>
              )}
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#FDFBF7] mb-2">
              {selectedItemForDetails.name}
            </h3>

            <div className="font-serif-display text-2xl font-bold text-[#F59E0B] mb-4">
              {selectedItemForDetails.price.toFixed(2).replace('.', ',')} €
            </div>

            <p className="text-sm text-[#D1C5B8] leading-relaxed mb-6">
              {selectedItemForDetails.description}
            </p>

            {selectedItemForDetails.sommelierPairing && (
              <div className="p-4 rounded-xl bg-[#241A13] border border-[#3D2C1E] mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FBBF24] mb-1">
                  <Wine className="w-4 h-4 text-[#D97706]" />
                  <span>Le conseil du sommelier (Alexis)</span>
                </div>
                <p className="text-xs text-[#C7BAAC] italic">
                  {selectedItemForDetails.sommelierPairing}
                </p>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-[#2D2117]">
              <span className="text-xs text-[#8A7D71]">Préparé à la minute à Dozulé</span>
              <button
                onClick={() => setSelectedItemForDetails(null)}
                className="px-4 py-2 rounded-xl bg-[#2C2118] hover:bg-[#382B1F] text-xs font-medium text-white transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import { Sparkles, Heart, Award, Wine, Flame, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const HistorySection: React.FC = () => {
  return (
    <section id="histoire" className="py-24 bg-[#15120F] relative overflow-hidden border-t border-[#29211A]">
      {/* Subtle background ambient warm glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#65A30D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D97706] font-semibold block mb-2">
            Simplicité & Goût du Fait Maison
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#FDFBF7] tracking-tight mb-4">
            Une Belle Crêperie de Village en Pays d’Auge
          </h2>
          <div className="w-16 h-0.5 bg-[#D97706] mx-auto mb-6" />
          <p className="text-[#B8ACA0] text-base sm:text-lg leading-relaxed font-light">
            Une adresse intimiste et conviviale à Dozulé, où le plaisir des bonnes choses et l’amour des produits normands se partagent à chaque tablée.
          </p>
        </div>

        {/* Story Narrative & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#D6CCC2]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#271E17] text-[#FBBF24] text-xs font-medium border border-[#443324]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Depuis 2016 à Dozulé</span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#FDFBF7] font-semibold leading-snug">
              L'histoire d'Alexis et Adeline : l'amour du bon produit et de l'accueil
            </h3>

            <p className="text-base sm:text-lg leading-relaxed font-light">
              Installés depuis 2016 au 71 Grande-Rue à Dozulé, <strong className="font-semibold text-[#FDFBF7]">Alexis et Adeline</strong> ont souhaité créer une crêperie de caractère, à la fois soignée, accessible et généreuse. Après avoir travaillé au sein d'une table étoilée renommée à Beuvron-en-Auge où ils ont acquis une grande rigueur, ils ont choisi d'ouvrir leur propre maison pour y proposer une cuisine sincère et sans prétention.
            </p>

            <p className="text-base leading-relaxed text-[#BDB0A4]">
              Ici, la carte fait la part belle aux recettes généreuses : nos galettes croustillantes sont préparées à partir de farine 100% sarrasin breton pur, et notre saumon est fumé au bois de hêtre par Alexis directement sur place. Adeline, passionnée de pâtisserie, élabore avec amour toutes nos glaces artisanales, nos coulis et caramels, sans oublier notre dessert signature, <em>La Pomme Confite</em>. Alexis, sommelier de métier, vous conseille avec plaisir des cidres fermiers et poirés de producteurs pour accompagner votre repas.
            </p>

            {/* Signature highlights pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C1713] border border-[#33271E]">
                <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm text-[#FDFBF7]">Saumon fumé maison</h4>
                  <p className="text-xs text-[#9E9084] mt-0.5">Fumé au bois de hêtre par Alexis dans notre fumoir.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C1713] border border-[#33271E]">
                <CheckCircle2 className="w-5 h-5 text-[#84CC16] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm text-[#FDFBF7]">Glaces & douceurs d'Adeline</h4>
                  <p className="text-xs text-[#9E9084] mt-0.5">Glaces artisanales turbinées sur place et sablés pur beurre.</p>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <blockquote className="p-5 rounded-2xl bg-gradient-to-r from-[#211A14] to-[#1C1611] border-l-4 border-[#D97706] italic text-[#E8DFD8] text-sm sm:text-base">
              « Nous voulions créer à Dozulé un endroit chaleureux où l'on se sent bien : de bonnes galettes bien garnies, une bolée de bon cidre fermier et un moment gourmand et simple à partager. »
              <footer className="mt-2 text-xs uppercase tracking-wider not-italic text-[#F59E0B] font-medium font-sans-body">
                — Adeline & Alexis
              </footer>
            </blockquote>
          </div>

          {/* Image & Signature Card Column */}
          <div className="lg:col-span-5 relative">
            {/* Atmospheric photo frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#3E3024] shadow-2xl shadow-black/80 group">
              <img
                src="./images/pomme-confite.jpg"
                alt="Dessert signature La Pomme Confite"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110F0D] via-[#110F0D]/30 to-transparent" />

              {/* Floating dessert signature badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#171310]/90 backdrop-blur-md border border-[#48372A] shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#F59E0B] font-semibold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#D97706]" />
                    Le Dessert Signature
                  </span>
                  <span className="font-serif-display text-lg font-bold text-[#FDFBF7]">9,80 €</span>
                </div>
                <h4 className="font-serif-display text-xl font-bold text-[#FDFBF7] mb-1">
                  La Pomme Confite
                </h4>
                <p className="text-xs text-[#C4B7AA] leading-relaxed">
                  Pomme normande fondante lentement confite au caramel, sablé breton croustillant pur beurre et glace vanille faite maison par Adeline.
                </p>
              </div>
            </div>

            {/* Decorative corner tag */}
            <div className="absolute -top-4 -right-4 bg-[#D97706] text-white p-3 rounded-2xl shadow-lg border border-amber-300/30 hidden sm:flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Tout Fait Maison</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#191410] border border-[#30251C] hover:border-[#D97706]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#2A1E14] flex items-center justify-center text-[#D97706] mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-serif-display text-lg font-bold text-[#FDFBF7] mb-2">
              100% Sarrasin Breton
            </h4>
            <p className="text-xs text-[#A89A8E] leading-relaxed">
              Farine pure de blé noir sans gluten, tournée à la commande au billig pour des galettes croustillantes et fondantes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#191410] border border-[#30251C] hover:border-[#D97706]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#2A1E14] flex items-center justify-center text-[#F59E0B] mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h4 className="font-serif-display text-lg font-bold text-[#FDFBF7] mb-2">
              Saumon Fumé Maison
            </h4>
            <p className="text-xs text-[#A89A8E] leading-relaxed">
              Fumé au bois de hêtre sur place par Alexis : une chair fondante, douce et délicatement parfumée.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#191410] border border-[#30251C] hover:border-[#D97706]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#2A1E14] flex items-center justify-center text-[#84CC16] mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-serif-display text-lg font-bold text-[#FDFBF7] mb-2">
              Pâtisserie & Glaces Maison
            </h4>
            <p className="text-xs text-[#A89A8E] leading-relaxed">
              Adeline confectionne elle-même les glaces artisanales, le caramel au beurre salé et les desserts gourmands de la maison.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#191410] border border-[#30251C] hover:border-[#D97706]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#2A1E14] flex items-center justify-center text-[#EAB308] mb-4 group-hover:scale-110 transition-transform">
              <Wine className="w-6 h-6" />
            </div>
            <h4 className="font-serif-display text-lg font-bold text-[#FDFBF7] mb-2">
              Cidres de Terroir
            </h4>
            <p className="text-xs text-[#A89A8E] leading-relaxed">
              Sommelier de formation, Alexis déniche de superbes cidres fermiers et poirés de producteurs locaux pour des accords parfaits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

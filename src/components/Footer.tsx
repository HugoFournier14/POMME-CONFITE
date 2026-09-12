import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Navigation,
  Shield,
  Heart,
  ChevronRight,
  Share2
} from 'lucide-react';
import { RESTAURANT_INFO, OPENING_HOURS, getRestaurantCurrentStatus } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const currentDayIndex = new Date().getDay();
  const currentStatus = getRestaurantCurrentStatus();

  return (
    <footer id="horaires" className="bg-[#0D0B09] border-t-2 border-[#291F17] text-[#E0D5CC] pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#251B14]">
          {/* Col 1: Identity & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D97706] to-[#78350F] flex items-center justify-center border border-amber-400/30 text-white font-serif-display font-bold text-lg">
                🍎
              </div>
              <div>
                <span className="font-serif-display text-2xl font-bold text-[#FDFBF7] tracking-wide block">
                  La Pomme Confite
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-medium block">
                  Dozulé • Calvados • Normandie
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89A8E] leading-relaxed font-light">
              Crêperie artisanale et conviviale au cœur du village de Dozulé en Pays d’Auge. Galettes 100% sarrasin breton sans gluten, crêpes gourmandes, saumon fumé maison, glaces artisanales et notre dessert signature La Pomme Confite.
            </p>

            {/* Current Open Status Badge */}
            <div
              className={`p-3.5 rounded-2xl border flex items-center gap-3 ${
                currentStatus.isOpenNow
                  ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
                  : 'bg-[#1C1612] border-[#382B20] text-[#D1C2B4]'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full shrink-0 ${
                  currentStatus.isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-500'
                }`}
              />
              <div className="text-xs">
                <span className="font-semibold block">{currentStatus.statusMessage}</span>
                <span className="text-[11px] opacity-80">{currentStatus.nextOpeningMessage}</span>
              </div>
            </div>

            {/* Social & direct link */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#1A1410] hover:bg-[#2A2019] border border-[#33261C] hover:border-[#D97706] text-xs text-[#E6DED5] hover:text-[#FBBF24] transition-all flex items-center gap-2"
                aria-label="Rejoignez-nous sur Facebook"
              >
                <Share2 className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Facebook Officiel</span>
              </a>
            </div>
          </div>

          {/* Col 2: Opening Hours Table (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="font-serif-display text-xl font-bold text-[#FDFBF7] mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D97706]" />
              <span>Horaires d'Ouverture</span>
            </h3>

            <div className="rounded-2xl bg-[#14100D] border border-[#2B2017] divide-y divide-[#221811] text-xs">
              {OPENING_HOURS.map((schedule) => {
                const isToday = schedule.dayIndex === currentDayIndex;
                return (
                  <div
                    key={schedule.dayName}
                    className={`p-2.5 sm:px-3.5 flex items-center justify-between transition-colors ${
                      isToday ? 'bg-[#291F17] font-semibold text-[#FBBF24]' : 'text-[#BFB1A4]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-16">{schedule.dayName}</span>
                      {isToday && (
                        <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#D97706] text-white">
                          Aujourd’hui
                        </span>
                      )}
                    </div>
                    <div>
                      {schedule.isOpen ? (
                        <div className="text-right">
                          <span className="block">{schedule.lunch}</span>
                          {schedule.dinner && <span className="block text-[11px] opacity-85">{schedule.dinner}</span>}
                          {!schedule.dinner && <span className="block text-[10px] text-[#7A6D61] italic">Fermé le soir</span>}
                        </div>
                      ) : (
                        <span className="text-red-400 font-medium italic">Fermeture hebdomadaire</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <span className="text-[11px] text-[#7A6D61] block mt-2">
              * Horaires indicatifs. Réservation vivement recommandée pour le confort de votre accueil.
            </span>
          </div>

          {/* Col 3: Coordinates & Access (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif-display text-xl font-bold text-[#FDFBF7] mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D97706]" />
              <span>Nous Trouver à Dozulé</span>
            </h3>

            {/* Address Card */}
            <div className="p-4 rounded-2xl bg-[#14100D] border border-[#2B2017] space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <div className="text-xs text-[#D6CCC2]">
                  <strong className="block text-sm text-[#FDFBF7] font-medium">
                    {RESTAURANT_INFO.address}
                  </strong>
                  <span>{RESTAURANT_INFO.postalCode} {RESTAURANT_INFO.city}</span>
                  <span className="block text-[#8F8175] text-[11px] mt-0.5">
                    Au cœur du bourg commerçant • Parking gratuit à proximité
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#241A13]">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="text-xs text-[#FDFBF7] hover:text-[#FBBF24] font-medium"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#241A13]">
                <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="text-xs text-[#D6CCC2] hover:text-[#FBBF24] truncate"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>

            {/* Direct Itinerary button */}
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#221A14] hover:bg-[#2E2219] text-[#FDFBF7] hover:text-[#FBBF24] border border-[#3E2E20] hover:border-[#D97706] text-xs font-semibold flex items-center justify-center gap-2 transition-all group"
            >
              <Navigation className="w-4 h-4 text-[#D97706] group-hover:rotate-45 transition-transform" />
              <span>Ouvrir l'itinéraire GPS (Google Maps)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <div className="text-[11px] text-[#786B5F] leading-snug">
              📍 Situé à 15 minutes des plages de Cabourg et Dives-sur-Mer, et à 10 minutes du village classé de Beuvron-en-Auge.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6D61]">
          <div>
            © {new Date().getFullYear()} La Pomme Confite — Crêperie artisanale & chaleureuse à Dozulé. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-[#FBBF24] transition-colors underline cursor-pointer"
            >
              Mentions Légales & Infos
            </button>
            <span>•</span>
            <span>Alexis & Adeline</span>
          </div>
        </div>
      </div>

      {/* Legal Modal */}
      {legalModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLegalModalOpen(false)}
        >
          <div
            className="bg-[#181310] border border-[#3A2C1F] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl text-left relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModalOpen(false)}
              className="absolute top-4 right-4 text-[#998B7D] hover:text-white p-2 rounded-full hover:bg-[#2A2018]"
              aria-label="Fermer"
            >
              ✕
            </button>

            <h3 className="font-serif-display text-2xl font-bold text-[#FDFBF7] mb-4">
              Mentions Légales & Informations
            </h3>

            <div className="space-y-4 text-xs text-[#B8ACA0] leading-relaxed">
              <div>
                <strong className="text-white block mb-1">Établissement</strong>
                La Pomme Confite — SARL / Exploitation artisanale<br />
                71 Grande-Rue, 14430 Dozulé (Calvados, Normandie)<br />
                Téléphone : 02 31 79 31 31<br />
                Email : lapommeconfite@orange.fr
              </div>

              <div>
                <strong className="text-white block mb-1">Responsables de publication</strong>
                Alexis & Adeline — Maîtres Crêpiers & Restaurateurs
              </div>

              <div>
                <strong className="text-white block mb-1">Réservations en ligne</strong>
                Le formulaire présent sur ce site constitue une demande d'information et de pré-réservation. Il n'entraîne aucun débit bancaire. La réservation n'est définitive qu'après confirmation explicite par l'établissement par téléphone ou par e-mail.
              </div>

              <div>
                <strong className="text-white block mb-1">Allergènes & Produits</strong>
                Conformément à la réglementation européenne, la liste des allergènes à déclaration obligatoire est tenue à votre entière disposition en salle. Nos galettes de blé noir sont préparées à partir de 100% de farine de sarrasin breton sans gluten.
              </div>

              <div>
                <strong className="text-white block mb-1">Protection des données</strong>
                Les coordonnées transmises lors de votre demande de réservation sont uniquement utilisées pour la gestion de votre table et ne sont jamais cédées à des tiers.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2E2218] text-right">
              <button
                onClick={() => setLegalModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#2A1F17] hover:bg-[#382A1E] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

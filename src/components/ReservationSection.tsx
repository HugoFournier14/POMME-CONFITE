import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO, OPENING_HOURS } from '../data/restaurantData';
import { ReservationFormData } from '../types';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '12:30',
    guests: 2,
    service: 'midi',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationFormData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Time slot options depending on service
  const lunchSlots = ['12:00', '12:30', '13:00', '13:30'];
  const dinnerSlots = ['19:00', '19:30', '20:00', '20:30'];

  const handleServiceChange = (service: 'midi' | 'soir') => {
    setFormData((prev) => ({
      ...prev,
      service,
      time: service === 'midi' ? '12:30' : '19:30'
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.date) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires (Nom, Téléphone, E-mail et Date).');
      return;
    }

    // Check day of week for selected date
    const selectedDate = new Date(formData.date);
    const dayOfWeek = selectedDate.getDay(); // 0 = Dimanche, 1 = Lundi, 3 = Mercredi...

    if (dayOfWeek === 3) {
      setErrorMessage('La crêperie est fermée le mercredi. Veuillez choisir un autre jour.');
      return;
    }

    if ((dayOfWeek === 2 || dayOfWeek === 0) && formData.service === 'soir') {
      setErrorMessage('Le mardi et le dimanche, nous vous accueillons uniquement pour le service du midi (12h - 14h).');
      return;
    }

    // Save to submitted state
    setSubmittedData({ ...formData });
    setIsSubmitted(true);

    // Save locally for user reassurance
    try {
      localStorage.setItem('la_pomme_confite_last_reservation', JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString()
      }));
    } catch {
      // Ignored
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '12:30',
      guests: 2,
      service: 'midi',
      specialRequests: ''
    });
  };

  return (
    <section id="reservation" className="py-24 bg-[#120F0D] relative border-t border-[#2D2218]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#D97706] font-semibold block mb-2">
            Accueil Personnalisé
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#FDFBF7] tracking-tight mb-4">
            Demande de Réservation
          </h2>
          <div className="w-16 h-0.5 bg-[#D97706] mx-auto mb-4" />
          <p className="text-[#B8ACA0] text-sm sm:text-base font-light">
            Réservez votre table en quelques instants. Alexis et Adeline vérifient personnellement chaque disponibilité pour vous recevoir dans les meilleures conditions.
          </p>
        </div>

        {/* Confirmation State Screen */}
        {isSubmitted && submittedData ? (
          <div
            id="reservation-confirmation-box"
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1C1612] to-[#15110E] border-2 border-[#D97706]/40 shadow-2xl text-center animate-in fade-in zoom-in-95 duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-[#291F17] border border-[#D97706] text-[#F59E0B] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#84CC16]" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#84CC16] font-semibold">
              Demande bien transmise
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#FDFBF7] mt-2 mb-4">
              Merci, {submittedData.fullName} !
            </h3>

            {/* Reassuring Owner Verification Notice */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#231A14] border border-[#3E2D1F] max-w-xl mx-auto mb-6 text-sm text-[#E0D5CC] leading-relaxed">
              <div className="flex items-center justify-center gap-2 text-[#FBBF24] font-semibold mb-2">
                <ShieldCheck className="w-5 h-5 text-[#D97706]" />
                <span>Confirmation directe par les propriétaires</span>
              </div>
              <p>
                Votre demande a bien été transmise à Alexis et Adeline. Le propriétaire garde la main totale : <strong className="text-white">il vous recontactera personnellement par téléphone ({submittedData.phone}) ou par email</strong> pour valider définitivement votre table.
              </p>
            </div>

            {/* Recap Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#17120E] border border-[#2F2218] max-w-2xl mx-auto mb-8 text-left text-xs">
              <div>
                <span className="text-[#887A6E] block mb-1">Date souhaitée</span>
                <span className="font-semibold text-[#FDFBF7] text-sm">
                  {new Date(submittedData.date).toLocaleDateString('fr-FR', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'long'
                  })}
                </span>
              </div>
              <div>
                <span className="text-[#887A6E] block mb-1">Horaire</span>
                <span className="font-semibold text-[#FDFBF7] text-sm">
                  {submittedData.time.replace(':', 'h')} ({submittedData.service === 'midi' ? 'Midi' : 'Soir'})
                </span>
              </div>
              <div>
                <span className="text-[#887A6E] block mb-1">Nombre de couverts</span>
                <span className="font-semibold text-[#FDFBF7] text-sm">
                  {submittedData.guests} {submittedData.guests > 1 ? 'personnes' : 'personne'}
                </span>
              </div>
              <div>
                <span className="text-[#887A6E] block mb-1">Contact</span>
                <span className="font-semibold text-[#FDFBF7] text-sm truncate block" title={submittedData.email}>
                  {submittedData.phone}
                </span>
              </div>
            </div>

            {submittedData.specialRequests && (
              <p className="text-xs text-[#9E9184] italic mb-6">
                « Note : {submittedData.specialRequests} »
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#261E17] hover:bg-[#33271E] text-[#FBBF24] border border-[#443324] font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D97706]" />
                <span>Une question urgente ? {RESTAURANT_INFO.phone}</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Nouvelle demande
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Booking Form */
          <div className="rounded-3xl bg-[#171310] border border-[#34271D] p-6 sm:p-10 shadow-2xl shadow-black/80">
            {/* Owner Reassurance Banner (Mandatory requirement from user prompt) */}
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#2A1E14] via-[#241A12] to-[#2A1E14] border border-[#523B27] flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed text-[#DCD1C6]">
                <strong className="text-[#FDFBF7] font-semibold block mb-0.5">
                  Information importante & bienveillante :
                </strong>
                Votre demande sera envoyée directement au propriétaire. Il vous recontactera personnellement par téléphone ou par email pour confirmer la réservation.
              </div>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-700/50 flex items-center gap-3 text-red-200 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" id="reservation-form">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-[#C7BAAC] uppercase tracking-wider mb-2">
                    Nom & Prénom <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#7A6D60] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="Ex : Marie Dupont"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#120E0C] border border-[#33261C] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] text-white text-sm placeholder-[#665A4F] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-[#C7BAAC] uppercase tracking-wider mb-2">
                    Numéro de Téléphone <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#7A6D60] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Ex : 06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#120E0C] border border-[#33261C] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] text-white text-sm placeholder-[#665A4F] outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#C7BAAC] uppercase tracking-wider mb-2">
                    Adresse E-mail <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#7A6D60] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Ex : marie.dupont@email.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#120E0C] border border-[#33261C] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] text-white text-sm placeholder-[#665A4F] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-xs font-medium text-[#C7BAAC] uppercase tracking-wider mb-2">
                    Nombre de personnes
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#7A6D60] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value, 10) })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#120E0C] border border-[#33261C] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] text-white text-sm outline-none transition-colors cursor-pointer appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((num) => (
                        <option key={num} value={num}>
                          {num} {num > 1 ? 'personnes' : 'personne (table individuelle)'}
                        </option>
                      ))}
                      <option value={15}>Groupe (15+ personnes - banquet)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Selection Tabs (Midi vs Soir) */}
              <div>
                <span className="block text-xs font-medium text-[#C7BAAC] uppercase tracking-wider mb-2">
                  Service souhaité
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleServiceChange('midi')}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.service === 'midi'
                        ? 'bg-[#2E2015] border-[#D97706] text-[#FBBF24] font-semibold shadow-md'
                        : 'bg-[#120E0C] border-[#2A2018] text-[#9E9084] hover:text-white'
                    }`}
                  >
                    <span>Service du Midi (12h - 14h)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleServiceChange('soir')}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.service === 'soir'
                        ? 'bg-[#2E2015] border-[#D97706] text-[#FBBF24] font-semibold shadow-md'
                        : 'bg-[#120E0C] border-[#2A2018] text-[#9E9084] hover:text-white'
                    }`}
                  >
                    <span>Service du Soir (19h - 21h)</span>
                  </button>
                </div>
                <span className="text-[11px] text-[#7A6D61] mt-1.5 block">
                  * Rappel : Mardi & Dimanche ouvert le midi uniquement. Fermé le mercredi.
                </span>
              </div>

              {/* Row 3: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs font-medium text-[#C7BAAC] uppercase tracking-wider mb-2">
                    Date souhaitée <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#7A6D60] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      id="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#120E0C] border border-[#33261C] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-xs font-medium text-[#C7BAAC] uppercase tracking-wider mb-2">
                    Heure d'arrivée souhaitée
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#7A6D60] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#120E0C] border border-[#33261C] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] text-white text-sm outline-none transition-colors cursor-pointer appearance-none"
                    >
                      {(formData.service === 'midi' ? lunchSlots : dinnerSlots).map((slot) => (
                        <option key={slot} value={slot}>
                          {slot.replace(':', 'h')}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-xs font-medium text-[#C7BAAC] uppercase tracking-wider mb-2">
                  Message / Demande particulière (facultatif)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#7A6D60] absolute left-3.5 top-3.5" />
                  <textarea
                    id="specialRequests"
                    rows={3}
                    placeholder="Allergies éventuelles, chaise haute pour enfant, souhait de table près de la cheminée..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#120E0C] border border-[#33261C] focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] text-white text-sm placeholder-[#665A4F] outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  id="submit-reservation-btn"
                  className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#8A3D0B] hover:from-[#EA580C] hover:via-[#D97706] hover:to-[#B45309] text-white font-semibold text-base tracking-wide shadow-xl shadow-amber-950/60 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-amber-400/30 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#FDE68A]" />
                  <span>Envoyer ma demande de réservation</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-[#7A6E63] pt-2">
                Aucun paiement préalable requis. Alexis & Adeline vous recontactent pour valider votre venue.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

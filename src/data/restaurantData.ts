import { MenuCategory, MenuItem, GalleryPhoto, DayHours } from '../types';

export const RESTAURANT_INFO = {
  name: 'La Pomme Confite',
  tagline: "Galettes généreuses, crêpes faites maison & desserts d'artisan en Pays d'Auge",
  address: '71 Grande-Rue',
  postalCode: '14430',
  city: 'Dozulé',
  region: 'Calvados, Normandie',
  phone: '02 31 79 31 31',
  phoneClean: '0231793131',
  email: 'lapommeconfite@orange.fr',
  coordinates: {
    lat: 49.2319,
    lng: -0.0487
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=La+Pomme+Confite+71+Grande-Rue+14430+Dozule',
  facebookUrl: 'https://www.facebook.com/lapommeconfitedozule/',
  establishedYear: 2016,
  founders: {
    alexis: 'Alexis, sommelier passionné par les bons cidres et poirés de terroir',
    adeline: 'Adeline, pâtissière passionnée passée par une table étoilée en Pays d’Auge'
  }
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'galettes',
    title: 'Galettes de Sarrasin',
    subtitle: '100% Farine de sarrasin breton & sans gluten',
    description: 'Tournées à la commande sur billig traditionnel, croustillantes et bien beurrées, garnies de bons produits du terroir normand.',
    iconName: 'Wheat'
  },
  {
    id: 'specialites',
    title: 'Spécialités de la Maison',
    subtitle: 'Recettes gourmandes & généreuses',
    description: 'Nos recettes phares préparées avec notre saumon fumé maison, les bons fromages AOP de chez nous (Camembert, Livarot, Pont-l’Évêque) et des charcuteries artisanales.',
    iconName: 'Award'
  },
  {
    id: 'crepes',
    title: 'Crêpes Sucrées',
    subtitle: 'Farine de froment & beurre de Normandie',
    description: 'Fines, moelleuses et dorées à souhait. Garnitures faites maison : caramel au beurre salé coulant, chocolat fondu, flambages au Calvados.',
    iconName: 'Sparkles'
  },
  {
    id: 'desserts',
    title: 'Desserts d’Adeline',
    subtitle: 'Douceurs maison & notre Pomme Confite',
    description: 'Adeline réalise toutes les glaces artisanales, les sablés pur beurre et notre fameux dessert signature La Pomme Confite.',
    iconName: 'Heart'
  },
  {
    id: 'boissons',
    title: 'Cidres & Boissons',
    subtitle: 'La sélection d’Alexis',
    description: 'Cidres fermiers du Pays d’Auge, poirés et jus de pomme artisanaux dénichés avec passion par Alexis pour accompagner chaque galette.',
    iconName: 'Wine'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Galettes salées
  {
    id: 'gal-1',
    category: 'galettes',
    name: 'La Complète Normande',
    description: 'Jambon blanc de pays découenné, emmental râpé et œuf de ferme coulant au cœur.',
    price: 11.50,
    isLocal: true,
    isHomemade: true,
    sommelierPairing: 'Cidre Fermier Brut AOP Pays d’Auge'
  },
  {
    id: 'gal-2',
    category: 'galettes',
    name: 'La Rustique du Pays d’Auge',
    description: 'Véritable andouille de Vire poêlée, confit d’oignons au cidre doux, crème fraîche d’Isigny et pointe de moutarde à l’ancienne.',
    price: 14.20,
    isSignature: true,
    isLocal: true,
    isHomemade: true,
    sommelierPairing: 'Cidre Extra-Brut fermier'
  },
  {
    id: 'gal-3',
    category: 'galettes',
    name: 'La Vallée de la Dives',
    description: 'Camembert au lait cru de Normandie fondu, cerneaux de noix au miel de fleurs, fines tranches de pomme et salade verte.',
    price: 13.90,
    isVegetarian: true,
    isLocal: true,
    isHomemade: true,
    sommelierPairing: 'Poiré fermier de Domfront'
  },
  {
    id: 'gal-4',
    category: 'galettes',
    name: 'La Forestière Gourmande',
    description: 'Poêlée de champignons de Paris et pleurotes au persil, échalotes douces, emmental et pointe d’ail.',
    price: 13.00,
    isVegetarian: true,
    isHomemade: true,
    sommelierPairing: 'Cidre demi-sec du verger'
  },

  // Spécialités
  {
    id: 'spec-1',
    category: 'specialites',
    name: 'Le Saumon Fumé Maison par Alexis',
    description: 'Saumon fumé doucement au bois de hêtre par Alexis dans notre fumoir, crème montée au citron, aneth fraîche et petite touche de sarrasin grillé.',
    price: 16.80,
    isSignature: true,
    isHomemade: true,
    sommelierPairing: 'Cidre brut artisanal - Domaine Dupont'
  },
  {
    id: 'spec-2',
    category: 'specialites',
    name: 'L’Augeoise aux Trois Fromages AOP',
    description: 'Alliance fondante de Livarot, Pont-l’Évêque et Camembert fermier au lait cru, poitrine fumée grillée et compotée de pommes reinettes.',
    price: 16.50,
    isLocal: true,
    isHomemade: true,
    sommelierPairing: 'Cidre brut traditionnel'
  },
  {
    id: 'spec-3',
    category: 'specialites',
    name: 'La Terre & Mer de Normandie',
    description: 'Noix de Saint-Jacques justes snackées au beurre demi-sel, fondue de poireaux à la crème d’Isigny et réduction au cidre blanc.',
    price: 18.50,
    isSignature: true,
    isLocal: true,
    isHomemade: true,
    sommelierPairing: 'Cidre brut fermier frais'
  },

  // Crêpes Sucrées
  {
    id: 'crp-1',
    category: 'crepes',
    name: 'La Beurre Sucre & Fleur de Sel',
    description: 'Crêpe fine dorée au bon beurre demi-sel d’Isigny et sucre de canne.',
    price: 4.80,
    isHomemade: true,
    sommelierPairing: 'Cidre doux fruité'
  },
  {
    id: 'crp-2',
    category: 'crepes',
    name: 'Le Caramel au Beurre Salé Maison',
    description: 'Généreusement nappée de notre caramel au beurre salé et fleur de sel fait maison par Adeline.',
    price: 6.50,
    isSignature: true,
    isHomemade: true,
    sommelierPairing: 'Cidre demi-sec AOP'
  },
  {
    id: 'crp-3',
    category: 'crepes',
    name: 'La Choco-Praliné d’Adeline',
    description: 'Chocolat noir fondu maison, praliné de noisettes torréfiées préparé sur place et amandes effilées croustillantes.',
    price: 7.20,
    isHomemade: true,
    sommelierPairing: 'Poiré fermier de Normandie'
  },
  {
    id: 'crp-4',
    category: 'crepes',
    name: 'La Flambée au Calvados',
    description: 'Pommes fondantes poêlées au beurre, flambées au Calvados du Pays d’Auge.',
    price: 8.90,
    isSignature: true,
    isLocal: true,
    isHomemade: true,
    sommelierPairing: 'Un verre de Pommeau de Normandie ou cidre brut'
  },

  // Desserts d'Adeline
  {
    id: 'des-1',
    category: 'desserts',
    name: 'La Pomme Confite Signature',
    description: 'Une belle pomme normande lentement confite au four dans son caramel ambré, sablé breton pur beurre croustillant et boule de glace vanille faite maison par Adeline.',
    price: 9.80,
    isSignature: true,
    isHomemade: true,
    sommelierPairing: 'Pommeau de Normandie AOC bien frais'
  },
  {
    id: 'des-2',
    category: 'desserts',
    name: 'Le Sablé Normand aux Poires Rôties',
    description: 'Sablé breton aux noisettes, poires fondantes revenues au beurre doux et quenelle de glace artisanale.',
    price: 8.50,
    isHomemade: true,
    sommelierPairing: 'Poiré fermier de Domfront'
  },
  {
    id: 'des-3',
    category: 'desserts',
    name: 'La Coupe Glacée Artisanale 3 Boules',
    description: 'Glaces et sorbets 100% faits maison par Adeline : Vanille, Caramel au beurre salé, Sarrasin grillé, Chocolat noir, Sorbet pomme normande ou fruits rouges.',
    price: 7.50,
    isHomemade: true
  },
  {
    id: 'des-4',
    category: 'desserts',
    name: 'La Teurgoule Traditionnelle',
    description: 'Le fameux riz au lait normand cuit longuement en jatte au four doux avec cannelle et lait entier de ferme.',
    price: 7.80,
    isLocal: true,
    isHomemade: true,
    sommelierPairing: 'Cidre doux du Pays d’Auge'
  },

  // Boissons & Cave d'Alexis
  {
    id: 'boi-1',
    category: 'boissons',
    name: 'Bolée de Cidre Artisanal Pression',
    description: 'Cidre fermier brut bien frais, issu de producteurs normands locaux (au verre 25cl ou en pichet).',
    price: 3.50,
    isLocal: true
  },
  {
    id: 'boi-2',
    category: 'boissons',
    name: 'Cidre AOP Pays d’Auge Domaine Dupont (75cl)',
    description: 'Un cidre fermier remarquable, fruité et équilibré, compagnon idéal de vos galettes.',
    price: 14.00,
    isLocal: true
  },
  {
    id: 'boi-3',
    category: 'boissons',
    name: 'Sydre Argelette - Eric Bordelet (75cl)',
    description: 'Une cuvée d’exception issue de vieux pommiers du terroir normand. Finesse, fraîcheur et belle complexité.',
    price: 24.00,
    isSignature: true,
    isLocal: true
  },
  {
    id: 'boi-4',
    category: 'boissons',
    name: 'Poiré de Domfront AOP - Fermier (75cl)',
    description: 'Fines bulles naturelles, notes délicates de poire fraîche, très agréable et désaltérant.',
    price: 15.50,
    isLocal: true
  },
  {
    id: 'boi-5',
    category: 'boissons',
    name: 'Jus de Pommes Fermier Artisanal (33cl / 1L)',
    description: 'Pur jus pressé artisanalement en Normandie, sans sucres ajoutés.',
    price: 4.20,
    isLocal: true,
    isHomemade: true
  },
  {
    id: 'boi-6',
    category: 'boissons',
    name: 'Pommeau de Normandie AOC (verre 6cl)',
    description: 'L’apéritif traditionnel normand mêlant jus de pomme frais et jeune calvados.',
    price: 5.50,
    isLocal: true
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-signature-dessert',
    title: 'La Pomme Confite Signature',
    category: 'Dessert Maison',
    description: 'Pomme fondante confite au caramel, sablé breton pur beurre croustillant et glace vanille maison.',
    url: './images/pomme-confite.jpg'
  },
  {
    id: 'gal-galette-sarrasin',
    title: 'Galette de Sarrasin Croustillante',
    category: 'Nos Galettes',
    description: 'Farine de sarrasin breton pur, beurre demi-sel fondant et œuf de ferme.',
    url: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'gal-interieur-cosy',
    title: 'L’Intérieur Chaleureux & Convivial',
    category: 'Ambiance du Restaurant',
    description: 'Une salle intime et accueillante au cœur du bourg de Dozulé pour un moment simple et gourmand.',
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'gal-saumon-fume',
    title: 'Saumon Fumé par nos Soins',
    category: 'Fait Maison',
    description: 'Fumé au bois de hêtre par Alexis dans notre fumoir, servi avec notre crème fraîche citronnée.',
    url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'gal-cave-cidre',
    title: 'La Sélection de Cidres d’Alexis',
    category: 'Les Cidres',
    description: 'Bons cidres fermiers du Pays d’Auge et poirés de producteurs pour de savoureux accords.',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'gal-glaces-maison',
    title: 'Glaces Artisanales d’Adeline',
    category: 'Douceurs Maison',
    description: 'Turbinées sur place : vanille, caramel au beurre salé et sorbets de saison.',
    url: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'gal-terrasse-normande',
    title: 'Une Halte Gourmande à Dozulé',
    category: 'Notre Village',
    description: 'Une belle adresse de caractère en Pays d’Auge, à deux pas de Cabourg et Beuvron-en-Auge.',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85'
  }
];

export const OPENING_HOURS: DayHours[] = [
  { dayName: 'Lundi', shortName: 'Lun', dayIndex: 1, isOpen: true, lunch: '12h00 - 14h00', dinner: '19h00 - 21h00' },
  { dayName: 'Mardi', shortName: 'Mar', dayIndex: 2, isOpen: true, lunch: '12h00 - 14h00', dinner: null },
  { dayName: 'Mercredi', shortName: 'Mer', dayIndex: 3, isOpen: false, lunch: null, dinner: null },
  { dayName: 'Jeudi', shortName: 'Jeu', dayIndex: 4, isOpen: true, lunch: '12h00 - 14h00', dinner: '19h00 - 21h00' },
  { dayName: 'Vendredi', shortName: 'Ven', dayIndex: 5, isOpen: true, lunch: '12h00 - 14h00', dinner: '19h00 - 21h00' },
  { dayName: 'Samedi', shortName: 'Sam', dayIndex: 6, isOpen: true, lunch: '12h00 - 14h00', dinner: '19h00 - 21h00' },
  { dayName: 'Dimanche', shortName: 'Dim', dayIndex: 0, isOpen: true, lunch: '12h00 - 14h00', dinner: null },
];

export function getRestaurantCurrentStatus(): {
  isOpenNow: boolean;
  statusMessage: string;
  nextOpeningMessage: string;
} {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Dimanche, 1 = Lundi...
  const currentHour = now.getHours() + now.getMinutes() / 60;

  const todaySchedule = OPENING_HOURS.find(d => d.dayIndex === currentDay);

  if (!todaySchedule || !todaySchedule.isOpen) {
    return {
      isOpenNow: false,
      statusMessage: 'Fermé aujourd’hui (Mercredi)',
      nextOpeningMessage: 'Réouverture Jeudi à 12h00'
    };
  }

  // Lunch service: 12h00 to 14h00
  const isLunch = currentHour >= 12 && currentHour < 14;
  // Dinner service: 19h00 to 21h00
  const isDinner = todaySchedule.dinner !== null && currentHour >= 19 && currentHour < 21;

  if (isLunch) {
    return {
      isOpenNow: true,
      statusMessage: 'Ouvert actuellement (Service du midi)',
      nextOpeningMessage: 'Fermeture du midi à 14h00'
    };
  }

  if (isDinner) {
    return {
      isOpenNow: true,
      statusMessage: 'Ouvert actuellement (Service du soir)',
      nextOpeningMessage: 'Fermeture du service à 21h00'
    };
  }

  if (currentHour < 12) {
    return {
      isOpenNow: false,
      statusMessage: 'Fermé actuellement',
      nextOpeningMessage: 'Ouverture du midi à 12h00'
    };
  }

  if (currentHour >= 14 && currentHour < 19 && todaySchedule.dinner) {
    return {
      isOpenNow: false,
      statusMessage: 'Entre deux services',
      nextOpeningMessage: 'Réouverture pour le dîner à 19h00'
    };
  }

  return {
    isOpenNow: false,
    statusMessage: 'Fermé pour la nuit',
    nextOpeningMessage: 'Prochain service demain à 12h00'
  };
}

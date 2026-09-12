export type MenuCategoryId = 'galettes' | 'crepes' | 'specialites' | 'desserts' | 'boissons';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryId;
  isSignature?: boolean;
  isVegetarian?: boolean;
  isLocal?: boolean;
  isHomemade?: boolean;
  sommelierPairing?: string;
  allergens?: string[];
  imageUrl?: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  aspectRatio?: string;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  service: 'midi' | 'soir';
  specialRequests: string;
}

export interface DayHours {
  dayName: string;
  shortName: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday...
  isOpen: boolean;
  lunch: string | null;
  dinner: string | null;
}

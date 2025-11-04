
export enum Screen {
  Home,
  Welcome,
  Problem,
  Market,
  Traction,
  Ask,
  Generating,
  DeckEditor,
  Dashboard,
  Profile,
  Events,
  EventDetail,
  MyEvents,
  Perks,
  Presentation,
}

export type TemplateID = 'startup' | 'corporate' | 'creative';

export interface DeckData {
  problem: string;
  solution: string;
  businessModel: string;
  targetAudience: string;
  traction: string;
  teamMembers: string;
  fundingAmount: string;
  useOfFunds: string;
  companyName: string;
  template: TemplateID;
}

export interface Slide {
  title: string;
  content: string[];
  image?: string; // base64 string
  imageLoading?: boolean;
}

export interface Deck {
  id: string;
  name: string;
  slides: Slide[];
  lastEdited: number; // timestamp
  template?: TemplateID;
  isPublic?: boolean;
  publicId?: string | null;
  publicSince?: number | null;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  registeredCount: number;
  totalSpots: number;
  category: 'Hackathon' | 'Workshop' | 'Conference' | 'Networking';
  isVirtual?: boolean;
  agenda?: { time: string; topic: string; speaker?: string }[];
  speakers?: { name: string; title: string; image: string }[];
  status: 'Upcoming' | 'Past' | 'In Progress';
  registered?: boolean;
}

export interface Perk {
  id: string;
  partner: string;
  logo: string;
  description: string;
  offer: string;
  category: string;
  users: number;
  rating: number;
  tag?: 'Featured' | 'Popular' | 'New';
}
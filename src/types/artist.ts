export interface Track {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  album: string;
  duration: string; // e.g. "3:45"
  audioUrl: string;
  coverUrl: string;
  releaseYear: number;
  genre: string;
  lyrics?: string;
  rating?: number;
  userRating?: number;
  isFavorite?: boolean;
}

export interface GearItem {
  category: 'Guitar' | 'Pedal' | 'Amp' | 'Vocal/Mic' | 'Synth/DAW' | 'Keys';
  name: string;
  description: string;
}

export interface SecretFact {
  id: string;
  title: string;
  category: 'Studio Secrets' | 'Unreleased Demos' | 'Gear & Setup' | 'Live Performance' | 'Songwriting Lore';
  content: string;
  sourceTag: string;
}

export interface Artist {
  id: string;
  name: string;
  role: string; // e.g. "R&B / Soul Singer-Songwriter"
  avatarUrl: string;
  coverBannerUrl: string;
  cardColor: string;
  bio: string;
  country: string;
  activeSince: string;
  genres: string[];
  topTracks: Track[];
  gearList: GearItem[];
  secretFacts: SecretFact[];
  rating: number; // Avg rating e.g. 4.9
  userRating?: number;
  isSaved?: boolean;
  totalStreams: string;
  monthlyListeners: string;
  quote: string;
}

export interface UserReview {
  id: string;
  artistId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  createdAt: string;
}

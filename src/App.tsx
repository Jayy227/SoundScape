import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarouselSection } from './components/HeroCarouselSection';
import { ArtistCatalog } from './components/ArtistCatalog';
import { ArtistDetailModal } from './components/ArtistDetailModal';
import { MiniPlayer } from './components/MiniPlayer';
import { AIAssistantVault } from './components/AIAssistantVault';
import { SavedFavorites } from './components/SavedFavorites';
import { RatingModal } from './components/RatingModal';
import { INITIAL_ARTISTS, INITIAL_REVIEWS } from './data/artistsData';
import type { Artist, Track, UserReview } from './types/artist';

export function App() {
  const [artists, setArtists] = useState<Artist[]>(() => {
    const saved = localStorage.getItem('aura_artists');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing saved artists:', e);
      }
    }
    return INITIAL_ARTISTS;
  });

  const [reviews, setReviews] = useState<UserReview[]>(() => {
    const saved = localStorage.getItem('aura_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing saved reviews:', e);
      }
    }
    return INITIAL_REVIEWS;
  });

  const [activeTab, setActiveTab] = useState<'explore' | 'artists' | 'ai-vault' | 'saved' | 'player'>('explore');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArtistModal, setSelectedArtistModal] = useState<Artist | null>(null);
  const [ratingModalArtist, setRatingModalArtist] = useState<Artist | null>(null);
  const [selectedArtistForAI, setSelectedArtistForAI] = useState<Artist | null>(null);

  const [currentTrack, setCurrentTrack] = useState<Track | null>(() => {
    return INITIAL_ARTISTS[0].topTracks[0] || null;
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('aura_artists', JSON.stringify(artists));
  }, [artists]);

  useEffect(() => {
    localStorage.setItem('aura_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handlePlayTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const allTracks = artists.flatMap((a) => a.topTracks);

  const handleNextTrack = () => {
    if (!currentTrack || allTracks.length === 0) return;
    const currentIndex = allTracks.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % allTracks.length;
    setCurrentTrack(allTracks[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    if (!currentTrack || allTracks.length === 0) return;
    const currentIndex = allTracks.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + allTracks.length) % allTracks.length;
    setCurrentTrack(allTracks[prevIndex]);
    setIsPlaying(true);
  };

  const handleToggleSaveArtist = (artistId: string) => {
    setArtists((prev) =>
      prev.map((a) => (a.id === artistId ? { ...a, isSaved: !a.isSaved } : a))
    );
    if (selectedArtistModal && selectedArtistModal.id === artistId) {
      setSelectedArtistModal((prev) => (prev ? { ...prev, isSaved: !prev.isSaved } : null));
    }
  };

  const handleSubmitRating = (artistId: string, rating: number) => {
    setArtists((prev) =>
      prev.map((a) => (a.id === artistId ? { ...a, userRating: rating } : a))
    );
  };

  const handleAddReview = (newRev: Omit<UserReview, 'id' | 'createdAt'>) => {
    const rev: UserReview = {
      ...newRev,
      id: `rev-${Date.now()}`,
      createdAt: 'Baru Saja',
    };
    setReviews((prev) => [rev, ...prev]);
  };

  const handleOpenAIVaultForArtist = (artist: Artist) => {
    setSelectedArtistForAI(artist);
    setActiveTab('ai-vault');
  };

  const filteredArtists = artists.filter((a) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      a.name.toLowerCase().includes(q) ||
      a.role.toLowerCase().includes(q) ||
      a.genres.some((g) => g.toLowerCase().includes(q))
    );
  });

  const savedCount = artists.filter((a) => a.isSaved).length;

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans antialiased selection:bg-cyan-500 selection:text-black">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        savedCount={savedCount}
      />

      <main className="w-full">
        {activeTab === 'explore' && (
          <HeroCarouselSection
            artists={filteredArtists}
            onSelectArtist={(artist) => setSelectedArtistModal(artist)}
            onPlayTrack={handlePlayTrack}
            onToggleSaveArtist={handleToggleSaveArtist}
            onOpenRatingModal={(artist) => setRatingModalArtist(artist)}
          />
        )}

        {activeTab === 'artists' && (
          <ArtistCatalog
            artists={filteredArtists}
            onSelectArtist={(artist) => setSelectedArtistModal(artist)}
            onPlayTrack={handlePlayTrack}
            onToggleSaveArtist={handleToggleSaveArtist}
            onOpenRatingModal={(artist) => setRatingModalArtist(artist)}
            onOpenAIVaultForArtist={handleOpenAIVaultForArtist}
          />
        )}

        {activeTab === 'ai-vault' && (
          <AIAssistantVault
            artists={artists}
            selectedArtistForAI={selectedArtistForAI}
          />
        )}

        {activeTab === 'saved' && (
          <SavedFavorites
            artists={artists}
            onSelectArtist={(artist) => setSelectedArtistModal(artist)}
            onPlayTrack={handlePlayTrack}
            onToggleSaveArtist={handleToggleSaveArtist}
          />
        )}
      </main>

      <MiniPlayer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onNextTrack={handleNextTrack}
        onPrevTrack={handlePrevTrack}
        recommendedTracks={allTracks.filter((t) => t.id !== currentTrack?.id)}
        onSelectTrack={handlePlayTrack}
      />

      <ArtistDetailModal
        artist={selectedArtistModal}
        onClose={() => setSelectedArtistModal(null)}
        onPlayTrack={handlePlayTrack}
        onToggleSaveArtist={handleToggleSaveArtist}
        onOpenRatingModal={(artist) => setRatingModalArtist(artist)}
        reviews={reviews}
        onAddReview={handleAddReview}
        onOpenAIVaultForArtist={handleOpenAIVaultForArtist}
      />

      <RatingModal
        artist={ratingModalArtist}
        onClose={() => setRatingModalArtist(null)}
        onSubmitRating={handleSubmitRating}
      />
    </div>
  );
}

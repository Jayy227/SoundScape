import React, { useState } from 'react';
import type { Artist, Track } from '../types/artist';
import { Star, Play, Heart, Bot, Music, Filter } from 'lucide-react';

interface ArtistCatalogProps {
  artists: Artist[];
  onSelectArtist: (artist: Artist) => void;
  onPlayTrack: (track: Track) => void;
  onToggleSaveArtist: (artistId: string) => void;
  onOpenRatingModal: (artist: Artist) => void;
  onOpenAIVaultForArtist: (artist: Artist) => void;
}

export const ArtistCatalog: React.FC<ArtistCatalogProps> = ({
  artists,
  onSelectArtist,
  onPlayTrack,
  onToggleSaveArtist,
  onOpenAIVaultForArtist,
}) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'name'>('rating');

  const genres = ['All', 'Neo-Soul', 'Alternative R&B', 'Indie Pop', 'Neo-Soul Guitar', 'Pop Ballad', 'Funk', 'Blues Rock'];

  const filteredArtists = artists
    .filter((a) => {
      if (selectedGenre === 'All') return true;
      return a.genres.some((g) => g.toLowerCase().includes(selectedGenre.toLowerCase()));
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 py-24 min-h-screen">
      <div className="p-8 bg-neutral-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            <Music className="w-3.5 h-3.5" />
            Katalog Artis Terkenal
          </div>
          <h2 className="text-3xl font-extrabold text-white">Temukan Artis & Musik Terbaik</h2>
          <p className="text-sm text-neutral-300 mt-1">
            Dengar info lagu, rincian gear studio, fakta rahasia AI, dan beri rating pengguna.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-neutral-950 border border-white/10 px-3 py-2 rounded-xl text-xs">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span className="text-neutral-400">Urutkan:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'name')}
              className="bg-transparent text-white font-bold focus:outline-none"
            >
              <option value="rating" className="bg-neutral-900">Rating Tertinggi</option>
              <option value="name" className="bg-neutral-900">Abjad (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setSelectedGenre(g)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              selectedGenre === g
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredArtists.map((artist) => (
          <div
            key={artist.id}
            onClick={() => onSelectArtist(artist)}
            className="group relative bg-neutral-900/80 border border-white/10 hover:border-cyan-500/50 rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img src={artist.avatarUrl} alt={artist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSaveArtist(artist.id);
                  }}
                  className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all ${
                    artist.isSaved ? 'bg-rose-500 text-white' : 'bg-black/40 text-neutral-300 hover:bg-black/70'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${artist.isSaved ? 'fill-current' : ''}`} />
                </button>

                <div className="absolute bottom-2.5 left-2.5">
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-[10px] font-semibold text-cyan-300 border border-cyan-500/30 rounded-full">
                    {artist.country}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">{artist.name}</h3>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{artist.rating}</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 truncate mt-0.5">{artist.role}</p>

              <div className="flex flex-wrap gap-1 mt-2.5">
                {artist.genres.map((gen, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-neutral-300">
                    {gen}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenAIVaultForArtist(artist);
                }}
                className="px-3 py-1.5 bg-fuchsia-950/80 hover:bg-fuchsia-900 border border-fuchsia-500/30 text-fuchsia-300 rounded-xl text-[11px] font-bold flex items-center gap-1 transition-all"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>AI Vault</span>
              </button>

              {artist.topTracks.length > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayTrack(artist.topTracks[0]);
                  }}
                  className="px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs rounded-xl flex items-center gap-1 shadow-md shadow-cyan-500/30 transition-all"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Putar</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

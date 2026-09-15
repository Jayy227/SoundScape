import React from 'react';
import type { Artist, Track } from '../types/artist';
import { Heart, Play, Star, Trash2 } from 'lucide-react';

interface SavedFavoritesProps {
  artists: Artist[];
  onSelectArtist: (artist: Artist) => void;
  onPlayTrack: (track: Track) => void;
  onToggleSaveArtist: (artistId: string) => void;
}

export const SavedFavorites: React.FC<SavedFavoritesProps> = ({
  artists,
  onSelectArtist,
  onPlayTrack,
  onToggleSaveArtist,
}) => {
  const savedArtists = artists.filter((a) => a.isSaved);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 py-24 min-h-screen">
      <div className="p-8 bg-neutral-900/80 backdrop-blur-xl border border-rose-500/30 rounded-3xl shadow-2xl mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-6 h-6 text-rose-500 fill-current animate-pulse" />
          <h2 className="text-3xl font-extrabold text-white">Simpanan & Favorit Anda</h2>
        </div>
        <p className="text-sm text-neutral-300">
          Koleksi artis dan lagu pilihan yang telah Anda simpan dan beri rating di Aura Sound.
        </p>
      </div>

      {savedArtists.length === 0 ? (
        <div className="p-12 text-center bg-neutral-900/50 border border-white/10 rounded-3xl">
          <Heart className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">Belum Ada Artis Yang Disimpan</h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-md mx-auto">
            Jelajahi Katalog Artis (Daniel Caesar, Mateus Asato, Keshi, dll) dan tekan ikon hati untuk menyimpan artis favorit Anda.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedArtists.map((artist) => (
            <div
              key={artist.id}
              onClick={() => onSelectArtist(artist)}
              className="bg-neutral-900 border border-white/10 hover:border-rose-500/50 rounded-2xl p-4 cursor-pointer transition-all hover:-translate-y-1.5 shadow-xl"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3">
                <img src={artist.avatarUrl} alt={artist.name} className="w-full h-full object-cover" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSaveArtist(artist.id);
                  }}
                  className="absolute top-2 right-2 p-2 bg-rose-500 text-white rounded-full shadow-lg"
                  title="Hapus dari simpanan"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-white">{artist.name}</h3>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{artist.rating}</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">{artist.role}</p>

              {artist.topTracks.length > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayTrack(artist.topTracks[0]);
                  }}
                  className="w-full mt-3 py-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Putar {artist.topTracks[0].title}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

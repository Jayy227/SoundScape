import React, { useState } from 'react';
import type { Artist, Track, UserReview } from '../types/artist';
import { X, Play, Heart, Star, Sparkles, Guitar, Music, Bot, MessageSquare, Quote } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ArtistDetailModalProps {
  artist: Artist | null;
  onClose: () => void;
  onPlayTrack: (track: Track) => void;
  onToggleSaveArtist: (artistId: string) => void;
  onOpenRatingModal: (artist: Artist) => void;
  reviews: UserReview[];
  onAddReview: (review: Omit<UserReview, 'id' | 'createdAt'>) => void;
  onOpenAIVaultForArtist: (artist: Artist) => void;
}

export const ArtistDetailModal: React.FC<ArtistDetailModalProps> = ({
  artist,
  onClose,
  onPlayTrack,
  onToggleSaveArtist,
  onOpenRatingModal,
  reviews,
  onAddReview,
  onOpenAIVaultForArtist,
}) => {
  if (!artist) return null;

  const [activeTab, setActiveTab] = useState<'tracks' | 'gear' | 'secrets' | 'reviews'>('tracks');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [userName, setUserName] = useState('');

  const artistReviews = reviews.filter((r) => r.artistId === artist.id);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim()) return;

    onAddReview({
      artistId: artist.id,
      userName: userName.trim(),
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      rating: newRating,
      comment: newComment.trim(),
    });

    setNewComment('');
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <img
            src={artist.coverBannerUrl}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-end gap-4">
              <img
                src={artist.avatarUrl}
                alt={artist.name}
                className="w-20 h-20 md:w-28 md:h-28 rounded-2xl border-4 border-neutral-900 object-cover shadow-2xl"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold rounded-full uppercase">
                    {artist.country}
                  </span>
                  <span className="text-xs text-neutral-400">Aktif sejak {artist.activeSince}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
                  {artist.name}
                </h2>
                <p className="text-sm text-cyan-400 font-medium">{artist.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleSaveArtist(artist.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${
                  artist.isSaved
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                <Heart className={`w-4 h-4 ${artist.isSaved ? 'fill-current' : ''}`} />
                <span>{artist.isSaved ? 'Tersimpan' : 'Simpan Artis'}</span>
              </button>

              <button
                onClick={() => onOpenRatingModal(artist)}
                className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs rounded-full flex items-center gap-1.5 transition-all"
              >
                <Star className="w-4 h-4 fill-current" />
                <span>Beri Rating ({artist.rating})</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 border-b border-white/10 bg-neutral-950/40">
          <p className="text-sm text-neutral-300 leading-relaxed">{artist.bio}</p>
          <div className="mt-3 flex items-center gap-2 text-xs italic text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-3.5 py-2 rounded-xl">
            <Quote className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>{artist.quote}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('tracks')}
            className={`pb-3 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'tracks'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>Lagu Utama ({artist.topTracks.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('gear')}
            className={`pb-3 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'gear'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Guitar className="w-4 h-4" />
            <span>Gear & Studio Rig ({artist.gearList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('secrets')}
            className={`pb-3 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'secrets'
                ? 'border-fuchsia-400 text-fuchsia-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span>Fakta AI Secret ({artist.secretFacts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'reviews'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Rating & Ulasan ({artistReviews.length})</span>
          </button>
        </div>

        <div className="p-6 max-h-[50vh] overflow-y-auto">
          {activeTab === 'tracks' && (
            <div className="space-y-3">
              {artist.topTracks.map((track) => (
                <div
                  key={track.id}
                  className="flex items-center justify-between p-3.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={track.coverUrl}
                      alt={track.title}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-white">{track.title}</h4>
                      <p className="text-xs text-neutral-400">
                        {track.album} • {track.releaseYear}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-neutral-400 hidden sm:inline">{track.duration}</span>
                    <button
                      onClick={() => onPlayTrack(track)}
                      className="px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs rounded-full flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/30"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Putar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'gear' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {artist.gearList.map((g, idx) => (
                <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="px-2.5 py-0.5 bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-bold rounded-md uppercase">
                    {g.category}
                  </span>
                  <h4 className="font-bold text-sm text-white mt-2">{g.name}</h4>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">{g.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'secrets' && (
            <div className="space-y-4">
              <div className="p-4 bg-fuchsia-950/40 border border-fuchsia-500/30 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bot className="w-6 h-6 text-fuchsia-400" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Tanyakan AI Mengenai {artist.name}</h4>
                    <p className="text-xs text-neutral-400">Dapatkan rincian gear, unreleased song & studio lore</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenAIVaultForArtist(artist);
                  }}
                  className="px-4 py-2 bg-fuchsia-500 hover:bg-fuchsia-400 text-black font-bold text-xs rounded-full transition-all"
                >
                  Buka AI Vault
                </button>
              </div>

              {artist.secretFacts.map((fact) => (
                <div key={fact.id} className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-fuchsia-400">{fact.category}</span>
                    <span className="text-[10px] text-neutral-400 bg-white/5 px-2 py-0.5 rounded-full">
                      {fact.sourceTag}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white mt-1.5">{fact.title}</h4>
                  <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">{fact.content}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <form onSubmit={handleSubmitReview} className="p-4 bg-neutral-950 border border-white/10 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tulis Ulasan & Rating Anda</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Nama / Username anda..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    required
                  />

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400">Rating:</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className={`p-1 text-amber-400 ${newRating >= star ? 'opacity-100' : 'opacity-30'}`}
                        >
                          <Star className="w-4 h-4 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <textarea
                  placeholder="Apa kesan anda terhadap karya lagu atau gaya musik artis ini?..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 h-20 resize-none"
                  required
                />

                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-full shadow-lg shadow-amber-500/20 transition-all"
                >
                  Kirim Ulasan & Rating
                </button>
              </form>

              <div className="space-y-3">
                {artistReviews.length === 0 ? (
                  <p className="text-xs text-neutral-400 text-center py-6">Belum ada ulasan untuk artis ini. Jadilah yang pertama memberi ulasan!</p>
                ) : (
                  artistReviews.map((rev) => (
                    <div key={rev.id} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex gap-3">
                      <img src={rev.userAvatar} alt={rev.userName} className="w-8 h-8 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-xs text-white">{rev.userName}</h5>
                          <div className="flex items-center gap-1 text-amber-400 text-xs">
                            <Star className="w-3 h-3 fill-current" />
                            <span>{rev.rating}</span>
                          </div>
                        </div>
                        <p className="text-xs text-neutral-300 mt-1">{rev.comment}</p>
                        <span className="text-[10px] text-neutral-500 mt-1 block">{rev.createdAt}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

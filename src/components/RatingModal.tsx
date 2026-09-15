import React, { useState } from 'react';
import type { Artist } from '../types/artist';
import { Star, X, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RatingModalProps {
  artist: Artist | null;
  onClose: () => void;
  onSubmitRating: (artistId: string, rating: number) => void;
}

export const RatingModal: React.FC<RatingModalProps> = ({
  artist,
  onClose,
  onSubmitRating,
}) => {
  if (!artist) return null;

  const [rating, setRating] = useState<number>(artist.userRating || 5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitRating(artist.id, rating);
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-3xl p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <img src={artist.avatarUrl} alt={artist.name} className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-amber-500/30 mb-3" />
          <h3 className="text-lg font-bold text-white">Beri Rating Untuk {artist.name}</h3>
          <p className="text-xs text-neutral-400 mt-0.5">{artist.role}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="p-2 hover:scale-125 transition-transform"
              >
                <Star className={`w-8 h-8 ${rating >= star ? 'text-amber-400 fill-current' : 'text-neutral-600'}`} />
              </button>
            ))}
          </div>

          <p className="text-center text-xs font-semibold text-amber-300">
            {rating === 5 && '🌟 Hebat Sekali! Sangat Direkomendasikan'}
            {rating === 4 && '✨ Sangat Bagus'}
            {rating === 3 && '👍 Cukup Bagus'}
            {rating === 2 && '👌 Lumayan'}
            {rating === 1 && '👎 Kurang Menarik'}
          </p>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Simpan Rating Saya</span>
          </button>
        </form>
      </div>
    </div>
  );
};

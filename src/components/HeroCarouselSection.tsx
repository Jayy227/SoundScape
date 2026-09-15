import React, { useState } from 'react';
import { Scene } from './Scene';
import type { Artist, Track } from '../types/artist';
import { Play, Star, Sparkles, Heart, Sliders, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroCarouselSectionProps {
  artists: Artist[];
  onSelectArtist: (artist: Artist) => void;
  onPlayTrack: (track: Track) => void;
  onToggleSaveArtist: (artistId: string) => void;
  onOpenRatingModal: (artist: Artist) => void;
}

export const HeroCarouselSection: React.FC<HeroCarouselSectionProps> = ({
  artists,
  onSelectArtist,
  onPlayTrack,
  onToggleSaveArtist,
}) => {
  const [speed, setSpeed] = useState<number>(2.5);
  const [scale, setScale] = useState<number>(1.0);
  const [hue, setHue] = useState<number>(0);
  const [saturation, setSaturation] = useState<number>(1.0);
  const [brightness, setBrightness] = useState<number>(1.33);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [activePresetIndex, setActivePresetIndex] = useState<number>(0);

  const presets = [
    { name: 'Default Wave', speed: 2.5, scale: 1.0, hue: 0, saturation: 1.0, brightness: 1.33 },
    { name: 'Neon Cyberpunk', speed: 1.8, scale: 1.1, hue: 120, saturation: 1.5, brightness: 1.2 },
    { name: 'Deep Midnight R&B', speed: 1.2, scale: 0.9, hue: -60, saturation: 1.3, brightness: 1.0 },
    { name: 'Gold Soul Sunset', speed: 2.0, scale: 1.0, hue: 45, saturation: 1.4, brightness: 1.4 },
  ];

  const applyPreset = (idx: number) => {
    setActivePresetIndex(idx);
    const p = presets[idx];
    setSpeed(p.speed);
    setScale(p.scale);
    setHue(p.hue);
    setSaturation(p.saturation);
    setBrightness(p.brightness);
  };

  const handleSaveClick = (e: React.MouseEvent, artistId: string) => {
    e.stopPropagation();
    onToggleSaveArtist(artistId);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section className="relative w-full min-h-screen pt-20 pb-16 flex flex-col items-center justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene
          speed={speed}
          scale={scale}
          opacity={1.0}
          hue={hue}
          saturation={saturation}
          brightness={brightness}
        />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-neutral-950 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-4 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              ThreeUI Wave Component Engine (SHA-256 Registered)
            </div>
            <h1 className="text-2xl lg:text-4xl font-extrabold text-white tracking-tight">
              Eksplorasi Artis & Rincian Gear Musik
            </h1>
            <p className="text-sm text-neutral-300 mt-1 max-w-2xl">
              Dengarkan karya <span className="text-cyan-400 font-semibold">Daniel Caesar, Rex Orange County, Mateus Asato, James Arthur, Keshi, Bruno Mars, John Mayer, d4vd</span> dan ketahui fakta rahasia & gear studio mereka via AI.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowControls(!showControls)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-medium border border-white/10 backdrop-blur-md transition-all"
            >
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>{showControls ? 'Sembunyikan Controls' : 'Kustomisasi Wave'}</span>
            </button>
          </div>
        </div>

        {showControls && (
          <div className="mt-4 p-6 bg-neutral-900/90 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shadow-2xl animate-fadeIn">
            <div>
              <label className="text-xs font-semibold text-neutral-300 flex justify-between">
                <span>Wave Speed</span>
                <span className="text-cyan-400">{speed.toFixed(2)}x</span>
              </label>
              <input
                type="range"
                min="0.1"
                max="2.5"
                step="0.05"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full mt-2 accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300 flex justify-between">
                <span>Card Scale</span>
                <span className="text-cyan-400">{scale.toFixed(2)}</span>
              </label>
              <input
                type="range"
                min="0.7"
                max="1.3"
                step="0.05"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full mt-2 accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300 flex justify-between">
                <span>Color Hue Shift</span>
                <span className="text-cyan-400">{hue}°</span>
              </label>
              <input
                type="range"
                min="-180"
                max="180"
                step="5"
                value={hue}
                onChange={(e) => setHue(parseInt(e.target.value))}
                className="w-full mt-2 accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="lg:col-span-3 flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-xs text-neutral-400 mr-2">Preset Mood:</span>
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => applyPreset(idx)}
                  className={`px-3 py-1 text-xs rounded-full border transition-all ${
                    activePresetIndex === idx
                      ? 'bg-cyan-500 text-black font-bold border-cyan-400 shadow-md shadow-cyan-500/30'
                      : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 lg:px-8 my-auto pt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400 animate-spin-slow" />
            <h2 className="text-xl font-bold text-white tracking-wide">Pilih Artis & Dengarkan</h2>
          </div>
          <span className="text-xs text-neutral-400">Klik kartu untuk Profil & AI Vault</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artists.slice(0, 8).map((artist) => (
            <div
              key={artist.id}
              onClick={() => onSelectArtist(artist)}
              className="group relative bg-neutral-900/70 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img
                  src={artist.avatarUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <button
                  onClick={(e) => handleSaveClick(e, artist.id)}
                  className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                    artist.isSaved
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/40'
                      : 'bg-black/40 text-neutral-300 hover:text-white hover:bg-black/70'
                  }`}
                  title={artist.isSaved ? 'Simpanan Anda' : 'Simpan Artis'}
                >
                  <Heart className={`w-4 h-4 ${artist.isSaved ? 'fill-current' : ''}`} />
                </button>

                {artist.topTracks.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPlayTrack(artist.topTracks[0]);
                    }}
                    className="absolute bottom-2.5 right-2.5 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs rounded-full flex items-center gap-1.5 shadow-lg shadow-cyan-500/40 group-hover:scale-105 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Putar Audio</span>
                  </button>
                )}

                <div className="absolute bottom-2.5 left-2.5">
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-[10px] font-semibold text-cyan-300 border border-cyan-500/30 rounded-full">
                    {artist.country}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors truncate">
                    {artist.name}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{artist.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 truncate mt-0.5">{artist.role}</p>

                <div className="flex flex-wrap gap-1 mt-2.5">
                  {artist.genres.map((g, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-neutral-300">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

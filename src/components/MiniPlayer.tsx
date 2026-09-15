import React, { useRef, useState, useEffect } from 'react';
import type { Track } from '../types/artist';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize2, Minimize2, Heart, Disc } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MiniPlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNextTrack: () => void;
  onPrevTrack: () => void;
  recommendedTracks: Track[];
  onSelectTrack: (track: Track) => void;
  onRateTrack?: (track: Track, rating: number) => void;
}

export const MiniPlayer: React.FC<MiniPlayerProps> = ({
  currentTrack,
  isPlaying,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
  recommendedTracks,
  onSelectTrack,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'lyrics' | 'queue'>('queue');

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log('Audio autoplay prevented:', err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.audioUrl;
      if (isPlaying) {
        audioRef.current.play().catch((err) => console.log('Audio play error:', err));
      }
    }
  }, [currentTrack]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    setIsMuted(val === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.9 } });
    }
  };

  if (!currentTrack) return null;

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onNextTrack}
      />

      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-2xl flex flex-col p-6 overflow-y-auto animate-fadeIn">
          <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Disc className="w-5 h-5 text-cyan-400 animate-spin-slow" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">In-App Audio Player</span>
              </div>

              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white border border-white/10 transition-all"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 mx-auto max-w-sm w-full">
                <img
                  src={currentTrack.coverUrl}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {isPlaying && (
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-center gap-1.5 h-12">
                    {[40, 70, 30, 90, 60, 100, 50, 80, 45, 95, 65, 85, 35].map((h, i) => (
                      <span
                        key={i}
                        className="w-1.5 bg-gradient-to-t from-cyan-500 to-fuchsia-500 rounded-full animate-pulse"
                        style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl h-full min-h-[300px] flex flex-col">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
                  <button
                    onClick={() => setActiveTab('queue')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      activeTab === 'queue' ? 'bg-cyan-500 text-black' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Rekomendasi Musik
                  </button>
                  <button
                    onClick={() => setActiveTab('lyrics')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      activeTab === 'lyrics' ? 'bg-cyan-500 text-black' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Lirik Lagu
                  </button>
                </div>

                {activeTab === 'queue' ? (
                  <div className="flex-1 overflow-y-auto space-y-2.5 max-h-[260px] pr-2">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Diputar Selanjutnya:</h4>
                    {recommendedTracks.map((tr) => (
                      <div
                        key={tr.id}
                        onClick={() => onSelectTrack(tr)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          tr.id === currentTrack.id
                            ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300'
                            : 'bg-white/5 border-white/5 hover:bg-white/10 text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img src={tr.coverUrl} alt={tr.title} className="w-10 h-10 rounded-lg object-cover" />
                          <div>
                            <h5 className="font-bold text-xs truncate max-w-[180px]">{tr.title}</h5>
                            <p className="text-[10px] text-neutral-400">{tr.artistName}</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-neutral-400">{tr.duration}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex-1 overflow-y-auto max-h-[260px] text-xs text-neutral-300 leading-relaxed font-mono space-y-2 p-2 whitespace-pre-line">
                    {currentTrack.lyrics || `(Lirik belum tersedia untuk lagu ini)\nNikmati alunan musik ${currentTrack.artistName} di Aura Sound Mini Player.`}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-extrabold text-white">{currentTrack.title}</h3>
                <p className="text-sm text-cyan-400 font-medium">{currentTrack.artistName} • {currentTrack.album}</p>
              </div>

              <div className="space-y-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-white/20 rounded-lg"
                />
                <div className="flex justify-between text-xs text-neutral-400 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleLike}
                  className={`p-3 rounded-full border transition-all ${
                    isLiked ? 'bg-rose-500/20 border-rose-500 text-rose-400' : 'bg-white/5 border-white/10 text-neutral-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>

                <div className="flex items-center gap-4">
                  <button onClick={onPrevTrack} className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all">
                    <SkipBack className="w-6 h-6 fill-current" />
                  </button>

                  <button
                    onClick={onTogglePlay}
                    className="p-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full shadow-lg shadow-cyan-500/40 transition-transform active:scale-95"
                  >
                    {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-0.5" />}
                  </button>

                  <button onClick={onNextTrack} className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all">
                    <SkipForward className="w-6 h-6 fill-current" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={toggleMute} className="text-neutral-400 hover:text-white">
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 accent-cyan-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 left-4 right-4 z-40 max-w-4xl mx-auto bg-neutral-900/90 backdrop-blur-2xl border border-white/15 rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-4 transition-all">
        <div className="flex items-center gap-3 min-w-0 cursor-pointer" onClick={() => setIsExpanded(true)}>
          <img
            src={currentTrack.coverUrl}
            alt={currentTrack.title}
            className={`w-12 h-12 rounded-xl object-cover shadow-md ${isPlaying ? 'animate-spin-slow' : ''}`}
          />
          <div className="truncate">
            <h4 className="font-bold text-sm text-white truncate group-hover:text-cyan-400">{currentTrack.title}</h4>
            <p className="text-xs text-cyan-400 truncate">{currentTrack.artistName}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button onClick={onPrevTrack} className="p-2 text-neutral-400 hover:text-white transition-colors">
            <SkipBack className="w-4 h-4 fill-current" />
          </button>

          <button
            onClick={onTogglePlay}
            className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-transform active:scale-95"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button onClick={onNextTrack} className="p-2 text-neutral-400 hover:text-white transition-colors">
            <SkipForward className="w-4 h-4 fill-current" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(true)}
            className="p-2 bg-white/5 hover:bg-white/10 text-neutral-300 rounded-xl border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            <Maximize2 className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Perluas Player</span>
          </button>
        </div>
      </div>
    </>
  );
};

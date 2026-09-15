import React from 'react';
import { Heart, Compass, Bot, Search, Radio, Headphones } from 'lucide-react';

interface NavbarProps {
  activeTab: 'explore' | 'artists' | 'ai-vault' | 'saved' | 'player';
  setActiveTab: (tab: 'explore' | 'artists' | 'ai-vault' | 'saved' | 'player') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  savedCount,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/10 px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div 
          onClick={() => setActiveTab('explore')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
              <Radio className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-wider text-white bg-gradient-to-r from-white via-neutral-200 to-cyan-400 bg-clip-text text-transparent">
                AURA SOUND
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 rounded-full uppercase">
                Wave 3D
              </span>
            </div>
            <p className="text-xs text-neutral-400">Artist Lore & In-App Music Hub</p>
          </div>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Cari Daniel Caesar, Mateus Asato, Keshi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all"
          />
        </div>

        <nav className="flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === 'explore'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Showcase Wave</span>
          </button>

          <button
            onClick={() => setActiveTab('artists')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === 'artists'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>Katalog Artis</span>
          </button>

          <button
            onClick={() => setActiveTab('ai-vault')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === 'ai-vault'
                ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-lg shadow-fuchsia-500/25'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>AI Secret Vault</span>
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap relative ${
              activeTab === 'saved'
                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/25'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Simpanan</span>
            {savedCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-rose-500 text-white text-[10px] font-bold rounded-full">
                {savedCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

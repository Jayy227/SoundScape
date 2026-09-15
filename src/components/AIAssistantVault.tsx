import React, { useState } from 'react';
import type { Artist } from '../types/artist';
import { Bot, Send } from 'lucide-react';

interface AIAssistantVaultProps {
  artists: Artist[];
  selectedArtistForAI?: Artist | null;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  sourceTag?: string;
  gearHighlight?: string[];
}

export const AIAssistantVault: React.FC<AIAssistantVaultProps> = ({
  artists,
  selectedArtistForAI,
}) => {
  const [selectedArtistId, setSelectedArtistId] = useState<string>(selectedArtistForAI?.id || 'daniel-caesar');
  const [inputText, setInputText] = useState<string>('');

  const activeArtist = artists.find((a) => a.id === selectedArtistId) || artists[0];

  const defaultMessages: Record<string, ChatMessage[]> = {
    'daniel-caesar': [
      {
        id: 'msg-dc-1',
        sender: 'ai',
        text: `Halo! Saya Aura AI Vault. Berikut rincian rahasia studio Daniel Caesar yang TIDAK PERNAH terbit di majalah arus utama:

1. **Vocal Chain Secret**: Neumann U87 Ai ditancapkan ke Neve 1073 preamp dan Tube-Tech CL1B compressor dengan ratio 4:1 untuk mendapatkan nada vokal halus khas "Get You".
2. **Harmoni Choir 14-Part**: Daniel menyusun 14 layer vocal harmony sendiri di Logic Pro X dengan микро-tuning microtonal 5-cent pitch shift untuk menciptakan getaran gospel gereja.
3. **Demo Tersembunyi "Vibrations"**: Pada tahun 2016, Daniel merekam demo rahasia 7 menit bersama Jacob Collier yang belum pernah dirilis secara resmi karena masalah lisensi sampel.`,
        timestamp: 'Tersambung ke Vault Database',
        sourceTag: 'Studio Multi-Track Tape Archive',
        gearHighlight: ['Neumann U87 Ai', 'Tube-Tech CL1B', 'Neve 1073', 'Prophet-6 Synth']
      }
    ],
    'mateus-asato': [
      {
        id: 'msg-ma-1',
        sender: 'ai',
        text: `Selamat datang di Rig & Tone Vault Mateus Asato! Informasi ini eksklusif bagi pencinta gitar:

1. **Pedal Secret Engine**: Mateus menggabungkan pedal signature Jackson Audio ASABI (Marshall-in-a-box) dengan Ibanez TS10 vintage boost di depan amplifier Suhr Bella clean.
2. **Trik R&B Double-Stop**: Rahasia kehalusan solo Mateus bukan hanya pedal, melainkan teknik "thumb-over" grip dan pick-hand hybrid plucking (kombinasi petikan kuku dan plectrum).
3. **Rahasia Penghapusan Instagram 2021**: Mateus menghapus akun sosial medianya berfollowers 1M+ selama 9 bulan untuk menyendiri di studio tanpa tekanan algoritma demi menyelesaikan komposisi album solonya.`,
        timestamp: 'Tersambung ke Vault Database',
        sourceTag: 'Suhr Custom Rig Engineer Log',
        gearHighlight: ['Suhr Classic T Mateus Asato', 'Jackson Audio Asabi', 'Suhr Bella Tube Amp']
      }
    ],
    'john-mayer': [
      {
        id: 'msg-jm-1',
        sender: 'ai',
        text: `Fakta Rahasia Studio & Amplifier John Mayer yang Jarang Diketahui:

1. **Amp Dumble Overdrive Special #005**: John membawa dua amplifier Dumble langka seharga $150.000/unit yang disetel pribadi oleh mendiang Alexander Dumble.
2. **Klon Centaur Gold Overdrive**: Untuk nada solo "Gravity" live, John menggunakan Klon Centaur vintage dengan sertifikat nomor seri di bawah #500.
3. **Proses Lagu "New Light"**: Penulisan lagu "New Light" dimulai dari ritme drum machine Casio bekas seharga $40 sebelum dikembangkan bersama No ID di studio LA.`,
        timestamp: 'Tersambung ke Vault Database',
        sourceTag: 'PRS Guitars & Dumble Collector Archives',
        gearHighlight: ['PRS Silver Sky', 'Dumble Overdrive Special', 'Klon Centaur']
      }
    ],
    'keshi': [
      {
        id: 'msg-k-1',
        sender: 'ai',
        text: `Rahasia Produksi Musik Kamar Tidur (Lo-Fi) Keshi:

1. **Shift Malam Perawat ICU**: Casey Luong menulis hits awal seperti "2 MUCH" saat bertugas sebagai perawat ICU kanker di Houston, menggunakan laptop MacBook Pro saat jam istirahat malam.
2. **Formulir Vokal Falsetto**: Suara falsetto renyah Keshi diproses memakai Universal Audio Apollo Twin dengan plugin Teletronix LA-2A dan pitch correction Melodyne tipis di frekuensi 3kHz - 6kHz.
3. **Sampel Gitar Akustik Fender**: Melodi gitar atmospheric Keshi sebagian besar direkam langsung dari Stratocaster memakai mic condenser RODE NT1A jarak dekat.`,
        timestamp: 'Tersambung ke Vault Database',
        sourceTag: 'Home Studio Masterclass Vault',
        gearHighlight: ['Universal Audio Apollo Twin', 'Ableton Live 11', 'RODE NT1A']
      }
    ],
    'bruno-mars': [
      {
        id: 'msg-bm-1',
        sender: 'ai',
        text: `Fakta Dapur Rekaman Bruno Mars & Silk Sonic:

1. **Perekaman Tape Analog 70-an**: Album Silk Sonic "Leave The Door Open" direkam 100% menggunakan tape recorder analog Studer A800 tanpa kuantisasi digital DAW!
2. **Malam Penulisan 24K Magic**: Bruno dan tim Stereotypes menghabiskan 3 bulan hanya untuk mendapatkan pola bassline synth Moog Voyager agar terasa otentik funk 1980.`,
        timestamp: 'Tersambung ke Vault Database',
        sourceTag: 'Glenwood Place Studios Tape Vault',
        gearHighlight: ['Studer A800 Analog Tape', 'Telefunken ELA M 251T', 'Moog Voyager']
      }
    ]
  };

  const [messages, setMessages] = useState<ChatMessage[]>(defaultMessages[selectedArtistId] || defaultMessages['daniel-caesar']);

  const handleSelectArtistChange = (artistId: string) => {
    setSelectedArtistId(artistId);
    if (defaultMessages[artistId]) {
      setMessages(defaultMessages[artistId]);
    } else {
      const art = artists.find((a) => a.id === artistId);
      setMessages([
        {
          id: `msg-${artistId}-1`,
          sender: 'ai',
          text: `Berikut informasi eksklusif AI Vault untuk ${art?.name || 'artis ini'}:

- **Perlengkapan Utama**: ${art?.gearList.map((g) => g.name).join(', ') || 'Custom Studio Setup'}.
- **Profil Karakter**: ${art?.bio}`,
          timestamp: 'Tersambung ke Vault Database',
          sourceTag: 'Aura AI Verified Source'
        }
      ]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText.trim(),
      timestamp: 'Baru Saja',
    };

    setMessages((prev) => [...prev, userMsg]);
    const query = inputText.trim().toLowerCase();
    setInputText('');

    setTimeout(() => {
      let aiReplyText = `Berdasarkan arsip eksklusif Aura AI mengenai **${activeArtist.name}**:\n\n`;

      if (query.includes('gear') || query.includes('gitar') || query.includes('mic') || query.includes('pedal')) {
        aiReplyText += `Perlengkapan utama ${activeArtist.name}:\n`;
        activeArtist.gearList.forEach((g, i) => {
          aiReplyText += `${i + 1}. **${g.name}** (${g.category}): ${g.description}\n`;
        });
      } else if (query.includes('rahasia') || query.includes('fakta') || query.includes('secret') || query.includes('lagu')) {
        aiReplyText += `Fakta rahasia studio:\n`;
        activeArtist.secretFacts.forEach((sf, i) => {
          aiReplyText += `${i + 1}. **${sf.title}** [${sf.category}]: ${sf.content}\n`;
        });
      } else {
        aiReplyText += `${activeArtist.name} dikenal dengan genre ${activeArtist.genres.join(', ')}. Beliau aktif sejak tahun ${activeArtist.activeSince} dan memproduksi lagu-lagu dengan karakteristik ${activeArtist.role}.\n\nIngin tahu rincian gear studio atau fakta unreleased song beliau?`;
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReplyText,
        timestamp: 'Diproses oleh AI Engine',
        sourceTag: 'Aura AI Intel Vault',
        gearHighlight: activeArtist.gearList.map((g) => g.name)
      };

      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 py-24 min-h-screen">
      <div className="p-8 bg-neutral-900/80 backdrop-blur-xl border border-fuchsia-500/30 rounded-3xl shadow-2xl mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-fuchsia-950/80 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
              <Bot className="w-4 h-4 text-fuchsia-400 animate-pulse" />
              Aura AI Engine • Secret Music Vault
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Informasi Artis Di Luar Majalah
            </h2>
            <p className="text-sm text-neutral-300 mt-1 max-w-2xl">
              Asisten AI pintar untuk mengungkap detail studio, rahasia pedalboard gitar, mic vocal chain, dan kisah penulisan lagu yang belum pernah dipublikasikan di media cetak.
            </p>
          </div>

          <div className="w-full md:w-64">
            <label className="text-xs font-bold text-neutral-400 block mb-1.5 uppercase tracking-wider">
              Pilih Artis Untuk Diulas:
            </label>
            <select
              value={selectedArtistId}
              onChange={(e) => handleSelectArtistChange(e.target.value)}
              className="w-full px-4 py-2.5 bg-neutral-950 border border-fuchsia-500/40 rounded-xl text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
            >
              {artists.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name} ({a.role.split(' ')[0]})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <span className="text-xs text-neutral-400 self-center mr-2">Topik Populer:</span>
        <button
          onClick={() => handleSelectArtistChange('daniel-caesar')}
          className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 rounded-full transition-all"
        >
          🎤 Daniel Caesar (Vocal Chain & Gospel Choir)
        </button>
        <button
          onClick={() => handleSelectArtistChange('mateus-asato')}
          className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 rounded-full transition-all"
        >
          🎸 Mateus Asato (Suhr Guitars & Jackson Pedal)
        </button>
        <button
          onClick={() => handleSelectArtistChange('john-mayer')}
          className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 rounded-full transition-all"
        >
          📻 John Mayer (Amp Dumble $150k & Silver Sky)
        </button>
        <button
          onClick={() => handleSelectArtistChange('keshi')}
          className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 rounded-full transition-all"
        >
          🎧 Keshi (ICU Nurse Origin & Lo-Fi Ableton)
        </button>
      </div>

      <div className="bg-neutral-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[550px]">
        <div className="px-6 py-4 bg-neutral-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono font-bold text-neutral-300 ml-2">
              AURA_AI_VAULT // {activeArtist.name.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400 uppercase">AI Online</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-purple-600 p-[2px] flex-shrink-0 shadow-lg shadow-fuchsia-500/30">
                  <div className="w-full h-full bg-neutral-950 rounded-[14px] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-fuchsia-400" />
                  </div>
                </div>
              )}

              <div className={`max-w-2xl rounded-2xl p-5 ${
                msg.sender === 'user'
                  ? 'bg-cyan-600 text-white font-medium text-sm'
                  : 'bg-neutral-900/90 border border-white/10 text-neutral-200 text-sm'
              }`}>
                {msg.sourceTag && (
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-xs">
                    <span className="font-bold text-fuchsia-400 uppercase tracking-wider">{msg.sourceTag}</span>
                    <span className="text-[10px] text-neutral-500 font-mono">{msg.timestamp}</span>
                  </div>
                )}

                <div className="whitespace-pre-line leading-relaxed font-sans">
                  {msg.text}
                </div>

                {msg.gearHighlight && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <span className="text-[10px] font-bold text-neutral-400 block mb-1.5 uppercase tracking-wider">
                      Perlengkapan Terkait Dalam Arsip:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.gearHighlight.map((gh, i) => (
                        <span key={i} className="text-[10px] px-2.5 py-0.5 bg-fuchsia-950/80 border border-fuchsia-500/30 text-fuchsia-300 font-mono rounded-md">
                          ⚡ {gh}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="p-4 bg-neutral-900 border-t border-white/10 flex items-center gap-3">
          <input
            type="text"
            placeholder={`Tanyakan rahasia gear, mic, pedal, atau lagu ${activeArtist.name}...`}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 px-4 py-3 bg-neutral-950 border border-white/10 rounded-2xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-fuchsia-500"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white font-bold text-xs rounded-2xl flex items-center gap-2 shadow-lg shadow-fuchsia-500/30 transition-all"
          >
            <span>Tanyakan AI</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

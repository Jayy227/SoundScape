import type { Artist, UserReview } from '../types/artist';

export const INITIAL_ARTISTS: Artist[] = [
  {
    id: 'daniel-caesar',
    name: 'Daniel Caesar',
    role: 'R&B & Neo-Soul Pioneer',
    avatarUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    coverBannerUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    cardColor: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
    bio: 'Ashton Dumar Norwill Simmonds, known professionally as Daniel Caesar, is a Canadian R&B singer and songwriter. Known for his soulful, gospel-influenced voice and introspective lyrics on love and vulnerability.',
    country: 'Canada (Toronto)',
    activeSince: '2014',
    genres: ['Neo-Soul', 'Alternative R&B', 'Gospel Soul'],
    rating: 4.9,
    totalStreams: '4.8B+',
    monthlyListeners: '34.2M',
    quote: '"I want my music to feel like a warm hug in a cold room."',
    topTracks: [
      {
        id: 'dc-1',
        title: 'Get You (feat. Kali Uchis)',
        artistId: 'daniel-caesar',
        artistName: 'Daniel Caesar',
        album: 'Freudian',
        duration: '4:38',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soul-chill-out-115386.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2017,
        genre: 'R&B / Soul',
        lyrics: `Through drought and famine, natural disasters
My baby has been there for me
Through all the trials and tribulations
My baby has been there for me...`,
      },
      {
        id: 'dc-2',
        title: 'Best Part (feat. H.E.R.)',
        artistId: 'daniel-caesar',
        artistName: 'Daniel Caesar',
        album: 'Freudian',
        duration: '3:29',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=lofi-study-112191.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2017,
        genre: 'Neo-Soul',
        lyrics: `You're the coffee that I need in the morning
You're my sunshine in the rain when it's pouring
Won't you give yourself to me...`,
      },
      {
        id: 'dc-3',
        title: 'Always',
        artistId: 'daniel-caesar',
        artistName: 'Daniel Caesar',
        album: 'NEVER ENOUGH',
        duration: '3:45',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a70f7d.mp3?filename=relaxing-smooth-jazz-10884.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2023,
        genre: 'R&B / Soul',
      }
    ],
    gearList: [
      { category: 'Vocal/Mic', name: 'Neumann U87 Ai', description: 'Used for recording his intimate, silky vocal takes in home and studio setups.' },
      { category: 'Guitar', name: 'Fender Custom Shop 1962 Telecaster', description: 'Provides warm, clean chord voicings for Freudian album tracks.' },
      { category: 'Synth/DAW', name: 'Logic Pro X & Prophet-6', description: 'Used by producer Jordan Evans for rich analog pads.' }
    ],
    secretFacts: [
      {
        id: 'sf-dc-1',
        title: 'Gospel Choir Roots',
        category: 'Songwriting Lore',
        content: 'Daniel grew up singing in a strict Seventh-day Adventist choir in Toronto, which directly shaped his signature vocal harmonies and gospel chord progressions.',
        sourceTag: 'Studio Archive'
      },
      {
        id: 'sf-dc-2',
        title: 'The Homeless Year in Toronto',
        category: 'Studio Secrets',
        content: 'Before Freudian blew up, Daniel was homeless for nearly a year, sleeping on park benches and couches while recording demos late at night at Matrix Studios.',
        sourceTag: 'Deep Bio'
      },
      {
        id: 'sf-dc-3',
        title: 'Unreleased Track "Vibrations"',
        category: 'Unreleased Demos',
        content: 'An unreleased 2016 session recorded with Jacob Collier featuring a 14-part vocal harmony stack that was shelved due to sample clearance issues.',
        sourceTag: 'Vault Leak'
      }
    ]
  },
  {
    id: 'rex-orange-county',
    name: 'Rex Orange County',
    role: 'Indie Pop & Bedroom Soul Icon',
    avatarUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=600&q=80',
    coverBannerUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    cardColor: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #f97316 100%)',
    bio: 'Alexander O’Connor, known as Rex Orange County, is an English singer-songwriter blending lo-fi bedroom pop, jazz harmony, and soulful orchestral indie.',
    country: 'United Kingdom (Hampshire)',
    activeSince: '2015',
    genres: ['Indie Pop', 'Bedroom Soul', 'Lo-Fi Jazz'],
    rating: 4.8,
    totalStreams: '3.9B+',
    monthlyListeners: '21.5M',
    quote: '"I make songs for people who feel too much all at once."',
    topTracks: [
      {
        id: 'roc-1',
        title: 'Sunflower',
        artistId: 'rex-orange-county',
        artistName: 'Rex Orange County',
        album: 'Sunflower - Single',
        duration: '4:12',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/24/audio_349d479133.mp3?filename=smooth-waters-115045.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2017,
        genre: 'Indie Pop',
        lyrics: `I want to know where I can go
When you're not around and I'm feeling low
So sunflower, hold on tight...`,
      },
      {
        id: 'roc-2',
        title: 'Best Friend',
        artistId: 'rex-orange-county',
        artistName: 'Rex Orange County',
        album: 'Best Friend - Single',
        duration: '4:22',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3?filename=sweet-love-118835.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2017,
        genre: 'Indie Pop',
      }
    ],
    gearList: [
      { category: 'Keys', name: 'Yamaha U3 Upright Piano', description: 'The core acoustic piano behind "Best Friend" and "Apricot Princess".' },
      { category: 'Guitar', name: '1970s Fender Mustang', description: 'Used live for jangle-pop rhythms and funky muted strumming.' },
      { category: 'Synth/DAW', name: 'Roland Juno-106', description: 'Provides warm analog bass synth layers.' }
    ],
    secretFacts: [
      {
        id: 'sf-roc-1',
        title: 'Tyler, The Creator Discovery',
        category: 'Songwriting Lore',
        content: 'Tyler, The Creator discovered Rex on Soundcloud in 2016 and flew him to LA to feature on two songs for the Grammy-nominated album "Flower Boy".',
        sourceTag: 'Industry Story'
      },
      {
        id: 'sf-roc-2',
        title: 'Self-Taught Drummer First',
        category: 'Gear & Setup',
        content: 'Rex started music at age 16 playing drums at the BRIT School before ever picking up piano or singing.',
        sourceTag: 'Early Career'
      }
    ]
  },
  {
    id: 'mateus-asato',
    name: 'Mateus Asato',
    role: 'Guitar Virtuoso & Modern Tone Master',
    avatarUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80',
    coverBannerUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80',
    cardColor: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
    bio: 'Mateus Asato is a Brazilian guitar prodigy recognized worldwide for blending R&B chord melody, double-stops, neo-soul licks, and expressive phrasing.',
    country: 'Brazil / USA',
    activeSince: '2013',
    genres: ['Neo-Soul Guitar', 'Instrumental Rock', 'Fusion R&B'],
    rating: 5.0,
    totalStreams: '850M+',
    monthlyListeners: '8.4M',
    quote: '"Fingers are the true EQ. Expression comes from how you touch the string."',
    topTracks: [
      {
        id: 'ma-1',
        title: 'Asato Groove',
        artistId: 'mateus-asato',
        artistName: 'Mateus Asato',
        album: 'Sessions Vol. 1',
        duration: '3:15',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/11/06/audio_c89b3f3640.mp3?filename=funk-groovy-instrumental-125032.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2020,
        genre: 'Neo-Soul Guitar',
      },
      {
        id: 'ma-2',
        title: 'The Bridge (Guitar Soliloquy)',
        artistId: 'mateus-asato',
        artistName: 'Mateus Asato',
        album: 'Tone Journey',
        duration: '2:50',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/26/audio_d0c6b16259.mp3?filename=soft-ambient-guitar-11424.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2021,
        genre: 'Instrumental',
      }
    ],
    gearList: [
      { category: 'Guitar', name: 'Suhr Mateus Asato Signature Classic T & Antique S', description: 'Custom-built by John Suhr with Silent Single Coil System (SSCII) and Asato humbucker.' },
      { category: 'Pedal', name: 'Jackson Audio Asabi & Broken Arrow', description: 'Signature overdrive & distortion pedal dual-engine.' },
      { category: 'Amp', name: 'Suhr Bella / Bogner Shiva', description: 'Clean tube amp headroom for lush reverb and delay trails.' }
    ],
    secretFacts: [
      {
        id: 'sf-ma-1',
        title: 'Toured with Bruno Mars & Tori Kelly',
        category: 'Live Performance',
        content: 'Mateus spent 2 years as lead guitarist for Tori Kelly and made guest live solo appearances with Bruno Mars during the 24K Magic tour.',
        sourceTag: 'Tour Secrets'
      },
      {
        id: 'sf-ma-2',
        title: 'The 2021 Instagram Account Deletion',
        category: 'Studio Secrets',
        content: 'At the height of his viral fame in 2021 with 1M+ followers, Mateus deleted his Instagram account for 9 months to reconnect with raw guitar playing without algorithms.',
        sourceTag: 'Artist Lore'
      }
    ]
  },
  {
    id: 'james-arthur',
    name: 'James Arthur',
    role: 'Powerhouse Soul & Pop Balladeer',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    coverBannerUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    cardColor: 'linear-gradient(135deg, #312e81 0%, #1e1b4b 50%, #4c1d95 100%)',
    bio: 'James Andrew Arthur is a British singer and songwriter who rose to fame winning X Factor UK 2012. Renowned for his raspy, emotionally charged vocal belts and acoustic ballads.',
    country: 'United Kingdom (Middlesbrough)',
    activeSince: '2012',
    genres: ['Pop Ballad', 'Soul Rock', 'Acoustic Pop'],
    rating: 4.8,
    totalStreams: '6.2B+',
    monthlyListeners: '38.1M',
    quote: '"Pain is the greatest songwriter in the room."',
    topTracks: [
      {
        id: 'ja-1',
        title: 'Say You Won\'t Let Go',
        artistId: 'james-arthur',
        artistName: 'James Arthur',
        album: 'Back from the Edge',
        duration: '3:31',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_51a2d04a62.mp3?filename=romantic-acoustic-guitar-10904.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2016,
        genre: 'Acoustic Pop',
      }
    ],
    gearList: [
      { category: 'Guitar', name: 'Gibson J-45 Vintage Acoustic', description: 'His staple acoustic guitar for live stripped-down acoustic performances.' }
    ],
    secretFacts: [
      {
        id: 'sf-ja-1',
        title: 'Written in 20 Minutes in a Bedroom',
        category: 'Songwriting Lore',
        content: '"Say You Won\'t Let Go" was written in under 30 minutes on an un-amplified Gibson acoustic while sitting on his bedroom floor.',
        sourceTag: 'Behind the Song'
      }
    ]
  },
  {
    id: 'keshi',
    name: 'Keshi',
    role: 'Lo-Fi R&B & Falsetto Pioneer',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    coverBannerUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80',
    cardColor: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #3f3f46 100%)',
    bio: 'Casey Luong, known as Keshi, is an American singer, songwriter, multi-instrumentalist, and record producer. Revered for his atmospheric guitar melodies, falsetto, and self-produced lo-fi beats.',
    country: 'USA (Houston, Texas)',
    activeSince: '2017',
    genres: ['Lo-Fi R&B', 'Alt-Pop', 'Indie Soul'],
    rating: 4.9,
    totalStreams: '3.5B+',
    monthlyListeners: '19.8M',
    quote: '"I make music in my room so it feels like you\'re sitting right beside me."',
    topTracks: [
      {
        id: 'k-1',
        title: 'LIMBO',
        artistId: 'keshi',
        artistName: 'Keshi',
        album: 'GABRIEL',
        duration: '3:32',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/16/audio_db692b2361.mp3?filename=lofi-chill-medium-114285.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2022,
        genre: 'Alt-Pop',
      }
    ],
    gearList: [
      { category: 'Guitar', name: 'Fender American Ultra Stratocaster', description: 'Used for ambient reverb-heavy chords.' }
    ],
    secretFacts: [
      {
        id: 'sf-k-1',
        title: 'Former ICU Registered Nurse',
        category: 'Studio Secrets',
        content: 'Before music went viral, Casey worked full-time as an Oncology ICU Nurse in Houston, Texas, writing songs during 12-hour night shift breaks.',
        sourceTag: 'Secret Past'
      }
    ]
  },
  {
    id: 'd4vd',
    name: 'd4vd',
    role: 'Gen-Z Alt-Indie & Dark R&B Phenomenon',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    coverBannerUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    cardColor: 'linear-gradient(135deg, #831843 0%, #9d174d 50%, #be185d 100%)',
    bio: 'David Anthony Burke, known as d4vd (pronounced David), is an American singer-songwriter who blew up worldwide after recording multi-platinum tracks on his iPhone inside a closet.',
    country: 'USA (Houston, Texas)',
    activeSince: '2021',
    genres: ['Alt-Indie', 'Dark R&B', 'Post-Punk Pop'],
    rating: 4.8,
    totalStreams: '2.9B+',
    monthlyListeners: '28.4M',
    quote: '"I recorded my biggest songs inside a closet with BandLab on an iPhone."',
    topTracks: [
      {
        id: 'd-1',
        title: 'Romantic Homicide',
        artistId: 'd4vd',
        artistName: 'd4vd',
        album: 'Petals to Thorns',
        duration: '2:12',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=lofi-study-112191.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2022,
        genre: 'Alt-Indie',
      }
    ],
    gearList: [
      { category: 'Vocal/Mic', name: 'Apple Wired Earpods Mic', description: 'Used to record vocals for "Romantic Homicide" on BandLab iOS.' }
    ],
    secretFacts: [
      {
        id: 'sf-d-1',
        title: 'Fortnite Copyright Strike Origin',
        category: 'Songwriting Lore',
        content: 'd4vd started making music because his Fortnite gaming videos kept getting copyright strikes for background music.',
        sourceTag: 'Gamer Origin'
      }
    ]
  },
  {
    id: 'bruno-mars',
    name: 'Bruno Mars',
    role: 'Funk, R&B & Pop Superstar',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    coverBannerUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    cardColor: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)',
    bio: 'Peter Gene Hernandez, known as Bruno Mars, is a 15-time Grammy Award-winning American singer, songwriter, record producer, and showman.',
    country: 'USA (Honolulu, Hawaii)',
    activeSince: '2004',
    genres: ['Funk', 'R&B', 'Pop', 'Soul'],
    rating: 5.0,
    totalStreams: '18.5B+',
    monthlyListeners: '68.5M',
    quote: '"Don\'t try to be cool. Just be hot!"',
    topTracks: [
      {
        id: 'bm-1',
        title: 'Leave The Door Open (Silk Sonic)',
        artistId: 'bruno-mars',
        artistName: 'Bruno Mars & Anderson .Paak',
        album: 'An Evening with Silk Sonic',
        duration: '4:02',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/11/06/audio_c89b3f3640.mp3?filename=funk-groovy-instrumental-125032.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2021,
        genre: '70s Soul / Funk',
      }
    ],
    gearList: [
      { category: 'Guitar', name: 'Fender Stratocaster Masterbuilt Custom', description: 'Gold sparkle Strat used for live funk rhythm chops.' }
    ],
    secretFacts: [
      {
        id: 'sf-bm-1',
        title: 'Youngest Elvis Impersonator in Hawaii',
        category: 'Songwriting Lore',
        content: 'At age 4, Bruno was featured in MidWeek magazine as "Little Elvis".',
        sourceTag: 'Childhood Fact'
      }
    ]
  },
  {
    id: 'john-mayer',
    name: 'John Mayer',
    role: 'Guitar Titan & Singer-Songwriter Icon',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    coverBannerUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    cardColor: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)',
    bio: 'John Clayton Mayer is an American singer-songwriter and guitarist. Celebrated for seven Grammy Awards and his legendary blues trio work.',
    country: 'USA (Bridgeport, Connecticut)',
    activeSince: '1998',
    genres: ['Blues Rock', 'Pop Rock', 'Acoustic Soul'],
    rating: 5.0,
    totalStreams: '9.4B+',
    monthlyListeners: '22.3M',
    quote: '"Guitar is the tool that lets me speak when words are not enough."',
    topTracks: [
      {
        id: 'jm-1',
        title: 'Gravity',
        artistId: 'john-mayer',
        artistName: 'John Mayer',
        album: 'Continuum',
        duration: '4:05',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/26/audio_d0c6b16259.mp3?filename=soft-ambient-guitar-11424.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2006,
        genre: 'Blues Rock',
      }
    ],
    gearList: [
      { category: 'Guitar', name: 'PRS Silver Sky John Mayer Signature', description: 'Co-designed with Paul Reed Smith for vintage S-style tones.' }
    ],
    secretFacts: [
      {
        id: 'sf-jm-1',
        title: 'The Dumble Amp Secret',
        category: 'Gear & Setup',
        content: 'John owns multiple Alexander "Howard" Dumble custom amps worth over $150,000 each.',
        sourceTag: 'Rig Lore'
      }
    ]
  },
  {
    id: 'alex-crichton',
    name: 'Alex Crichton',
    role: 'Emerging Neo-Soul & R&B Instrumentalist',
    avatarUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
    coverBannerUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    cardColor: 'linear-gradient(135deg, #0f766e 0%, #115e59 50%, #134e4a 100%)',
    bio: 'Alex Crichton is a rising multi-instrumentalist producer blending jazz fusion chords, smooth basslines, and lo-fi chill soul beats.',
    country: 'Australia / UK',
    activeSince: '2019',
    genres: ['Jazz Fusion', 'Neo-Soul', 'Chill Beats'],
    rating: 4.7,
    totalStreams: '120M+',
    monthlyListeners: '2.1M',
    quote: '"Groove is about the notes you leave unplayed."',
    topTracks: [
      {
        id: 'ac-1',
        title: 'Midnight Solace',
        artistId: 'alex-crichton',
        artistName: 'Alex Crichton',
        album: 'Velvet Horizon',
        duration: '3:10',
        audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a70f7d.mp3?filename=relaxing-smooth-jazz-10884.mp3',
        coverUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=300&q=80',
        releaseYear: 2023,
        genre: 'Chill Jazz',
      }
    ],
    gearList: [
      { category: 'Keys', name: 'Rhodes Mark I Stage 73', description: 'Warm electric piano bell tones.' }
    ],
    secretFacts: [
      {
        id: 'sf-ac-1',
        title: 'Custom Rhodes Restoration',
        category: 'Gear & Setup',
        content: 'Alex spent 6 months restoring a 1974 Fender Rhodes piano.',
        sourceTag: 'Gear Restoration'
      }
    ]
  }
];

export const INITIAL_REVIEWS: UserReview[] = [
  {
    id: 'rev-1',
    artistId: 'daniel-caesar',
    userName: 'R&B_Lover99',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
    rating: 5,
    comment: 'Daniel Caesar\'s vocal harmonies in Get You are unmatched.',
    createdAt: '2 hours ago'
  }
];

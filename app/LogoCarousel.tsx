"use client";

interface LogoItem {
  name: string;
  hoverColor: string;
  symbol: React.ReactNode;
}

const rowOneLogos: LogoItem[] = [
  {
    name: "SYNAPSE AI",
    hoverColor: "group-hover:text-violet-400 group-hover:drop-shadow-[0_0_14px_rgba(168,85,247,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v6m0 6v6M3 12h6m6 0h6M5.6 5.6l4.2 4.2m4.4 4.4l4.2 4.2M5.6 18.4l4.2-4.2m4.4-4.4l4.2-4.2" />
      </svg>
    ),
  },
  {
    name: "NEURALSTUDIO",
    hoverColor: "group-hover:text-purple-400 group-hover:drop-shadow-[0_0_14px_rgba(192,132,252,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
        <line x1="12" y1="22" x2="12" y2="12" />
        <line x1="22" y1="8.5" x2="12" y2="12" />
        <line x1="2" y1="8.5" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "CHROMA LABS",
    hoverColor: "group-hover:text-pink-400 group-hover:drop-shadow-[0_0_14px_rgba(244,114,182,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 9 9h-9z" fill="currentColor" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    name: "SPECTRA",
    hoverColor: "group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 22h20L12 2z" />
        <circle cx="12" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "VORTEX FX",
    hoverColor: "group-hover:text-fuchsia-400 group-hover:drop-shadow-[0_0_14px_rgba(232,121,249,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: "HYPERFRAME",
    hoverColor: "group-hover:text-indigo-400 group-hover:drop-shadow-[0_0_14px_rgba(129,140,248,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <rect x="7" y="7" width="10" height="10" rx="2" />
      </svg>
    ),
  },
  {
    name: "LUMINA ART",
    hoverColor: "group-hover:text-amber-300 group-hover:drop-shadow-[0_0_14px_rgba(252,211,77,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2.4 6.6L21 11l-5.4 4.4L17 22l-5-3.6L7 22l1.4-6.6L3 11l6.6-2.4L12 2z" />
      </svg>
    ),
  },
  {
    name: "KINETIC ENGINE",
    hoverColor: "group-hover:text-rose-400 group-hover:drop-shadow-[0_0_14px_rgba(251,113,133,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" fillOpacity="0.3" />
      </svg>
    ),
  },
];

const rowTwoLogos: LogoItem[] = [
  {
    name: "AETHER DESIGN",
    hoverColor: "group-hover:text-violet-400 group-hover:drop-shadow-[0_0_14px_rgba(168,85,247,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 8.5l7 7" />
      </svg>
    ),
  },
  {
    name: "CYBERMIND",
    hoverColor: "group-hover:text-teal-400 group-hover:drop-shadow-[0_0_14px_rgba(45,212,191,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
      </svg>
    ),
  },
  {
    name: "OBSIDIAN FX",
    hoverColor: "group-hover:text-purple-400 group-hover:drop-shadow-[0_0_14px_rgba(192,132,252,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 12 12 22 22 12" />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.4" />
      </svg>
    ),
  },
  {
    name: "PULSE DIGITAL",
    hoverColor: "group-hover:text-pink-400 group-hover:drop-shadow-[0_0_14px_rgba(244,114,182,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: "NEXUS REALMS",
    hoverColor: "group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_14px_rgba(52,211,153,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="4" y1="12" x2="20" y2="12" />
      </svg>
    ),
  },
  {
    name: "QUANTUM VISION",
    hoverColor: "group-hover:text-sky-400 group-hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "HALO STUDIOS",
    hoverColor: "group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_14px_rgba(253,224,71,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    name: "ECHO DYNAMICS",
    hoverColor: "group-hover:text-fuchsia-400 group-hover:drop-shadow-[0_0_14px_rgba(232,121,249,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12a10 10 0 0 1 18-6M22 12a10 10 0 0 1-18 6" />
      </svg>
    ),
  },
];

const rowThreeLogos: LogoItem[] = [
  {
    name: "SOLARIS CORE",
    hoverColor: "group-hover:text-amber-400 group-hover:drop-shadow-[0_0_14px_rgba(251,191,36,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.93 4.93l2.12 2.12m9.9 9.9l2.12 2.12M4.93 19.07l2.12-2.12m9.9-9.9l2.12-2.12" />
      </svg>
    ),
  },
  {
    name: "PRISM MATRIX",
    hoverColor: "group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 3 2 21 22 21" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="7" y1="12" x2="17" y2="12" />
      </svg>
    ),
  },
  {
    name: "VELOCITY FX",
    hoverColor: "group-hover:text-rose-400 group-hover:drop-shadow-[0_0_14px_rgba(251,113,133,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="13 17 18 12 13 7" />
        <polyline points="6 17 11 12 6 7" />
      </svg>
    ),
  },
  {
    name: "MORPHIC LABS",
    hoverColor: "group-hover:text-violet-400 group-hover:drop-shadow-[0_0_14px_rgba(168,85,247,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z" />
      </svg>
    ),
  },
  {
    name: "ZENITH VISUALS",
    hoverColor: "group-hover:text-blue-400 group-hover:drop-shadow-[0_0_14px_rgba(96,165,250,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
      </svg>
    ),
  },
  {
    name: "AURORA SYNTH",
    hoverColor: "group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_14px_rgba(52,211,153,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12c2.5-4 5.5-4 8 0s5.5 4 8 0 4-2 4-2" />
        <path d="M2 17c2.5-4 5.5-4 8 0s5.5 4 8 0 4-2 4-2" />
      </svg>
    ),
  },
  {
    name: "PHANTOM MESH",
    hoverColor: "group-hover:text-purple-400 group-hover:drop-shadow-[0_0_14px_rgba(192,132,252,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" />
        <polyline points="12 2 12 12 21 7" />
        <polyline points="12 12 3 7" />
        <polyline points="12 12 12 22" />
      </svg>
    ),
  },
  {
    name: "RADIANT LABS",
    hoverColor: "group-hover:text-pink-400 group-hover:drop-shadow-[0_0_14px_rgba(244,114,182,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(45 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(-45 12 12)" />
      </svg>
    ),
  },
];

const rowFourLogos: LogoItem[] = [
  {
    name: "HORIZON ZERO",
    hoverColor: "group-hover:text-teal-400 group-hover:drop-shadow-[0_0_14px_rgba(45,212,191,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="6" />
        <ellipse cx="12" cy="12" rx="10" ry="2.5" transform="rotate(-15 12 12)" />
      </svg>
    ),
  },
  {
    name: "CHRONOS AI",
    hoverColor: "group-hover:text-indigo-400 group-hover:drop-shadow-[0_0_14px_rgba(129,140,248,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    name: "MIRAGE STUDIO",
    hoverColor: "group-hover:text-fuchsia-400 group-hover:drop-shadow-[0_0_14px_rgba(232,121,249,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="6 3 18 3 22 9 12 21 2 9" />
        <line x1="2" y1="9" x2="22" y2="9" />
      </svg>
    ),
  },
  {
    name: "VECTOR FLUX",
    hoverColor: "group-hover:text-sky-400 group-hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="3 11 22 2 13 21 11 13" />
      </svg>
    ),
  },
  {
    name: "EMBER CORE",
    hoverColor: "group-hover:text-orange-400 group-hover:drop-shadow-[0_0_14px_rgba(251,146,60,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2c.5 3 2 4.5 4 6 2 1.5 3 3.5 3 6 0 4-3.5 7-7 7s-7-3-7-7c0-3.5 2-6 4-7.5 1-1 2-2.5 3-4.5z" />
      </svg>
    ),
  },
  {
    name: "NEO CINEMA",
    hoverColor: "group-hover:text-violet-400 group-hover:drop-shadow-[0_0_14px_rgba(168,85,247,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 9h20M2 15h20M6 4v5M18 4v5M6 15v5M18 15v5" />
      </svg>
    ),
  },
  {
    name: "KINETIX 3D",
    hoverColor: "group-hover:text-lime-400 group-hover:drop-shadow-[0_0_14px_rgba(163,230,53,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18M3 12a9 9 0 0 0 18 0" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: "CELESTIAL FX",
    hoverColor: "group-hover:text-rose-400 group-hover:drop-shadow-[0_0_14px_rgba(251,113,133,0.8)]",
    symbol: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l1.8 5.4L19 10.2l-4.4 3.8 1.4 5.6-4-3.2-4 3.2 1.4-5.6-4.4-3.8 5.2-1.8L12 3z" />
      </svg>
    ),
  },
];

export default function LogoCarousel() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-black overflow-hidden border-t border-white/[0.05]">
      {/* Subtle cosmic background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[250px] bg-purple-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[250px] bg-pink-600/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Header Label */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-10 sm:mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/10 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_#a855f7]" />
          <span className="text-[10px] font-light tracking-[0.28em] text-violet-300/80 uppercase">
            CREATIVE PARTNERS & STUDIOS
          </span>
        </div>
        <p className="text-xs sm:text-sm font-light text-white/40 tracking-wider">
          Trusted by world-class concept artists, film directors, and generative studios.
        </p>
      </div>

      {/* Marquee Track Container with Edge Fade Masking */}
      <div className="relative w-full overflow-hidden flex flex-col gap-5 sm:gap-8">
        {/* Left and Right Edge Vignette Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        {/* Row 1: Right -> Left */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-left flex items-center">
            {[...rowOneLogos, ...rowOneLogos].map((logo, index) => (
              <div
                key={`r1-${index}`}
                className="group flex items-center gap-3 sm:gap-3.5 mx-5 sm:mx-12 shrink-0 cursor-pointer select-none transition-all duration-300"
              >
                <span className={`text-white/50 sm:text-white/40 transition-all duration-300 group-hover:scale-110 group-active:scale-110 ${logo.hoverColor} ${logo.hoverColor.replaceAll("group-hover:", "group-active:")}`}>
                  {logo.symbol}
                </span>
                <span className="text-xs sm:text-[13px] font-mono tracking-[0.2em] sm:tracking-[0.24em] text-white/50 sm:text-white/40 group-hover:text-white group-active:text-white transition-colors duration-300 uppercase whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left -> Right */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-right flex items-center">
            {[...rowTwoLogos, ...rowTwoLogos].map((logo, index) => (
              <div
                key={`r2-${index}`}
                className="group flex items-center gap-3 sm:gap-3.5 mx-5 sm:mx-12 shrink-0 cursor-pointer select-none transition-all duration-300"
              >
                <span className={`text-white/50 sm:text-white/40 transition-all duration-300 group-hover:scale-110 group-active:scale-110 ${logo.hoverColor} ${logo.hoverColor.replaceAll("group-hover:", "group-active:")}`}>
                  {logo.symbol}
                </span>
                <span className="text-xs sm:text-[13px] font-mono tracking-[0.2em] sm:tracking-[0.24em] text-white/50 sm:text-white/40 group-hover:text-white group-active:text-white transition-colors duration-300 uppercase whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Right -> Left (Subtly staggered speed for rich organic motion) */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-left [animation-duration:44s] flex items-center">
            {[...rowThreeLogos, ...rowThreeLogos].map((logo, index) => (
              <div
                key={`r3-${index}`}
                className="group flex items-center gap-3 sm:gap-3.5 mx-5 sm:mx-12 shrink-0 cursor-pointer select-none transition-all duration-300"
              >
                <span className={`text-white/50 sm:text-white/40 transition-all duration-300 group-hover:scale-110 group-active:scale-110 ${logo.hoverColor} ${logo.hoverColor.replaceAll("group-hover:", "group-active:")}`}>
                  {logo.symbol}
                </span>
                <span className="text-xs sm:text-[13px] font-mono tracking-[0.2em] sm:tracking-[0.24em] text-white/50 sm:text-white/40 group-hover:text-white group-active:text-white transition-colors duration-300 uppercase whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Left -> Right (Subtly staggered speed) */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-right [animation-duration:34s] flex items-center">
            {[...rowFourLogos, ...rowFourLogos].map((logo, index) => (
              <div
                key={`r4-${index}`}
                className="group flex items-center gap-3 sm:gap-3.5 mx-5 sm:mx-12 shrink-0 cursor-pointer select-none transition-all duration-300"
              >
                <span className={`text-white/50 sm:text-white/40 transition-all duration-300 group-hover:scale-110 group-active:scale-110 ${logo.hoverColor} ${logo.hoverColor.replaceAll("group-hover:", "group-active:")}`}>
                  {logo.symbol}
                </span>
                <span className="text-xs sm:text-[13px] font-mono tracking-[0.2em] sm:tracking-[0.24em] text-white/50 sm:text-white/40 group-hover:text-white group-active:text-white transition-colors duration-300 uppercase whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

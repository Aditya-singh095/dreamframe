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
      <div className="relative w-full overflow-hidden flex flex-col gap-6 sm:gap-8">
        {/* Left and Right Edge Vignette Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        {/* Row 1: Right -> Left */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-left flex items-center">
            {[...rowOneLogos, ...rowOneLogos].map((logo, index) => (
              <div
                key={`r1-${index}`}
                className="group flex items-center gap-3.5 mx-8 sm:mx-12 shrink-0 cursor-pointer select-none transition-all duration-300"
              >
                <span className={`text-white/40 transition-all duration-300 group-hover:scale-110 ${logo.hoverColor}`}>
                  {logo.symbol}
                </span>
                <span className="text-xs sm:text-[13px] font-mono tracking-[0.24em] text-white/40 group-hover:text-white transition-colors duration-300 uppercase whitespace-nowrap">
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
                className="group flex items-center gap-3.5 mx-8 sm:mx-12 shrink-0 cursor-pointer select-none transition-all duration-300"
              >
                <span className={`text-white/40 transition-all duration-300 group-hover:scale-110 ${logo.hoverColor}`}>
                  {logo.symbol}
                </span>
                <span className="text-xs sm:text-[13px] font-mono tracking-[0.24em] text-white/40 group-hover:text-white transition-colors duration-300 uppercase whitespace-nowrap">
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

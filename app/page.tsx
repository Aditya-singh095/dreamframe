"use client";

import { useState, useEffect, useRef } from "react";
import ScrollCanvas from "./ScrollCanvas";
import LogoCarousel from "./LogoCarousel";
import BentoGrid from "./BentoGrid";
import ThreeDModelSection from "./ThreeDModelSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Calculate scroll progress through the hero container (0..1)
  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full bg-black text-white selection:bg-purple-600 selection:text-white">
      {/* HERO SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="relative h-[220vh] w-full bg-black"
      >
        {/* FULL-SCREEN STICKY VIEWPORT PINNED WHILE SCROLLING */}
        <div className="sticky top-0 h-screen sm:h-screen min-h-[100dvh] h-[100dvh] w-full overflow-hidden flex flex-col justify-between">
        {/* CINEMATIC SCROLL-LINKED HTML5 CANVAS ANIMATION */}
        <ScrollCanvas scrollProgress={scrollProgress} />

        {/* DELICATE ACCENT LUMINESCENCE (ZERO BLACK OVERLAY) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-violet-600/[0.04] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-purple-600/[0.03] rounded-full blur-[130px]" />
        </div>

        {/* MAIN VISUAL: "DREAMDOOR" AT BOTTOM WITH WHITE/LAVENDER GRADIENT, PINK GLOW & DEPTH SHADOW */}
        <div className="absolute bottom-20 sm:bottom-13 lg:bottom-15 left-1/2 lg:left-[45%] -translate-x-1/2 w-[90vw] text-center select-none pointer-events-none z-[1]">
          <span className="block text-[10vw] sm:text-[11vw] lg:text-[11.4vw] font-bold tracking-[0.08em] sm:tracking-[0.13em] uppercase font-mono leading-none whitespace-nowrap bg-gradient-to-b from-white via-[#f8f6ff] to-[#d8b4fe]/90 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(244,114,182,0.38)] drop-shadow-[0_0_22px_rgba(236,72,153,0.25)] drop-shadow-[0_16px_36px_rgba(0,0,0,0.95)]">
            DREAMDOOR
          </span>
        </div>

        {/* TOP NAVIGATION BAR */}
        <header className="relative z-50 w-full px-4 sm:px-10 lg:px-16 pt-5 sm:pt-7 pb-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Brand Logo with Liquid Glass Pill Accent */}
            <a
              href="#"
              className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_4px_16px_rgba(0,0,0,0.4)] transition-all group"
            >
              {/* Fine 8-Point Geometric Sparkle Emblem */}
              <span className="relative flex items-center justify-center w-5 h-5 text-violet-300 group-hover:text-purple-200 transition-colors drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]"
                >
                  <path
                    d="M12 2L13.8 8.2C14.3 9.9 15.6 11.2 17.3 11.7L23.5 13.5L17.3 15.3C15.6 15.8 14.3 17.1 13.8 18.8L12 25L10.2 18.8C9.7 17.1 8.4 15.8 6.7 15.3L0.5 13.5L6.7 11.7C8.4 11.2 9.7 9.9 10.2 8.2L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="tracking-[0.35em] font-bold text-sm sm:text-base text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                DREAMDOOR
              </span>
            </a>

            {/* Desktop Navigation Links (Bold, High-Visibility Liquid Glass Pill) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-10 px-7 py-2.5 rounded-full liquid-glass-pill text-xs tracking-[0.2em] uppercase font-bold">
              <a
                href="#"
                className="relative text-white font-bold hover:text-white transition-colors py-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
              >
                Home
                {/* Active Dot underneath */}
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_#a855f7]" />
              </a>
              <a
                href="#about"
                className="text-white/85 hover:text-white font-bold transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
              >
                About
              </a>
              <a
                href="#products"
                className="text-white/85 hover:text-white font-bold transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
              >
                Products
              </a>
              <a
                href="#blog"
                className="text-white/85 hover:text-white font-bold transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-white/85 hover:text-white font-bold transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
              >
                Contact
              </a>
            </nav>

            {/* Right Header Controls */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Minimalist Theme/Compass Button in Liquid Glass */}
              <button
                aria-label="Engine Settings"
                className="w-9 h-9 rounded-full liquid-glass-pill flex items-center justify-center text-white/85 hover:text-white transition-all cursor-pointer"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                </svg>
              </button>

              {/* Bold High-Visibility Liquid Glass "Get Started ->" Button */}
              <a
                href="#start"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full liquid-glass-btn text-xs tracking-[0.18em] uppercase font-bold text-white transition-all duration-300"
              >
                <span>Get Started</span>
                <svg
                  className="w-3.5 h-3.5 text-white/90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              {/* Mobile Menu Toggle in Liquid Glass */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation"
                className="md:hidden w-9 h-9 rounded-full liquid-glass-pill flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu (Bold, High Contrast Liquid Glass Card) */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 mx-auto w-full p-4 rounded-2xl liquid-glass-card flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-white text-xs font-bold tracking-[0.22em] uppercase py-3 px-3.5 rounded-xl bg-white/12 border border-white/20 shadow-sm"
              >
                <span>Home</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_#a855f7]" />
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-white/85 hover:text-white text-xs font-bold tracking-[0.22em] uppercase py-3 px-3.5 rounded-xl hover:bg-white/8 transition-colors"
              >
                <span>About</span>
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-white/85 hover:text-white text-xs font-bold tracking-[0.22em] uppercase py-3 px-3.5 rounded-xl hover:bg-white/8 transition-colors"
              >
                <span>Products</span>
              </a>
              <a
                href="#blog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-white/85 hover:text-white text-xs font-bold tracking-[0.22em] uppercase py-3 px-3.5 rounded-xl hover:bg-white/8 transition-colors"
              >
                <span>Blog</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-white/85 hover:text-white text-xs font-bold tracking-[0.22em] uppercase py-3 px-3.5 rounded-xl hover:bg-white/8 transition-colors"
              >
                <span>Contact</span>
              </a>
              <a
                href="#start"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-full liquid-glass-btn text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all"
              >
                <span>Get Started</span>
                <span>→</span>
              </a>
            </div>
          )}
        </header>

        {/* MAIN HERO CONTENT STAGE */}
        <main className="relative z-10 w-full px-4 sm:px-10 lg:px-16 my-auto py-6 sm:py-8 lg:py-14">
          <div className="max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[220px]">
            {/* Watch Demo Reel Button */}
            <div className="flex items-center">
              <button
                onClick={() => setShowDemoModal(true)}
                className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 hover:border-white/40 backdrop-blur-md text-xs tracking-wider font-semibold text-white/90 hover:text-white transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-105"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300">
                  <svg
                    className="w-3 h-3 text-white fill-white ml-0.5 opacity-90 group-hover:opacity-100"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
                <span className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">Watch Demo</span>
              </button>
            </div>
          </div>
        </main>


        {/* BOTTOM FOOTER / EDITORIAL QUOTE BAR */}
        <footer id="contact" className="relative z-20 w-full px-4 sm:px-10 lg:px-16 py-4 sm:py-6 pb-6 sm:pb-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            {/* Left subtle prompt pill */}
            <div className="hidden sm:flex items-center gap-2 text-white/35 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70" />
              <span>RENDER ENGINE: FLUX-ULTRA-V2</span>
            </div>

            {/* Right Editorial Quote with Sparkle & Line (Matching Reference) */}
            <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto sm:ml-auto text-center sm:text-right">
              <span className="text-violet-300/70">✦</span>
              <span className="w-8 sm:w-16 h-[1px] bg-white/15" />
              <p className="text-[11px] sm:text-xs font-light text-white/60">
                More than a destination — <span className="text-white/90 italic">it&apos;s a feeling.</span>
              </p>
              <span className="w-1 h-1 rounded-full bg-white/30" />
            </div>
          </div>
        </footer>

        {/* DEMO VIDEO MODAL */}
        {showDemoModal && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
            onClick={() => setShowDemoModal(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-black border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-xs uppercase font-mono tracking-wider text-white/80 font-light">
                    DREAMDOOR ENGINE REEL
                  </span>
                </div>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs"
                >
                  ✕
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <video
                  src="/animation1.mp4"
                  autoPlay
                  controls
                  loop
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      </div>

      {/* SECTION 1: INFINITE LOGO CAROUSEL */}
      <section id="about">
        <LogoCarousel />
      </section>

      {/* SECTION 2: ASYMMETRIC BENTO GRID */}
      <section id="products">
        <BentoGrid />
      </section>

      {/* SECTION 3: 3D MODEL CREATOR */}
      <section id="blog">
        <ThreeDModelSection />
      </section>
    </div>
  );
}

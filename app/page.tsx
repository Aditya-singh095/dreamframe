"use client";

import { useState, useEffect, useRef } from "react";
import ScrollCanvas from "./ScrollCanvas";
import LogoCarousel from "./LogoCarousel";
import BentoGrid from "./BentoGrid";
import ThreeDModelSection from "./ThreeDModelSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Calculate scroll progress through the tall container (0..1)
  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
      setScrollProgress(progress);

      // Synchronize 01, 02, 03 vertical indicator with scroll progress
      if (progress < 0.33) {
        setActiveSlide(1);
      } else if (progress < 0.66) {
        setActiveSlide(2);
      } else {
        setActiveSlide(3);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSlideClick = (slideNum: number) => {
    setActiveSlide(slideNum);
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;
    const targetPct = (slideNum - 1) / 2;
    const targetScrollTop = window.scrollY + rect.top + targetPct * scrollableDistance;
    window.scrollTo({ top: targetScrollTop, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-black text-white selection:bg-purple-600 selection:text-white">
      {/* HERO SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="relative h-[450vh] w-full bg-black"
      >
        {/* FULL-SCREEN STICKY VIEWPORT PINNED WHILE SCROLLING */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* CINEMATIC SCROLL-LINKED HTML5 CANVAS ANIMATION */}
        <ScrollCanvas scrollProgress={scrollProgress} />

        {/* DELICATE ACCENT LUMINESCENCE (ZERO BLACK OVERLAY) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-violet-600/[0.04] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-purple-600/[0.03] rounded-full blur-[130px]" />
        </div>

        {/* MAIN VISUAL: "DREAMDOOR" AT BOTTOM WITH WHITE/LAVENDER GRADIENT, PINK GLOW & DEPTH SHADOW */}
        <div className="absolute bottom-11 sm:bottom-13 lg:bottom-15 left-[45%] -translate-x-1/2 w-[90vw] text-center select-none pointer-events-none z-[1]">
          <span className="block text-[10.4vw] sm:text-[11vw] lg:text-[11.4vw] font-bold tracking-[0.11em] sm:tracking-[0.13em] uppercase font-mono leading-none whitespace-nowrap bg-gradient-to-b from-white via-[#f8f6ff] to-[#d8b4fe]/90 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(244,114,182,0.38)] drop-shadow-[0_0_22px_rgba(236,72,153,0.25)] drop-shadow-[0_16px_36px_rgba(0,0,0,0.95)]">
            DREAMDOOR
          </span>
        </div>

        {/* TOP NAVIGATION BAR */}
        <header className="relative z-50 w-full px-6 sm:px-10 lg:px-16 pt-7 pb-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group text-white tracking-[0.32em] text-xs uppercase font-light"
            >
              {/* Fine 8-Point Geometric Sparkle Emblem */}
              <span className="relative flex items-center justify-center w-5 h-5 text-violet-300 group-hover:text-purple-200 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]"
                >
                  <path
                    d="M12 2L13.8 8.2C14.3 9.9 15.6 11.2 17.3 11.7L23.5 13.5L17.3 15.3C15.6 15.8 14.3 17.1 13.8 18.8L12 25L10.2 18.8C9.7 17.1 8.4 15.8 6.7 15.3L0.5 13.5L6.7 11.7C8.4 11.2 9.7 9.9 10.2 8.2L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="tracking-[0.35em] font-light text-xs sm:text-sm text-white/90">
                DREAMDOOR
              </span>
            </a>

            {/* Desktop Navigation Links (Delicate, Lightweight) */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-11 text-[11px] tracking-[0.22em] uppercase font-light text-white/50">
              <a
                href="#"
                className="relative text-white/95 font-normal hover:text-white transition-colors py-1"
              >
                Home
                {/* Active Dot underneath */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-400 shadow-[0_0_6px_#a855f7]" />
              </a>
              <a
                href="#about"
                className="hover:text-white/90 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#products"
                className="hover:text-white/90 transition-colors duration-200"
              >
                Products
              </a>
              <a
                href="#blog"
                className="hover:text-white/90 transition-colors duration-200"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="hover:text-white/90 transition-colors duration-200"
              >
                Contact
              </a>
            </nav>

            {/* Right Header Controls */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Minimalist Theme/Compass Button */}
              <button
                aria-label="Engine Settings"
                className="w-8 h-8 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                </svg>
              </button>

              {/* Delicate Pill "Get Started ->" Button */}
              <a
                href="#start"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-[11px] tracking-[0.18em] uppercase font-light text-white/80 hover:text-white transition-all duration-300"
              >
                <span>Get Started</span>
                <svg
                  className="w-3 h-3 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation"
                className="md:hidden w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
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

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 mx-auto max-w-md p-5 rounded-2xl bg-black/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-4">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-xs font-light tracking-[0.2em] uppercase py-1 border-b border-white/5"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 hover:text-white text-xs font-light tracking-[0.2em] uppercase py-1 border-b border-white/5"
              >
                About
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 hover:text-white text-xs font-light tracking-[0.2em] uppercase py-1 border-b border-white/5"
              >
                Products
              </a>
              <a
                href="#blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 hover:text-white text-xs font-light tracking-[0.2em] uppercase py-1 border-b border-white/5"
              >
                Blog
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 hover:text-white text-xs font-light tracking-[0.2em] uppercase py-1"
              >
                Contact
              </a>
              <a
                href="#start"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-2.5 rounded-full bg-gradient-to-r from-amber-500/80 via-rose-500/80 to-purple-600/80 text-[11px] font-light uppercase tracking-wider text-white"
              >
                Get Started →
              </a>
            </div>
          )}
        </header>

        {/* MAIN HERO CONTENT STAGE */}
        <main className="relative z-10 w-full px-6 sm:px-10 lg:px-16 my-auto py-8 lg:py-14">
          <div className="max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[220px]">
            {/* CTA Button Row (Orange/Purple Radiant CTA + Minimalist Reel Button) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Primary Orange/Purple CTA Button */}
              <a
                href="#start"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#ff6b35] via-[#ec4899] to-[#8b5cf6] hover:from-[#ff7a45] hover:via-[#f43f5e] hover:to-[#9333ea] text-white font-light text-xs tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.25),0_0_12px_rgba(139,92,246,0.2)] hover:shadow-[0_0_28px_rgba(255,107,53,0.35),0_0_18px_rgba(139,92,246,0.3)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Start Creating</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              {/* Secondary Minimalist Play Reel Button */}
              <button
                onClick={() => setShowDemoModal(true)}
                className="group flex items-center gap-3 text-xs tracking-wider font-light text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full bg-white/[0.04] group-hover:bg-white/[0.08] border border-white/15 group-hover:border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <svg
                    className="w-3 h-3 text-white fill-white ml-0.5 opacity-80 group-hover:opacity-100"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </main>

        {/* VERTICAL SLIDER INDICATOR (RIGHT EDGE) */}
        <div className="fixed right-6 sm:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-40 text-xs font-mono select-none">
          {[1, 2, 3].map((num) => {
            const formatted = num < 10 ? `0${num}` : num;
            const isActive = activeSlide === num;
            return (
              <button
                key={num}
                onClick={() => handleSlideClick(num)}
                className="relative flex items-center gap-2 group cursor-pointer py-1"
              >
                <span
                  className={`transition-colors duration-200 font-light ${
                    isActive ? "text-white/95" : "text-white/30 group-hover:text-white/60"
                  }`}
                >
                  {formatted}
                </span>
                {/* Thin Vertical Indicator Line on active item */}
                {isActive && (
                  <span className="w-[1.5px] h-6 bg-gradient-to-b from-white to-violet-400 rounded-full shadow-[0_0_6px_rgba(168,85,247,0.6)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* BOTTOM FOOTER / EDITORIAL QUOTE BAR */}
        <footer className="relative z-20 w-full px-6 sm:px-10 lg:px-16 py-6 pb-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            {/* Left subtle prompt pill */}
            <div className="hidden sm:flex items-center gap-2 text-white/35 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70" />
              <span>RENDER ENGINE: FLUX-ULTRA-V2</span>
            </div>

            {/* Right Editorial Quote with Sparkle & Line (Matching Reference) */}
            <div className="flex items-center gap-3 sm:gap-4 ml-auto text-right">
              <span className="text-violet-300/70">✦</span>
              <span className="w-12 sm:w-16 h-[1px] bg-white/15" />
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
      <LogoCarousel />

      {/* SECTION 2: ASYMMETRIC BENTO GRID */}
      <BentoGrid />

      {/* SECTION 3: 3D MODEL CREATOR */}
      <ThreeDModelSection />
    </div>
  );
}

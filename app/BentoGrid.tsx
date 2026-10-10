"use client";

import Image from "next/image";
import { useState } from "react";

export default function BentoGrid() {
  const [selectedRatio, setSelectedRatio] = useState("16:9");
  const [guidanceScale, setGuidanceScale] = useState(7.5);

  return (
    <section className="relative w-full py-20 sm:py-28 text-white overflow-hidden border-t border-white/[0.05]">
      {/* DREAMSCAPE TULIP MEADOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/bento-bg.jpg"
          alt="Dreamscape Tulip Meadow"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        {/* Soft edge dissolves & dark cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ASYMMETRIC BENTO GRID */}
        {/* ASYMMETRIC BENTO GRID CONTAINER WITH ROW-ALIGNED ROWS */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {/* ============================================================== */}
          {/* ROW 1: 7 COLS (HERO SHOWCASE) + 5 COLS (CANVAS RATIO & CFG)   */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* CARD 1: LARGE HERO SHOWCASE (7 COLS) */}
            <div className="lg:col-span-7 h-full min-h-[460px] group relative rounded-3xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.08] hover:border-violet-500/30 backdrop-blur-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              {/* Background Artwork with Subtle Zoom on Hover */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                  src="/hero-bg.jpg"
                  alt="Neural Synthesis Preview"
                  fill
                  className="object-cover object-center opacity-45 group-hover:opacity-55 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
              </div>

              {/* Top Status Tags */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[10px] font-mono tracking-[0.2em] text-violet-300 uppercase">
                  ● 8K CINEMATIC ENGINE
                </span>
                <span className="text-[10px] font-mono text-white/50 bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
                  LATENCY 190MS · EULER-A
                </span>
              </div>

              {/* Bottom Content & Interactive Prompt Bar */}
              <div className="relative z-10 mt-auto pt-16">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-violet-400 block mb-2">
                  DIFFUSION PIPELINE V4.2
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-light text-white leading-snug">
                  Sub-Millisecond Neural Synthesis
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light mt-2 max-w-md leading-relaxed">
                  Generate production-ready digital matte paintings and concept art in full 16-bit color depth with zero artifacts.
                </p>

                {/* Glass Prompt Bar */}
                <div className="mt-5 p-3 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shrink-0" />
                  <p className="font-mono text-[11px] text-white/80 truncate">
                    <span className="text-white/40">PROMPT: </span>
                    &quot;Bioluminescent crystal citadel suspended in violet clouds, 8k raw&quot;
                  </p>
                  <span className="ml-auto text-[10px] font-mono text-violet-300 bg-violet-950/60 border border-violet-500/20 px-2 py-0.5 rounded-full shrink-0">
                    RENDERED
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 2: MULTI-MODAL RATIO & GUIDANCE (5 COLS) */}
            <div className="lg:col-span-5 h-full min-h-[460px] rounded-3xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.08] hover:border-pink-500/30 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-pink-300 uppercase bg-pink-950/30 border border-pink-500/20 px-3 py-1 rounded-full">
                    CANVAS COMPOSITION
                  </span>
                  <span className="text-[10px] font-mono text-white/40">RATIO MATRIX</span>
                </div>

                <h3 className="font-serif-editorial text-2xl font-light text-white">
                  Infinite Aspect Framing
                </h3>
                <p className="text-xs text-white/50 font-light mt-1.5 leading-relaxed">
                  Seamlessly format compositions for cinema, mobile, editorial, or billboard scales.
                </p>

                {/* Ratio Buttons */}
                <div className="grid grid-cols-2 gap-2.5 mt-5">
                  {[
                    { id: "16:9", label: "16:9 Cinema", icon: "▭" },
                    { id: "9:16", label: "9:16 Portrait", icon: "▯" },
                    { id: "1:1", label: "1:1 Square", icon: "□" },
                    { id: "21:9", label: "21:9 Ultrawide", icon: "▬" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedRatio(item.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs font-mono transition-all duration-200 ${
                        selectedRatio === item.id
                          ? "bg-violet-950/40 border-violet-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                          : "bg-black/40 border-white/[0.06] text-white/50 hover:text-white/80 hover:border-white/15"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-violet-300/80">{item.icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive CFG Guidance Slider */}
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-white/50 text-[11px]">CFG GUIDANCE SCALE</span>
                  <span className="text-violet-300 font-medium">{guidanceScale.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={guidanceScale}
                  onChange={(e) => setGuidanceScale(parseFloat(e.target.value))}
                  className="w-full accent-violet-400 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-white/30 mt-1">
                  <span>Subtle (1.0)</span>
                  <span>Balanced (7.5)</span>
                  <span>Hyper-Strict (15.0)</span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* ROW 2: 4 COLS (PHILOSOPHY) + 5 COLS (BLOOM) + 3 COLS (RADAR)  */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* CARD 3: TALL EDITORIAL TYPOGRAPHY (4 COLS) */}
            <div className="md:col-span-1 lg:col-span-4 h-full min-h-[400px] rounded-3xl bg-gradient-to-br from-violet-950/20 via-black to-black border border-white/[0.08] hover:border-violet-500/30 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-[0.25em] text-violet-300 uppercase">
                  LATENT PHILOSOPHY
                </span>
                <span className="text-violet-400 text-sm">✦</span>
              </div>

              {/* Tall Vertical Typography */}
              <div className="my-auto py-6">
                <p className="font-serif-editorial text-3xl sm:text-4xl font-light leading-[1.18] text-white/95">
                  <span className="block italic text-white/40">Imagine.</span>
                  <span className="block text-white">Synthesize.</span>
                  <span className="block bg-gradient-to-r from-violet-300 via-pink-300 to-amber-200 bg-clip-text text-transparent">
                    Transcend.
                  </span>
                </p>
                <p className="text-xs text-white/50 font-light mt-3 leading-relaxed">
                  Beyond prompting — sculpting the latent continuum into tangible visual poetry.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/40">LOSS: 0.014 · STEPS: 50</span>
                <div className="flex items-center gap-1.5 text-xs text-violet-300 hover:text-white transition-colors cursor-pointer">
                  <span>Explore Models</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            {/* CARD 4: CELESTIAL BLOOM & SEED CONSISTENCY (5 COLS) */}
            <div className="md:col-span-1 lg:col-span-5 h-full min-h-[400px] group relative rounded-3xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.08] hover:border-purple-500/30 backdrop-blur-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                  src="/bento-bloom.jpg"
                  alt="Celestial Bloomscape Dream"
                  fill
                  className="object-cover object-center opacity-50 group-hover:opacity-65 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
              </div>

              {/* Floating Status Pill */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono tracking-widest text-pink-300 uppercase backdrop-blur-md">
                  ✦ SEED LOCK: #8842-DF
                </span>
                <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#ec4899]" />
              </div>

              <div className="relative z-10 mt-auto pt-20">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-pink-300 block mb-1">
                  COHERENCE SYSTEM
                </span>
                <h3 className="font-serif-editorial text-2xl font-light text-white">
                  Multi-Asset Style Synchronization
                </h3>
                <p className="text-xs text-white/60 font-light mt-1.5 leading-relaxed">
                  Maintain characters, environments, and lighting cues across hundreds of continuous generations.
                </p>
              </div>
            </div>

            {/* CARD 5: REAL-TIME RADAR TELEMETRY (3 COLS) */}
            <div className="md:col-span-2 lg:col-span-3 h-full min-h-[400px] rounded-3xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.08] hover:border-violet-500/30 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  DISPATCH CLUSTER
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              </div>

              {/* Radar Circular Pulse Element */}
              <div className="my-auto py-4 flex flex-col items-center justify-center">
                <div className="relative w-28 h-28 rounded-full border border-violet-500/20 flex items-center justify-center">
                  <div className="absolute inset-2 rounded-full border border-violet-500/40 animate-ping opacity-30" />
                  <div className="absolute inset-4 rounded-full border border-pink-500/30" />
                  <span className="text-2xl font-mono font-light text-white">99.9%</span>
                </div>
                <span className="text-[11px] font-mono text-white/50 mt-3 tracking-wider">
                  CLUSTER UPTIME
                </span>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono">
                <span className="text-white/40">LATENCY: 14MS</span>
                <span className="text-violet-300">10K+ / MIN</span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* ROW 3: 4 COLS (FACE/IDENTITY) + 8 COLS (LATENT MATRIX)        */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* CARD 6: AVATAR / CHARACTER IDENTITY (4 COLS) */}
            <div className="md:col-span-12 lg:col-span-4 h-full min-h-[380px] rounded-3xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.08] hover:border-violet-500/30 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              {/* Top Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_6px_#a855f7]" />
                  <span className="text-[10px] font-mono text-violet-300 uppercase tracking-widest">
                    IDENTITY SYNC
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  99.8% PRECISION
                </span>
              </div>

              {/* Center Biometric Face Preview Frame */}
              <div className="my-auto py-4 flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border border-white/20 shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/card-thumb-portrait.jpg"
                    alt="Avatar Face Match"
                    fill
                    className="object-cover"
                  />
                  {/* Biometric Frame Overlay */}
                  <div className="absolute inset-0 border border-violet-400/30 pointer-events-none" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-serif-editorial font-normal text-white">
                    Neural Face Lock
                  </span>
                  <span className="text-xs text-white/50 font-light mt-0.5 leading-snug">
                    Zero drift across multi-angle cinematography.
                  </span>
                  <span className="mt-2 text-[10px] font-mono text-violet-300/80">
                    468 MESH LANDMARKS
                  </span>
                </div>
              </div>

              {/* Bottom Spec List */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-white/40">LIGHTING MODE</span>
                  <span className="text-white/80">Volumetric Studio 8K</span>
                </div>
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-white/40">SUBSURFACE SCATTER</span>
                  <span className="text-white/80">8-Pass Micro-Texture</span>
                </div>
              </div>
            </div>

            {/* CARD 7: GRAND LATENT SPACE GRID TERMINAL (8 COLS) */}
            <div className="md:col-span-12 lg:col-span-8 h-full min-h-[380px] rounded-3xl bg-black border border-white/[0.08] hover:border-violet-500/30 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              {/* Tech Matrix Grid Background */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />

              {/* Top Coordinates Header */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-white/70 uppercase">
                    LATENT_MATRIX // SPACE_DISPATCH
                  </span>
                </div>
                <span className="text-[10px] font-mono text-violet-300/80">
                  X: 0.842 | Y: 1.205 | Z: -0.419
                </span>
              </div>

              {/* Main Editorial Statement */}
              <div className="relative z-10 my-auto py-4">
                <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
                  Turn Words Into Living Worlds.
                </h3>
                <p className="text-xs sm:text-sm text-white/50 font-light mt-2 max-w-lg leading-relaxed">
                  Weighted multi-vector token manipulation lets you direct depth, chromatic saturation, and composition in realtime.
                </p>
              </div>

              {/* Token Tags Row */}
              <div className="relative z-10 flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] font-mono text-violet-300">
                  [Surrealism: +1.4]
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] font-mono text-pink-300">
                  [Volumetric Haze: +1.2]
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] font-mono text-amber-200">
                  [Cinematic Lens: +1.0]
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] font-mono text-purple-300">
                  [Octane Render: +0.9]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

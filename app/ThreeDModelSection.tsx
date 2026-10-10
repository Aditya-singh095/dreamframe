"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type RenderMode = "textured" | "clay" | "wireframe";

export default function ThreeDModelSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // UI state
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [renderMode, setRenderMode] = useState<RenderMode>("textured");
  const [autoRotate, setAutoRotate] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Three.js refs for interaction
  const sceneRef = useRef<THREE.Scene | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const materialsMapRef = useRef<Map<THREE.Mesh, THREE.Material | THREE.Material[]>>(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.6, 3.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // 2. Controls
    const controls = new OrbitControls(camera, canvas);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.4;
    controls.minDistance = 1.2;
    controls.maxDistance = 5.5;
    controls.maxPolarAngle = Math.PI / 2 + 0.15; // Don't go below ground
    controls.target.set(0, 0, 0);

    // 3. Studio Lighting for Clean Light-Gray Aesthetic
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 4, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdbeafe, 1.2);
    fillLight.position.set(-4, 2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xf5d0fe, 1.6);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Subtle contact ground shadow
    const shadowGeo = new THREE.PlaneGeometry(3, 3);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.0;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 4. Load Model
    let isCancelled = false;
    const loader = new GLTFLoader();

    loader.load(
      "/models/waifu138.glb",
      (gltf) => {
        if (isCancelled) return;
        const model = gltf.scene;
        modelRef.current = model;

        // Auto-center and normalize size
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Center model at origin
        model.position.x = -center.x;
        model.position.y = -center.y;
        model.position.z = -center.z;

        // Scale to fit viewport (~2.0 units height)
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetScale = 2.0 / maxDim;
        model.scale.setScalar(targetScale);

        // Store original materials & configure shadows
        materialsMapRef.current.clear();
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            materialsMapRef.current.set(mesh, mesh.material);
          }
        });

        scene.add(model);
        setLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const pct = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadProgress(pct);
        }
      },
      (error) => {
        console.error("Error loading 3D model:", error);
        setLoading(false);
      }
    );

    // 5. Responsive Resize
    const handleResize = () => {
      if (!container || !canvas) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 6. Animation Loop (Pause when off-screen)
    let animationId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isVisible) return;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  // Update Auto-Rotate
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  // Update Render Mode (Textured / Clay / Wireframe)
  useEffect(() => {
    const model = modelRef.current;
    if (!model) return;

    const clayMaterial = new THREE.MeshStandardMaterial({
      color: 0xe5e7eb,
      roughness: 0.45,
      metalness: 0.1,
    });

    const wireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0x4f46e5,
      wireframe: true,
      roughness: 0.5,
    });

    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (renderMode === "textured") {
          const orig = materialsMapRef.current.get(mesh);
          if (orig) mesh.material = orig;
        } else if (renderMode === "clay") {
          mesh.material = clayMaterial;
        } else if (renderMode === "wireframe") {
          mesh.material = wireframeMaterial;
        }
      }
    });
  }, [renderMode]);

  const handleResetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      controlsRef.current.target.set(0, 0, 0);
    }
  };

  return (
    <section className="relative w-full bg-[#f4f5f7] text-neutral-900 overflow-hidden border-t border-neutral-300/80 select-none">
      {/* AMBIENT STUDIO LIGHTING GRADIENTS (CLEAN LIGHT-GRAY) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-white via-neutral-100/60 to-transparent blur-3xl opacity-80" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-indigo-50/40 rounded-full blur-3xl" />
        <div className="absolute -left-20 top-1/3 w-[450px] h-[450px] bg-purple-50/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 pt-10 pb-6">
        {/* ============================================================== */}
        {/* 1. TOP BAR (LOGO, SUB-NAV, ACTION PILL)                        */}
        {/* ============================================================== */}
        <div className="flex items-center justify-between pb-8 border-b border-neutral-300/60">
          {/* Left Brand Identifier */}
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-neutral-900 text-white text-xs font-mono">
              3D
            </span>
            <span className="font-mono text-xs tracking-[0.28em] uppercase font-bold text-neutral-900">
              DREAMFRAME // MESH
            </span>
          </div>

          {/* Center Navigation Links (Matching hero3 reference) */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-[0.24em] uppercase text-neutral-500">
            <a href="#overview" className="hover:text-neutral-900 transition-colors text-neutral-900 font-semibold">
              STUDIO
            </a>
            <a href="#topology" className="hover:text-neutral-900 transition-colors">
              TOPOLOGY
            </a>
            <a href="#pipeline" className="hover:text-neutral-900 transition-colors">
              PIPELINE
            </a>
            <a href="#export" className="hover:text-neutral-900 transition-colors">
              EXPORT
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="#start"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono tracking-wider transition-all shadow-sm hover:shadow"
            >
              <span>LAUNCH 3D</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. MAIN 3D SHOWCASE STAGE                                      */}
        {/* ============================================================== */}
        <div className="relative min-h-[640px] sm:min-h-[720px] flex items-center justify-center my-4 overflow-hidden">
          {/* OVERSIZED DISPLAY TYPOGRAPHY (MATCHING hero3 "NUORBIT" PROPORTIONS) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <span className="text-[12vw] sm:text-[13vw] font-mono font-black tracking-[0.22em] uppercase text-neutral-900/[0.045] whitespace-nowrap leading-none">
              DREAM3D
            </span>
          </div>

          {/* LEFT CONTENT: HEADLINE, SUBTITLE, CTA (EXACT LAYOUT FROM hero3) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 max-w-sm sm:max-w-md pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 border border-neutral-300 text-[10px] font-mono tracking-[0.2em] text-neutral-700 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              <span>AI TEXT/IMAGE TO 3D MESH</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.08] tracking-tight text-neutral-900">
              Sculpt Reality in Zero Latency.
            </h2>

            <p className="mt-4 text-xs sm:text-sm font-mono tracking-wider text-neutral-500 uppercase leading-relaxed">
              DISCOVER PRODUCTION DIGITAL ASSETS AND HIGH-DENSITY TOPOLOGIES
            </p>

            {/* Left Action CTA */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#start"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono tracking-[0.18em] uppercase transition-all shadow-md hover:shadow-lg"
              >
                <span>GENERATE 3D MODEL</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Mesh Specs Pill */}
            <div className="mt-8 pt-6 border-t border-neutral-300/60 flex items-center gap-6 text-[11px] font-mono text-neutral-500">
              <div>
                <span className="block text-neutral-900 font-semibold text-xs">568,813</span>
                <span>VERTICES</span>
              </div>
              <div className="w-[1px] h-6 bg-neutral-300" />
              <div>
                <span className="block text-neutral-900 font-semibold text-xs">WATERTIGHT</span>
                <span>STL / GLTF</span>
              </div>
            </div>
          </div>

          {/* CENTER/RIGHT 3D WEBGL VIEWPORT */}
          <div
            ref={containerRef}
            className="relative w-full h-[580px] sm:h-[660px] flex items-center justify-center z-10 cursor-grab active:cursor-grabbing"
          >
            <canvas ref={canvasRef} className="w-full h-full block" />

            {/* Loading Spinner */}
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm z-30">
                <div className="w-10 h-10 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin mb-3" />
                <span className="text-xs font-mono text-neutral-700 tracking-wider">
                  LOADING 3D MESH ({loadProgress}%)
                </span>
              </div>
            )}

            {/* Interactive Control Pill Overlay (Top-Right) */}
            <div className="absolute top-4 right-4 z-20 flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/80 border border-neutral-300/80 backdrop-blur-md shadow-sm">
              {/* Mode Buttons */}
              <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl">
                {(["textured", "clay", "wireframe"] as RenderMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setRenderMode(mode)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all ${
                      renderMode === mode
                        ? "bg-white text-neutral-900 font-semibold shadow-sm"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Auto Rotate Toggle */}
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-mono uppercase tracking-wider border transition-all ${
                  autoRotate
                    ? "bg-indigo-50 border-indigo-200 text-indigo-700 font-semibold"
                    : "bg-white border-neutral-200 text-neutral-500"
                }`}
                title="Toggle Auto Spin"
              >
                {autoRotate ? "↺ SPINNING" : "⏵ PAUSED"}
              </button>

              {/* Reset View */}
              <button
                onClick={handleResetView}
                className="px-3 py-1.5 rounded-xl text-[10px] font-mono uppercase tracking-wider bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 transition-all"
                title="Reset Camera"
              >
                RESET
              </button>
            </div>

            {/* Floating Interaction Hint (Bottom Center) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-20">
              <span className="px-3 py-1 rounded-full bg-white/70 border border-neutral-300 text-[10px] font-mono text-neutral-600 uppercase tracking-widest backdrop-blur-md shadow-xs">
                ✦ DRAG TO ROTATE 360° · SCROLL TO ZOOM
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. BOTTOM TELEMETRY / METRIC BAR (EXACT HERO3 MATCH)           */}
        {/* ============================================================== */}
        <div className="pt-6 border-t border-neutral-300/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {/* STAT 1 (hero3 27K+ ARTISTS) */}
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-neutral-900 tracking-tight">
              48K+
            </span>
            <span className="text-[10px] font-mono tracking-[0.24em] text-neutral-500 uppercase mt-0.5">
              3D ASSETS CREATED
            </span>
          </div>

          {/* STAT 2 (hero3 876K+ ARTWORK) */}
          <div className="flex flex-col border-l border-neutral-300/80 pl-6">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-neutral-900 tracking-tight">
              1.2M+
            </span>
            <span className="text-[10px] font-mono tracking-[0.24em] text-neutral-500 uppercase mt-0.5">
              WATERTIGHT MESHES
            </span>
          </div>

          {/* STAT 3 (hero3 20K+ AUCTION) */}
          <div className="flex flex-col border-l border-neutral-300/80 pl-6">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-neutral-900 tracking-tight">
              0.8s
            </span>
            <span className="text-[10px] font-mono tracking-[0.24em] text-neutral-500 uppercase mt-0.5">
              INFERENCE LATENCY
            </span>
          </div>

          {/* PLAY VIDEO BUTTON (MATCHING hero3 PLAY VIDEO CTA) */}
          <div className="flex items-center gap-3 border-l border-neutral-300/80 pl-6">
            <button
              onClick={() => setShowVideoModal(true)}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full border border-neutral-900 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-neutral-900 group-hover:text-white">
                <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </div>
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase font-bold text-neutral-900">
                PLAY VIDEO
              </span>
            </button>
          </div>

          {/* FORMATS / SOCIALS COLUMN */}
          <div className="flex items-center justify-end gap-2 border-l border-neutral-300/80 pl-6">
            <span className="px-2 py-1 rounded bg-neutral-200/80 text-[10px] font-mono font-semibold text-neutral-700">
              GLB
            </span>
            <span className="px-2 py-1 rounded bg-neutral-200/80 text-[10px] font-mono font-semibold text-neutral-700">
              STL
            </span>
            <span className="px-2 py-1 rounded bg-neutral-200/80 text-[10px] font-mono font-semibold text-neutral-700">
              OBJ
            </span>
            <span className="px-2 py-1 rounded bg-neutral-200/80 text-[10px] font-mono font-semibold text-neutral-700">
              USDZ
            </span>
          </div>
        </div>
      </div>

      {/* VIDEO PREVIEW MODAL */}
      {showVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-neutral-950 border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-xs uppercase font-mono tracking-wider text-white/90">
                  3D GENERATIVE PIPELINE REEL
                </span>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
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
    </section>
  );
}

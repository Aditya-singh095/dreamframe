"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 50;

interface ScrollCanvasProps {
  scrollProgress: number;
}

export default function ScrollCanvas({ scrollProgress }: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const lastDrawnFrameRef = useRef<number>(-1);
  const lastDrawnImgRef = useRef<HTMLImageElement | null>(null);
  const isMountedRef = useRef<boolean>(true);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState<boolean>(false);

  // Map incoming scroll progress (0..1) to target frame index (1..50)
  useEffect(() => {
    const rawTarget = 1 + scrollProgress * (TOTAL_FRAMES - 1);
    targetFrameRef.current = Math.min(Math.max(rawTarget, 1), TOTAL_FRAMES);
  }, [scrollProgress]);

  // Find the closest loaded frame to prevent flickering / blank renders
  const getClosestLoadedImage = useCallback((index: number): HTMLImageElement | null => {
    const map = imagesRef.current;
    if (map.has(index)) return map.get(index)!;

    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      if (index - offset >= 1 && map.has(index - offset)) {
        return map.get(index - offset)!;
      }
      if (index + offset <= TOTAL_FRAMES && map.has(index + offset)) {
        return map.get(index + offset)!;
      }
    }
    return null;
  }, []);

  // Draw image with aspect-ratio "cover" logic (Apple-style responsive scaling)
  const drawImageCover = useCallback((ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const cw = ctx.canvas.width;
    const ch = ctx.canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;

    if (!iw || !ih) return;

    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const cx = (cw - nw) / 2;
    const cy = (ch - nh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, cx, cy, nw, nh);
  }, []);

  // Render a specific frame on the canvas
  const renderCanvasFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const img = getClosestLoadedImage(frameIndex);
      if (!img || !img.complete) return;

      if (lastDrawnImgRef.current === img && lastDrawnFrameRef.current === frameIndex) {
        return;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      drawImageCover(ctx, img);

      lastDrawnFrameRef.current = frameIndex;
      lastDrawnImgRef.current = img;
    },
    [getClosestLoadedImage, drawImageCover]
  );

  // Progressive preloader: load Frame 1 immediately, then keyframes, then full sequence
  useEffect(() => {
    isMountedRef.current = true;
    const map = imagesRef.current;

    const loadImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        if (map.has(index)) {
          resolve(map.get(index)!);
          return;
        }

        const img = new Image();
        const formatted = String(index).padStart(3, "0");
        img.src = `/frames/ezgif-frame-${formatted}.png`;

        img.onload = () => {
          if (!isMountedRef.current) return;
          map.set(index, img);
          if (index === 1) {
            setFirstFrameLoaded(true);
            renderCanvasFrame(1);
          }
          resolve(img);
        };
        img.onerror = reject;
      });
    };

    // 1. Immediate priority: Frame 1
    loadImage(1).then(() => {
      // 2. High priority keyframes (every 5th frame for instant scrub response)
      const keyframes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
      Promise.all(keyframes.map((i) => loadImage(i).catch(() => null))).then(() => {
        // 3. Progressive batches for remaining frames
        const remaining: number[] = [];
        for (let i = 2; i <= TOTAL_FRAMES; i++) {
          if (!map.has(i)) remaining.push(i);
        }

        const loadNextBatch = (batchSize = 4) => {
          if (!isMountedRef.current || remaining.length === 0) return;
          const currentBatch = remaining.splice(0, batchSize);
          Promise.all(currentBatch.map((i) => loadImage(i).catch(() => null))).then(() => {
            if ("requestIdleCallback" in window) {
              window.requestIdleCallback(() => loadNextBatch(batchSize));
            } else {
              setTimeout(() => loadNextBatch(batchSize), 25);
            }
          });
        };

        loadNextBatch(4);
      });
    });

    return () => {
      isMountedRef.current = false;
    };
  }, [renderCanvasFrame]);

  // Handle Resize and Retina DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    const targetWidth = Math.floor(displayWidth * dpr);
    const targetHeight = Math.floor(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      lastDrawnFrameRef.current = -1;
      lastDrawnImgRef.current = null;
    }

    const currentFrame = Math.round(currentFrameRef.current);
    renderCanvasFrame(currentFrame);
  }, [renderCanvasFrame]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Continuous animation loop (lerp interpolation & prefers-reduced-motion)
  useEffect(() => {
    let animationFrameId: number;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = () => {
      if (prefersReducedMotion) {
        currentFrameRef.current = targetFrameRef.current;
      } else {
        // Silky Apple-level lerp easing
        const delta = targetFrameRef.current - currentFrameRef.current;
        currentFrameRef.current += delta * 0.12;
      }

      const frameToDraw = Math.round(currentFrameRef.current);
      renderCanvasFrame(frameToDraw);

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [renderCanvasFrame]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* FULL-SCREEN STICKY HTML5 CANVAS */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
          firstFrameLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

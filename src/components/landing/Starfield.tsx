"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function paint() {
      if (!cvs) return;
      const ctx = cvs.getContext("2d");
      if (!ctx) return;
      const W = cvs.width;
      const H = cvs.height;
      ctx.clearRect(0, 0, W, H);
      const count = Math.floor((W * H) / 16200);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * W;
        const y = Math.random() * H;
        const sz = Math.random();
        const r =
          sz < 0.85
            ? (0.5 + Math.random() * 0.9) * dpr
            : (1.4 + Math.random() * 1.2) * dpr;
        const a =
          sz < 0.85 ? 0.45 + Math.random() * 0.45 : 0.85 + Math.random() * 0.15;
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
        if (sz >= 0.85) {
          const g = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
          g.addColorStop(0, "rgba(255,255,255,0.35)");
          g.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function resize() {
      if (!cvs) return;
      const r = cvs.getBoundingClientRect();
      cvs.width = Math.max(1, Math.floor(r.width * dpr));
      cvs.height = Math.max(1, Math.floor(r.height * dpr));
      paint();
    }

    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="starfield">
      <canvas ref={canvasRef} />
      <div className="twinkle" />
    </div>
  );
}

"use client";

import { useEffect } from "react";

export default function LandingEffects() {
  useEffect(() => {
    // Reveal-on-scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));

    // Parallax
    const stage = document.querySelector<HTMLElement>(".globe-stage");
    const arc = document.querySelector<HTMLElement>(".arc");
    const starsCanvas = document.querySelector<HTMLElement>(".starfield");
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (stage) stage.style.transform = `translate(calc(-50% + ${x * 18}px), calc(-50% + ${y * 10}px))`;
      if (arc) arc.style.transform = `translate(calc(-50% + ${x * 8}px), calc(-50% + ${y * 6}px))`;
      if (starsCanvas) starsCanvas.style.transform = `translate(${x * -20}px, ${y * -14}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Smooth anchor scroll
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const onAnchorClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const id = a.getAttribute("href");
      if (id && id.length > 1) {
        const t = document.querySelector(id);
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    anchors.forEach((a) => a.addEventListener("click", onAnchorClick));

    return () => {
      io.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      anchors.forEach((a) => a.removeEventListener("click", onAnchorClick));
    };
  }, []);

  return null;
}

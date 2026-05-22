"use client";

import { useEffect } from "react";

export default function ScrollFallbacks() {
  useEffect(() => {
    // 1. SCROLL PROGRESS & HERO BG PARALLAX FALLBACK
    // Only execute if native CSS scroll-driven animations are unsupported
    const hasScrollTimeline = CSS.supports("animation-timeline", "scroll()");
    
    if (!hasScrollTimeline) {
      const progressBar = document.getElementById("progressBar");
      
      const handleScrollProgress = () => {
        if (!progressBar) return;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progressPercentage = scrollable > 0 ? scrolled / scrollable : 0;
        progressBar.style.transform = `scaleX(${progressPercentage})`;
      };

      const heroBg = document.querySelector(".hero-bg-text") as HTMLElement;
      
      const handleParallax = () => {
        if (!heroBg) return;
        heroBg.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.3}px))`;
      };

      const handleScroll = () => {
        handleScrollProgress();
        handleParallax();
      };

      // Add passive listener to prevent scroll lag on main thread
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial run

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    // 2. INTERSECTION OBSERVER REVEAL FALLBACK
    // Runs only if CSS view-driven timelines are unsupported (e.g. Firefox)
    const hasViewTimeline = CSS.supports("(animation-timeline: view()) and (animation-range: entry)");
    
    if (!hasViewTimeline) {
      const reveals = document.querySelectorAll(".reveal");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px" // Start triggering slightly before entering to feel snappy
        }
      );

      reveals.forEach((r) => observer.observe(r));

      return () => {
        reveals.forEach((r) => observer.unobserve(r));
        observer.disconnect();
      };
    }
  }, []);

  return null; // Pure functional layout helper, renders no markup
}

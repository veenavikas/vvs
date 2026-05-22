"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user is on a desktop device with a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      return; // Do not initialize custom cursor on touch devices
    }

    // Add class to body to hide standard cursor on desktop
    document.body.classList.add("custom-cursor-active");

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }

      // Update global CSS variables for high-performance dynamic spotlight glow
      document.documentElement.style.setProperty("--mouse-x", `${mouseX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Smooth follower ring animation using requestAnimationFrame
    let animationFrameId: number;
    const updateRingPosition = () => {
      // Lerp (Linear Interpolation) for buttery smooth drag-behind effect
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }

      animationFrameId = requestAnimationFrame(updateRingPosition);
    };

    animationFrameId = requestAnimationFrame(updateRingPosition);

    // Hover scale effects on interactive elements
    const handleMouseEnter = (e: Event) => {
      if (cursor && ring) {
        cursor.style.width = "18px";
        cursor.style.height = "18px";
        ring.style.width = "54px";
        ring.style.height = "54px";

        // Dynamic theme-based color changes based on section proximity
        const target = e.currentTarget as HTMLElement;
        if (target.classList.contains("ai-product") || target.closest("#ai")) {
          ring.style.borderColor = "var(--accent-cyan)";
          ring.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.4)";
          cursor.style.background = "var(--accent-cyan)";
          cursor.style.boxShadow = "0 0 10px var(--accent-cyan)";
        } else if (target.classList.contains("product-item") || target.closest("#products")) {
          ring.style.borderColor = "var(--accent-orange)";
          ring.style.boxShadow = "0 0 20px rgba(255, 94, 26, 0.4)";
          cursor.style.background = "var(--accent-orange)";
          cursor.style.boxShadow = "0 0 10px var(--accent-orange)";
        } else if (target.classList.contains("training-stat") || target.closest("#training")) {
          ring.style.borderColor = "var(--accent-gold)";
          ring.style.boxShadow = "0 0 20px rgba(242, 194, 73, 0.4)";
          cursor.style.background = "var(--accent-gold)";
          cursor.style.boxShadow = "0 0 10px var(--accent-gold)";
        } else {
          ring.style.borderColor = "var(--accent-orange)";
          ring.style.boxShadow = "0 0 15px rgba(255, 94, 26, 0.3)";
          cursor.style.background = "var(--accent-orange)";
          cursor.style.boxShadow = "0 0 10px var(--accent-orange)";
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursor && ring) {
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        ring.style.width = "40px";
        ring.style.height = "40px";
        ring.style.borderColor = "var(--accent-orange)";
        ring.style.boxShadow = "0 0 15px rgba(255, 94, 26, 0.2)";
        cursor.style.background = "var(--accent-orange)";
        cursor.style.boxShadow = "0 0 10px var(--accent-orange)";
      }
    };

    // Attach listeners to interactive items
    const attachHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, .product-item, .ai-product, .training-stat, [role='button']"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    attachHoverListeners();

    // Create an observer to automatically bind hover effects to dynamically loaded elements
    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("custom-cursor-active");
      observer.disconnect();

      const interactives = document.querySelectorAll(
        "a, button, .product-item, .ai-product, .training-stat, [role='button']"
      );
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" id="cursor" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" id="cursorRing" aria-hidden="true" />
    </>
  );
}

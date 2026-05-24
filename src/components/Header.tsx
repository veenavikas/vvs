"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome = false }: HeaderProps) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Detect theme class set by ThemeScript or system preference
    const isDark = document.documentElement.classList.contains("theme-dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("theme-dark");
      document.documentElement.classList.remove("theme-light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("theme-light");
      document.documentElement.classList.remove("theme-dark");
      localStorage.setItem("theme", "light");
    }
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={isHome ? "home-header" : "subpage-header"}>
      <nav className={isHome ? "" : "subpage-nav"} aria-label="Main Navigation">
        <Link href="/" className="nav-logo" id="navLogoBrand">
          VVB
        </Link>
        <div className="nav-links">
          <Link href="/story" id="linkStory" className={isActive("/story") ? "active" : ""}>
            Story
          </Link>
          <Link href="/products" id="linkProducts" className={isActive("/products") ? "active" : ""}>
            Products
          </Link>
          <Link href="/ai" id="linkAi" className={isActive("/ai") ? "active" : ""}>
            AI Suite
          </Link>
          <Link href="/training" id="linkTraining" className={isActive("/training") ? "active" : ""}>
            Training
          </Link>
          <Link href="/contact" id="linkContact" className={isActive("/contact") ? "active" : ""}>
            Contact
          </Link>
          
          <button
            onClick={toggleTheme}
            className="theme-switcher-btn"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="moon-svg">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sun-svg">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

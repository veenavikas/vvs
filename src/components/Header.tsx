"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome = false }: HeaderProps) {
  const pathname = usePathname();

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
        </div>
      </nav>
    </header>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ThemeScript from "@/components/ThemeScript";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Veena Vikas B — CTO · Builder · Trainer",
  description: "Visakhapatnam, India. Portfolio of Veena Vikas B: CTO, Full Stack Engineer, AI Architect, and Technical Trainer. Shipping 50+ production systems and growing engineering talent.",
  authors: [{ name: "Veena Vikas B" }],
  keywords: [
    "Veena Vikas B",
    "Digital IT Hub",
    "CTO",
    "Full Stack Engineer",
    "AI Architect",
    "Technical Trainer",
    "MERN Stack",
    "Next.js",
    "AWS",
    "Agentic AI",
    "RAG Pipelines",
    "Visakhapatnam",
    "India"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <div className="progress-bar" id="progressBar" aria-hidden="true" />
        <div className="designer-grid" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

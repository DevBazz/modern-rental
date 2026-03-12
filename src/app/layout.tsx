import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { SplitTransition } from "@/components/layout/split-transition";
import { LiquidGlassCursor } from "@/components/ui/LiquidGlassCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cousin James - Modern Rental Housing",
  description: "Modern, Awwwards-inspired rental housing app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased bg-zinc-950 text-zinc-50 grain-bg`}
      >
        <LiquidGlassCursor />
        <SmoothScroll>
          <SplitTransition>
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </SplitTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}

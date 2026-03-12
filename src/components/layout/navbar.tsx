"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { FullPageMenu } from "./FullPageMenu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-8 md:px-16 mix-blend-difference">
        <Link 
          href="/" 
          className="text-2xl font-serif font-bold tracking-tighter text-white"
        >
          COUSIN<span className="italic font-light text-zinc-300">JAMES</span>
        </Link>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Toggle Menu"
        >
          <span className="text-sm font-medium tracking-wide">MENU</span>
          <Menu size={18} strokeWidth={1.5} />
        </button>
      </header>

      <FullPageMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;

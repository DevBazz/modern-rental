"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { useLenis } from "lenis/react";

const navLinks = [
  { name: "Home", href: "/", subtitle: "Where it all begins" },
  { name: "Properties", href: "/properties", subtitle: "Curated architectural gems" },
  { name: "About Us", href: "/about", subtitle: "Our vision and mission" },
  { name: "Contact", href: "/contact", subtitle: "Get in touch with us" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  // Disable scroll when menu is open using Lenis
  useEffect(() => {
    if (lenis) {
      if (isOpen) {
        lenis.stop();
        document.body.style.overflow = "hidden";
      } else {
        lenis.start();
        document.body.style.overflow = "unset";
      }
    }
  }, [isOpen, lenis]);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      x: "0%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const linkVariants = {
    initial: { y: 80, opacity: 0 },
    enter: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2 + i * 0.1,
      },
    }),
    exit: (i: number) => ({
      y: 80,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.05,
      },
    }),
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-8 py-6 md:px-16 transition-all duration-300">
        <Link 
          href="/" 
          className={cn(
            "text-2xl font-serif font-semibold tracking-tighter transition-colors duration-500",
            isOpen ? "text-zinc-950" : "text-zinc-50"
          )}
        >
          MODERN<span className={isOpen ? "text-zinc-500 italic" : "text-zinc-400 italic"}>NEST</span>
        </Link>

        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "group flex items-center gap-4 py-2 px-4 rounded-full transition-all duration-500",
              isOpen ? "bg-zinc-950 text-zinc-50" : "bg-zinc-50/10 backdrop-blur-md text-zinc-50 border border-zinc-50/20"
            )}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium hidden md:block">
              {isOpen ? "Close" : "Menu"}
            </span>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] bg-zinc-50 flex flex-col md:flex-row"
          >
            {/* Left side - Architectural Image (Hidden on mobile) */}
            <div className="hidden md:block w-1/3 h-full relative overflow-hidden">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6199f7a096?auto=format&fit=crop&q=80&w=2070" 
                  alt="Menu Background"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-zinc-50/20" />
              </motion.div>
              <div className="absolute bottom-16 left-16">
                <p className="text-zinc-950 font-serif italic text-2xl">Elevating the <br /> Art of Living.</p>
              </div>
            </div>

            {/* Right side - Navigation Links */}
            <div className="flex-grow h-full flex flex-col justify-center px-8 md:px-24 pt-20">
              <div className="flex flex-col gap-8 md:gap-12">
                {navLinks.map((link, i) => (
                  <div key={link.name} className="overflow-hidden group">
                    <motion.div
                      custom={i}
                      variants={linkVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <Link 
                        href={link.href}
                        className="flex items-end gap-6 group"
                      >
                        <span className="text-zinc-300 font-serif text-2xl md:text-3xl mb-2 md:mb-4 group-hover:text-zinc-950 transition-colors">0{i+1}</span>
                        <div className="flex flex-col">
                          <h2 className={cn(
                            "text-5xl md:text-8xl font-serif font-light tracking-tighter transition-all duration-500 group-hover:italic group-hover:pl-4",
                            pathname === link.href ? "text-zinc-950 italic" : "text-zinc-400 hover:text-zinc-950"
                          )}>
                            {link.name}
                          </h2>
                          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pl-4">
                            {link.subtitle}
                          </span>
                        </div>
                        <ArrowRight className="mb-4 md:mb-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-zinc-950" size={32} />
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Bottom Footer Area in Menu */}
              <div className="mt-auto pb-16 flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-zinc-200 pt-12">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Socials</span>
                  <div className="flex gap-8">
                    <Instagram className="text-zinc-400 hover:text-zinc-950 cursor-pointer transition-colors" size={20} />
                    <Twitter className="text-zinc-400 hover:text-zinc-950 cursor-pointer transition-colors" size={20} />
                    <Linkedin className="text-zinc-400 hover:text-zinc-950 cursor-pointer transition-colors" size={20} />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2">Inquiries</p>
                  <p className="text-zinc-950 font-serif text-xl">hello@modernnest.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

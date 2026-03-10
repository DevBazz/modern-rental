"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text-like animation (manual split)
      const lines = gsap.utils.toArray(".hero-line");
      
      gsap.fromTo(
        lines,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.5,
        }
      );

      // Hero image parallax
      gsap.to(imageRef.current, {
        scale: 1.2,
        y: 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Character reveal (if we had a text splitter, but let's do simple word reveal)
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-zinc-950 flex flex-col items-center justify-center pt-20"
    >
      <div className="absolute inset-0 z-0 opacity-40 overflow-hidden" ref={imageRef}>
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070"
          alt="Modern Architecture"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-10 px-8 md:px-16 flex flex-col items-start">
        <div className="max-w-5xl" ref={textRef}>
          <div className="overflow-hidden mb-2">
            <h1 className="hero-line text-6xl md:text-8xl lg:text-[10rem] font-serif font-light leading-[0.9] text-zinc-50 uppercase tracking-tighter">
              Defining
            </h1>
          </div>
          <div className="overflow-hidden mb-2">
            <h1 className="hero-line text-6xl md:text-8xl lg:text-[10rem] font-serif font-light leading-[0.9] text-zinc-50 uppercase tracking-tighter italic ml-12 md:ml-24">
              Modern
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="hero-line text-6xl md:text-8xl lg:text-[10rem] font-serif font-light leading-[0.9] text-zinc-50 uppercase tracking-tighter">
              Living.
            </h1>
          </div>
        </div>

        <div className="hero-subtitle mt-4 max-w-md text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
          <p>
            Experience the pinnacle of luxury rental living with our curated
            collection of architectural masterpieces in the heart of the city.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-8 py-4 bg-zinc-50 text-zinc-950 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Explore Homes
            </button>
            <button className="px-8 py-4 border border-zinc-800 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-zinc-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 md:right-16 z-10 hidden md:block">
        <div className="flex flex-col gap-1 items-end">
          <span className="text-zinc-500 text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
          <div className="h-20 w-px bg-gradient-to-b from-zinc-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

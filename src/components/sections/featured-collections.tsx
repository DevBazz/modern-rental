"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    title: "The Nordic Series",
    image: "https://images.unsplash.com/photo-1600585154340-be6199f7a096?auto=format&fit=crop&q=80&w=2070",
    description: "Minimalist architecture meets natural serenity.",
    speed: 1,
  },
  {
    title: "Urban Industrial",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
    description: "Raw textures and expansive city views.",
    speed: 1.5,
  },
  {
    title: "Coastal Retreats",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=2070",
    description: "Endless horizons and modern comfort.",
    speed: 0.8,
  },
];

export function FeaturedCollections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const images = gsap.utils.toArray(".parallax-img") as HTMLElement[];
    
    images.forEach((img) => {
      const speed = Number(img.dataset.speed) || 1;
      gsap.to(img, {
        y: (speed - 1) * 200,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-zinc-950 px-8 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs">Collection</span>
            <h2 className="text-5xl md:text-7xl font-serif mt-6">Signature <br /> Collections.</h2>
          </div>
          <p className="text-zinc-500 max-w-xs text-lg font-light leading-relaxed">
            Curated selection of our most iconic properties across different styles and themes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {collections.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900">
                <img 
                  src={item.image}
                  alt={item.title}
                  data-speed={item.speed}
                  className="parallax-img object-cover w-full h-[120%] absolute -top-[10%]"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                <p className="text-zinc-500 font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

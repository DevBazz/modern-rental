"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Alexander Thorne",
    role: "Founding Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070",
  },
  {
    name: "Elena Rossi",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070",
  },
  {
    name: "Marcus Vane",
    role: "Property Relations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=2070",
  },
];

export function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".team-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-8 md:px-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs">The People</span>
          <h2 className="text-5xl md:text-7xl font-serif mt-6">Our Experts.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="team-card group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">{member.name}</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-xs">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

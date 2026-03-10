"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "ModernNest doesn't just find you a house; they find you a masterpiece. The attention to architectural detail in their portfolio is unmatched.",
    author: "Julian Brooks",
    role: "Architectural Critic",
  },
  {
    text: "The concierge service made my transition to Malibu seamless. From the smart home setup to the local recommendations, everything was perfect.",
    author: "Sophia Chen",
    role: "Tech Executive",
  },
  {
    text: "Finding a rental that matches my aesthetic was impossible until I found this platform. Every property is a curated experience.",
    author: "David Miller",
    role: "Creative Director",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".testimonial-item", {
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-8 md:px-16 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs">Testimonials</span>
            <h2 className="text-5xl md:text-7xl font-serif mt-6 mb-12 italic">Client Stories.</h2>
            <div className="flex flex-col gap-16">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-item">
                  <Quote className="text-zinc-700 w-12 h-12 mb-6" />
                  <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-8">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <h4 className="text-zinc-50 font-medium">{t.author}</h4>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[3/4] hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1600607687940-47a04b629571?auto=format&fit=crop&q=80&w=2070"
              alt="Luxury Interior"
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute -bottom-10 -left-10 w-64 aspect-square rounded-2xl overflow-hidden border-8 border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0bbc2a6c3?auto=format&fit=crop&q=80&w=2070"
                alt="Detail"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

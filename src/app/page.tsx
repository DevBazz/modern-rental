"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/hero";
import { ServicesSlider } from "@/components/sections/services-slider";
import { FeaturedCollections } from "@/components/sections/featured-collections";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const featureSectionRef = useRef<HTMLDivElement>(null);
  const featureImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax for the feature section image
    gsap.to(featureImageRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: featureSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Reveal animation for the text
    gsap.from(".reveal-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: featureSectionRef.current,
        start: "top 80%",
      },
    });
  }, { scope: featureSectionRef });

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      
      {/* Feature Section */}
      <section 
        ref={featureSectionRef}
        className="min-h-screen w-full bg-zinc-950 py-32 px-8 md:px-16 flex flex-col justify-center overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl group">
            <div ref={featureImageRef} className="absolute inset-0 h-[120%] -top-[10%]">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071"
                alt="Luxury Interior"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
          <div>
            <span className="reveal-text text-zinc-500 uppercase tracking-[0.3em] text-xs block">Curated Spaces</span>
            <h2 className="reveal-text text-5xl md:text-7xl font-serif font-light mt-6 mb-10 leading-tight">
              A New Standard <br /> of Elegance.
            </h2>
            <p className="reveal-text text-zinc-400 text-lg font-light leading-relaxed mb-12 max-w-lg">
              Every property in our portfolio is selected for its unique
              architectural character and exceptional quality. We don&apos;t just 
              rent homes; we provide lifestyles.
            </p>
            <div className="reveal-text grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-serif mb-2 text-zinc-50">500+</h4>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">Properties</p>
              </div>
              <div>
                <h4 className="text-2xl font-serif mb-2 text-zinc-50">24/7</h4>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">Concierge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSlider />

      <FeaturedCollections />

      {/* Footer / Contact Preview */}
      <footer className="w-full bg-zinc-900 py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h3 className="text-4xl font-serif mb-6">Ready to find your <br /> next sanctuary?</h3>
            <button className="text-lg font-medium border-b border-zinc-50 pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-all">
              Contact our agents
            </button>
          </div>
          <div className="flex flex-col gap-4 text-zinc-500">
            <p>© 2026 MODERNNEST INC.</p>
            <div className="flex gap-8">
              <span>Instagram</span>
              <span>LinkedIn</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Architectural Selection",
    description: "We source properties that are not just homes, but architectural masterpieces.",
    image: "https://images.unsplash.com/photo-1600607687940-47a04b629571?auto=format&fit=crop&q=80&w=2070",
    color: "bg-zinc-100"
  },
  {
    title: "Interior Curating",
    description: "Bespoke interior design services to match the soul of the building.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071",
    color: "bg-zinc-200"
  },
  {
    title: "Smart Integration",
    description: "Seamless technology that anticipates your needs without intruding on your life.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2070",
    color: "bg-zinc-300"
  },
  {
    title: "Concierge Services",
    description: "24/7 assistance for everything from travel arrangements to fine dining.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070",
    color: "bg-zinc-400"
  },
  {
    title: "Legal & Financial",
    description: "Discreet and professional handling of all acquisition and rental logistics.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070",
    color: "bg-zinc-500"
  }
];

export function ServicesSlider() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-zinc-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-20 left-8 md:left-16 z-10 bg-zinc-950/20 backdrop-blur-sm p-4 rounded-xl">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-zinc-500 uppercase tracking-[0.4em] text-[10px]"
            >
                Our Expertise
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif text-zinc-50 mt-4 leading-none"
            >
                Premium <br /> <span className="italic">Provisions.</span>
            </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-8 md:px-16 pt-32">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  return (
    <div className="group relative h-[450px] w-[350px] md:h-[600px] md:w-[500px] overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800">
      {/* Background Image with Overlay */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <span className="text-zinc-500 font-mono text-sm mb-4">0{index + 1}</span>
        <h3 className="text-3xl md:text-5xl font-serif text-zinc-50 mb-6 group-hover:italic transition-all duration-500">
          {service.title}
        </h3>
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mb-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 max-w-xs">
          {service.description}
        </p>
        
        <div className="flex justify-between items-center border-t border-zinc-800 pt-8 mt-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500">Explore Service</span>
            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-50 group-hover:text-zinc-950 transition-colors duration-500">
                <ArrowUpRight size={20} />
            </div>
        </div>
      </div>
    </div>
  );
};

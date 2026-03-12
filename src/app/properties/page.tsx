import { Navbar } from "@/components/layout/Navbar";

const properties = [
  {
    id: 1,
    title: "The Glass House",
    location: "Malibu, CA",
    price: "$12,000/mo",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 2,
    title: "Concrete Sanctuary",
    location: "Austin, TX",
    price: "$8,500/mo",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 3,
    title: "Minimalist Loft",
    location: "New York, NY",
    price: "$15,000/mo",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 4,
    title: "Desert Mirage",
    location: "Palm Springs, CA",
    price: "$9,200/mo",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 5,
    title: "Forest retreat",
    location: "Aspen, CO",
    price: "$11,000/mo",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075",
  },
  {
    id: 6,
    title: "The Penthouse",
    location: "Miami, FL",
    price: "$20,000/mo",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=2084",
  },
];

const process = [
  {
    step: "01",
    title: "Selection",
    desc: "We curate only the most architecturally significant properties."
  },
  {
    step: "02",
    title: "Verification",
    desc: "Every listing is manually inspected and verified for quality."
  },
  {
    step: "03",
    title: "Matching",
    desc: "Our AI helps match you with a home that fits your lifestyle."
  },
  {
    step: "04",
    title: "Transition",
    desc: "Concierge-assisted move-in and setup for a seamless experience."
  }
];

export default function Properties() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-8 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs">Collection</span>
            <h1 className="text-6xl md:text-8xl font-serif font-light mt-8 leading-none text-zinc-50">
              Modern <br /> <span className="italic">Portfolio</span>.
            </h1>
          </div>
          <div className="flex gap-8 text-sm uppercase tracking-widest text-zinc-500">
            <span className="text-zinc-50 cursor-pointer border-b border-zinc-50 pb-1">All</span>
            <span className="hover:text-zinc-50 transition-colors cursor-pointer pb-1">Urban</span>
            <span className="hover:text-zinc-50 transition-colors cursor-pointer pb-1">Coastal</span>
            <span className="hover:text-zinc-50 transition-colors cursor-pointer pb-1">Mountain</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl mb-6 relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-zinc-950/80 backdrop-blur-md text-zinc-50 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Available</span>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-xl font-serif text-zinc-50 mb-1">{property.title}</h3>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest">{property.location}</p>
                </div>
                <p className="text-zinc-50 font-serif">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Highlight */}
      <section className="py-32 px-8 md:px-16 bg-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
                <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs">Spotlight</span>
                <h2 className="text-5xl md:text-7xl font-serif mt-6 mb-8 text-zinc-50">The <span className="italic">Ethereal</span> <br /> Penthouse.</h2>
                <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10 max-w-md">
                    Experience unparalleled luxury in our latest featured property. A three-story architectural marvel overlooking the Pacific Ocean.
                </p>
                <button className="px-8 py-4 bg-zinc-50 text-zinc-950 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                    View Property
                </button>
            </div>
            <div className="order-1 md:order-2 relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=2084" 
                    alt="Featured Property"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-8 md:px-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {process.map((p, i) => (
                    <div key={i} className="flex flex-col gap-6">
                        <span className="text-4xl font-serif text-zinc-800 italic">{p.step}</span>
                        <h3 className="text-xl font-serif text-zinc-50">{p.title}</h3>
                        <p className="text-zinc-500 text-sm font-light leading-relaxed">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <footer className="w-full bg-zinc-900 py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h3 className="text-4xl font-serif mb-6 text-zinc-50 italic leading-tight">Ready to find your <br /> next sanctuary?</h3>
            <button className="text-lg font-medium border-b border-zinc-50 pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-all text-zinc-50">
              Contact our agents
            </button>
          </div>
          <div className="flex flex-col gap-4 text-zinc-500 text-sm">
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

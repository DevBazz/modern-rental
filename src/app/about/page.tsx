import { Navbar } from "@/components/layout/Navbar";
import { TeamSection } from "@/components/sections/team-section";
import { Testimonials } from "@/components/sections/testimonials";

const values = [
  {
    title: "Design First",
    description: "We believe that intentional design can profoundly impact the quality of life. Every space in our portfolio is selected for its architectural significance.",
  },
  {
    title: "Radical Transparency",
    description: "Trust is our most valuable asset. We provide exhaustive details, verified high-resolution media, and honest representation of every property.",
  },
  {
    title: "Human Centric",
    description: "Technology is our tool, but human relationships are our foundation. Our concierge-first approach ensures that we're always there when it matters.",
  },
];

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-8 md:px-16 max-w-7xl mx-auto">
        <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs">The Vision</span>
        <h1 className="text-6xl md:text-9xl font-serif font-light mt-8 mb-16 leading-none">
          Curating the <br /> <span className="italic">Future of Living</span>.
        </h1>
        
        <div className="grid md:grid-cols-2 gap-20">
          <p className="text-zinc-400 text-xl font-light leading-relaxed">
            Founded in 2026, ModernNest was born from a simple belief: that a
            home should be more than just a place to live—it should be a 
            work of art. We specialize in connecting discerning tenants with
            architectural masterpieces that inspire.
          </p>
          <div className="flex flex-col gap-12">
            <div>
              <h4 className="text-zinc-50 text-xl font-serif mb-4 italic">Uncompromising Quality</h4>
              <p className="text-zinc-500 font-light">
                Every property in our portfolio undergoes a rigorous selection
                process to ensure it meets our exacting standards of design
                and craftsmanship.
              </p>
            </div>
            <div>
              <h4 className="text-zinc-50 text-xl font-serif mb-4 italic">Tailored Service</h4>
              <p className="text-zinc-500 font-light">
                Our concierge approach to property management ensures that 
                every tenant and owner receives a personalized, seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[60vh] relative overflow-hidden mt-20">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
          alt="Modern Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/30" />
      </section>

      {/* Values Section */}
      <section className="py-32 px-8 md:px-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {values.map((v, i) => (
              <div key={i} className="group">
                <span className="text-zinc-700 text-4xl font-serif group-hover:text-zinc-50 transition-colors duration-500 italic mb-8 block">0{i+1}</span>
                <h3 className="text-2xl font-serif mb-6">{v.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      
      <Testimonials />

      <footer className="w-full bg-zinc-900 py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h3 className="text-4xl font-serif mb-6 text-zinc-50 italic leading-tight">Ready to find your <br /> next sanctuary?</h3>
            <button className="text-lg font-medium border-b border-zinc-50 pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-all text-zinc-50">
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

import { Navbar } from "@/components/layout/Navbar";

const faqs = [
  {
    question: "What is the typical lease duration?",
    answer: "Our standard leases range from 6 to 24 months, depending on the property and owner preferences. Short-term corporate stays are also available for select units.",
  },
  {
    question: "How are properties verified?",
    answer: "Every property undergoes a 50-point inspection by our architectural experts to ensure it meets our structural and design standards before listing.",
  },
  {
    question: "Is concierge service included?",
    answer: "Basic concierge is included with all rentals. Premium 24/7 dedicated assistance can be added as a separate service package.",
  },
];

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-8 md:px-16 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs">Reach Out</span>
            <h1 className="text-6xl md:text-8xl font-serif font-light mt-8 mb-12 leading-none text-zinc-50">
              Let&apos;s <br /> <span className="italic text-zinc-400">Talk</span>.
            </h1>
            <p className="text-zinc-500 text-lg font-light leading-relaxed mb-12">
              Whether you&apos;re looking for your next home or have a property
              you&apos;d like to list with us, we&apos;re here to help.
            </p>
            
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Email</span>
                <p className="text-xl font-serif text-zinc-50 mt-1 hover:text-zinc-400 transition-colors cursor-pointer">hello@modernnest.com</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Phone</span>
                <p className="text-xl font-serif text-zinc-50 mt-1">+1 (555) 000-0000</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Office</span>
                <p className="text-xl font-serif text-zinc-50 mt-1">123 Design District, <br /> Los Angeles, CA 90001</p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-8 md:p-12 rounded-2xl h-fit border border-zinc-800">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">Name</label>
                <input type="text" className="bg-transparent border-b border-zinc-800 py-3 text-zinc-50 outline-none focus:border-zinc-50 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">Email</label>
                <input type="email" className="bg-transparent border-b border-zinc-800 py-3 text-zinc-50 outline-none focus:border-zinc-50 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">Message</label>
                <textarea rows={4} className="bg-transparent border-b border-zinc-800 py-3 text-zinc-50 outline-none focus:border-zinc-50 transition-colors resize-none" />
              </div>
              <button className="bg-zinc-50 text-zinc-950 py-4 px-8 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-zinc-200 transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 md:px-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs">Questions</span>
            <h2 className="text-5xl font-serif mt-6 text-zinc-50">Common <span className="italic">Inquiries</span>.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-zinc-800 pt-8">
                <h3 className="text-xl font-serif text-zinc-50 mb-4">{faq.question}</h3>
                <p className="text-zinc-500 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full bg-zinc-900 py-20 px-8 md:px-16 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h3 className="text-4xl font-serif mb-6 text-zinc-50 italic leading-tight">Join our newsletter <br /> for new listings.</h3>
            <div className="flex gap-4">
              <input type="email" placeholder="Email Address" className="bg-transparent border-b border-zinc-700 py-2 text-zinc-50 outline-none focus:border-zinc-50 transition-colors flex-grow" />
              <button className="text-sm font-medium uppercase tracking-widest text-zinc-50">Join</button>
            </div>
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

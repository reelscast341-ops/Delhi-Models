import { motion } from 'motion/react';
import { ShieldCheck, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#050505] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            About <span className="text-gold italic font-light">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            We are Delhi's most transparent modelling agency, dedicated to helping beginners start safely and professionally.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-8 text-gold">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The modelling industry in India is notoriously difficult to navigate for newcomers. Our mission is simple: to provide a safe, structured, and professional pathway for aspiring models.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We focus on building strong foundations through expert training and high-quality portfolios, ensuring our talent is genuinely ready for the industry.
            </p>
            
            <div className="mt-12 space-y-6">
              <div className="flex items-start">
                <ShieldCheck className="text-gold mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-2">Transparency First</h4>
                  <p className="text-gray-400">We do not promise instant success or unrealistic income. We promise hard work, guidance, and real opportunities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="text-gold mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-2">Beginner Focused</h4>
                  <p className="text-gray-400">We specialize in taking raw talent and refining it into professional, industry-ready models.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
                alt="Agency Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Agency Director"
                className="w-full aspect-square object-cover rounded-full border-4 border-gold/20 p-2"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-2">A Message from the Founder</h2>
              <p className="text-gold tracking-widest uppercase text-sm mb-8 font-semibold">Director, Delhi Models</p>
              
              <div className="space-y-6 text-gray-300 leading-relaxed italic border-l-2 border-gold pl-6">
                <p>
                  "When I started in this industry 15 years ago, I fell for every scam in the book. I paid exorbitant fees for terrible portfolios and was promised the world, only to receive nothing."
                </p>
                <p>
                  "I created Delhi Models to be the agency I wish I had when I started. We are brutally honest with our talent. If you have potential, we will tell you. If you need work, we will train you. But we will never sell you a fake dream."
                </p>
                <p>
                  "Modelling is a profession, not a hobby. If you're ready to treat it like one, we're ready to guide you."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Camera, Star, TrendingUp, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#050505]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop"
            alt="Fashion Model Background"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6 leading-tight"
          >
            Start Your Modelling <br className="hidden md:block" />
            <span className="text-gold italic font-light">Career the Right Way</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We help aspiring models in India go from beginners to professional with training, portfolio, and real opportunities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              to="/apply"
              className="inline-block bg-gold text-black px-12 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="border-y border-white/10 bg-[#0a0a0a] py-6 overflow-hidden">
        <div className="flex justify-center space-x-8 md:space-x-16 px-4 flex-wrap gap-y-4 text-sm tracking-widest uppercase text-gray-400 font-semibold">
          <span className="flex items-center"><ShieldCheck size={16} className="text-gold mr-2" /> No Fake Promises</span>
          <span className="flex items-center"><UserCheck size={16} className="text-gold mr-2" /> Beginner Friendly</span>
          <span className="flex items-center"><CheckCircle2 size={16} className="text-gold mr-2" /> Transparent Pricing</span>
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              The Industry is Tough. <br />
              <span className="text-gold italic">You Don't Have to Do It Alone.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Most beginners struggle because they lack proper guidance, don't have a professional portfolio, and constantly fear falling for scams. We understand the hesitation.
            </p>
            
            <ul className="space-y-6">
              {[
                "Lost without a clear roadmap?",
                "Don't have a professional portfolio?",
                "Afraid of fake agencies and scams?"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1 bg-gold/20 p-1 rounded-full mr-4">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                  </div>
                  <span className="text-xl font-serif">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                alt="Aspiring Model"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#111] p-8 border border-white/10 max-w-xs hidden md:block">
              <p className="font-serif text-xl italic text-gold mb-2">"I didn't know where to start until I found Delhi Models."</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">— Priya S., Recent Graduate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our 3 Pillars of Success</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A structured, transparent approach to building your career.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star size={40} strokeWidth={1} />,
                title: "Training",
                desc: "Learn posing, grooming, and industry etiquette from professionals who know what agencies want."
              },
              {
                icon: <Camera size={40} strokeWidth={1} />,
                title: "Portfolio",
                desc: "Get a high-end, editorial-style portfolio shot by top fashion photographers in Delhi."
              },
              {
                icon: <TrendingUp size={40} strokeWidth={1} />,
                title: "Exposure",
                desc: "Direct access to casting calls, brand shoots, and agency representations once you're ready."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group p-10 border border-white/10 hover:border-gold/50 bg-[#050505] transition-all duration-500"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Real Models. Real Results.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">See the transformations and hear from those who started right where you are.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#0a0a0a] p-6 border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop"
              alt="Model"
              className="w-32 h-32 object-cover rounded-full grayscale"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="flex text-gold mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 italic mb-4">
                "I was terrified of being scammed. They were completely transparent about costs and didn't promise me the moon. Now I'm doing e-commerce shoots regularly."
              </p>
              <p className="font-serif text-gold">— Ananya R.</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#0a0a0a] p-6 border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
              alt="Model"
              className="w-32 h-32 object-cover rounded-full grayscale"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="flex text-gold mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 italic mb-4">
                "The portfolio shoot changed everything. The guidance on posing made me look like a pro even though it was my first time in front of a camera."
              </p>
              <p className="font-serif text-gold">— Rahul K.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

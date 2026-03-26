import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programs = [
    {
      title: "Beginner Program",
      price: "₹1,499 – ₹2,999",
      description: "Perfect for those just starting out and needing foundational guidance.",
      features: [
        "Orientation session",
        "Basic modelling guidance",
        "Profile evaluation",
        "Industry overview"
      ],
      popular: false,
      icon: "🥉"
    },
    {
      title: "Core Program",
      price: "₹6,000 – ₹12,000",
      description: "The essential package to build a professional portfolio and skills.",
      features: [
        "Professional portfolio shoot",
        "Grooming & posing training",
        "Social media guidance",
        "Basic casting access"
      ],
      popular: true,
      icon: "🥈"
    },
    {
      title: "Premium Program",
      price: "₹15,000 – ₹30,000",
      description: "Comprehensive mentoring and top-tier portfolio for serious careers.",
      features: [
        "Advanced editorial portfolio",
        "Personal 1-on-1 mentoring",
        "Priority casting opportunities",
        "Brand collaboration access",
        "Agency representation review"
      ],
      popular: false,
      icon: "🥇"
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 px-4 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-6"
        >
          Our <span className="text-gold italic font-light">Programs</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 font-light leading-relaxed"
        >
          Transparent pricing. No hidden charges. Installment options available.
        </motion.p>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-[#0a0a0a] border p-8 flex flex-col ${
                program.popular ? 'border-gold shadow-[0_0_30px_rgba(197,160,89,0.15)] scale-105 z-10' : 'border-white/10'
              }`}
            >
              {program.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-black px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-serif mb-2">{program.title}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{program.description}</p>
              
              <div className="mb-8 pb-8 border-b border-white/10">
                <span className="text-3xl font-bold text-gold">{program.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-gold mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/apply"
                className={`w-full py-4 text-sm font-bold tracking-widest uppercase text-center transition-colors ${
                  program.popular
                    ? 'bg-gold text-black hover:bg-white'
                    : 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-black'
                }`}
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center text-gray-400 text-sm bg-gold/10 border border-gold/20 py-4 px-6 rounded-sm max-w-2xl mx-auto">
          <Info size={18} className="text-gold mr-3 shrink-0" />
          <p>All programs require an initial application review. We only accept candidates we believe we can genuinely help.</p>
        </div>
      </section>
    </div>
  );
}

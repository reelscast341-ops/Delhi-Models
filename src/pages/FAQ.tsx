import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need prior modelling experience?",
      answer: "No. Our programs are specifically designed for beginners. We teach you everything from posing and grooming to industry etiquette."
    },
    {
      question: "Is success guaranteed?",
      answer: "No, and any agency that guarantees success is likely scamming you. We provide the professional training, a high-quality portfolio, and industry exposure, but your success depends on your dedication, look, and market demand."
    },
    {
      question: "Are there fees involved?",
      answer: "Yes. Building a professional portfolio, renting studios, hiring makeup artists, and expert training require investment. We are completely transparent about our pricing upfront, with no hidden charges."
    },
    {
      question: "Is this a scam?",
      answer: "We understand the hesitation. The industry has many fake agencies. We operate with complete transparency: we don't promise instant fame, we clearly outline what you pay for (training/portfolio), and we manually review applications to ensure we only take on talent we believe we can help."
    },
    {
      question: "What kind of photos should I upload in the application?",
      answer: "Simple, natural photos taken on a phone are perfect. We need to see your natural look. Avoid heavy makeup, filters, or overly edited photos. A clear headshot and a full-body shot in fitted clothing are ideal."
    },
    {
      question: "Do you offer installment plans?",
      answer: "Yes, we offer flexible installment options for our Core and Premium programs to make them more accessible."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#050505] min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 px-4 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-6"
        >
          Frequently Asked <span className="text-gold italic font-light">Questions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 font-light leading-relaxed"
        >
          Honest answers to your most common concerns.
        </motion.p>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 px-4 max-w-3xl mx-auto mb-24">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-xl pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gold shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-500 shrink-0" size={24} />
                )}
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

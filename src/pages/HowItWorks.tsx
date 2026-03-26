import { motion } from 'motion/react';
import { FileText, UserCheck, Video, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FileText size={48} strokeWidth={1} />,
      title: "Apply Online",
      description: "Fill out our simple application form with your basic details, measurements, and recent photos (no professional shots needed).",
      number: "01"
    },
    {
      icon: <UserCheck size={48} strokeWidth={1} />,
      title: "Get Shortlisted",
      description: "Our team manually reviews every application. If we see potential and believe we can help you, you'll be shortlisted.",
      number: "02"
    },
    {
      icon: <Video size={48} strokeWidth={1} />,
      title: "Orientation Call",
      description: "Attend a one-on-one virtual orientation where we discuss your goals, assess your current level, and recommend the right path.",
      number: "03"
    },
    {
      icon: <Camera size={48} strokeWidth={1} />,
      title: "Start Training & Shoots",
      description: "Begin your chosen program. Get trained by industry experts, shoot your professional portfolio, and start getting exposure.",
      number: "04"
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
          How It <span className="text-gold italic font-light">Works</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 font-light leading-relaxed"
        >
          A clear, transparent process from application to your first professional shoot.
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 max-w-5xl mx-auto mb-24 relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center justify-between w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-5/12 mb-8 md:mb-0" />
              
              <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-[#0a0a0a] border-2 border-gold text-gold font-serif text-xl absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                {step.number}
              </div>
              
              <div className={`w-full md:w-5/12 bg-[#0a0a0a] p-8 border border-white/5 hover:border-gold/30 transition-colors ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}>
                <div className={`text-gold mb-6 flex ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                  {step.icon}
                </div>
                <h3 className="text-3xl font-serif mb-4 flex items-center gap-4">
                  <span className="text-gold font-serif text-2xl md:hidden">{step.number}.</span>
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-gold/5 border-y border-gold/20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to take the first step?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Our selection process is limited to ensure quality mentoring.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-gold text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors"
          >
            Start Application
          </Link>
        </div>
      </section>
    </div>
  );
}

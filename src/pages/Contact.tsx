import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Instagram, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await addDoc(collection(db, 'contact_messages'), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp()
      });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
      try {
        handleFirestoreError(err, OperationType.CREATE, 'contact_messages');
      } catch (e) {
        // Logged
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 px-4 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-6"
        >
          Get in <span className="text-gold italic font-light">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 font-light leading-relaxed"
        >
          Have questions? We're here to help you start your journey.
        </motion.p>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif mb-8 text-gold">Contact Information</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We prefer WhatsApp for quick queries. For detailed questions or business inquiries, please send us an email or use the contact form.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gold/10 p-4 rounded-full mr-6">
                  <MessageCircle className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">WhatsApp</h4>
                  <p className="text-gray-400 mb-2">For quick responses (Mon-Sat, 10am-6pm)</p>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors font-semibold tracking-wider">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold/10 p-4 rounded-full mr-6">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Email</h4>
                  <p className="text-gray-400 mb-2">For business inquiries and collaborations</p>
                  <a href="mailto:hello@delhimodels.com" className="text-gold hover:text-white transition-colors font-semibold tracking-wider">hello@delhimodels.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold/10 p-4 rounded-full mr-6">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Location</h4>
                  <p className="text-gray-400 mb-2">Studio & Office (By Appointment Only)</p>
                  <p className="text-gold font-semibold tracking-wider">South Extension, New Delhi</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0a0a0a] border border-white/10 p-8 text-center mt-12">
              <Instagram size={48} className="mx-auto text-gold mb-6" />
              <h3 className="text-2xl font-serif mb-4">Follow Our Journey</h3>
              <p className="text-gray-400 mb-6">See behind-the-scenes, model transformations, and latest shoots on our Instagram.</p>
              <a href="#" className="inline-block border border-gold text-gold px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-colors">
                @DelhiModels
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12">
              <h2 className="text-3xl font-serif mb-8">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={64} className="text-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-serif mb-4">Message Sent!</h3>
                  <p className="text-gray-400 mb-8">We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-transparent border border-gold text-gold px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="p-4 bg-red-900/20 border border-red-500/50 text-red-200 text-sm text-center">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Message *</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-black py-4 text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

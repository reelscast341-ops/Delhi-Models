import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UploadCloud, CheckCircle2, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

export default function Apply() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    city: '',
    email: '',
    phone: '',
    experience: '',
    instagram: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      const applicationData = {
        name: formData.name,
        age: parseInt(formData.age),
        height: parseInt(formData.height),
        city: formData.city,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        ...(formData.instagram ? { instagram: formData.instagram } : {}),
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'applications'), applicationData);
      setIsSubmitted(true);
      setFormData({
        name: '', age: '', height: '', city: '', email: '', phone: '', experience: '', instagram: ''
      });
    } catch (err) {
      console.error(err);
      setError("Failed to submit application. Please try again.");
      try {
        handleFirestoreError(err, OperationType.CREATE, 'applications');
      } catch (e) {
        // Error already logged by handleFirestoreError
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#050505] min-h-screen pt-32 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0a0a0a] border border-gold/30 p-12 max-w-2xl w-full text-center"
        >
          <CheckCircle2 size={64} className="text-gold mx-auto mb-6" />
          <h2 className="text-4xl font-serif mb-4">Application Received</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Thank you for applying to Delhi Models. Our team manually reviews every application. If you are shortlisted, we will contact you via WhatsApp or Email within 48 hours to schedule your orientation call.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-transparent border border-gold text-gold px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-colors"
          >
            Submit Another
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 px-4 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-6"
        >
          Apply <span className="text-gold italic font-light">Now</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 font-light leading-relaxed"
        >
          We review every application manually. Limited slots available.
        </motion.p>
      </section>

      {/* Application Form */}
      <section className="py-12 px-4 max-w-3xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12"
        >
          {error && (
            <div className="mb-8 p-4 bg-red-900/20 border border-red-500/50 text-red-200 text-sm text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Age *</label>
                <input
                  type="number"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="16"
                  max="100"
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="e.g. 21"
                />
              </div>

              {/* Height */}
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Height (in cm) *</label>
                <input
                  type="number"
                  id="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  min="100"
                  max="250"
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="e.g. 170"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">City *</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="e.g. New Delhi"
                />
              </div>

              {/* Email */}
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

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">WhatsApp Number *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="+91"
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Modelling Experience *</label>
              <select
                id="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
              >
                <option value="" disabled className="bg-[#0a0a0a]">Select your experience level</option>
                <option value="none" className="bg-[#0a0a0a]">None - Complete Beginner</option>
                <option value="some" className="bg-[#0a0a0a]">Some - Done a few small shoots</option>
                <option value="experienced" className="bg-[#0a0a0a]">Experienced - Looking for better representation</option>
              </select>
            </div>

            {/* Instagram */}
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Instagram Handle (Optional)</label>
              <input
                type="text"
                id="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors"
                placeholder="@yourhandle"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Upload Photos (Max 3) *</label>
              <div className="border-2 border-dashed border-white/20 rounded-sm p-8 text-center hover:border-gold transition-colors cursor-pointer group">
                <UploadCloud size={48} className="mx-auto text-gray-500 group-hover:text-gold mb-4 transition-colors" />
                <p className="text-gray-300 mb-2">Drag and drop or click to upload</p>
                <p className="text-gray-500 text-sm">Natural lighting, no heavy makeup or filters.</p>
                <input type="file" multiple accept="image/*" className="hidden" id="photos" />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-black py-4 text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
              <p className="text-center text-gray-500 text-xs mt-4">
                By submitting, you agree to our terms. We do not share your information.
              </p>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

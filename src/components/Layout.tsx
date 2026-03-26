import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white selection:bg-gold selection:text-black relative">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="font-serif text-2xl font-bold tracking-wider">
              DELHI<span className="text-gold">MODELS</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-widest uppercase transition-colors hover:text-gold ${
                    location.pathname === link.path ? 'text-gold' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/apply"
                className="bg-gold text-black px-6 py-2.5 text-sm font-semibold tracking-widest uppercase hover:bg-white transition-colors"
              >
                Apply Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#0a0a0a] border-b border-white/10 py-4"
          >
            <div className="flex flex-col px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg tracking-wider uppercase ${
                    location.pathname === link.path ? 'text-gold' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/apply"
                className="bg-gold text-black text-center px-6 py-3 text-sm font-semibold tracking-widest uppercase mt-4"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Final CTA (Shown on all pages except Apply) */}
      {location.pathname !== '/apply' && (
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5 text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to Step Into the Spotlight?</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Apply now if you're serious about modelling. Limited slots available.
            </p>
            <Link
              to="/apply"
              className="inline-block bg-gold text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-bold tracking-wider mb-4 block">
              DELHI<span className="text-gold">MODELS</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md mb-6">
              We help aspiring models in India go from beginners to professional with training, portfolio, and real opportunities. No fake promises.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <MapPin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-gold transition-colors">Programs</Link></li>
              <li><Link to="/how-it-works" className="hover:text-gold transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Trust & Transparency</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Beginner-friendly</li>
              <li>Transparent pricing</li>
              <li>Limited selection process</li>
              <li>No hidden charges</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Delhi Models Agency. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

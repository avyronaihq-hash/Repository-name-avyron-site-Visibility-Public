import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'AI Agents', path: '/ai-agents' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-premium' : 'bg-transparent'}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="https://horizons-cdn.hostinger.com/27736afe-ba8c-4a17-9b1a-215c3531f392/10946e2b26b057a4e9808e43ddacc8f4.png" 
              alt="Avyron Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div 
                key={link.path} 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link 
                  to={link.path} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.path ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.3, duration: 0.4 }} 
            className="hidden lg:block"
          >
            <Link to="/book-demo">
              <Button className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500 hover:from-indigo-700 hover:via-violet-700 hover:to-blue-600 text-white px-6 py-2.5 rounded-lg shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 font-semibold border-0">
                Book Demo
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 rounded-lg hover:bg-indigo-50 transition-colors" 
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3 }} 
            className="lg:hidden glass border-t border-indigo-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.path} 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.path ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link to="/book-demo" className="block pt-2">
                <Button className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500 hover:from-indigo-700 hover:via-violet-700 hover:to-blue-600 text-white font-semibold border-0">
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

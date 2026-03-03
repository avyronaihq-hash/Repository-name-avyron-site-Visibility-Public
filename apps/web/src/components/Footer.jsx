import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import avyronLogo from '@/avyron-logo.png';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Product Overview', path: '/product' },
        { name: 'AI Agents', path: '/ai-agents' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Book Demo', path: '/book-demo' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Security', path: '/security' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Use', path: '/terms-of-use' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@avyronai', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/avyron.ai', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/avyronai', label: 'LinkedIn' }
  ];

  const trustBadges = [
    { text: 'SOC 2 Compliant', icon: '🔒' },
    { text: 'GDPR Ready', icon: '🇪🇺' },
    { text: '99.9% Uptime', icon: '⚡' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-violet-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <img 
                src={avyronLogo}
                alt="Avyron Logo" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm">
              Operational Control Infrastructure for High-Growth Tour Operators. 
              Transform chaos into clarity with AI-powered command systems.
            </p>
            <div className="flex space-x-3 mb-8">
              {socialLinks.map(social => (
                <motion.a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.1, y: -2 }} 
                  whileTap={{ scale: 0.95 }} 
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300" 
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.1 }} 
                  className="flex items-center space-x-2 text-xs text-gray-400"
                >
                  <span className="text-base">{badge.icon}</span>
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <span className="text-lg font-semibold mb-4 block text-white">{section.title}</span>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm inline-block hover:translate-x-1 transition-transform">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Avyron. All rights reserved.</p>
            <p className="text-gray-400 text-sm text-center md:text-right">Built for tour operators who refuse to scale on spreadsheets.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ProductPage from '@/pages/ProductPage.jsx';
import AIAgentsPage from '@/pages/AIAgentsPage.jsx';
import PricingPage from '@/pages/PricingPage.jsx';
import BookDemoPage from '@/pages/BookDemoPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.jsx';
import TermsOfUsePage from '@/pages/TermsOfUsePage.jsx';
import SecurityPage from '@/pages/SecurityPage.jsx';
import CareersPage from '@/pages/CareersPage.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-indigo-500/30">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/ai-agents" element={<AIAgentsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/book-demo" element={<BookDemoPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/careers" element={<CareersPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;

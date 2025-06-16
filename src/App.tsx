import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import GlassNavbar from './components/GlassNavbar';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-inter overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <GlassNavbar />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <HeroSection />
          <ContentSection />
          
          {/* Footer */}
          <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">V</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Vaultica</h3>
                  </div>
                  <p className="text-white/60 mb-4">
                    We remember so you don't have to. Your trusted password manager with military-grade encryption.
                  </p>
                  <div className="text-white/60">
                    <a href="mailto:contact@vaultica.app" className="hover:text-white transition-colors duration-200">
                      contact@vaultica.app
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#features" className="text-white/60 hover:text-white transition-colors duration-200">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#pricing" className="text-white/60 hover:text-white transition-colors duration-200">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="text-white/60 hover:text-white transition-colors duration-200">
                        About
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#privacy" className="text-white/60 hover:text-white transition-colors duration-200">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#terms" className="text-white/60 hover:text-white transition-colors duration-200">
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-white/60">
                  © 2025 Vaultica. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </motion.main>
      </div>
      
      {/* Additional Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}

export default App;
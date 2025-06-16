import React from 'react';
import DecryptedText from './DecryptedText';
import ShinyText from './ShinyText';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Lock, Key } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        {/* Floating Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white/80 mb-8"
        >
          <Shield className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium">Military-Grade Encryption</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          <DecryptedText
            text="Your Digital Fortress for Passwords"
            animateOn="view"
            sequential
            parentClassName="inline"
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
            encryptedClassName="text-white/40"
          />
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          <ShinyText
            text="Forget the stress of forgetting. Vaultica securely stores all your passwords and sensitive information under one master password with end-to-end encryption."
            speed={6}
            className="text-white/70"
          />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-semibold rounded-2xl transition-all duration-300 shadow-2xl"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.15)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-lg"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
            See How It Works
          </motion.button>
        </motion.div>

        {/* Security Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Lock,
              title: '256-bit',
              description: 'AES Encryption',
              color: 'from-blue-400 to-blue-600'
            },
            {
              icon: Shield,
              title: 'Zero',
              description: 'Knowledge Policy',
              color: 'from-purple-400 to-purple-600'
            },
            {
              icon: Key,
              title: '24/7',
              description: 'Secure Access',
              color: 'from-teal-400 to-teal-600'
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.5}s` }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)'
                }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {feature.title}
                </div>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
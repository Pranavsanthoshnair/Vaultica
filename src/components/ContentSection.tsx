import React from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Globe, MousePointer, Key, Lock, Smartphone } from 'lucide-react';

const ContentSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const features = [
    {
      icon: Shield,
      title: 'End-to-End Encryption',
      description: 'Your data is encrypted on your device before it ever leaves. We never see your passwords or sensitive information.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Access Anywhere',
      description: 'Sync across all your devices seamlessly. Your passwords are available whenever and wherever you need them.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MousePointer,
      title: 'One-Click Login',
      description: 'Autofill your credentials instantly with our browser extension and mobile app. No more typing passwords.',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Key,
      title: 'Strong Password Generator',
      description: 'Create unique, uncrackable passwords for every account with our advanced password generator.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Lock,
      title: 'Master Password Protection',
      description: 'One master password is all you need to remember. We handle the rest with military-grade security.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Multi-Device Sync',
      description: 'Seamlessly sync your vault across desktop, mobile, and web. Your data stays consistent everywhere.',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="features" className="py-32 px-6 lg:px-8">
      <motion.div 
        style={{ y }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <ScrollFadeIn
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Built for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Security
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Every feature is designed with your security and convenience in mind. 
            Store everything from passwords to credit cards, secure notes, and more.
          </p>
        </ScrollFadeIn>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
                className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 cursor-pointer"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <ScrollFadeIn delay={0.3}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Secure Your Digital Life?
            </h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust Vaultica with their passwords and sensitive information. 
              Start your free trial today and experience true digital security.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-semibold rounded-2xl transition-all duration-300 shadow-2xl"
            >
              Start Free Trial
            </motion.button>
          </div>
        </ScrollFadeIn>
      </motion.div>
    </section>
  );
};

export default ContentSection;
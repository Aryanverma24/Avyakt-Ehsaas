import React, { useEffect } from 'react';
import { SlSocialInstagram, SlSocialTwitter, SlSocialFacebook } from "react-icons/sl";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const AnimatedSection = ({ children, index = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function Footer() {
  return (
    <footer 
      className="py-12 px-6 relative overflow-hidden bg-gray-900"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800/90"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <AnimatedSection index={0}>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-200 drop-shadow-sm hover:text-gray-50 transition-colors inline-block">Avyakt Ehsaas</h3>
              <p className="text-gray-400 max-w-md mx-auto md:mx-0">
                Discover inner peace and mindfulness through guided meditation. Start your journey to a calmer mind today.
              </p>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection index={1}>
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4 hover:text-gray-100 transition-colors">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Programs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Contact</a></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Support */}
          <AnimatedSection index={2}>
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4 hover:text-gray-100 transition-colors">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">About Us</a></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Social Media */}
          <AnimatedSection index={3}>
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4 hover:text-gray-100 transition-colors">Follow Us</h3>
              <div className="flex flex-col gap-4 items-center md:items-start">
                <a href="#" className="text-gray-400 hover:text-gray-250 transition-colors flex items-center gap-1">
                  <SlSocialFacebook className="inline" /> Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-250 transition-colors flex items-center gap-1">
                  <SlSocialInstagram className="inline" /> Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-250 transition-colors flex items-center gap-1">
                  <SlSocialTwitter className="inline" /> Twitter
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection index={4}>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 hover:text-gray-250 transition-colors text-sm mt-8">
              &copy; {new Date().getFullYear()} Meditation App. All rights reserved.</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}

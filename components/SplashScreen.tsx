'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3.2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200); // Wait for cinematic curtain opening
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Cinematic Curtains */}
          <motion.div
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-full h-[50vh] bg-[#07070C]"
          />
          <motion.div
            exit={{ y: '100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#07070C]"
          />

          {/* Animated Background Glowing Orbs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.4, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet/20 rounded-full blur-[120px] mix-blend-screen"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/20 rounded-full blur-[100px] mix-blend-screen"
          />

          <div className="text-center relative z-10 w-full px-4">
            <h1 className="font-bold font-heading leading-tight flex flex-col items-center justify-center">
              
              {/* TOP LINE: ACM CHAPTER */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-4">
                <motion.span 
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ type: "spring", damping: 15, stiffness: 100, duration: 0.8 }}
                  className="text-white text-5xl md:text-7xl lg:text-8xl tracking-tight"
                >
                  ACM
                </motion.span>
                
                <motion.span 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ type: "spring", damping: 15, stiffness: 100, duration: 0.8, delay: 0.2 }}
                  className="text-gradient text-5xl md:text-7xl lg:text-8xl tracking-tight block"
                >
                  CHAPTER
                </motion.span>
              </div>
              
              {/* BOTTOM LINE: SRMIST TIRUCHIRAPALLI */}
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="text-2xl md:text-3xl lg:text-4xl text-white/80 mt-6 block font-semibold uppercase tracking-[0.2em]"
              >
                SRMIST Tiruchirapalli
              </motion.span>
            </h1>
            
            {/* Cinematic light sweep across the text */}
            <motion.div 
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '100%', opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

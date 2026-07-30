'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none bg-white"
        >
          {/* Curtains */}
          <motion.div
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-full h-[50vh] bg-white"
          />
          <motion.div
            exit={{ y: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 w-full h-[50vh] bg-white"
          />

          {/* Subtle background gradient */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"
          />

          <div className="text-center relative z-10 w-full px-4">
            <h1 className="font-bold font-heading leading-tight flex flex-col items-center justify-center">
              
              {/* TOP LINE: ACM CHAPTER */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-4">
                <motion.span 
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100, duration: 0.7 }}
                  className="text-gray-900 text-5xl md:text-7xl lg:text-8xl tracking-tight"
                >
                  ACM
                </motion.span>
                
                <motion.span 
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100, duration: 0.7, delay: 0.15 }}
                  className="text-gradient text-5xl md:text-7xl lg:text-8xl tracking-tight block"
                >
                  CHAPTER
                </motion.span>
              </div>
              
              {/* BOTTOM LINE */}
              <motion.span 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-400 mt-4 block font-semibold uppercase tracking-[0.2em]"
              >
                SRMIST Tiruchirappalli
              </motion.span>
            </h1>
            
            {/* Subtle light sweep */}
            <motion.div 
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '100%', opacity: 0.3 }}
              transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent skew-x-12 pointer-events-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

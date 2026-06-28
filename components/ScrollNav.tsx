'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'home',           label: 'Home' },
  { id: 'about',          label: 'About' },
  { id: 'whatwedo',       label: 'What We Do' },
  { id: 'faculty',        label: 'Faculty' },
  { id: 'collaborations', label: 'Collaborate' },
  { id: 'contact',        label: 'Contact' },
];

export default function ScrollNav() {
  const [active, setActive] = useState('home');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 80);

      // Find the active section
      const reversedSections = [...sections].reverse();
      for (const sec of reversedSections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 160;
          if (scrollY >= top) {
            setActive(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-5"
          aria-label="Section navigation"
        >
          {sections.map((sec) => {
            const isActive = active === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                title={sec.label}
                className="flex items-center gap-3 group"
                aria-label={sec.label}
              >
                {/* Dot + line */}
                <div className="relative flex items-center">
                  <motion.div
                    animate={{
                      width:           isActive ? 28 : 12,
                      backgroundColor: isActive ? '#F5A623' : 'rgba(255,255,255,0.2)',
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="h-px origin-left"
                  />
                  <motion.div
                    animate={{
                      width:  isActive ? 8 : 5,
                      height: isActive ? 8 : 5,
                      backgroundColor: isActive ? '#F5A623' : 'rgba(255,255,255,0.25)',
                      boxShadow: isActive ? '0 0 8px rgba(245,166,35,0.6)' : 'none',
                    }}
                    transition={{ duration: 0.3 }}
                    className="rounded-full flex-shrink-0"
                  />
                </div>

                {/* Label — only shows when active or hovered */}
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x:       isActive ? 0 : -6,
                  }}
                  className={`text-[11px] font-semibold tracking-widest uppercase whitespace-nowrap pointer-events-none
                    ${isActive ? 'text-gold' : 'text-white/40'}
                    group-hover:opacity-100 group-hover:text-white transition-colors`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {sec.label}
                </motion.span>
              </a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

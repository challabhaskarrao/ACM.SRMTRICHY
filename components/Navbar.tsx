'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
  { name: 'Faculty', href: '/#faculty' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar({ openJoinModal }: { openJoinModal?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/events' || pathname === '/gallery') {
      setActive(pathname);
      setScrolled(true); // Always dark on other pages
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navLinks.filter(l => l.href.startsWith('/#')).map((l) => l.href.replace('/#', ''));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`/#${id}`);
          break;
        }
      }
    };
    
    // Initial check
    onScroll();
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#07070C]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-gold/40 flex items-center justify-center bg-gold/5">
            <span className="text-gold font-bold text-xs tracking-wider">ACM</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white leading-none">SRMIST Trichy</p>
            <p className="text-[10px] text-white/30 mt-0.5 tracking-widest uppercase">Student Chapter</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-gold'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute h-px left-4 right-4 bg-gradient-to-r from-gold to-violet mt-0.5"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Join button */}
        <button
          id="navbar-join-btn"
          onClick={openJoinModal}
          className="hidden md:block btn-primary px-5 py-2 text-xs font-bold tracking-widest uppercase"
        >
          Join Us
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : {}} className="w-5 h-px bg-white block" />
          <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-px bg-white block" />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : {}} className="w-5 h-px bg-white block" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#07070C] border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 text-white/60 hover:text-gold border-b border-white/5 text-sm transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <button
                id="mobile-join-btn"
                onClick={() => { openJoinModal?.(); setMobileOpen(false); }}
                className="btn-primary mt-4 py-3 text-center text-xs font-bold tracking-widest uppercase w-full"
              >
                Join Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

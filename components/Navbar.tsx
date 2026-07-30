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
      setScrolled(true);
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
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg border border-accent/30 bg-accent/5 flex items-center justify-center transition-colors group-hover:bg-accent/10">
            <span className="text-accent font-bold text-xs tracking-wider">ACM</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900 leading-none">SRMIST Trichy</p>
            <p className="text-[10px] text-gray-400 mt-0.5 tracking-widest uppercase">Student Chapter</p>
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
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg ${
                  isActive
                    ? 'text-accent'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full"
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
          className="hidden md:block btn-primary px-5 py-2.5 text-sm font-semibold"
        >
          Join Us
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : {}} className="w-5 h-0.5 bg-gray-700 block rounded-full" />
          <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-0.5 bg-gray-700 block rounded-full" />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : {}} className="w-5 h-0.5 bg-gray-700 block rounded-full" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                    active === link.href
                      ? 'text-accent bg-accent/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <button
                id="mobile-join-btn"
                onClick={() => { openJoinModal?.(); setMobileOpen(false); }}
                className="btn-primary mt-3 py-3 text-center text-sm font-semibold w-full"
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

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import RotatingText from '@/components/RotatingText';

const words = ['Innovate.', 'Collaborate.', 'Compute.', 'Lead.'];

const features = [
  { icon: '⚡', label: '200+ Members' },
  { icon: '🏆', label: '50+ Events' },
  { icon: '💡', label: '10+ Workshops' },
  { icon: '🌐', label: 'ACM Global' },
];

export default function Hero({ openJoinModal }: { openJoinModal?: () => void }) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Background image with light overlay ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.jpg"
          alt="SRMIST Campus"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/50" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 md:px-12 lg:px-20 pt-28 pb-16">
          <div className="max-w-3xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-badge border border-accent/20 bg-accent/5"
            >
              <Image src="/assets/acm-logo.png" alt="ACM" width={20} height={20} unoptimized className="object-contain" />
              <span className="text-accent-dark text-xs font-semibold tracking-widest uppercase">
                SRMIST Tiruchirappalli · ACM Student Chapter
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.06] mb-6"
            >
              <span className="text-gray-900">Advancing</span>
              <br />
              <span className="text-gradient">Computing</span>
              <br />
              <span className="text-gray-900">as a Profession.</span>
            </motion.h1>

            {/* Rotating Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-xl sm:text-2xl font-heading font-semibold text-accent mb-8 h-9 flex items-center"
            >
              <RotatingText
                texts={words}
                mainClassName="overflow-hidden py-0.5"
                staggerFrom={"last"}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-gray-500 text-base sm:text-lg max-w-xl mb-12 leading-relaxed"
            >
              Empowering SRMIST students through workshops, hackathons, research, and
              the global ACM network — shaping the next generation of computing leaders.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/events" className="btn-primary px-8 py-3.5 text-sm font-semibold">
                Explore Events →
              </a>
              <a href="#about" className="btn-outline px-8 py-3.5 text-sm font-semibold">
                About ACM
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Feature strip at bottom ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="relative z-10 border-t border-gray-200 bg-white/80 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 py-5 flex flex-wrap justify-between gap-6">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <span className="text-xl">{f.icon}</span>
              <span className="text-gray-500 text-sm font-semibold tracking-wide">{f.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

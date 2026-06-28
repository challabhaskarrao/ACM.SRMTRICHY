'use client';

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  '/assets/pic1.jpg',
  '/assets/pic2.jpg',
  '/assets/pic3.jpg',
  '/assets/pic4.jpg',
  '/assets/pic5.jpg',
  '/assets/Empowering.jpg',
  '/assets/kickoff.jpeg',
];

export default function EventsShowcase() {
  return (
    <SectionWrapper id="events" className="cyber-grid">
      <div className="max-w-7xl mx-auto pl-8 lg:pl-16">
        <SectionHeading
          subtitle="Gallery"
          title="Event Showcase"
          description="Glimpses of our vibrant community and recent chapter activities."
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative overflow-hidden rounded-sm glass-card group break-inside-avoid block"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Event Photo ${i + 1}`}
                  width={600}
                  height={800}
                  unoptimized
                  className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-cyan text-xs mono">Event #{i + 1}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

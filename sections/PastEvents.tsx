'use client';

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';

const pastEvents = [
  { title: 'Inauguration Ceremony', date: 'January 2024', description: 'Official launch of the SRMIST Trichy ACM Student Chapter.' },
  { title: 'Web Development Bootcamp', date: 'February 2024', description: 'A 3-day intensive bootcamp covering HTML, CSS, JavaScript, and React.' },
  { title: 'Cybersecurity Awareness Workshop', date: 'March 2024', description: 'Interactive session on ethical hacking, network security, and best practices.' },
  { title: 'Code Clash 1.0', date: 'April 2024', description: 'Inter-college competitive programming contest with 150+ participants.' },
  { title: 'Cloud Computing Seminar', date: 'May 2024', description: 'Guest lecture on AWS, Azure, and cloud-native architectures.' },
  { title: 'Open Source Contribution Drive', date: 'June 2024', description: 'Month-long program encouraging students to contribute to open source.' },
];

export default function PastEvents() {
  return (
    <SectionWrapper id="pastevents" className="cyber-grid">
      <div className="max-w-4xl mx-auto pl-8 lg:pl-16">
        <SectionHeading subtitle="Timeline" title="Past Events" description="A look back at the events and initiatives that shaped our chapter." />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/60 via-purple/20 to-transparent" />

          <div className="space-y-10">
            {pastEvents.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.05 }}
                  className={`relative flex items-start gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 mt-1.5 z-10">
                    <div className="w-full h-full rounded-sm bg-[#0A0A1A] border-2 border-cyan shadow-[0_0_12px_rgba(6,182,212,0.5)]" />
                    <div className="absolute inset-1 rounded-sm bg-cyan animate-pulse-glow" />
                  </div>

                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <p className="text-cyan text-[10px] font-bold tracking-widest uppercase mono mb-1">{event.date}</p>
                    <h3 className="text-base font-bold text-white mb-1">{event.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

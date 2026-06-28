'use client';

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FacultySponsor() {
  return (
    <SectionWrapper id="faculty">
      <div className="max-w-6xl mx-auto pl-8 lg:pl-16">
        <SectionHeading
          subtitle="Faculty Sponsor"
          title="Our Mentor"
          description="Guided by experienced faculty who are passionate about fostering student growth in computing."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card rounded-sm p-10 text-center relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-cyan/30" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-purple/30" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-purple/30" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-cyan/30" />

            {/* Faculty Sponsor Photo */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-border overflow-hidden">
              <Image
                src="/assets/hod.webp"
                alt="Dr. Kanaga Suba Raja"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                unoptimized
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_6px_rgba(6,182,212,0.6)]" />
              <p className="text-cyan text-xs font-semibold tracking-widest uppercase mono">Faculty Sponsor</p>
              <div className="w-1.5 h-1.5 rounded-full bg-purple shadow-[0_0_6px_rgba(139,92,246,0.6)]" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">Dr. Kanaga Suba Raja</h3>
            <p className="text-white/25 text-sm mb-6 mono">Department of CSE, SRMIST Tiruchirappalli</p>

            <div className="w-10 h-px bg-gradient-to-r from-cyan/40 to-purple/40 mx-auto mb-6" />

            <p className="text-muted text-sm leading-relaxed max-w-md mx-auto">
              Our faculty sponsor provides invaluable guidance and mentorship, ensuring that
              the ACM Student Chapter continues to grow as a hub for learning, innovation,
              and professional development. Their support helps bridge academia with industry.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

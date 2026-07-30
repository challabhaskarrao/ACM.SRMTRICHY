'use client';

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FacultySponsor() {
  return (
    <SectionWrapper id="faculty" className="bg-surface">
      <div className="max-w-6xl mx-auto px-2">
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
          <div className="glass-card p-10 text-center relative overflow-hidden">
            {/* Faculty Sponsor Photo */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/15 ring-offset-4 ring-offset-white">
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

            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <p className="text-accent text-xs font-semibold tracking-widest uppercase">Faculty Sponsor</p>
              <div className="w-1.5 h-1.5 rounded-full bg-accent-dark" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Kanaga Suba Raja</h3>
            <p className="text-gray-400 text-sm mb-6">Department of CSE, SRMIST Tiruchirappalli</p>

            <div className="w-10 h-0.5 bg-accent/30 mx-auto mb-6 rounded-full" />

            <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
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

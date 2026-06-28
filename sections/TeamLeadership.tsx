'use client';

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const team = [
  { role: 'Chapter Chair', description: 'Leads the chapter vision and strategy, coordinates all activities.' },
  { role: 'Vice Chair', description: 'Supports the chair and oversees sub-committees and project teams.' },
  { role: 'Secretary', description: 'Manages communications, meeting minutes, and chapter documentation.' },
  { role: 'Treasurer', description: 'Handles chapter finances, budgeting, and sponsorship management.' },
  { role: 'Technical Lead', description: 'Maintains the chapter website and digital infrastructure.' },
  { role: 'Events Head', description: 'Plans and executes all chapter events, workshops, and hackathons.' },
];

export default function TeamLeadership() {
  return (
    <SectionWrapper id="team">
      <div className="max-w-7xl mx-auto pl-8 lg:pl-16">
        <SectionHeading
          subtitle="Our Team"
          title="Leadership"
          description="Meet the dedicated leaders who drive our chapter forward with passion and expertise."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <GlassCard className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-5 border border-cyan/30 bg-cyan/5 flex items-center justify-center rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-purple/10" />
                  <span className="text-cyan font-bold text-lg relative z-10">
                    {member.role.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <p className="text-cyan text-[10px] font-bold tracking-widest uppercase mono mb-2">{member.role}</p>
                <p className="text-white/30 text-sm leading-relaxed">{member.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

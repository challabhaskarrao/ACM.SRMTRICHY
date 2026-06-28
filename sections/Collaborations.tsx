'use client';

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const collabItems = [
  { icon: '🎓', title: 'Student Chapters', description: 'Partner with ACM chapters at other universities for inter-college events, knowledge sharing, and collaborative projects.' },
  { icon: '🏢', title: 'Industry Partners', description: 'Collaborate with tech companies for sponsored workshops, internship opportunities, and real-world project mentorship.' },
  { icon: '🔬', title: 'Research Groups', description: 'Work alongside faculty research groups to contribute to cutting-edge computing research and publications.' },
];

export default function Collaborations({ openJoinModal }: { openJoinModal?: () => void }) {
  return (
    <SectionWrapper id="collaborations" className="cyber-grid">
      <div className="max-w-7xl mx-auto pl-8 lg:pl-16">
        <SectionHeading subtitle="Collaborate" title="Work With Us" description="We're always looking for partners to create impactful experiences for our community." />

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {collabItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-sm bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan/20 to-transparent" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-sm p-10 md:p-16 max-w-3xl mx-auto text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple/5 rounded-full blur-3xl" />

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_6px_rgba(6,182,212,0.6)]" />
            <p className="text-cyan text-xs font-bold tracking-widest uppercase mono">— Ready?</p>
            <div className="w-1.5 h-1.5 rounded-full bg-purple shadow-[0_0_6px_rgba(139,92,246,0.6)]" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Make an Impact</h3>
          <p className="text-muted mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            Whether you're a student, faculty member, or industry professional — there's a place
            for you in our community. Let's build the future of computing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              id="collab-join-btn"
              onClick={openJoinModal}
              className="btn-primary px-8 py-3 text-sm rounded-sm"
            >
              <span>Get In Touch →</span>
            </button>
            <a href="https://www.acm.org/chapters/students" target="_blank" rel="noopener noreferrer"
              className="btn-outline px-8 py-3 text-sm rounded-sm">
              Learn About ACM
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

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
    <SectionWrapper id="collaborations">
      <div className="max-w-7xl mx-auto px-2">
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
                  <div className="w-10 h-10 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 max-w-3xl mx-auto text-center relative overflow-hidden bg-surface"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <p className="text-accent text-xs font-bold tracking-widest uppercase">Ready?</p>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-dark" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Make an Impact</h3>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            Whether you're a student, faculty member, or industry professional — there's a place
            for you in our community. Let's build the future of computing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              id="collab-join-btn"
              onClick={openJoinModal}
              className="btn-primary px-8 py-3 text-sm font-semibold"
            >
              <span>Get In Touch →</span>
            </button>
            <a href="https://www.acm.org/chapters/students" target="_blank" rel="noopener noreferrer"
              className="btn-outline px-8 py-3 text-sm font-semibold">
              Learn About ACM
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

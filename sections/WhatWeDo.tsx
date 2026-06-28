'use client';

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const activities = [
  { icon: '💻', title: 'Technical Workshops', description: 'Hands-on sessions covering web development, AI/ML, cybersecurity, cloud computing, and emerging technologies.' },
  { icon: '🏆', title: 'Hackathons & Competitions', description: 'Coding competitions, hackathons, and problem-solving challenges to sharpen real-world skills.' },
  { icon: '🎤', title: 'Guest Lectures & Talks', description: 'Learn from industry experts, researchers, and ACM Distinguished Speakers on cutting-edge topics.' },
  { icon: '🤝', title: 'Networking Events', description: 'Connect with peers, alumni, and industry professionals to build lasting professional relationships.' },
  { icon: '📚', title: 'Study Groups & Mentorship', description: 'Collaborative learning through peer mentoring, study groups, and knowledge-sharing sessions.' },
  { icon: '🌐', title: 'Community Outreach', description: 'Initiatives like the Future Makers Initiative, introducing technology and computing to school students.' },
];

export default function WhatWeDo() {
  return (
    <SectionWrapper id="whatwedo">
      <div className="max-w-7xl mx-auto pl-8 lg:pl-16">
        <SectionHeading
          subtitle="What We Do"
          title="Our Activities"
          description="A diverse range of activities to foster learning, innovation, and community among our members."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
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
      </div>
    </SectionWrapper>
  );
}

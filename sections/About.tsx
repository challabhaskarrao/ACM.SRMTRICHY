'use client';

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const stats = [
  { value: '200+', label: 'Active Members' },
  { value: '50+', label: 'Events Hosted' },
  { value: '10+', label: 'Workshops' },
  { value: '5+', label: 'Years Active' },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="cyber-grid">
      <div className="max-w-7xl mx-auto pl-8 lg:pl-16">
        <SectionHeading
          subtitle="About Us"
          title="Who We Are"
          description="The ACM Student Chapter at SRMIST Tiruchirappalli is a vibrant community of computing enthusiasts dedicated to advancing the art, science, and application of information technology."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <GlassCard hover={false}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_6px_rgba(6,182,212,0.6)]" />
              <p className="text-cyan text-xs font-semibold tracking-widest uppercase mono">Our Mission</p>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Fostering Innovation</h3>
            <p className="text-muted leading-relaxed text-sm">
              We strive to foster a culture of innovation and collaboration among students.
              Our chapter provides a platform for members to develop their skills in computing,
              network with industry professionals, and contribute to the broader computing community.
              We organise workshops, hackathons, technical talks, and collaborative projects
              that bridge the gap between academic knowledge and real-world application.
            </p>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple shadow-[0_0_6px_rgba(139,92,246,0.6)]" />
              <p className="text-purple text-xs font-semibold tracking-widest uppercase mono">ACM Global</p>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Association for Computing Machinery</h3>
            <p className="text-muted leading-relaxed text-sm">
              ACM, the world's largest educational and scientific computing society, delivers
              resources that advance computing as a science and profession. Founded in 1947,
              ACM has a global membership of over 100,000 professionals and students, providing
              the computing field's premier Digital Library, leading publications, conferences,
              and career resources.
            </p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/[0.03] pt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-white/25 text-xs tracking-widest uppercase mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

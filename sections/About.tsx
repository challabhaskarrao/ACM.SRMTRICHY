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
    <SectionWrapper id="about" className="bg-surface">
      <div className="max-w-7xl mx-auto px-2">
        <SectionHeading
          subtitle="About Us"
          title="Who We Are"
          description="The ACM Student Chapter at SRMIST Tiruchirappalli is a vibrant community of computing enthusiasts dedicated to advancing the art, science, and application of information technology."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <GlassCard hover={false}>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <p className="text-accent text-xs font-semibold tracking-widest uppercase">Our Mission</p>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fostering Innovation</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              We strive to foster a culture of innovation and collaboration among students.
              Our chapter provides a platform for members to develop their skills in computing,
              network with industry professionals, and contribute to the broader computing community.
              We organise workshops, hackathons, technical talks, and collaborative projects
              that bridge the gap between academic knowledge and real-world application.
            </p>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent-dark" />
              <p className="text-accent-dark text-xs font-semibold tracking-widest uppercase">ACM Global</p>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Association for Computing Machinery</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              ACM, the world's largest educational and scientific computing society, delivers
              resources that advance computing as a science and profession. Founded in 1947,
              ACM has a global membership of over 100,000 professionals and students, providing
              the computing field's premier Digital Library, leading publications, conferences,
              and career resources.
            </p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
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
              <div className="text-gray-400 text-xs tracking-widest uppercase font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`glass-card rounded-sm p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

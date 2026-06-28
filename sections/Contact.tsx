'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/acmsrm',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/srm-ist-acm-student-chapter/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

export default function Contact({ openJoinModal }: { openJoinModal?: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Construct email body
    const subject = encodeURIComponent(`Contact Inquiry - ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `Message:\n${form.message}`
    );
    
    // Trigger mail client
    window.location.href = `mailto:connect@srmtrichy.acm.org?subject=${subject}&body=${body}`;

    // Show success UI after a brief delay
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto pl-8 lg:pl-16">
        <SectionHeading subtitle="Get In Touch" title="Contact Us" description="Have questions or want to join? We'd love to hear from you." />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card rounded-sm p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-cyan/30 bg-cyan/5 flex items-center justify-center flex-shrink-0 rounded-sm">
                  <span className="text-cyan text-xs">📍</span>
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mono mb-1">Address</p>
                  <p className="text-muted text-sm leading-relaxed">SRM Institute of Science and Technology,<br />Tiruchirappalli, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-purple/30 bg-purple/5 flex items-center justify-center flex-shrink-0 rounded-sm">
                  <span className="text-purple text-xs">✉️</span>
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mono mb-1">Email</p>
                  <p className="text-muted text-sm">connect@srmtrichy.acm.org</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-4 mono">Connect With Us</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 border border-white/[0.06] bg-white/[0.02] flex items-center justify-center hover:border-cyan/40 hover:bg-cyan/5 transition-all duration-300 group rounded-sm"
                  >
                    <svg className="w-4 h-4 text-white/25 group-hover:text-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            {/* Join Us CTA */}
            <button
              id="contact-join-btn"
              onClick={openJoinModal}
              className="btn-primary w-full py-3.5 text-sm rounded-sm tracking-widest uppercase"
            >
              <span>Join Us →</span>
            </button>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-sm p-8 relative overflow-hidden">
              {status === 'success' && (
                <div className="absolute inset-0 z-10 bg-[#0d0d1a]/95 backdrop-blur-md flex flex-col items-center justify-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-cyan/10 border-2 border-cyan/30 flex items-center justify-center text-2xl mb-4 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                    ✓
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Message Sent!</h4>
                  <p className="text-muted text-sm text-center max-w-[200px]">
                    We've opened your mail client. Thanks for reaching out!
                  </p>
                </div>
              )}
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="text-white/35 text-xs tracking-widest uppercase mb-2 block mono">Name</label>
                  <input
                    id="contact-name" type="text" placeholder="Your name" required
                    value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.06] text-white text-sm placeholder-white/15 focus:outline-none focus:border-cyan/50 transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-white/35 text-xs tracking-widest uppercase mb-2 block mono">Email</label>
                  <input
                    id="contact-email" type="email" placeholder="you@example.com" required
                    value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.06] text-white text-sm placeholder-white/15 focus:outline-none focus:border-cyan/50 transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-white/35 text-xs tracking-widest uppercase mb-2 block mono">Message</label>
                  <textarea
                    id="contact-message" rows={4} placeholder="Your message..." required
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.06] text-white text-sm placeholder-white/15 focus:outline-none focus:border-cyan/50 transition-colors resize-none rounded-sm"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="btn-primary w-full py-3.5 text-sm rounded-sm tracking-widest uppercase disabled:opacity-50"
                >
                  <span>{status === 'submitting' ? 'Opening Mail...' : 'Send Message →'}</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/10 text-xs tracking-wide">
            © 2025 SRMIST Tiruchirappalli ACM Student Chapter. All rights reserved.
          </p>
          <p className="text-white/10 text-xs mono">
            Powered by <span className="text-cyan">ACM</span>
          </p>
          <p className="text-white/[0.06] text-[10px] mono">
            Designed with &lt;/&gt; by ACM Team
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

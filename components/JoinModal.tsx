'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './JoinModal.css';

type Step = 'question' | 'apply' | 'external' | 'success';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStep?: 'question' | 'apply' | 'external';
}

const DEPARTMENTS = [
  'Technical',
  'Design & Creative',
  'Content & Media',
  'Events & Management',
  'Outreach & Community',
  'Research & Innovation',
];

const PERKS = ['ACM membership', 'Workshops', 'Hackathons', 'Networking', 'Certificates', 'Industry talks'];

export default function JoinModal({ isOpen, onClose, initialStep = 'question' }: JoinModalProps) {
  const [step, setStep] = useState<Step>(initialStep);
  const [closing, setClosing] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', regNo: '', dept: '', year: '', why: '' });
  const [submitting, setSubmitting] = useState(false);

  // Use ref so ESC handler always sees latest handleClose
  const handleCloseRef = useRef<() => void>(() => {});

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 250);
  }, [onClose]);

  // Keep ref in sync
  useEffect(() => { handleCloseRef.current = handleClose; }, [handleClose]);

  // ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleCloseRef.current(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset state on open — use initialStep each time
  useEffect(() => {
    if (isOpen) {
      setStep(initialStep);
      setForm({ name: '', email: '', regNo: '', dept: '', year: '', why: '' });
      setClosing(false);
    }
  }, [isOpen, initialStep]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Construct email body
    const subject = encodeURIComponent(`Chapter Application - ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Registration Number: ${form.regNo}\n` +
      `Year: ${form.year}\n` +
      `Department: ${form.dept}\n\n` +
      `Motivation:\n${form.why}`
    );
    
    // Trigger mail client
    window.location.href = `mailto:connect@srmtrichy.acm.org?subject=${subject}&body=${body}`;

    // Show success UI after a brief delay
    await new Promise(r => setTimeout(r, 800));
    setSubmitting(false);
    setStep('success');
  };

  if (!isOpen && !closing) return null;

  return createPortal(
    <div
      className={`jm-backdrop${closing ? ' closing' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="jm-title"
    >
      <div className="jm-panel">
        {/* ─── Sticky top strip: gradient bar + close btn ─── */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          background: '#0d0d1a',
        }}>
          <div className="jm-top-bar" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 3 }} />
          <button
            className="jm-close"
            onClick={handleClose}
            aria-label="Close"
            style={{ position: 'relative', top: 'auto', right: 'auto', margin: '0.6rem 0.75rem 0.35rem' }}
          >
            ✕
          </button>
        </div>

        {/* ════════════════════════════════════════════════
            STEP: QUESTION
            ════════════════════════════════════════════════ */}
        {step === 'question' && (
          <>
            <div className="jm-header">
              <div className="jm-header-eyebrow">
                <span className="jm-dot" />
                <span className="jm-eyebrow-text">Membership</span>
              </div>
              <h2 className="jm-title" id="jm-title">
                Are you an <span className="jm-title-accent">SRMIST Tiruchirappalli</span> student?
              </h2>
              <p className="jm-subtitle">
                Choose the option that fits you — we'll guide you from there.
              </p>
            </div>

            <div className="jm-body">
              <div className="jm-options">
                <button
                  id="jm-yes"
                  className="jm-option jm-option-yes"
                  onClick={() => setStep('apply')}
                >
                  <div className="jm-option-icon">🎓</div>
                  <div>
                    <div className="jm-option-label">Yes, I study at SRMIST Trichy</div>
                    <div className="jm-option-desc">Apply for an official chapter position</div>
                  </div>
                  <span className="jm-option-arrow">→</span>
                </button>

                <button
                  id="jm-no"
                  className="jm-option jm-option-no"
                  onClick={() => setStep('external')}
                >
                  <div className="jm-option-icon">🌐</div>
                  <div>
                    <div className="jm-option-label">No, I'm from another institution</div>
                    <div className="jm-option-desc">Explore ACM global membership options</div>
                  </div>
                  <span className="jm-option-arrow">→</span>
                </button>
              </div>

              {/* Perks strip */}
              <div className="jm-tags">
                {PERKS.map(p => <span key={p} className="jm-tag">{p}</span>)}
              </div>
            </div>
          </>
        )}

        {/* ════════════════════════════════════════════════
            STEP: APPLY (Yes path)
            ════════════════════════════════════════════════ */}
        {step === 'apply' && (
          <>
            <div className="jm-header">
              <button className="jm-back" onClick={() => setStep('question')}>← Back</button>
              <div className="jm-step-eyebrow">
                <span className="jm-step-dot" />
                <span className="jm-step-label">Apply for a Position</span>
              </div>
              <h2 className="jm-step-title" id="jm-title">Join Our Chapter</h2>
              <p className="jm-subtitle">
                Fill in your details and our team will review your application within 3–5 days.
              </p>
            </div>

            <div className="jm-body">
              <form onSubmit={handleSubmit}>
                <div className="jm-field">
                  <label htmlFor="jm-name" className="jm-label">Full Name</label>
                  <input
                    id="jm-name" name="name" type="text"
                    className="jm-input" placeholder="Your full name"
                    value={form.name} onChange={handleChange} required
                  />
                </div>

                <div className="jm-field">
                  <label htmlFor="jm-email" className="jm-label">College Email</label>
                  <input
                    id="jm-email" name="email" type="email"
                    className="jm-input" placeholder="yourname@srmist.edu.in"
                    value={form.email} onChange={handleChange} required
                  />
                </div>

                <div className="jm-grid-2">
                  <div className="jm-field">
                    <label htmlFor="jm-regno" className="jm-label">Reg. Number</label>
                    <input
                      id="jm-regno" name="regNo" type="text"
                      className="jm-input" placeholder="RA2XXXXXXXXX"
                      value={form.regNo} onChange={handleChange} required
                    />
                  </div>
                  <div className="jm-field">
                    <label htmlFor="jm-year" className="jm-label">Year</label>
                    <select
                      id="jm-year" name="year"
                      className="jm-select"
                      value={form.year} onChange={handleChange} required
                    >
                      <option value="">Select</option>
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </div>
                </div>

                <div className="jm-field">
                  <label htmlFor="jm-dept" className="jm-label">Preferred Department</label>
                  <select
                    id="jm-dept" name="dept"
                    className="jm-select"
                    value={form.dept} onChange={handleChange} required
                  >
                    <option value="">Choose a role area</option>
                    {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>

                <div className="jm-field">
                  <label htmlFor="jm-why" className="jm-label">Why do you want to join?</label>
                  <textarea
                    id="jm-why" name="why" rows={3}
                    className="jm-textarea"
                    placeholder="Tell us about yourself and your motivation..."
                    value={form.why} onChange={handleChange} required
                  />
                </div>

                <button id="jm-submit" type="submit" className="jm-submit" disabled={submitting}>
                  <span>{submitting ? 'Submitting…' : 'Submit Application →'}</span>
                </button>
              </form>

              <p className="jm-footer-note">
                We review applications within 3–5 business days
              </p>
            </div>
          </>
        )}

        {/* ════════════════════════════════════════════════
            STEP: EXTERNAL (No path)
            ════════════════════════════════════════════════ */}
        {step === 'external' && (
          <>
            <div className="jm-header">
              <button className="jm-back" onClick={() => setStep('question')}>← Back</button>
              <div className="jm-step-eyebrow purple">
                <span className="jm-step-dot" />
                <span className="jm-step-label">ACM Global</span>
              </div>
              <h2 className="jm-step-title" id="jm-title">Join ACM Globally</h2>
              <p className="jm-subtitle">
                You can still be part of the world's largest computing society — pick the path that works for you.
              </p>
            </div>

            <div className="jm-body">
              <div className="jm-ext-cards">
                <a
                  id="jm-acm-membership"
                  href="https://www.acm.org/membership/membership-options"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jm-ext-card"
                >
                  <div className="jm-ext-icon">🎓</div>
                  <div>
                    <div className="jm-ext-label">ACM Student Membership</div>
                    <div className="jm-ext-desc">Affordable membership for students worldwide</div>
                  </div>
                  <span className="jm-ext-arrow">↗</span>
                </a>

                <a
                  id="jm-acm-chapters"
                  href="https://www.acm.org/chapters/students"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jm-ext-card"
                >
                  <div className="jm-ext-icon">🌐</div>
                  <div>
                    <div className="jm-ext-label">Find a Local ACM Chapter</div>
                    <div className="jm-ext-desc">Locate a student chapter near your institution</div>
                  </div>
                  <span className="jm-ext-arrow">↗</span>
                </a>

                <a
                  id="jm-email-chapter"
                  href="mailto:connect@srmtrichy.acm.org"
                  className="jm-ext-card"
                >
                  <div className="jm-ext-icon">✉️</div>
                  <div>
                    <div className="jm-ext-label">Email Our Chapter</div>
                    <div className="jm-ext-desc">connect@srmtrichy.acm.org</div>
                  </div>
                  <span className="jm-ext-arrow">→</span>
                </a>
              </div>

              <p className="jm-footer-note">
                Links open in a new tab · ACM is a global professional society
              </p>
            </div>
          </>
        )}

        {/* ════════════════════════════════════════════════
            STEP: SUCCESS
            ════════════════════════════════════════════════ */}
        {step === 'success' && (
          <>
            <div className="jm-header">
              <div style={{ height: '0.25rem' }} />
            </div>
            <div className="jm-body">
              <div className="jm-success">
                <div className="jm-success-ring">🎉</div>
                <h2 className="jm-success-title">Application Submitted!</h2>
                <p className="jm-success-desc">
                  Thanks, <strong style={{ color: '#fff' }}>{form.name || 'there'}</strong>! We've received
                  your application and will reach out to<br />
                  <span className="jm-success-accent">{form.email}</span>
                  <br />within 3–5 business days.
                </p>
                <button
                  id="jm-done"
                  className="jm-submit"
                  style={{ maxWidth: 200, margin: '0 auto', display: 'block' }}
                  onClick={handleClose}
                >
                  <span>Done ✓</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

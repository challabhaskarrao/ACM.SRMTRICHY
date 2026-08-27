'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 border-t border-white/10 text-white/70 py-12 px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white tracking-wide">
            ACM SRMIST Trichy
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Advancing computing as a science and profession. Empowering students
            through innovation, workshops, hackathons, and technical excellence.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#what-we-do" className="hover:text-blue-400 transition-colors">
                What We Do
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-blue-400 transition-colors">
                Events
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Connect
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/challabhaskarrao/ACM.SRMTRICHY"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn Chapter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Location
          </h4>
          <p className="text-sm text-white/60 leading-relaxed">
            SRM Institute of Science and Technology,
            <br />
            Tiruchirappalli Campus, Tamil Nadu, India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40">
        <p>© {new Date().getFullYear()} ACM SRMIST Trichy Student Chapter. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Built with Next.js & React</p>
      </div>
    </footer>
  );
}

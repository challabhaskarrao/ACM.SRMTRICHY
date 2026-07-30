'use client';

import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import SmoothScroll from '@/components/SmoothScroll';
import Link from 'next/link';
import MagicBento from '@/components/MagicBento';

const galleryCards = [
  {
    image: '/assets/pp1.jpeg',
    label: 'Lab Visit',
    title: 'AR/VR Exploration',
    description: 'Students getting hands-on with AR/VR headsets and microbiology lab equipment during the Future Makers lab visit.',
    className: 'lg:col-span-2 lg:row-span-2'
  },
  {
    image: '/assets/pp2.jpeg',
    label: 'Guest Lecture',
    title: 'Empowering Computing',
    description: 'Dr. Maria DSouza Choudhary delivering an expert talk on career development.',
    className: 'lg:col-span-1 lg:row-span-1'
  },
  {
    image: '/assets/pp3.jpeg',
    label: 'Team Kickoff',
    title: 'Strategy & Planning',
    description: 'ACM Student Chapter members aligning on upcoming initiatives and goal mapping.',
    className: 'lg:col-span-1 lg:row-span-1'
  },
  {
    image: '/assets/pp4.jpeg',
    label: 'Workshop',
    title: 'Technical Seminars',
    description: 'Empowering minds through interactive technical talks and expert-led workshop sessions.',
    className: 'lg:col-span-2 lg:row-span-1'
  },
  {
    image: '/assets/pp5.jpeg',
    label: 'Networking',
    title: 'Global ACM Community',
    description: 'Developing collaboration and technical peer-to-peer exchange networks.',
    className: 'lg:col-span-1 lg:row-span-1'
  },
  {
    image: '/assets/pp6.jpeg',
    label: 'Bootcamp',
    title: 'Hands-on Coding',
    description: 'Intense programming bootcamps building projects and solving algorithmic challenges.',
    className: 'lg:col-span-2 lg:row-span-1'
  },
  {
    image: '/assets/pp7.jpeg',
    label: 'Leadership',
    title: 'Student Chapter Core',
    description: 'Guiding SRMIST computing students toward technical excellence and innovation leadership.',
    className: 'lg:col-span-1 lg:row-span-1'
  }
];

export default function GalleryPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Event Gallery"
            title="A Glimpse Into Our Chapter"
            description="A glimpse into our workshops, seminars, and community gatherings."
            align="center"
          />

          <div className="mt-16">
            <MagicBento 
              cards={galleryCards}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              glowColor="6, 182, 212"
            />
          </div>

          <div className="mt-20 text-center">
            <Link href="/" className="btn-outline px-8 py-3 text-sm font-semibold tracking-widest uppercase inline-block">
              ← Back to Home
            </Link>
          </div>
          
        </div>
      </main>
    </SmoothScroll>
  );
}

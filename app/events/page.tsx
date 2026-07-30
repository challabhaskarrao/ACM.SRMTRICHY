'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import SmoothScroll from '@/components/SmoothScroll';
import Image from 'next/image';
import Link from 'next/link';
import MagicBento from '@/components/MagicBento';

const posterCards = [
  {
    image: '/assets/pic1.jpg',
    label: 'Coding Contest',
    title: 'Code Clash 1.0',
    description: 'An intense inter-college competitive programming challenge with over 150+ participants coding to solve real-world problems.',
    className: 'lg:col-span-2 lg:row-span-2'
  },
  {
    image: '/assets/pic2.jpg',
    label: 'Bootcamp',
    title: 'Full Stack JavaScript',
    description: '3-day technical bootcamp covering modern web tech stacks (HTML, CSS, JS, and React).',
    className: 'lg:col-span-1 lg:row-span-1'
  },
  {
    image: '/assets/pic3.jpg',
    label: 'Workshop',
    title: 'Cybersecurity Awareness',
    description: 'Interactive session exploring ethical hacking concepts, web application penetration testing, and security policies.',
    className: 'lg:col-span-1 lg:row-span-1'
  },
  {
    image: '/assets/pic4.jpg',
    label: 'Seminar',
    title: 'Cloud Architectures',
    description: 'Special guest lectures about deploying, managing, and scaling systems on Amazon Web Services (AWS) and Azure.',
    className: 'lg:col-span-2 lg:row-span-1'
  },
  {
    image: '/assets/pic5.jpg',
    label: 'Open Source',
    title: 'Git & GitHub Drive',
    description: 'A month-long initiative guiding student developers towards open-source repositories and contribution culture.',
    className: 'lg:col-span-4 lg:row-span-1'
  }
];

export default function EventsPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            subtitle="Our Events"
            title="Event Highlights"
            description="Discover our latest initiatives, workshops, and seminars."
            align="center"
          />

          <div className="space-y-20 mt-16">
            
            {/* Event 1 */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card rounded-card p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center font-heading">
                Future Makers Initiative
              </h2>
              
              <div className="grid md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-2 overflow-hidden rounded-card border border-accent/20 shadow-sm">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/assets/acm1_1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-gradient mb-4 font-heading">
                    Lab visit for school students
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-6 text-xs text-accent-dark tracking-widest uppercase font-semibold mb-6">
                    <span className="flex items-center gap-2">
                      <span className="text-base">📅</span> August 01, 2025
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-base">⏰</span> 02:00 PM - 5:00 PM
                    </span>
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    We recently hosted an enriching lab visit for students from Alpha School, Tiruchirappalli. The students had the opportunity to explore our state-of-the-art facilities, including the AR/VR Lab Centre of Excellence, MAC Lab, MATLAB Lab, Biotech Lab, and Neuro Microbiology Lab.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    During the visit, they gained hands-on experience and insights into various scientific and technological applications. The event aimed to inspire and motivate young minds, providing them with a glimpse into the exciting world of science and technology. The visit was a resounding success, with students and faculty alike benefiting from the experience. We're proud to share our knowledge and facilities with the next generation of innovators and leaders !
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Event 2 */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card rounded-card p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center font-heading">
                Guest Lecture
              </h2>
              
              <div className="grid md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-3 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-gradient mb-4 font-heading">
                    Empowering Students Through ACM
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-6 text-xs text-accent-dark tracking-widest uppercase font-semibold mb-6">
                    <span className="flex items-center gap-2">
                      <span className="text-base">📅</span> August 05, 2025
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-base">⏰</span> 09:00 AM - 12:00 PM
                    </span>
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed">
                    On 5 August 2025, the School of Computing, SRM Institute of Science and Technology, Tiruchirappalli, organized a seminar titled Empowering Students Through ACM Explore, Engage, Excel. Delivered by Dr. Maria DSouza Choudhary, Principal MTS at Oracle India and Executive Council Member of ACM India, the session highlighted ACMs resources, networking opportunities, and skill-building platforms, encouraging students to actively participate and leverage ACM membership for academic and professional advancement.
                  </p>
                </div>
                
                <div className="md:col-span-2 order-1 md:order-2 overflow-hidden rounded-card border border-accent/20 shadow-sm">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/assets/videoevent1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.section>

            {/* Event 3 */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card rounded-card p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center font-heading">
                ACM 2025-26 Kickoff
              </h2>
              
              <div className="grid md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-2 overflow-hidden rounded-card border border-accent/20">
                  <Image 
                    src="/assets/kickoff.jpeg" 
                    alt="Kickoff Meeting" 
                    width={500} 
                    height={400} 
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-gradient mb-4 font-heading">
                    Strategy and Planning Meeting
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-6 text-xs text-accent-dark tracking-widest uppercase font-semibold mb-6">
                    <span className="flex items-center gap-2">
                      <span className="text-base">📅</span> August 04, 2025
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-base">⏰</span> 10:00 AM - 1:00 PM
                    </span>
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Kicking off the new fiscal year 2025-26 with a bang!
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Our SRMIST Tiruchirappalli ACM Student Chapter team came together for a strategy and planning meeting today to map out our goals and objectives for this year.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    A huge thank you to our team members for their dedication and enthusiasm. We're looking forward to an amazing year ahead!
                  </p>
                </div>
              </div>
            </motion.section>

          </div>

          {/* Past Events Gallery Subsection */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="premium-card rounded-card p-8 md:p-12 mt-20"
          >
            <SectionHeading
              subtitle="Highlights"
              title="Past Events Gallery"
              description="Browse through the posters of our successful past workshops, bootcamps, and hackathons."
              align="center"
            />
            <div className="mt-12">
              <MagicBento
                cards={posterCards}
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
          </motion.section>
          
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

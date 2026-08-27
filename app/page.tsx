'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import WhatWeDo from '@/sections/WhatWeDo';
import FacultySponsor from '@/sections/FacultySponsor';
import Collaborations from '@/sections/Collaborations';
import Contact from '@/sections/Contact';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollNav from '@/components/ScrollNav';
import SplashScreen from '@/components/SplashScreen';
import JoinModal from '@/components/JoinModal';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

type ModalStep = 'question' | 'apply' | 'external';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<ModalStep>('question');

  // Opens modal at the "Are you a student?" question
  const openJoinModal = () => {
    setModalStep('question');
    setJoinModalOpen(true);
  };

  // Opens modal directly at the application form (skips question)
  const openApplyDirect = () => {
    setModalStep('apply');
    setJoinModalOpen(true);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <SmoothScroll>
          <ScrollNav />
          <Navbar openJoinModal={openJoinModal} />
          <main>
            <Hero openJoinModal={openJoinModal} />
            <About />
            <WhatWeDo />
            <FacultySponsor />
            <Collaborations openJoinModal={openApplyDirect} />
            <Contact openJoinModal={openJoinModal} />
          </main>
          <Footer />
          <BackToTop />
          <JoinModal
            isOpen={joinModalOpen}
            onClose={() => setJoinModalOpen(false)}
            initialStep={modalStep}
          />
        </SmoothScroll>
      )}
    </>
  );
}

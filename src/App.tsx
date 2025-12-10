import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Socials } from './components/layout';
import { Hero, Intro } from './components/section1';
import { Aurora } from './components/ui';
import { AboutMe } from './components/section2';
import { Work } from './components/section3';
import { useLenis } from './hooks/useLenis';

import { Footer } from './components/effects';

function App() {
  // Smooth scroll
  useLenis();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  // Intro state
  const [showIntro, setShowIntro] = useState(true);
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="font-sans text-gray-900 min-h-screen relative">
      {/* Intro Overlay */}
      <AnimatePresence mode='wait'>
        {showIntro && <Intro onComplete={() => {
          setShowIntro(false);
          setIntroFinished(true);
        }} />}
      </AnimatePresence>
      {/* Section 1 - Hero với Aurora background */}
      <section className="relative h-screen overflow-hidden">
        {/* Aurora background chỉ cho section 1 */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1}
            speed={0.6}
          />
        </div>
        {/* Navbar và Socials section 1 */}
        <div className="relative z-10">
          <Navbar introFinished={introFinished} />
          <Socials introFinished={introFinished} />
          <Hero introFinished={introFinished} />
        </div>
      </section>
      {/* Section 2 - About Me */}
      <AboutMe />
      {/* Section 3 - Work */}
      <Work />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

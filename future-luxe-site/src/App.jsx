import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './components/Hero.jsx';
import Tokenomics from './components/Tokenomics.jsx';
import NFTGallery from './components/NFTGallery.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="page">
      <Hero />
      <Tokenomics />
      <NFTGallery />
      <Footer />
    </div>
  );
};

export default App;

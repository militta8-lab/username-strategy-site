import React, { useEffect, useRef } from 'react';
import Scene from '../three/Scene.jsx';
import { heroMotion } from '../animations/heroMotion.js';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    heroMotion(titleRef, subtitleRef, buttonsRef, canvasRef);
  }, []);

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow">UsernamesStrategy</p>
          <h1 ref={titleRef} className="hero__title">
            Future-Luxe Identity
          </h1>
          <p ref={subtitleRef} className="hero__subtitle">
            Premium identity, liquid tokenomics, immersive ownership. A luxe digital layer designed for high-fidelity communities.
          </p>
          <div ref={buttonsRef} className="hero__cta">
            <button className="btn btn-primary">Buy token</button>
            <button className="btn btn-ghost">Explore</button>
          </div>
        </div>
        <div ref={canvasRef} className="hero__visual">
          <Scene />
        </div>
      </div>
      <div className="hero__glow" aria-hidden />
    </section>
  );
};

export default Hero;

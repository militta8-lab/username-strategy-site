import { gsap } from 'gsap';

export const heroMotion = (titleRef, subtitleRef, buttonsRef, canvasRef) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from(titleRef.current, { opacity: 0, y: 30, duration: 1 })
    .from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
    .from(buttonsRef.current?.children || [], { opacity: 0, y: 20, stagger: 0.15, duration: 0.6 }, '-=0.5')
    .from(canvasRef.current, { opacity: 0, scale: 0.85, duration: 1.2 }, '-=0.8');
};

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const sectionReveal = (element, options = {}) => {
  if (!element.current) return;

  gsap.from(element.current, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    scrollTrigger: {
      trigger: element.current,
      start: 'top 80%',
    },
    ...options,
  });
};

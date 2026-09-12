import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useBreadMotion(root, pathname) {
  useEffect(() => {
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) return undefined;

    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const styles = getComputedStyle(root.current);
      const duration = parseFloat(styles.getPropertyValue('--duration-slow')) / 1000;
      const distance = parseFloat(styles.getPropertyValue('--reveal-distance'));
      const heroElements = root.current.querySelectorAll('.bread-hero-copy [data-reveal]');
      if (heroElements.length) {
        gsap.fromTo(heroElements, { opacity: 0, y: distance }, {
          opacity: 1,
          y: 0,
          duration,
          ease: 'power2.out',
          stagger: 0.06,
          clearProps: 'opacity,transform',
        });
      }
      root.current.querySelectorAll('section:not(.bread-hero) [data-reveal]').forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: distance }, {
          opacity: 1,
          y: 0,
          duration,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: element, start: 'clamp(top 95%)', once: true },
        });
      });
    }, root);

    return () => media.revert();
  }, [root, pathname]);
}

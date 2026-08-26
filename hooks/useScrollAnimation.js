'use client';
import { useEffect } from 'react';

export default function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

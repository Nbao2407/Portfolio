import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    // Khởi tạo Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2, // Thời gian scroll (giây)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function mượt mà
      orientation: 'vertical', // Hướng scroll
      gestureOrientation: 'vertical', // Hướng gesture
      smoothWheel: true, // Smooth scroll với mouse wheel
      wheelMultiplier: 1, // Tốc độ scroll wheel
      touchMultiplier: 2, // Tốc độ scroll trên touch
      infinite: false, // Không loop scroll
    });

    // Animation frame để update scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup khi component unmount
    return () => {
      lenis.destroy();
    };
  }, []);
};

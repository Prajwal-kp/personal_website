import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollPercentage: number;
  isScrolled: boolean;
}

export const useScrollPosition = (scrollThreshold = 50): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollPercentage: 0,
    isScrolled: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = windowHeight > 0 ? (scrollY / windowHeight) * 100 : 0;
      
      setScrollPosition({
        scrollY,
        scrollPercentage,
        isScrolled: scrollY > scrollThreshold
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  return scrollPosition;
};
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/use-mobile';

const ScrollToTop = () => {
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(scrollPosition > 300);
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="glass shadow-glow hover:shadow-glow/80 transition-all duration-300 hover:scale-110 btn-modern group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </Button>
    </div>
  );
};

export default ScrollToTop; 
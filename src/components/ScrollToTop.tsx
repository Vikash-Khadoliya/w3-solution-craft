import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg interactive-button animate-bounce-in hover-glow pulse-glow"
          size="icon"
          variant="hero"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
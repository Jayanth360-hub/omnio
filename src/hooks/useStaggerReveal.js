import { useEffect, useRef, useState } from 'react';

/**
 * Returns [containerRef, inView].
 * When the container enters the viewport, sets inView=true.
 * Callers should apply staggered `transition-delay` to each child.
 */
export function useStaggerReveal(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options ?? { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

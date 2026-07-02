import { useEffect, useRef, useState } from 'react';

export function useInView(options) {
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
    }, options ?? { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

/**
 * Observe multiple children and fire a callback when the container enters view.
 * Returns [containerRef, inView].
 */
export function useInViewStagger(options) {
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
    }, options ?? { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

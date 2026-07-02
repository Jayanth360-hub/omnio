import { useInView } from '../hooks/useInView';

export default function Reveal({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${inView ? 'animate-fade-up' : 'reveal-init'} ${className}`}
      style={inView ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

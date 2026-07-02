import { ChevronRight } from 'lucide-react';
import { specialties } from '../data/content';
import { useStaggerReveal } from '../hooks/useStaggerReveal';

export default function Specialties() {
  const [headingRef, headingVisible] = useStaggerReveal({ threshold: 0.2 });
  const [gridRef, gridVisible] = useStaggerReveal({ threshold: 0.05 });
  const [btnRef, btnVisible] = useStaggerReveal({ threshold: 0.5 });

  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
      <div
        ref={headingRef}
        className={`max-w-2xl section-heading ${headingVisible ? 'visible' : ''}`}
      >
        <h2 className="font-display text-3xl font-bold text-brand-900">
          An Ecosystem for Clinical Excellence
        </h2>
        <p className="mt-3 text-ink-600">
          Discover world-class healthcare at Omnio's specialized centres of medical innovation.
          Our advanced facilities offer unmatched expertise in key specialties and super
          specialties, setting new global standards in clinical excellence and patient care.
        </p>
      </div>

      <div ref={gridRef} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.map(({ name, desc, icon: Icon }, i) => (
          <div
            key={name}
            className={`stagger-item group flex items-center gap-4 rounded-2xl border border-soft-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5 ${gridVisible ? 'visible' : ''}`}
            style={{ transitionDelay: gridVisible ? `${i * 80}ms` : '0ms' }}
          >
            <span className="flex h-13 w-13 shrink-0 items-center justify-center">
              <Icon />
            </span>
            <div>
              <h3 className="font-display font-semibold text-ink-900">{name}</h3>
              <p className="mt-0.5 text-sm text-ink-400">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        ref={btnRef}
        href="#specialties-page"
        className={`stagger-item mt-8 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink-900 hover:bg-gold-400 transition-colors ${btnVisible ? 'visible' : ''}`}
        style={{ transitionDelay: btnVisible ? '200ms' : '0ms' }}
      >
        View All Specialties
        <ChevronRight className="h-4 w-4" />
      </a>
    </section>
  );
}

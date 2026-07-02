import { partners } from '../data/content';
import { useStaggerReveal } from '../hooks/useStaggerReveal';

export default function Partners() {
  const [headingRef, headingVisible] = useStaggerReveal({ threshold: 0.2 });
  const [gridRef, gridVisible] = useStaggerReveal({ threshold: 0.05 });

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-b border-soft-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`section-heading ${headingVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-3xl font-bold text-brand-900">
            Trusted by Leading Healthcare Partners
          </h2>
          <p className="mt-3 text-ink-600">
            Collaborating with trusted partners to deliver the best in healthcare services.
          </p>
        </div>

        {/* Partners Grid */}
        <div ref={gridRef} className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className={`stagger-item-scale flex items-center justify-center h-24 px-4 py-6 bg-white rounded-xl hover:bg-soft-50 hover:-translate-y-1 transition-all duration-300 ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: gridVisible ? `${i * 60}ms` : '0ms' }}
            >
              <img
                src={new URL(`../assets/${partner.logo}`, import.meta.url).href}
                alt={partner.name}
                className="h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bottom Divider Line */}
        <div className="mt-12 border-t border-soft-300"></div>
      </div>
    </section>
  );
}

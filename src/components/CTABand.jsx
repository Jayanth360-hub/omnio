import { Phone, UserRound, CalendarCheck, ChevronRight } from 'lucide-react';
import { useStaggerReveal } from '../hooks/useStaggerReveal';

const actions = [
  { label: 'Emergency Call', icon: Phone },
  { label: 'Find Doctor', icon: UserRound },
  { label: 'Make an Appointment', icon: CalendarCheck },
];

export default function CTABand() {
  const [headingRef, headingVisible] = useStaggerReveal({ threshold: 0.3 });
  const [btnsRef, btnsVisible] = useStaggerReveal({ threshold: 0.2 });

  return (
    <section className="bg-brand-950 pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2
          ref={headingRef}
          className={`font-display text-2xl sm:text-3xl font-bold text-white section-heading ${headingVisible ? 'visible' : ''}`}
        >
          Your Health, Its Our Priority
        </h2>

        <div ref={btnsRef} className="mt-6 grid gap-4 sm:grid-cols-3">
          {actions.map(({ label, icon: Icon }, i) => (
            <a
              key={label}
              href="#"
              className={`stagger-item flex items-center justify-between gap-3 rounded-full bg-white px-5 py-4 text-ink-900 hover:bg-soft-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${btnsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: btnsVisible ? `${i * 100}ms` : '0ms' }}
            >
              <span className="flex items-center gap-3 text-sm font-semibold">
                <Icon className="h-4 w-4 text-brand-600" />
                {label}
              </span>
              <ChevronRight className="h-4 w-4 text-ink-400" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

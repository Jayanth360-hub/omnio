import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import { testimonials } from '../data/content';
import { useStaggerReveal } from '../hooks/useStaggerReveal';

const patientImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1502085945012-8f97bee4e81b?w=400&h=500&fit=crop',
];

export default function Testimonials() {
  const scrollerRef = useRef(null);
  const [leftRef, leftVisible] = useStaggerReveal({ threshold: 0.2 });
  const [rightRef, rightVisible] = useStaggerReveal({ threshold: 0.1 });

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section className="bg-brand-500 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left Side - Title & Navigation */}
          <div
            ref={leftRef}
            className={`lg:w-80 shrink-0 stagger-item-left ${leftVisible ? 'visible' : ''}`}
          >
            <h2 className="font-display text-4xl font-bold text-white">
              Voices of Trust
              <br />
              Our Patients
            </h2>
            <p className="mt-4 text-sm text-white/90">
              Real stories from our patients about their journey to healing with Omnio Hospital.
            </p>
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => scrollByCard(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollByCard(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition hover:scale-110 active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div
            ref={rightRef}
            className={`flex-1 stagger-item-right ${rightVisible ? 'visible' : ''}`}
          >
            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
            >
              {/* Featured Testimonial Card */}
              <div className="snap-start shrink-0 w-80 rounded-3xl bg-white p-6 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  Exceptional Care and Support!
                </h3>
                <p className="mt-3 text-sm text-ink-600 line-clamp-3">
                  &ldquo;The doctors and staff at Omnio Hospital were incredibly supportive throughout my treatment.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-soft-300"></div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Sarah M.</p>
                    <p className="text-xs text-ink-600">Employer</p>
                  </div>
                </div>
              </div>

              {/* Patient Profile Cards */}
              {testimonials.slice(1).map((t, i) => (
                <div
                  key={t.name}
                  className="snap-start shrink-0 w-48 h-64 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                >
                  <img
                    src={patientImages[i % patientImages.length]}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <button
                    aria-label={`Play ${t.name}'s story`}
                    className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-ink-900 shadow-lg hover:scale-110 transition"
                  >
                    <Play className="h-4 w-4 fill-current" />
                  </button>
                  <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Search, ArrowRight } from 'lucide-react';
import { alphabet } from '../data/content';
import labImage from '../assets/lab-microscope.jpg';
import { useStaggerReveal } from '../hooks/useStaggerReveal';

export default function DiseaseSearch() {
  const [leftRef, leftVisible] = useStaggerReveal({ threshold: 0.15 });
  const [rightRef, rightVisible] = useStaggerReveal({ threshold: 0.1 });

  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
      <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-8 items-start">
        <div
          ref={leftRef}
          className={`stagger-item-left relative overflow-hidden rounded-2xl bg-brand-900 p-6 aspect-[4/5] flex flex-col justify-end ${leftVisible ? 'visible' : ''}`}
        >
          <img
            src={labImage}
            alt="Researcher examining a sample through a microscope"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <h3 className="relative font-display text-xl font-bold text-white">
            Personalized Care, Transformed
          </h3>
          <a href="#innovation" className="relative mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 underline underline-offset-4 hover:text-white">
            Learn how we drive innovation
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div
          ref={rightRef}
          className={`stagger-item ${rightVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-3xl font-bold text-brand-900">
            Search diseases &amp; conditions
          </h2>
          <p className="mt-2 text-ink-600">Find diseases &amp; conditions by first letter</p>

          <div className="mt-6 grid grid-cols-6 gap-3 sm:grid-cols-9">
            {alphabet.map((letter, i) => (
              <button
                key={letter}
                className={`stagger-item-scale flex h-11 w-11 items-center justify-center rounded-full border border-soft-200 text-sm font-semibold text-brand-800 hover:border-brand-500 hover:bg-brand-50 transition-colors ${rightVisible ? 'visible' : ''}`}
                style={{ transitionDelay: rightVisible ? `${i * 20}ms` : '0ms' }}
              >
                {letter}
              </button>
            ))}
          </div>

          <p className="mt-7 text-sm font-medium text-ink-600">Search diseases &amp; conditions</p>
          <div className="mt-2 flex max-w-md items-stretch rounded-2xl border border-soft-200 bg-white p-1.5 shadow-sm">
            <input
              type="text"
              placeholder="Search diseases..."
              className="flex-1 bg-transparent px-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
            />
            <button
              aria-label="Search"
              className="flex items-center justify-center rounded-xl bg-brand-600 px-4 text-white hover:bg-brand-700 transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

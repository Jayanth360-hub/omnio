import { useState } from 'react';
import { Search, ChevronDown, Stethoscope } from 'lucide-react';
import PixelGrid from './PixelGrid';
import heroImage from '../assets/hero-doctor-patient.jpg';

const searchTypes = ['Doctor', 'Hospital', 'Specialty'];

export default function Hero() {
  const [searchType, setSearchType] = useState('Doctor');
  const [typeMenuOpen, setTypeMenuOpen] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden bg-soft-50">
      <PixelGrid className="absolute -left-4 top-10 hidden md:block opacity-80 animate-float" />
      <PixelGrid className="absolute left-10 bottom-6 hidden md:block opacity-50 animate-float" style={{ animationDelay: '0.5s' }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight text-brand-900 hero-title">
              Where Healing
              <br />
              Feels Like <span className="text-brand-500">Home</span>
            </h1>
            <p className="mt-5 max-w-md text-ink-600 hero-subtitle">
              Start your journey to better health. Find the right doctor and specialty below.
            </p>

            <div className="mt-8 flex max-w-lg items-stretch rounded-2xl border border-soft-200 bg-white p-1.5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 hero-search">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setTypeMenuOpen((v) => !v)}
                  className="flex items-center gap-1.5 rounded-xl px-3 text-sm font-medium text-ink-600 transition-all duration-200 hover:text-brand-600"
                >
                  <Stethoscope className="h-4 w-4 text-brand-600" />
                  {searchType}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {typeMenuOpen && (
                  <div className="absolute left-0 top-full mt-2 w-36 rounded-xl border border-soft-200 bg-white p-1.5 shadow-lg z-20 animate-fade-up">
                    {searchTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setSearchType(type);
                          setTypeMenuOpen(false);
                        }}
                        className="block w-full rounded-lg px-3 py-1.5 text-left text-sm text-ink-600 hover:bg-soft-50 transition-colors"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-px self-stretch bg-soft-200" />
              <input
                type="text"
                placeholder={`Search ${searchType.toLowerCase()} name...`}
                className="flex-1 bg-transparent px-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none transition-all"
              />
              <button
                aria-label="Search"
                className="flex items-center justify-center rounded-xl bg-brand-600 px-4 text-white hover:bg-brand-700 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative hero-image-wrap">
            <div className="relative aspect-[3/2] rounded-[2rem] overflow-hidden bg-soft-100 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src={heroImage}
                alt="Doctor consulting an elderly patient on a couch at home"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

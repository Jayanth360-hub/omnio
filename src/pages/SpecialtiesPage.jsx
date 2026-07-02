import { useState } from 'react';
import { Search, ChevronRight, ArrowRight, Phone, UserRound, CalendarCheck, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { specialties } from '../data/content';
import { useStaggerReveal } from '../hooks/useStaggerReveal';

import {
  CardiacIcon, DentistryIcon, GastroIcon, NeuroIcon,
  OrthoIcon, LiverIcon, RenalIcon, GynaecologyIcon, PaediatricIcon,
} from '../components/SpecialtyIcons';

const filterTabs = [
  'All Specialities',
  'Cardiac & Vascular',
  'Neurology',
  'Orthopaedics',
  "Women's Health",
  'Paediatrics',
];

const filterMap = {
  'All Specialities': null,
  'Cardiac & Vascular': ['Cardiac Care', 'Renal Care'],
  'Neurology': ['Neurosaince'],
  'Orthopaedics': ['Orthopaedics'],
  "Women's Health": ['Gynaecology'],
  'Paediatrics': ['Paediatric Care'],
};

const iconMap = {
  CardiacIcon, DentistryIcon, GastroIcon, NeuroIcon,
  OrthoIcon, LiverIcon, RenalIcon, GynaecologyIcon, PaediatricIcon,
};

const badgeMap = {
  'Cardiac Care':    'Centre of Excellence',
  'Dentistry':       'Dental Clinic',
  'Gastrosciences':  'GI Centre',
  'Neurosaince':     'Brain & Spine',
  'Orthopaedics':    'Bone & Joint',
  'Liver Care':      'Hepatology',
  'Renal Care':      'Nephrology',
  'Gynaecology':     "Women's Health",
  'Paediatric Care': 'Child Health',
};

/* ── Hero ── */
function SpecialtyHero({ query, setQuery }) {
  return (
    <section className="relative overflow-hidden bg-brand-900 px-5 py-14 lg:px-8 lg:py-20">
      {/* decorative circles */}
      <span className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-800/60" />
      <span className="pointer-events-none absolute right-20 bottom-0 h-40 w-40 translate-y-1/2 rounded-full bg-brand-800/40" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* breadcrumb */}
        <div className="mb-6 flex items-center gap-1.5 text-xs font-medium text-brand-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">Specialities</span>
        </div>

        <span className="mb-4 inline-block rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-400">
          Our Specialities
        </span>
        <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          World-Class Care<br className="hidden sm:block" /> Across Every Speciality
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/70 leading-relaxed">
          Omnio's centres of excellence bring together expert clinicians, advanced technology,
          and compassionate care across 9 key medical disciplines.
        </p>

        {/* search */}
        <div className="mt-8 flex max-w-lg items-stretch rounded-2xl border border-brand-700 bg-brand-800/60 p-1.5 backdrop-blur-sm">
          <div className="flex flex-1 items-center gap-2 px-3">
            <Search className="h-4 w-4 shrink-0 text-brand-300" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search specialities…"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-brand-400 focus:outline-none"
            />
          </div>
          <button className="flex items-center justify-center rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white hover:bg-brand-500 transition-colors">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── Stats bar ── */
function StatsBar() {
  const stats = [
    { num: '9', label: 'Speciality Centres' },
    { num: '1,000+', label: 'Expert Doctors' },
    { num: '60+', label: 'Years of Excellence' },
    { num: '98%', label: 'Patient Satisfaction' },
  ];
  return (
    <div className="bg-brand-950">
      <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center py-5 px-4 ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}
          >
            <span className="font-display text-2xl font-extrabold text-gold-400">{s.num}</span>
            <span className="mt-1 text-xs text-white/60">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Featured banner ── */
function FeaturedBanner() {
  const [ref, visible] = useStaggerReveal({ threshold: 0.3 });
  return (
    <div ref={ref} className={`stagger-item ${visible ? 'visible' : ''}`}>
      <div className="rounded-2xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #4CACBA 0%, #15879A 60%, #0E6C7C 100%)' }}>
        <div className="flex flex-col sm:flex-row items-center gap-5 p-6 lg:p-8">
          {/* icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <CardiacIcon />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">
              Centre of Excellence
            </span>
            <h3 className="mt-1 font-display text-xl font-bold text-white">
              Cardiac Care Centre
            </h3>
            <p className="mt-1 text-sm text-white/75">
              Our flagship heart care centre — cutting-edge diagnostics and interventional cardiology under one roof.
            </p>
          </div>
          <a
            href="#cardiac"
            className="shrink-0 rounded-full bg-gold-500 px-6 py-2.5 text-sm font-bold text-ink-900 hover:bg-gold-400 transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Specialty Card ── */
function SpecialtyCard({ specialty, index, inView }) {
  const { name, desc, icon: Icon } = specialty;
  const isFeatured = name === 'Cardiac Care';

  return (
    <div
      className={`stagger-item group flex flex-col gap-4 rounded-2xl border p-5 transition-all duration-300 cursor-pointer
        ${isFeatured
          ? 'border-transparent text-white hover:-translate-y-1 hover:shadow-xl'
          : 'border-soft-200 bg-white hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5'
        }
        ${inView ? 'visible' : ''}`}
      style={{
        background: isFeatured ? 'linear-gradient(135deg, #073A40, #0E6C7C)' : undefined,
        transitionDelay: inView ? `${index * 70}ms` : '0ms',
      }}
    >
      {/* icon */}
      <div className={`flex h-13 w-13 items-center justify-center rounded-xl ${isFeatured ? 'bg-white/15' : 'bg-soft-100'}`}>
        <Icon />
      </div>

      {/* body */}
      <div className="flex-1">
        <h3 className={`font-display text-base font-bold ${isFeatured ? 'text-white' : 'text-ink-900'}`}>
          {name}
        </h3>
        <p className={`mt-1 text-sm leading-relaxed ${isFeatured ? 'text-white/70' : 'text-ink-400'}`}>
          {desc}
        </p>
      </div>

      {/* footer */}
      <div className="flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isFeatured ? 'bg-gold-500/20 text-gold-400' : 'bg-soft-100 text-brand-700'}`}>
          {badgeMap[name]}
        </span>
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors
          ${isFeatured
            ? 'bg-white/15 group-hover:bg-white/25'
            : 'bg-soft-100 group-hover:bg-brand-600'
          }`}>
          <ArrowRight className={`h-4 w-4 transition-colors ${isFeatured ? 'text-white' : 'text-brand-600 group-hover:text-white'}`} />
        </span>
      </div>
    </div>
  );
}

/* ── Grid section ── */
function SpecialtiesGrid({ filtered }) {
  const [ref, inView] = useStaggerReveal({ threshold: 0.04 });
  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((spec, i) => (
        <SpecialtyCard key={spec.name} specialty={spec} index={i} inView={inView} />
      ))}
    </div>
  );
}

/* ── Why choose section ── */
function WhySection() {
  const [ref, visible] = useStaggerReveal({ threshold: 0.1 });
  const points = [
    { icon: <Star className="h-5 w-5 text-gold-500" />, title: 'Board-certified specialists', desc: 'Every department led by nationally accredited consultants.' },
    { icon: <Star className="h-5 w-5 text-gold-500" />, title: 'Integrated care pathways', desc: 'Seamless coordination between specialities for complex cases.' },
    { icon: <Star className="h-5 w-5 text-gold-500" />, title: 'Latest medical technology', desc: 'State-of-the-art imaging, robotics, and minimally invasive procedures.' },
    { icon: <Star className="h-5 w-5 text-gold-500" />, title: 'Patient-first approach', desc: '98% patient satisfaction — because every detail matters.' },
  ];
  return (
    <section className="bg-soft-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`section-heading mb-10 ${visible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl font-bold text-ink-900">
            Why choose an <span className="text-brand-700">Omnio Speciality Centre?</span>
          </h2>
          <p className="mt-3 max-w-2xl text-ink-600">
            Every centre is built around a single promise — give each patient the best possible outcome through expert care, innovation, and compassion.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`stagger-item rounded-2xl border border-soft-200 bg-white p-5 ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 90}ms` : '0ms' }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/10">
                {p.icon}
              </div>
              <h4 className="font-display text-sm font-bold text-ink-900">{p.title}</h4>
              <p className="mt-1.5 text-sm text-ink-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA band ── */
function CTASection() {
  const [ref, visible] = useStaggerReveal({ threshold: 0.3 });
  const actions = [
    { label: 'Emergency Call', icon: Phone },
    { label: 'Find Doctor', icon: UserRound },
    { label: 'Make an Appointment', icon: CalendarCheck },
  ];
  return (
    <section className="bg-brand-950 pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2
          ref={ref}
          className={`font-display text-2xl sm:text-3xl font-bold text-white section-heading ${visible ? 'visible' : ''}`}
        >
          Your Health, It's Our Priority
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {actions.map(({ label, icon: Icon }, i) => (
            <a
              key={label}
              href="#"
              className={`stagger-item flex items-center justify-between gap-3 rounded-full bg-white px-5 py-4 text-ink-900 hover:bg-soft-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
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

/* ══════════════════════════════════════
   PAGE EXPORT
   ══════════════════════════════════════ */
export default function SpecialtiesPage() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All Specialities');

  const filtered = specialties.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(query.toLowerCase());
    const allowed = filterMap[activeTab];
    const matchesTab = !allowed || allowed.includes(s.name);
    return matchesSearch && matchesTab;
  });

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <SpecialtyHero query={query} setQuery={setQuery} />

        {/* Stats */}
        <StatsBar />

        {/* Main content */}
        <section className="mx-auto max-w-7xl px-5 lg:px-8 py-14">

          {/* Featured banner */}
          <FeaturedBanner />

          {/* Filter tabs */}
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200
                    ${activeTab === tab
                      ? 'bg-brand-600 border-brand-600 text-white'
                      : 'border-soft-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand-700'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Section label */}
          <Reveal>
            <p className="mt-8 mb-4 text-xs font-bold uppercase tracking-widest text-ink-400">
              {activeTab === 'All Specialities' ? 'All Specialities' : activeTab} — {filtered.length} {filtered.length === 1 ? 'Centre' : 'Centres'}
            </p>
          </Reveal>

          {/* Grid */}
          {filtered.length > 0 ? (
            <SpecialtiesGrid filtered={filtered} />
          ) : (
            <div className="rounded-2xl border border-soft-200 bg-soft-50 py-16 text-center">
              <p className="text-ink-400">No specialities match your search.</p>
              <button
                onClick={() => { setQuery(''); setActiveTab('All Specialities'); }}
                className="mt-3 text-sm font-semibold text-brand-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Bottom CTA inline */}
          <Reveal>
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl border border-soft-200 bg-white p-6">
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900">
                  Not sure which speciality you need?
                </h3>
                <p className="mt-1 text-sm text-ink-400">
                  Our care coordinators will help find the right doctor and centre for you.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a href="#" className="rounded-full border border-soft-200 px-5 py-2.5 text-sm font-semibold text-ink-600 hover:border-brand-300 hover:text-brand-700 transition-colors">
                  Find a Doctor
                </a>
                <a href="#" className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
                  Book Appointment
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Why choose */}
        <WhySection />

        {/* CTA band */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}

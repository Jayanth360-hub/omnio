import { ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const milestones = [
  {
    year: '1965',
    title: 'The Beginning',
    desc: 'Dr. V.K. Omnio founded a small 30-bed clinic in the heart of the city with a simple mission: to bring world-class healthcare closer to home. With only a handful of physicians and nurses, the clinic quickly earned a reputation for compassion and quality.',
    highlight: true,
  },
  {
    year: '1972',
    title: 'First Expansion',
    desc: 'Growing demand led to the construction of our first dedicated hospital wing, expanding capacity to 200 beds and adding Cardiology and Orthopaedics as specialty departments.',
  },
  {
    year: '1980',
    title: 'Landmark Cardiac Surgery',
    desc: 'Omnio performed the region\'s first open-heart bypass surgery, cementing its position as a pioneer in cardiovascular care. The Cardiac Centre of Excellence was formally inaugurated the same year.',
  },
  {
    year: '1990',
    title: 'Academic Partnership',
    desc: 'A landmark collaboration with the National Medical Institute established Omnio as a teaching hospital, enabling resident training programmes and catalysing a decade of clinical research.',
  },
  {
    year: '1998',
    title: 'Liver Transplant Programme',
    desc: 'Omnio launched the country\'s second living-donor liver transplant programme. To date, over 800 successful transplants have been performed at our facility.',
  },
  {
    year: '2005',
    title: 'Digital Transformation',
    desc: 'We became one of the first hospitals in the region to implement a fully integrated Electronic Medical Record (EMR) system, vastly improving care coordination across departments.',
  },
  {
    year: '2012',
    title: 'Cancer Centre Launch',
    desc: 'The Omnio Comprehensive Cancer Centre opened with state-of-the-art radiation therapy, medical oncology, and a dedicated palliative care wing — one of the largest of its kind in South Asia.',
  },
  {
    year: '2018',
    title: 'Robotic Surgery Unit',
    desc: 'Acquisition of the da Vinci Surgical System brought minimally invasive robotic surgery to our patients, reducing recovery times and complication rates across Urology, Gynaecology, and General Surgery.',
  },
  {
    year: '2024',
    title: 'AI Diagnostics Centre',
    desc: 'Omnio launched an AI-assisted diagnostics lab, integrating machine learning into radiology, pathology, and genomics to enable faster, more precise diagnoses for complex conditions.',
  },
  {
    year: '2026',
    title: 'Today — 60 Years of Healing',
    desc: 'With over 1,000 specialists, 5,000 beds across multiple campuses, and a legacy of pioneering firsts, Omnio Hospitals continues its founding promise: Where Healing Feels Like Home.',
    highlight: true,
  },
];

const awards = [
  { year: '2025', award: 'Best Multi-Speciality Hospital', body: 'India Healthcare Excellence Awards' },
  { year: '2024', award: 'Patient Safety Gold Standard', body: 'National Accreditation Board for Hospitals' },
  { year: '2023', award: 'Excellence in Cardiac Care', body: 'Asia Pacific Cardiology Forum' },
  { year: '2022', award: 'Digital Health Innovation Award', body: 'Healthcare IT Asia' },
];

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-950 text-white py-24 px-5 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-white to-transparent" />
          <div className="mx-auto max-w-7xl relative">
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="h-4 w-4" />
              <a href="#" className="hover:text-white transition-colors">About Omnio</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">History</span>
            </div>
            <div className="max-w-3xl">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">Est. 1965</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
                60 Years of<br />
                <span className="text-brand-300">Healing Excellence</span>
              </h1>
              <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                From a 30-bed clinic to one of South Asia's most respected hospital networks — the story of Omnio is one of vision, dedication, and unwavering commitment to patient care.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { val: '60+', label: 'Years of Service' },
                { val: '1000+', label: 'Expert Specialists' },
                { val: '5000+', label: 'Beds Across Campuses' },
                { val: '2M+', label: 'Lives Touched' },
              ].map(s => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="font-display text-3xl font-extrabold text-gold-400">{s.val}</p>
                  <p className="text-xs text-white/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-brand-900 mb-12 text-center">Our Journey</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-16 sm:left-24 top-0 bottom-0 w-px bg-soft-200" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative flex gap-8 sm:gap-12">
                    {/* Year bubble */}
                    <div className="shrink-0 w-14 sm:w-20 text-right">
                      <span className={`inline-block font-display text-sm sm:text-base font-extrabold ${m.highlight ? 'text-gold-500' : 'text-brand-600'}`}>
                        {m.year}
                      </span>
                    </div>
                    {/* Dot */}
                    <div className={`absolute left-[3.75rem] sm:left-[5.75rem] top-1.5 h-3 w-3 rounded-full border-2 translate-x-[-50%] ${m.highlight ? 'border-gold-500 bg-gold-500' : 'border-brand-500 bg-white'}`} />
                    {/* Content */}
                    <div className={`flex-1 rounded-2xl p-5 border ${m.highlight ? 'border-gold-200 bg-gold-50' : 'border-soft-200 bg-white'} hover:shadow-sm transition-shadow`}>
                      <h3 className="font-display font-bold text-ink-900 mb-2">{m.title}</h3>
                      <p className="text-sm text-ink-600 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-14 px-5 lg:px-8 bg-soft-50 border-t border-soft-200">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-8 text-center">Recognition &amp; Awards</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {awards.map(a => (
                <div key={a.award} className="rounded-2xl border border-soft-200 bg-white p-5 hover:shadow-sm transition-shadow">
                  <span className="inline-block rounded-full bg-gold-50 text-gold-600 text-xs font-semibold px-3 py-1 mb-3">{a.year}</span>
                  <h3 className="font-display font-bold text-ink-900 mb-1 text-sm">{a.award}</h3>
                  <p className="text-xs text-ink-500">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

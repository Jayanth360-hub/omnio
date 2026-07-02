import { ChevronRight, Leaf, Sun, Droplets, Wind, Recycle, Heart, Users, BookOpen, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pillars = [
  {
    icon: Sun,
    title: 'Clean Energy',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
    stat: '68%',
    statLabel: 'Renewable energy usage',
    desc: 'We have installed solar panels across 4 campuses, generating over 2.4 MW of clean energy annually. Our target is 100% renewable electricity by 2030.',
    progress: 68,
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    stat: '42%',
    statLabel: 'Reduction in water consumption',
    desc: 'Rainwater harvesting systems, greywater recycling, and water-efficient fixtures have helped us significantly reduce consumption since 2020.',
    progress: 42,
  },
  {
    icon: Recycle,
    title: 'Waste Management',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
    stat: '94%',
    statLabel: 'Biomedical waste safely disposed',
    desc: 'All biomedical waste is processed through certified handlers. We are reducing single-use plastics and increasing recycling rates across non-clinical areas.',
    progress: 94,
  },
  {
    icon: Wind,
    title: 'Carbon Reduction',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    stat: '30%',
    statLabel: 'CO₂ reduction since 2020',
    desc: 'Energy-efficient HVAC, LED lighting upgrades, and green building design have contributed to a 30% reduction in our carbon footprint. Target: net zero by 2035.',
    progress: 30,
  },
];

const socialIniatives = [
  { icon: Heart, title: 'Free Health Camps', desc: 'Over 500 free health camps conducted annually in rural and peri-urban areas, reaching 200,000+ individuals with screenings, consultations, and vaccinations.', metric: '200K+', metricLabel: 'Lives reached per year' },
  { icon: Users, title: 'Healthcare Scholarships', desc: 'Our Omnio Foundation awards 50 scholarships annually to meritorious students from low-income backgrounds pursuing medical and nursing education.', metric: '50', metricLabel: 'Scholarships per year' },
  { icon: BookOpen, title: 'Medical Education Outreach', desc: 'We partner with government schools to deliver health literacy programmes, covering topics like nutrition, hygiene, first aid, and mental well-being.', metric: '120+', metricLabel: 'Schools partnered' },
];

const goals2030 = [
  { label: 'Renewable Energy', target: '100%', current: '68%', color: 'bg-yellow-400' },
  { label: 'Carbon Neutrality', target: '2035', current: 'On Track', color: 'bg-teal-400' },
  { label: 'Zero Landfill Waste', target: '2028', current: 'In Progress', color: 'bg-green-400' },
  { label: 'Free Screenings', target: '1M', current: '380K', color: 'bg-brand-400' },
];

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-900 text-white py-24 px-5 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-green-900 opacity-90" />
          <div className="mx-auto max-w-7xl relative">
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="h-4 w-4" />
              <a href="#" className="hover:text-white transition-colors">About Omnio</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Sustainability</span>
            </div>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-5 w-5 text-green-400" />
                <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Healing People. Healing Planet.</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold mb-5 leading-tight">
                Our Commitment to<br />
                <span className="text-green-400">Sustainability</span>
              </h1>
              <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                A healthy world is a prerequisite for healthy people. Omnio is committed to responsible environmental stewardship and community investment as integral parts of our mission.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { val: 'Net Zero', label: 'Target by 2035' },
                { val: '68%', label: 'Renewable Energy Today' },
                { val: '200K+', label: 'Free Consultations Yearly' },
                { val: '30%', label: 'Carbon Reduction Since 2020' },
              ].map(s => (
                <div key={s.label} className="rounded-2xl bg-white/8 border border-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-green-400">{s.val}</p>
                  <p className="text-xs text-white/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environmental Pillars */}
        <section className="py-16 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl font-bold text-brand-900 mb-3">Environmental Stewardship</h2>
            <p className="text-ink-600 mb-10 max-w-xl">Our four-pillar environmental strategy guides every infrastructure, procurement, and operational decision.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map(p => (
                <div key={p.title} className={`rounded-2xl border ${p.border} bg-white p-6 hover:shadow-sm transition-all`}>
                  <div className={`${p.bg} ${p.color} p-2.5 rounded-xl w-fit mb-4`}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-ink-900 mb-2">{p.title}</h3>
                  <div className="mb-3">
                    <span className={`font-display text-3xl font-extrabold ${p.color}`}>{p.stat}</span>
                    <p className="text-xs text-ink-400 mt-0.5">{p.statLabel}</p>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 rounded-full bg-soft-100 mb-3">
                    <div
                      className={`h-full rounded-full ${p.color.replace('text-', 'bg-')}`}
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-ink-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Responsibility */}
        <section className="py-16 px-5 lg:px-8 bg-soft-50 border-t border-soft-200">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl font-bold text-brand-900 mb-3">Social Responsibility</h2>
            <p className="text-ink-600 mb-10 max-w-xl">We believe in extending the reach of quality healthcare beyond our hospital walls into the communities that need it most.</p>
            <div className="grid lg:grid-cols-3 gap-6">
              {socialIniatives.map(s => (
                <div key={s.title} className="rounded-2xl border border-soft-200 bg-white p-7 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50">
                      <s.icon className="h-5 w-5 text-brand-600" />
                    </div>
                    <h3 className="font-display font-bold text-ink-900">{s.title}</h3>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed mb-5">{s.desc}</p>
                  <div className="border-t border-soft-100 pt-4">
                    <p className="font-display text-2xl font-extrabold text-brand-600">{s.metric}</p>
                    <p className="text-xs text-ink-400">{s.metricLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2030 Goals */}
        <section className="py-16 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-900 mb-4">2030 Sustainability Goals</h2>
                <p className="text-ink-600 mb-8 leading-relaxed">
                  Our roadmap to 2030 sets bold but achievable targets across environmental and social dimensions. Progress is tracked quarterly and reported publicly in our annual Sustainability Report.
                </p>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-brand-300 px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors">
                  Download 2025 Sustainability Report <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="space-y-4">
                {goals2030.map(g => (
                  <div key={g.label} className="rounded-2xl border border-soft-200 bg-white p-5">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-ink-900 text-sm">{g.label}</p>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-ink-400">Current: <strong className="text-ink-700">{g.current}</strong></span>
                        <span className="text-green-600 font-semibold">Goal: {g.target}</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-soft-100">
                      <div className={`h-full rounded-full ${g.color} w-2/3`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

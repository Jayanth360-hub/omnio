import { ChevronRight, Target, Eye, Star, Shield, Users, Zap, Heart, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Every patient is treated with empathy, dignity, and genuine human care — not just as a case, but as a person.' },
  { icon: Star, title: 'Excellence', desc: 'We hold ourselves to the highest clinical standards, constantly learning and innovating to deliver the best outcomes.' },
  { icon: Shield, title: 'Integrity', desc: 'Honesty and ethical practice are non-negotiable — in our diagnoses, our communications, and our billing.' },
  { icon: Users, title: 'Teamwork', desc: 'Cross-disciplinary collaboration among specialists, nurses, and support staff ensures seamless, holistic care.' },
  { icon: Zap, title: 'Innovation', desc: 'We embrace technology, research, and evidence-based medicine to stay at the cutting edge of treatment.' },
  { icon: Globe, title: 'Inclusivity', desc: 'Quality healthcare is a human right. We strive to make our services accessible to all, regardless of background.' },
];

const pillars = [
  { number: '01', title: 'Patient-First Culture', desc: 'Every decision, from procurement to policy, is measured against one standard: does it benefit the patient?' },
  { number: '02', title: 'Research & Education', desc: 'As a teaching hospital, we invest in the next generation of clinicians and in translational research that turns science into care.' },
  { number: '03', title: 'Community Health', desc: 'Beyond hospital walls, our outreach programmes bring preventive care and health education to underserved communities.' },
  { number: '04', title: 'Sustainable Growth', desc: 'We grow responsibly — expanding capacity and reach while minimising our environmental footprint.' },
];

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-soft-50 border-b border-soft-200 py-20 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 text-sm text-ink-400 mb-6">
              <a href="#" className="hover:text-brand-600 transition-colors">Home</a>
              <ChevronRight className="h-4 w-4" />
              <a href="#" className="hover:text-brand-600 transition-colors">About Omnio</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-ink-700">Vision &amp; Mission</span>
            </div>
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-900 mb-4">
                Our Vision &amp; Mission
              </h1>
              <p className="text-ink-600 text-lg leading-relaxed">
                The purpose that guides every heartbeat of Omnio — from the bedside to the boardroom.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="py-16 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="relative rounded-3xl bg-brand-950 text-white p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-700/30 translate-x-16 -translate-y-16" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-700">
                    <Eye className="h-6 w-6 text-brand-300" />
                  </div>
                  <p className="font-display text-xl font-bold text-brand-300 uppercase tracking-wide">Vision</p>
                </div>
                <blockquote className="font-display text-2xl sm:text-3xl font-bold leading-snug mb-4">
                  "To be South Asia's most trusted healthcare institution — where every patient leaves healthier, more informed, and more empowered."
                </blockquote>
                <p className="text-white/60 text-sm leading-relaxed">
                  We aspire to set the benchmark for clinical outcomes, patient experience, and medical innovation across the region, accessible to all who need us.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative rounded-3xl bg-gold-500 text-ink-900 p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-400/40 translate-x-16 -translate-y-16" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gold-600">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-display text-xl font-bold text-ink-900/70 uppercase tracking-wide">Mission</p>
                </div>
                <blockquote className="font-display text-2xl sm:text-3xl font-bold leading-snug mb-4">
                  "To deliver compassionate, cutting-edge healthcare that restores health, extends life, and strengthens communities."
                </blockquote>
                <p className="text-ink-900/60 text-sm leading-relaxed">
                  We fulfil this by attracting exceptional talent, adopting the latest medical advances, and building a culture where every team member is a healer — whatever their role.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-5 lg:px-8 bg-soft-50 border-t border-soft-200">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-brand-900 mb-3">Core Values</h2>
              <p className="text-ink-600 max-w-xl mx-auto">The principles that shape how we care, how we communicate, and how we grow.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map(v => (
                <div key={v.title} className="rounded-2xl border border-soft-200 bg-white p-6 hover:shadow-sm hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50">
                      <v.icon className="h-5 w-5 text-brand-600" />
                    </div>
                    <h3 className="font-display font-bold text-ink-900">{v.title}</h3>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="py-16 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-900 mb-4">Strategic Pillars</h2>
                <p className="text-ink-600 mb-8 leading-relaxed">
                  Our vision is brought to life through four strategic pillars that guide investment, partnerships, and everyday decisions at every level of the organisation.
                </p>
                <div className="space-y-5">
                  {pillars.map(p => (
                    <div key={p.number} className="flex items-start gap-4">
                      <span className="font-display text-2xl font-extrabold text-soft-200 shrink-0 w-8">{p.number}</span>
                      <div>
                        <h4 className="font-display font-bold text-ink-900 mb-1">{p.title}</h4>
                        <p className="text-sm text-ink-600 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-brand-50 border border-brand-100 p-10 flex flex-col gap-6">
                <div className="text-center">
                  <p className="font-display text-5xl font-extrabold text-brand-600 mb-1">2035</p>
                  <p className="text-sm text-ink-600">Target Horizon</p>
                </div>
                <div className="h-px bg-brand-100" />
                <div className="space-y-4 text-sm text-ink-700 leading-relaxed">
                  <p>🎯 <strong>15 campuses</strong> across South Asia by 2030, with at least 3 in Tier-2 cities.</p>
                  <p>🔬 <strong>₹500 Crore</strong> committed to medical research and clinical trials over the next decade.</p>
                  <p>🌱 <strong>Net-zero carbon</strong> operations across all Omnio facilities by 2035.</p>
                  <p>💡 <strong>1 million</strong> free preventive screenings through community outreach by 2028.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

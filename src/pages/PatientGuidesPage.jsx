import { ChevronRight, Download, BookOpen, FileText, ClipboardList, Stethoscope, Heart, Baby, Pill, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const guideCategories = [
  {
    icon: Stethoscope,
    title: 'Before Your Visit',
    color: 'text-brand-600',
    bg: 'bg-brand-50',
    guides: [
      { title: 'How to Prepare for Your First Consultation', pages: 4, format: 'PDF' },
      { title: 'What to Bring to Your Appointment', pages: 2, format: 'PDF' },
      { title: 'Understanding Your Medical History Form', pages: 3, format: 'PDF' },
    ],
  },
  {
    icon: Heart,
    title: 'Post-Procedure Care',
    color: 'text-red-500',
    bg: 'bg-red-50',
    guides: [
      { title: 'Cardiac Surgery Recovery Guide', pages: 12, format: 'PDF' },
      { title: 'Joint Replacement Rehabilitation', pages: 8, format: 'PDF' },
      { title: 'Post-Chemotherapy Care Instructions', pages: 6, format: 'PDF' },
    ],
  },
  {
    icon: Pill,
    title: 'Medication Management',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    guides: [
      { title: 'Managing Multiple Medications Safely', pages: 5, format: 'PDF' },
      { title: 'Understanding Your Prescription', pages: 3, format: 'PDF' },
      { title: 'Drug Interaction Reference Guide', pages: 10, format: 'PDF' },
    ],
  },
  {
    icon: Baby,
    title: 'Maternity & Paediatrics',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    guides: [
      { title: 'Your Pregnancy: Trimester by Trimester', pages: 18, format: 'PDF' },
      { title: 'Newborn Care Essentials', pages: 9, format: 'PDF' },
      { title: 'Childhood Vaccination Schedule', pages: 4, format: 'PDF' },
    ],
  },
  {
    icon: ClipboardList,
    title: 'Chronic Disease Management',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    guides: [
      { title: 'Living Well with Diabetes', pages: 14, format: 'PDF' },
      { title: 'Hypertension: A Self-Care Manual', pages: 10, format: 'PDF' },
      { title: 'Asthma Action Plan & Diary', pages: 6, format: 'PDF' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Nutrition & Lifestyle',
    color: 'text-green-600',
    bg: 'bg-green-50',
    guides: [
      { title: 'Heart-Healthy Diet Guide', pages: 8, format: 'PDF' },
      { title: 'Exercise After 50: A Safe Start', pages: 6, format: 'PDF' },
      { title: 'Stress Management Techniques', pages: 5, format: 'PDF' },
    ],
  },
];

const steps = [
  { number: '01', title: 'Select a Guide', desc: 'Browse by category or search for the guide relevant to your care journey.' },
  { number: '02', title: 'Download or View Online', desc: 'Access your guide as a PDF or read it directly in your browser.' },
  { number: '03', title: 'Discuss with Your Doctor', desc: 'Bring any questions that arise from the guide to your next appointment.' },
];

export default function PatientGuidesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="h-4 w-4" />
              <a href="#" className="hover:text-white transition-colors">Health Library</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Patient Guides</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
                  Patient Guides &amp;<br />
                  <span className="text-gold-400">Care Resources</span>
                </h1>
                <p className="text-white/75 text-lg max-w-lg leading-relaxed">
                  Expert-designed guides to help you navigate your health journey with confidence, from your first appointment to long-term management.
                </p>
                <div className="mt-8 flex gap-4">
                  <a href="#guides" className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-gold-400 transition-colors">
                    Browse All Guides <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                    <Download className="h-4 w-4" />
                    Download All
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: '50+ Guides', sub: 'Available free' },
                  { label: '6 Categories', sub: 'Covered' },
                  { label: '8 Languages', sub: 'Coming soon' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl bg-white/10 border border-white/15 p-4 text-center">
                    <p className="font-display text-xl font-bold text-white">{s.label}</p>
                    <p className="text-xs text-white/50 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 px-5 lg:px-8 bg-soft-50 border-b border-soft-200">
          <div className="mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-3 gap-6">
              {steps.map(step => (
                <div key={step.number} className="flex items-start gap-4">
                  <span className="font-display text-4xl font-extrabold text-soft-200 shrink-0">{step.number}</span>
                  <div>
                    <h3 className="font-display font-bold text-ink-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-ink-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides by Category */}
        <section id="guides" className="py-16 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl font-bold text-brand-900 mb-10">Browse Guides</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {guideCategories.map(cat => (
                <div key={cat.title} className="rounded-2xl border border-soft-200 bg-white overflow-hidden">
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-soft-100">
                    <span className={`${cat.bg} ${cat.color} p-2 rounded-lg`}>
                      <cat.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display font-bold text-ink-900">{cat.title}</h3>
                  </div>
                  <div className="divide-y divide-soft-100">
                    {cat.guides.map(guide => (
                      <a
                        key={guide.title}
                        href="#"
                        className="flex items-center justify-between px-6 py-4 hover:bg-soft-50 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-ink-400 shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-ink-900 group-hover:text-brand-700 transition-colors">
                              {guide.title}
                            </p>
                            <p className="text-xs text-ink-400 mt-0.5">{guide.pages} pages · {guide.format}</p>
                          </div>
                        </div>
                        <Download className="h-4 w-4 text-ink-300 group-hover:text-brand-500 shrink-0 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-5 lg:px-8 bg-soft-50">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-3">Need a Personalised Guide?</h2>
            <p className="text-ink-600 mb-6">Our patient care team can create tailored care instructions for your specific condition and treatment plan.</p>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors shadow-sm">
              Contact Patient Care Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

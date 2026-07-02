import { ChevronRight, ExternalLink, Mail, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const boardMembers = [
  {
    name: 'Dr. Rajesh V. Omnio',
    role: 'Chairman & Managing Director',
    dept: 'Executive Leadership',
    exp: '35+ years',
    qual: 'MBBS, MS (Surgery), MBA — Harvard Business School',
    bio: 'The son of our founder, Dr. Rajesh has guided Omnio from a single-campus hospital to a multi-city network. Under his leadership, revenue has grown 10x while maintaining a steadfast focus on clinical quality and patient experience.',
    featured: true,
  },
  {
    name: 'Dr. Anitha Krishnamurthy',
    role: 'Chief Executive Officer',
    dept: 'Executive Leadership',
    exp: '28+ years',
    qual: 'MBBS, DM (Cardiology), PG Diploma in Hospital Management',
    bio: 'Dr. Anitha brings extensive clinical expertise in cardiology alongside sharp operational acumen. She oversees all hospital operations and has spearheaded our patient safety and quality accreditation programmes.',
    featured: true,
  },
];

const medicalDirectors = [
  { name: 'Dr. Suresh Nambiar', role: 'Chief of Cardiac Sciences', spec: 'Cardiothoracic Surgery', exp: '30 yrs' },
  { name: 'Dr. Meera Pillai', role: 'Chief of Oncology', spec: 'Surgical Oncology', exp: '22 yrs' },
  { name: 'Dr. Karthik Reddy', role: 'Chief of Neurosciences', spec: 'Neuro Surgery', exp: '25 yrs' },
  { name: 'Dr. Priya Menon', role: 'Chief of Obstetrics & Gynaecology', spec: 'Maternal-Fetal Medicine', exp: '20 yrs' },
  { name: 'Dr. Arvind Sharma', role: 'Chief of Gastrosciences', spec: 'Gastroenterology & Hepatology', exp: '18 yrs' },
  { name: 'Dr. Sunita Bose', role: 'Chief of Endocrinology', spec: 'Diabetes & Metabolism', exp: '22 yrs' },
  { name: 'Dr. Latha Krishnan', role: 'Chief of Paediatrics', spec: 'Paediatric Intensive Care', exp: '19 yrs' },
  { name: 'Dr. Vikram Iyer', role: 'Chief of Orthopaedics', spec: 'Joint Replacement Surgery', exp: '24 yrs' },
];

const boardOfDirectors = [
  { name: 'Mr. Rajan Mehta', role: 'Independent Director, Finance', bg: 'Former CFO, Tata Medical Group' },
  { name: 'Ms. Deepa Venkatesh', role: 'Independent Director, Strategy', bg: 'Managing Partner, HealthBridge Capital' },
  { name: 'Prof. T.S. Iyengar', role: 'Independent Director, Medical Affairs', bg: 'Ex-Dean, AIIMS New Delhi' },
  { name: 'Ms. Kavitha Nair', role: 'Independent Director, Legal & Compliance', bg: 'Senior Partner, Nair & Associates' },
];

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-brand-950 text-white py-20 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="h-4 w-4" />
              <a href="#" className="hover:text-white transition-colors">About Omnio</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Our Leadership</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-4">Our Leadership</h1>
            <p className="text-white/60 max-w-xl text-lg">
              Guided by visionary leaders with decades of clinical and organisational expertise, Omnio continues to set the standard for healthcare in South Asia.
            </p>
          </div>
        </section>

        {/* Executive Leadership */}
        <section className="py-16 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-8">Executive Leadership</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {boardMembers.map(m => (
                <div key={m.name} className="rounded-3xl border border-soft-200 bg-white overflow-hidden hover:shadow-md transition-all">
                  <div className="flex items-center gap-5 bg-soft-50 border-b border-soft-200 px-6 py-6">
                    <div className="w-20 h-20 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
                      <span className="font-display text-2xl font-bold text-brand-600">
                        {m.name.split(' ')[1][0]}{m.name.split(' ').slice(-1)[0][0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-ink-900 text-lg">{m.name}</h3>
                      <p className="text-brand-600 text-sm font-medium">{m.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Award className="h-3.5 w-3.5 text-gold-500" />
                        <span className="text-xs text-ink-400">{m.exp} experience</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-xs text-ink-400 font-medium mb-2">{m.qual}</p>
                    <p className="text-sm text-ink-600 leading-relaxed">{m.bio}</p>
                    <div className="flex gap-3 mt-4">
                      <a href="#" className="flex items-center gap-1.5 text-xs text-ink-500 hover:text-brand-600 transition-colors">
                        <ExternalLink className="h-3.5 w-3.5" /> LinkedIn
                      </a>
                      <a href="#" className="flex items-center gap-1.5 text-xs text-ink-500 hover:text-brand-600 transition-colors">
                        <Mail className="h-3.5 w-3.5" /> Contact
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Directors */}
        <section className="py-14 px-5 lg:px-8 bg-soft-50 border-t border-soft-200">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-8">Medical Directors</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {medicalDirectors.map(m => (
                <div
                  key={m.name}
                  className="rounded-2xl border border-soft-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-3">
                    <span className="font-display font-bold text-brand-600 text-sm">
                      {m.name.split(' ')[1][0]}{m.name.split(' ').slice(-1)[0][0]}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-ink-900 text-sm group-hover:text-brand-700 transition-colors">{m.name}</h3>
                  <p className="text-brand-600 text-xs font-medium mt-0.5 mb-2">{m.role}</p>
                  <div className="text-xs text-ink-400 space-y-0.5">
                    <p>{m.spec}</p>
                    <p>{m.exp} experience</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-14 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-8">Board of Directors</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {boardOfDirectors.map(m => (
                <div key={m.name} className="rounded-2xl border border-soft-200 bg-white p-6 hover:shadow-sm transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-4">
                    <span className="font-display font-bold text-gold-600 text-sm">
                      {m.name.split(' ')[1][0]}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-ink-900 text-sm mb-1">{m.name}</h3>
                  <p className="text-xs font-medium text-brand-600 mb-2">{m.role}</p>
                  <p className="text-xs text-ink-400">{m.bg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-12 px-5 lg:px-8 bg-brand-50 border-t border-brand-100">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-3">Join Our Team of Healers</h2>
            <p className="text-ink-600 mb-6">We are always looking for exceptional talent to join the Omnio family. Explore opportunities in clinical, research, and administrative roles.</p>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors shadow-sm">
              View Open Positions
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

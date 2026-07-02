import { useState } from 'react';
import { Search, ChevronRight, AlertCircle, Heart, Brain, Bone, Activity, Eye, Wind, Droplets } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const categories = [
  { name: 'Cardiovascular', icon: Heart, color: 'text-red-500', bg: 'bg-red-50', count: 24 },
  { name: 'Neurological', icon: Brain, color: 'text-purple-500', bg: 'bg-purple-50', count: 18 },
  { name: 'Musculoskeletal', icon: Bone, color: 'text-orange-500', bg: 'bg-orange-50', count: 31 },
  { name: 'Respiratory', icon: Wind, color: 'text-blue-500', bg: 'bg-blue-50', count: 15 },
  { name: 'Endocrine', icon: Activity, color: 'text-brand-600', bg: 'bg-brand-50', count: 12 },
  { name: 'Ophthalmology', icon: Eye, color: 'text-teal-500', bg: 'bg-teal-50', count: 9 },
  { name: 'Renal & Urological', icon: Droplets, color: 'text-indigo-500', bg: 'bg-indigo-50', count: 14 },
  { name: 'Infectious Diseases', icon: AlertCircle, color: 'text-yellow-600', bg: 'bg-yellow-50', count: 22 },
];

const diseases = [
  { name: 'Acute Myocardial Infarction', category: 'Cardiovascular', letter: 'A' },
  { name: 'Alzheimer\'s Disease', category: 'Neurological', letter: 'A' },
  { name: 'Anemia', category: 'Cardiovascular', letter: 'A' },
  { name: 'Arthritis', category: 'Musculoskeletal', letter: 'A' },
  { name: 'Asthma', category: 'Respiratory', letter: 'A' },
  { name: 'Bronchitis', category: 'Respiratory', letter: 'B' },
  { name: 'Cancer (Breast)', category: 'Oncology', letter: 'C' },
  { name: 'Celiac Disease', category: 'Gastroenterology', letter: 'C' },
  { name: 'Chronic Kidney Disease', category: 'Renal & Urological', letter: 'C' },
  { name: 'Coronary Artery Disease', category: 'Cardiovascular', letter: 'C' },
  { name: 'Diabetes Mellitus Type 1', category: 'Endocrine', letter: 'D' },
  { name: 'Diabetes Mellitus Type 2', category: 'Endocrine', letter: 'D' },
  { name: 'Deep Vein Thrombosis', category: 'Cardiovascular', letter: 'D' },
  { name: 'Epilepsy', category: 'Neurological', letter: 'E' },
  { name: 'Fibromyalgia', category: 'Musculoskeletal', letter: 'F' },
  { name: 'Glaucoma', category: 'Ophthalmology', letter: 'G' },
  { name: 'Hypertension', category: 'Cardiovascular', letter: 'H' },
  { name: 'Hypothyroidism', category: 'Endocrine', letter: 'H' },
  { name: 'Irritable Bowel Syndrome', category: 'Gastroenterology', letter: 'I' },
  { name: 'Kidney Stones', category: 'Renal & Urological', letter: 'K' },
  { name: 'Lupus', category: 'Immunology', letter: 'L' },
  { name: 'Multiple Sclerosis', category: 'Neurological', letter: 'M' },
  { name: 'Osteoporosis', category: 'Musculoskeletal', letter: 'O' },
  { name: 'Parkinson\'s Disease', category: 'Neurological', letter: 'P' },
  { name: 'Pneumonia', category: 'Respiratory', letter: 'P' },
  { name: 'Rheumatoid Arthritis', category: 'Musculoskeletal', letter: 'R' },
  { name: 'Stroke', category: 'Neurological', letter: 'S' },
  { name: 'Tuberculosis', category: 'Infectious Diseases', letter: 'T' },
  { name: 'Urinary Tract Infection', category: 'Renal & Urological', letter: 'U' },
];

export default function DiseasesConditionsPage() {
  const [search, setSearch] = useState('');
  const [activeLetter, setActiveLetter] = useState(null);

  const filtered = diseases.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase());
    const matchesLetter = activeLetter ? d.letter === activeLetter : true;
    return matchesSearch && matchesLetter;
  });

  const grouped = filtered.reduce((acc, d) => {
    if (!acc[d.letter]) acc[d.letter] = [];
    acc[d.letter].push(d);
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-brand-950 text-white py-16 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="h-4 w-4" />
              <a href="#" className="hover:text-white transition-colors">Health Library</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Diseases &amp; Conditions</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-4">Diseases &amp; Conditions</h1>
            <p className="text-white/70 max-w-2xl text-lg">
              Explore our comprehensive medical library. Learn about symptoms, causes, diagnosis, and treatment options for hundreds of conditions.
            </p>
            <div className="mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <Search className="h-5 w-5 text-white/50 shrink-0" />
              <input
                type="text"
                placeholder="Search diseases or conditions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none text-sm"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 px-5 lg:px-8 bg-soft-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {categories.map(cat => (
                <button
                  key={cat.name}
                  className={`flex flex-col items-center gap-2 rounded-xl p-4 border border-soft-200 bg-white hover:border-brand-300 hover:shadow-sm transition-all text-center`}
                >
                  <span className={`${cat.bg} ${cat.color} p-2 rounded-lg`}>
                    <cat.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium text-ink-700 leading-tight">{cat.name}</span>
                  <span className="text-xs text-ink-400">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* A–Z Index */}
        <section className="py-12 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-brand-900">A–Z Index</h2>
              {activeLetter && (
                <button
                  onClick={() => setActiveLetter(null)}
                  className="text-sm text-brand-600 hover:underline"
                >
                  Clear filter
                </button>
              )}
            </div>
            {/* Alphabet bar */}
            <div className="flex flex-wrap gap-1 mb-8">
              {alphabet.map(l => (
                <button
                  key={l}
                  onClick={() => setActiveLetter(prev => prev === l ? null : l)}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                    activeLetter === l
                      ? 'bg-brand-600 text-white'
                      : 'bg-soft-100 text-ink-600 hover:bg-brand-100 hover:text-brand-700'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Grouped list */}
            {Object.keys(grouped).sort().length === 0 ? (
              <div className="text-center py-12 text-ink-400">No conditions found matching your search.</div>
            ) : (
              <div className="space-y-8">
                {Object.keys(grouped).sort().map(letter => (
                  <div key={letter}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-3xl font-extrabold text-brand-200">{letter}</span>
                      <div className="flex-1 h-px bg-soft-200" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {grouped[letter].map(disease => (
                        <a
                          key={disease.name}
                          href="#"
                          className="flex items-center justify-between rounded-xl border border-soft-200 bg-white px-4 py-3 hover:border-brand-300 hover:bg-soft-50 hover:shadow-sm transition-all group"
                        >
                          <div>
                            <p className="text-sm font-medium text-ink-900 group-hover:text-brand-700">{disease.name}</p>
                            <p className="text-xs text-ink-400 mt-0.5">{disease.category}</p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-ink-300 group-hover:text-brand-500 shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { useState } from 'react';
import { Search, ChevronRight, Clock, User, Tag, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tags = ['All', 'Cardiology', 'Nutrition', 'Mental Health', 'Surgery', 'Paediatrics', 'Oncology', 'Wellness', 'Prevention'];

const featured = {
  title: 'Understanding Your Heart: A Complete Guide to Cardiovascular Health',
  excerpt: 'Your heart beats over 100,000 times a day. Learn how to protect this vital organ with expert advice from our cardiologists on diet, exercise, risk factors and early warning signs.',
  author: 'Dr. Priya Menon',
  role: 'Senior Cardiologist',
  date: 'June 15, 2026',
  readTime: '8 min read',
  tag: 'Cardiology',
};

const articles = [
  {
    title: '10 Foods That Lower Blood Pressure Naturally',
    excerpt: 'Discover evidence-based dietary choices that can help manage hypertension alongside medical treatment.',
    author: 'Dr. Ananya Rao',
    date: 'June 12, 2026',
    readTime: '5 min read',
    tag: 'Nutrition',
  },
  {
    title: 'Signs Your Child May Need an Orthopaedic Evaluation',
    excerpt: 'Limping, joint pain, or unusual gait patterns in children shouldn\'t be ignored. Here\'s what parents should know.',
    author: 'Dr. Karthik Nair',
    date: 'June 10, 2026',
    readTime: '4 min read',
    tag: 'Paediatrics',
  },
  {
    title: 'Managing Diabetes in the Summer Heat',
    excerpt: 'Hot weather affects blood sugar regulation. Our endocrinologists share seasonal tips for diabetes management.',
    author: 'Dr. Sunita Bose',
    date: 'June 8, 2026',
    readTime: '6 min read',
    tag: 'Wellness',
  },
  {
    title: 'The Link Between Gut Health and Mental Well-being',
    excerpt: 'Emerging research reveals a powerful gut-brain connection. Learn how your microbiome influences mood and cognition.',
    author: 'Dr. Arvind Sharma',
    date: 'June 5, 2026',
    readTime: '7 min read',
    tag: 'Mental Health',
  },
  {
    title: 'Robotic Surgery at Omnio: What Patients Need to Know',
    excerpt: 'Minimally invasive robotic procedures offer faster recovery and precision. Our surgical team explains the benefits.',
    author: 'Dr. Meera Pillai',
    date: 'June 2, 2026',
    readTime: '5 min read',
    tag: 'Surgery',
  },
  {
    title: 'Early Detection of Breast Cancer: A Life-Saving Guide',
    excerpt: 'Regular screenings and self-examinations save lives. Know the signs and when to schedule a mammogram.',
    author: 'Dr. Latha Krishnan',
    date: 'May 29, 2026',
    readTime: '6 min read',
    tag: 'Oncology',
  },
  {
    title: 'Building Immunity: Science-Backed Prevention Strategies',
    excerpt: 'Beyond supplements — the lifestyle choices that genuinely strengthen your immune system, according to our specialists.',
    author: 'Dr. Vikram Iyer',
    date: 'May 25, 2026',
    readTime: '5 min read',
    tag: 'Prevention',
  },
  {
    title: 'Stroke Warning Signs: Act FAST',
    excerpt: 'Every minute counts when it comes to stroke. Learn to recognise symptoms and why immediate care is critical.',
    author: 'Dr. Priya Menon',
    date: 'May 22, 2026',
    readTime: '4 min read',
    tag: 'Cardiology',
  },
];

const tagColors = {
  Cardiology: 'bg-red-50 text-red-600',
  Nutrition: 'bg-green-50 text-green-600',
  'Mental Health': 'bg-purple-50 text-purple-600',
  Surgery: 'bg-blue-50 text-blue-600',
  Paediatrics: 'bg-yellow-50 text-yellow-700',
  Oncology: 'bg-pink-50 text-pink-600',
  Wellness: 'bg-teal-50 text-teal-600',
  Prevention: 'bg-indigo-50 text-indigo-600',
};

export default function HealthArticlesPage() {
  const [activeTag, setActiveTag] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = articles.filter(a => {
    const matchesTag = activeTag === 'All' || a.tag === activeTag;
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-soft-50 border-b border-soft-200 py-16 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 text-sm text-ink-400 mb-4">
              <a href="#" className="hover:text-brand-600 transition-colors">Home</a>
              <ChevronRight className="h-4 w-4" />
              <a href="#" className="hover:text-brand-600 transition-colors">Health Library</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-ink-700">Health Articles</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-900 mb-3">Health Articles</h1>
                <p className="text-ink-600 max-w-xl">Expert-written medical content to help you make informed decisions about your health.</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-soft-200 bg-white px-4 py-3 shadow-sm w-full lg:w-80">
                <Search className="h-4 w-4 text-ink-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="py-12 px-5 lg:px-8 bg-brand-950 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="text-gold-500 text-sm font-semibold mb-4 uppercase tracking-wider">Featured Article</p>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 bg-red-900/40 text-red-300`}>
                  {featured.tag}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 leading-snug">{featured.title}</h2>
                <p className="text-white/70 mb-6 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-white/50 mb-6">
                  <span className="flex items-center gap-1.5"><User className="h-4 w-4" />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{featured.readTime}</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-gold-400 transition-colors">
                  Read Article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="rounded-2xl bg-white/10 h-64 lg:h-80 flex items-center justify-center border border-white/10">
                <span className="text-white/20 font-display text-lg">Article Illustration</span>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Tag filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                    activeTag === tag
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-soft-100 text-ink-600 hover:bg-soft-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-ink-400">No articles found.</div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map(article => (
                  <a
                    key={article.title}
                    href="#"
                    className="group flex flex-col rounded-2xl border border-soft-200 bg-white overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="h-40 bg-soft-100 flex items-center justify-center">
                      <span className="text-soft-200 font-display text-sm">Image</span>
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${tagColors[article.tag] || 'bg-soft-100 text-ink-600'}`}>
                        {article.tag}
                      </span>
                      <h3 className="font-display text-base font-bold text-ink-900 group-hover:text-brand-700 leading-snug mb-2 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-ink-600 flex-1 leading-relaxed">{article.excerpt}</p>
                      <div className="mt-4 flex items-center gap-3 text-xs text-ink-400 border-t border-soft-100 pt-4">
                        <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" />{article.author}</span>
                        <span className="flex items-center gap-1 ml-auto"><Clock className="h-3.5 w-3.5" />{article.readTime}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            <div className="mt-10 text-center">
              <button className="rounded-full border border-soft-200 px-8 py-3 text-sm font-medium text-ink-700 hover:border-brand-300 hover:text-brand-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

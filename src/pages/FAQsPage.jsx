import { useState } from 'react';
import { ChevronRight, ChevronDown, Search, Phone, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqCategories = [
  'All',
  'Appointments',
  'Insurance & Billing',
  'Treatments & Procedures',
  'Emergency Services',
  'Patient Rights',
  'Home Care',
];

const faqs = [
  {
    category: 'Appointments',
    q: 'How do I book an appointment with a specialist?',
    a: 'You can book an appointment through our website, by calling our 24/7 helpline, or by visiting any Omnio Hospitals reception desk. We also offer online video consultations for select specialties. Most first consultations can be scheduled within 48 hours.',
  },
  {
    category: 'Appointments',
    q: 'Can I reschedule or cancel my appointment?',
    a: 'Yes. Please cancel or reschedule at least 24 hours before your appointment to avoid a no-show fee. You can do this online via the patient portal, by phone, or at the reception desk.',
  },
  {
    category: 'Appointments',
    q: 'What should I bring to my first consultation?',
    a: 'Please bring a valid photo ID, your insurance card (if applicable), any referral letters from your GP, a list of current medications, and any recent investigation reports or scan images relevant to your condition.',
  },
  {
    category: 'Insurance & Billing',
    q: 'Does Omnio accept my insurance plan?',
    a: 'We work with most major insurance providers including BPJS Kesehatan, Allianz, AXA, Prudential, Cigna, Manulife, and many others. Contact our billing team or check the Insurance & Billing page for a full list. We recommend verifying coverage with your insurer before your visit.',
  },
  {
    category: 'Insurance & Billing',
    q: 'What payment methods are accepted?',
    a: 'We accept cash, all major credit/debit cards, net banking, UPI transfers, and EMI options for large treatment costs. Insurance-direct billing is available for enrolled providers.',
  },
  {
    category: 'Insurance & Billing',
    q: 'How do I get an itemised bill for my treatment?',
    a: 'Request an itemised bill at the billing counter or through the patient portal. For insurance reimbursement claims, our billing team can also prepare the necessary documentation.',
  },
  {
    category: 'Treatments & Procedures',
    q: 'How do I prepare for surgery?',
    a: 'Your surgical team will provide personalised pre-operative instructions. Generally, this involves fasting for 6–8 hours before surgery, stopping certain medications, arranging transport home, and completing pre-surgical investigations as ordered by your doctor.',
  },
  {
    category: 'Treatments & Procedures',
    q: 'Are second opinions available at Omnio?',
    a: 'Yes. We encourage patients to seek second opinions and our specialists are happy to review diagnoses and treatment plans from other hospitals. Bring all original reports and scans to your second opinion consultation.',
  },
  {
    category: 'Emergency Services',
    q: 'What constitutes a medical emergency?',
    a: 'Medical emergencies include chest pain, difficulty breathing, stroke symptoms (FAST: Face drooping, Arm weakness, Speech difficulty, Time to call), severe injuries, loss of consciousness, severe allergic reactions, and uncontrolled bleeding. Call our emergency line or proceed directly to our 24/7 Emergency Department.',
  },
  {
    category: 'Emergency Services',
    q: 'Does Omnio have ambulance services?',
    a: 'Yes, Omnio operates a 24/7 ambulance service. Call our emergency helpline and we will dispatch a team to you. Our ambulances are equipped with Advanced Life Support (ALS) equipment and trained paramedics.',
  },
  {
    category: 'Patient Rights',
    q: 'What are my rights as a patient?',
    a: 'You have the right to receive care with dignity and respect, be fully informed about your diagnosis and treatment options, provide informed consent before procedures, maintain confidentiality of your medical records, and raise concerns or complaints without fear of reprisal.',
  },
  {
    category: 'Home Care',
    q: 'Does Omnio offer home nursing and care services?',
    a: 'Yes, through our Home Care programme, we provide post-discharge nursing visits, physiotherapy, wound care, IV therapy, and palliative care at home. Speak to our care coordinator to arrange these services.',
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-soft-200 rounded-2xl overflow-hidden transition-all ${open ? 'shadow-sm' : ''}`}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left hover:bg-soft-50 transition-colors"
      >
        <span className="font-medium text-ink-900 text-sm sm:text-base leading-snug">{faq.q}</span>
        <ChevronDown className={`h-5 w-5 text-brand-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-soft-100">
          <p className="text-sm text-ink-600 leading-relaxed pt-4">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = faqs.filter(f => {
    const matchesCat = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-soft-50 border-b border-soft-200 py-16 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 text-sm text-ink-400 mb-6">
              <a href="#" className="hover:text-brand-600 transition-colors">Home</a>
              <ChevronRight className="h-4 w-4" />
              <a href="#" className="hover:text-brand-600 transition-colors">Health Library</a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-ink-700">FAQs</span>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-ink-600 mb-8">Find quick answers to common questions about appointments, billing, treatments, and more.</p>
              <div className="flex items-center gap-3 rounded-2xl border border-soft-200 bg-white px-4 py-3 shadow-sm">
                <Search className="h-5 w-5 text-ink-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex gap-10 flex-col lg:flex-row">
              {/* Sidebar */}
              <aside className="lg:w-56 shrink-0">
                <p className="text-xs uppercase tracking-wider font-semibold text-ink-400 mb-3">Categories</p>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {faqCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                        activeCategory === cat
                          ? 'bg-brand-600 text-white'
                          : 'text-ink-600 hover:bg-soft-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </aside>

              {/* FAQ list */}
              <div className="flex-1">
                {filtered.length === 0 ? (
                  <div className="text-center py-16 text-ink-400">No questions match your search.</div>
                ) : (
                  <div className="space-y-3">
                    {filtered.map(faq => <FAQItem key={faq.q} faq={faq} />)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-12 px-5 lg:px-8 bg-brand-950 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-2xl font-bold mb-3">Still have questions?</h2>
            <p className="text-white/60 mb-8">Our patient support team is available 24/7 to assist you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+911800" className="flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-ink-900 hover:bg-gold-400 transition-colors">
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a href="#" className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                <MessageCircle className="h-4 w-4" />
                Live Chat
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

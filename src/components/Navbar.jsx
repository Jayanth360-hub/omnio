import { useState } from 'react';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';
import Logo from './Logo';

const NAV_HREFS = {
  // Speciality items
  'Cardiac Care': '#specialties-page',
  'Dentistry': '#specialties-page',
  'Gastrosciences': '#specialties-page',
  'Neurosaince': '#specialties-page',
  'Orthopaedics': '#specialties-page',
  'Liver Care': '#specialties-page',
  'Renal Care': '#specialties-page',
  'Gynaecology': '#specialties-page',
  'Paediatric Care': '#specialties-page',
  // Medical Services
  'Find a Doctor': '#find-a-doctor',
  'Book Appointment': '#book-appointment',
  'Home Care': '#home-care',
  'Emergency Helpline': '#emergency-helpline',
  'Insurance & Billing': '#insurance-billing',
  'Ambulance': '#ambulance',
  // Health Library
  'Diseases & Conditions': '#diseases-conditions',
  'Health Articles': '#health-articles',
  'Patient Guides': '#patient-guides',
  'FAQs': '#faqs',
  // About Omnio
  'History': '#history',
  'Vision & Mission': '#vision-mission',
  'Our Leadership': '#leadership',
  'Sustainability': '#sustainability',
};

const TOP_NAV_HREFS = {
  'Speciality': '#specialties-page',
  'Medical Services': '#',
  'Health Library': '#diseases-conditions',
  'About Omnio': '#history',
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  return (
    <header className="sticky top-1.5 z-50 px-4 lg:px-8 animate-nav-slide-down">
      <div className="mx-auto max-w-7xl rounded-full border border-sky-200/60 bg-sky-400/15 backdrop-blur-xl shadow-lg shadow-sky-900/10 px-5 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={TOP_NAV_HREFS[link.label] || '#'}
                  className="flex items-center gap-1 text-[15px] font-medium text-ink-900 hover:text-brand-600 transition-colors py-2"
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 text-ink-400 transition-transform duration-300 ${
                      openDropdown === link.label ? 'rotate-180' : ''
                    }`}
                  />
                </a>
                <div
                  className={`absolute left-0 top-full w-60 rounded-xl border border-soft-200 bg-white p-2 shadow-xl transition-all duration-200 origin-top ${
                    openDropdown === link.label
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                  }`}
                >
                  {link.items.map((item) => (
                    <a
                      key={item}
                      href={NAV_HREFS[item] || '#'}
                      onClick={() => setOpenDropdown(null)}
                      className="block rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-soft-50 hover:text-brand-700"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* <button className="flex items-center gap-1 rounded-full border border-soft-200 px-3 py-1.5 text-sm font-medium text-ink-600 hover:border-brand-300">
              
              <ChevronDown className="h-3.5 w-3.5" />
            </button> */}
            <a
              href="tel:+18005550173"
              className="flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-sm shadow-gold-500/30 hover:bg-gold-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Emergency Call
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-ink-900"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden mt-3 rounded-3xl border border-sky-200/60 bg-sky-50/90 backdrop-blur-xl px-5 pt-2 pb-5 shadow-lg shadow-sky-900/10 animate-fade-up">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-soft-100">
                <button
                  className="flex w-full items-center justify-between py-3 text-left text-[15px] font-medium text-ink-900"
                  onClick={() =>
                    setMobileAccordion((v) => (v === link.label ? null : link.label))
                  }
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 text-ink-400 transition-transform ${
                      mobileAccordion === link.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAccordion === link.label && (
                  <div className="pb-2 pl-3">
                    {link.items.map((item) => (
                      <a
                        key={item}
                        href={NAV_HREFS[item] || '#'}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-ink-600 hover:text-brand-700"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+18005550173"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-ink-900"
            >
              <Phone className="h-4 w-4" />
              Emergency Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

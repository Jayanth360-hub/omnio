import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import DiseaseSearch from './components/DiseaseSearch';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import CTABand from './components/CTABand';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Reveal from './components/Reveal';
import SpecialtiesPage from './pages/SpecialtiesPage';
import DiseasesConditionsPage from './pages/DiseasesConditionsPage';
import HealthArticlesPage from './pages/HealthArticlesPage';
import PatientGuidesPage from './pages/PatientGuidesPage';
import FAQsPage from './pages/FAQsPage';
import HistoryPage from './pages/HistoryPage';
import VisionMissionPage from './pages/VisionMissionPage';
import LeadershipPage from './pages/LeadershipPage';
import SustainabilityPage from './pages/SustainabilityPage';
import FindDoctorPage from './pages/FindDoctorPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import HomeCarePage from './pages/HomeCarePage';
import EmergencyHelplinePage from './pages/EmergencyHelplinePage';
import InsuranceBillingPage from './pages/InsuranceBillingPage';
import AmbulancePage from './pages/AmbulancePage';
import HealthLibraryPage from './pages/HealthLibraryPage';

const SPLASH_DURATION = 1400;

const ROUTES = {
  '#specialties-page': 'specialties',
  '#diseases-conditions': 'diseases',
  '#health-articles': 'articles',
  '#patient-guides': 'guides',
  '#faqs': 'faqs',
  '#history': 'history',
  '#vision-mission': 'vision',
  '#leadership': 'leadership',
  '#sustainability': 'sustainability',
  // Medical Services (Navbar dropdown)
  '#find-a-doctor': 'find-doctor',
  '#book-appointment': 'book-appointment',
  '#home-care': 'home-care',
  '#emergency-helpline': 'emergency-helpline',
  '#insurance-billing': 'insurance-billing',
  '#ambulance': 'ambulance',
  '#health-library-hub': 'health-library',
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState('home');

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash;
      const matched = ROUTES[hash];
      if (matched) {
        setPage(matched);
        window.scrollTo(0, 0);
      } else {
        setPage('home');
      }
    };
    window.addEventListener('hashchange', onHash);
    onHash();
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'specialties': return <SpecialtiesPage />;
      case 'diseases': return <DiseasesConditionsPage />;
      case 'articles': return <HealthArticlesPage />;
      case 'guides': return <PatientGuidesPage />;
      case 'faqs': return <FAQsPage />;
      case 'history': return <HistoryPage />;
      case 'vision': return <VisionMissionPage />;
      case 'leadership': return <LeadershipPage />;
      case 'sustainability': return <SustainabilityPage />;
      case 'find-doctor': return <FindDoctorPage />;
      case 'book-appointment': return <BookAppointmentPage />;
      case 'home-care': return <HomeCarePage />;
      case 'emergency-helpline': return <EmergencyHelplinePage />;
      case 'insurance-billing': return <InsuranceBillingPage />;
      case 'ambulance': return <AmbulancePage />;
      case 'health-library': return <HealthLibraryPage />;
      default:
        return (
          <>
            <Navbar />
            <main>
              <Hero />
              <Reveal><Specialties /></Reveal>
              <Reveal><DiseaseSearch /></Reveal>
              <Reveal><WhyChooseUs /></Reveal>
              <Reveal><Testimonials /></Reveal>
              <Reveal><Partners /></Reveal>
              <Reveal><CTABand /></Reveal>
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <>
      <Preloader show={loading} />
      <div
        className={`min-h-screen bg-white transition-opacity duration-700 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {renderPage()}
      </div>
    </>
  );
}

import hospitalBuildingImg from '../assets/1e9af3e2-b73c-44ed-8719-58955fb1eefb.png';
import medicalTeamImg from '../assets/80372d9e-9a54-47d1-bf55-ba3d0b5add25.png';
import happyPatientImg from '../assets/a8c46919-efe7-4deb-adcd-989b329e20b7.png';
import pharmacyEquipmentImg from '../assets/ce6a1624-02d5-41b6-befb-7dead4c209db.png';
import { useStaggerReveal } from '../hooks/useStaggerReveal';

export default function WhyChooseUs() {
  const [headingRef, headingVisible] = useStaggerReveal({ threshold: 0.2 });
  const [gridRef, gridVisible] = useStaggerReveal({ threshold: 0.05 });

  return (
    <section className="bg-soft-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`section-heading ${headingVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-3xl font-bold text-ink-900">
            Why Choose <span className="text-brand-700">Omnio Hospital</span>?
          </h2>
          <p className="mt-3 max-w-3xl text-ink-600">
            At Omnio Hospital, we blend expert medical care with compassion, offering personalized 
            treatment to ensure every patient feels supported and valued throughout their healing journey.
          </p>
        </div>

        {/* Bento grid layout matching reference */}
        <div ref={gridRef} className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[240px]">

          {/* ── 1. 60+ Years of Excellence — tall left, 2 rows ── */}
          <div
            className={`stagger-item-left relative overflow-hidden rounded-2xl md:col-span-4 md:row-span-2 flex flex-col justify-between p-8 ${gridVisible ? 'visible' : ''}`}
            style={{
              background: 'linear-gradient(135deg, #1B7A8C 0%, #0e6c7c 100%)',
              transitionDelay: gridVisible ? '0ms' : '0ms',
            }}
          >
            <div className="relative z-10">
              <h3 className="font-display text-2xl font-bold text-white">
                60+ Years of<br />Excellence
              </h3>
              <p className="mt-3 text-sm text-white/80">
                Decades of trusted care, prioritizing your health and well-being.
              </p>
            </div>
            <img
              src={hospitalBuildingImg}
              alt="Hospital Building"
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          {/* ── 2. 1000+ Expert Medical Care — wide, top-middle ── */}
          <div
            className={`stagger-item relative overflow-hidden rounded-2xl md:col-span-5 md:col-start-5 md:row-start-1 flex items-center justify-between p-8 ${gridVisible ? 'visible' : ''}`}
            style={{
              background: 'linear-gradient(135deg, #0e6c7c 0%, #0B4A4F 100%)',
              transitionDelay: gridVisible ? '100ms' : '0ms',
            }}
          >
            <div className="relative z-10 max-w-xs">
              <h3 className="font-display text-xl font-bold text-white leading-snug">
                1000+ Expert<br />Medical Care
              </h3>
              <p className="mt-2 text-sm text-white/75">
                A team of professionals committed to your health and well-being.
              </p>
            </div>
            <img
              src={medicalTeamImg}
              alt="Medical Team"
              className="absolute right-0 top-0 h-full object-cover object-center"
              style={{ width: '45%' }}
            />
          </div>

          {/* ── 3. Advanced Medical Technology — small, top-right ── */}
          <div
            className={`stagger-item relative overflow-hidden rounded-2xl md:col-span-3 md:col-start-10 md:row-start-1 flex flex-col justify-between p-6 ${gridVisible ? 'visible' : ''}`}
            style={{
              background: 'linear-gradient(135deg, #1B7A8C 0%, #0e6c7c 100%)',
              transitionDelay: gridVisible ? '180ms' : '0ms',
            }}
          >
            <div className="relative z-10">
              <h3 className="font-display text-lg font-bold text-white leading-snug">
                Advanced Medical<br />Technology
              </h3>
              <p className="mt-2 text-xs text-white/75">
                Medical technology for accurate diagnosis and effective treatment.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 opacity-20 text-white text-6xl">⚕</div>
          </div>

          {/* ── 4. 98% Happy Patients — wide, bottom-middle ── */}
          <div
            className={`stagger-item relative overflow-hidden rounded-2xl md:col-span-5 md:col-start-5 md:row-start-2 flex items-center justify-between p-8 ${gridVisible ? 'visible' : ''}`}
            style={{
              background: 'linear-gradient(135deg, #0e6c7c 0%, #0B4A4F 100%)',
              transitionDelay: gridVisible ? '260ms' : '0ms',
            }}
          >
            <div className="relative z-10 max-w-xs">
              <h3 className="font-display text-xl font-bold text-white leading-snug">
                98% Happy<br />Patients
              </h3>
              <p className="mt-2 text-sm text-white/75">
                We take pride in creating a positive experience for every patient.
              </p>
            </div>
            <img
              src={happyPatientImg}
              alt="Happy Patients"
              className="absolute right-0 bottom-0 h-full object-cover object-center"
              style={{ width: '45%' }}
            />
          </div>

          {/* ── 5. 40+ Years Trusted Pharmacy — small, bottom-right ── */}
          <div
            className={`stagger-item relative overflow-hidden rounded-2xl md:col-span-3 md:col-start-10 md:row-start-2 flex flex-col justify-between p-6 ${gridVisible ? 'visible' : ''}`}
            style={{
              background: 'linear-gradient(135deg, #1B7A8C 0%, #0e6c7c 100%)',
              transitionDelay: gridVisible ? '340ms' : '0ms',
            }}
          >
            <div className="relative z-10">
              <h3 className="font-display text-lg font-bold text-white leading-snug">
                40+ Years<br />Trusted Pharmacy
              </h3>
              <p className="mt-2 text-xs text-white/75">
                Trusted pharmacy solutions, delivering quality care and reliability.
              </p>
            </div>
            <img
              src={pharmacyEquipmentImg}
              alt="Pharmacy Equipment"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

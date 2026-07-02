import LogoMark from './LogoMark';

export default function Preloader({ show }) {
  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-splash transition-opacity duration-700 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 animate-logo-pop">
        <LogoMark size={56} />
        <span className="flex flex-col leading-none">
          <span className="font-display text-3xl font-extrabold text-ink-900">Omnio</span>
          <span className="text-xs font-semibold tracking-[0.3em] text-brand-600">HOSPITALS</span>
        </span>
      </div>
    </div>
  );
}

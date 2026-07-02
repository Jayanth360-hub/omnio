import LogoMark from './LogoMark';

export default function Logo({ light = false }) {
  return (
    <a href="#top" className="flex items-center gap-2.5 shrink-0">
      <LogoMark size={34} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold ${light ? 'text-white' : 'text-ink-900'}`}>
          Teczo
        </span>
        <span className={`text-[10px] font-semibold tracking-[0.2em] ${light ? 'text-white/60' : 'text-ink-400'}`}>
          CLINIC
        </span>
      </span>
    </a>
  );
}

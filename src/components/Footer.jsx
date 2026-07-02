import { Apple, Smartphone } from 'lucide-react';
import Logo from './Logo';
import { footerColumns } from '../data/content';

const socials = ['X', 'f', 'in', 'YT', 'IG'];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pb-8">
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo light />
            <p className="max-w-xs text-sm text-white/60 border-l border-white/10 pl-3">
              Leading healthcare provider committed to excellence in medical treatment.
            </p>
          </div>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-semibold hover:bg-white/10"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-4 flex gap-3 sm:justify-end sm:-mt-1">
            <a href="#" className="flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">
              <Smartphone className="h-5 w-5" />
              <span className="text-xs leading-tight text-left">
                <span className="block text-white/50">Get it on</span>
                <span className="block font-semibold text-white">Google Play</span>
              </span>
            </a>
            <a href="#" className="flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">
              <Apple className="h-5 w-5" />
              <span className="text-xs leading-tight text-left">
                <span className="block text-white/50">Download on the</span>
                <span className="block font-semibold text-white">App Store</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>Designed by Grapiku</span>
          <span>&copy; {new Date().getFullYear()} Omnio Hospitals. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

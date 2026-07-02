// Medical icons using SVG image files from assets
import cardiacImg from '../assets/cardiac-icon.svg';
import dentistryImg from '../assets/dentistry-icon.svg';
import gastroImg from '../assets/gastro-icon.svg';
import neuroImg from '../assets/neuro-icon.svg';
import orthoImg from '../assets/ortho-icon.svg';
import liverImg from '../assets/liver-icon.svg';
import renalImg from '../assets/renal-icon.svg';
import gynaecologyImg from '../assets/gynaecology-icon.svg';
import paediatricImg from '../assets/paediatric-icon.svg';

export function CardiacIcon() {
  return (
    <img src={cardiacImg} alt="Cardiac Care" className="w-full h-full" />
  );
}

export function DentistryIcon() {
  return (
    <img src={dentistryImg} alt="Dentistry" className="w-full h-full" />
  );
}

export function GastroIcon() {
  return (
    <img src={gastroImg} alt="Gastrosciences" className="w-full h-full" />
  );
}

export function NeuroIcon() {
  return (
    <img src={neuroImg} alt="Neuroscience" className="w-full h-full" />
  );
}

export function OrthoIcon() {
  return (
    <img src={orthoImg} alt="Orthopaedics" className="w-full h-full" />
  );
}

export function LiverIcon() {
  return (
    <img src={liverImg} alt="Liver Care" className="w-full h-full" />
  );
}

export function RenalIcon() {
  return (
    <img src={renalImg} alt="Renal Care" className="w-full h-full" />
  );
}

export function GynaecologyIcon() {
  return (
    <img src={gynaecologyImg} alt="Gynaecology" className="w-full h-full" />
  );
}

export function PaediatricIcon() {
  return (
    <img src={paediatricImg} alt="Paediatric Care" className="w-full h-full" />
  );
}

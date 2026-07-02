import {
  HeartPulse, Smile, FlaskConical, Brain, Bone, Droplet, Droplets, Venus, Baby,
} from 'lucide-react';

import {
  CardiacIcon, DentistryIcon, GastroIcon, NeuroIcon,
  OrthoIcon, LiverIcon, RenalIcon, GynaecologyIcon, PaediatricIcon,
} from '../components/SpecialtyIcons';

export const specialties = [
  { name: 'Cardiac Care',     desc: 'Heart health treatment',           icon: CardiacIcon,     accent: 'gold' },
  { name: 'Dentistry',        desc: 'Dental Care Solutions',            icon: DentistryIcon,   accent: 'mint' },
  { name: 'Gastrosciences',   desc: 'Digestive health care',            icon: GastroIcon,      accent: 'gold' },
  { name: 'Neurosaince',      desc: 'Brain and nerve care',             icon: NeuroIcon,       accent: 'green' },
  { name: 'Orthopaedics',     desc: 'Bone and joint care',              icon: OrthoIcon,       accent: 'gold' },
  { name: 'Liver Care',       desc: 'Liver Health and Transplant Care', icon: LiverIcon,       accent: 'gold' },
  { name: 'Renal Care',       desc: 'Kidney health treatment',          icon: RenalIcon,       accent: 'green' },
  { name: 'Gynaecology',      desc: 'Gynaecological Care Solutions',    icon: GynaecologyIcon, accent: 'green' },
  { name: 'Paediatric Care',  desc: 'Child health services',            icon: PaediatricIcon,  accent: 'gold' },
];

export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const highlights = [
  {
    title: '60+ Years of Excellence',
    desc: 'Decades of trusted care, prioritizing your health and well-being.',
    size: 'tall',
    tone: 'image-building',
  },
  {
    title: '1000+ Expert Medical Care',
    desc: 'A team of professionals committed to your health and well-being.',
    size: 'wide',
    tone: 'image-team',
  },
  {
    title: 'Advanced Medical Technology',
    desc: 'Medical technology for accurate diagnosis and effective treatment.',
    size: 'small',
    tone: 'dark',
  },
  {
    title: '98% Happy Patients',
    desc: 'We take pride in creating a positive experience for every patient.',
    size: 'wide',
    tone: 'image-patient',
  },
  {
    title: '40+ Years Trusted Pharmacy',
    desc: 'Trusted pharmacy solutions, delivering quality care and reliability.',
    size: 'small',
    tone: 'dark',
  },
];

export const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Employer',
    rating: 5,
    quote: 'The doctors and staff at Omnio Hospital were incredibly supportive throughout my treatment.',
    featured: true,
  },
  { name: 'Daniel K.', role: 'Patient' },
  { name: 'Wei L.', role: 'Patient' },
  { name: 'Aiko T.', role: 'Patient' },
  { name: 'Maria R.', role: 'Patient' },
];

export const partners = [
  { name: 'BPJS Kesehatan', logo: 'bpjs-kesehatan.png' },
  { name: 'Allianz', logo: 'allianz.png' },
  { name: 'Avrist', logo: 'avrist.png' },
  { name: 'AXA', logo: 'axa.png' },
  { name: 'BPJS Ketenagakerjaan', logo: 'bpjs-ketenagakerjaan.png' },
  { name: 'Jasa Raharja', logo: 'jasa-raharja.png' },
  { name: 'Cigna', logo: 'cigna.png' },
  { name: 'Manulife', logo: 'manulife.png' },
  { name: 'Prudential', logo: 'prudential.png' },
  { name: 'Grapiku', logo: 'grapiku.png' },
  { name: 'AIA', logo: 'aia.png' },
  { name: 'BCA Life', logo: 'bca-life.png' },
];

export const quickActions = [
  { label: 'Emergency Call', icon: 'phone' },
  { label: 'Find Doctor', icon: 'user' },
  { label: 'Make an Appointment', icon: 'calendar' },
];

export const footerColumns = [
  {
    title: 'Corporate',
    links: ['Careers', 'Contact Us', 'News & Events', 'Biomedical Reports', 'Awards'],
  },
  {
    title: 'Speciality',
    links: specialties.map((s) => s.name),
  },
  {
    title: 'Medical Services',
    links: ['Find a Doctor', 'Book Appointment for Hospital', 'Home Care', 'Emergency Helpline', 'Insurance & Billing', 'Ambulance'],
  },
  {
    title: 'About Omnio',
    links: ['History', 'Vision & Mission', 'Home Care', 'Our Leadership', 'Sustainability'],
  },
];

export const navLinks = [
  {
    label: 'Speciality',
    items: specialties.map((s) => s.name),
  },
  {
    label: 'Medical Services',
    items: ['Find a Doctor', 'Book Appointment', 'Home Care', 'Emergency Helpline', 'Insurance & Billing', 'Ambulance'],
  },
  {
    label: 'Health Library',
    items: ['Diseases & Conditions', 'Health Articles', 'Patient Guides', 'FAQs'],
  },
  {
    label: 'About Omnio',
    items: ['History', 'Vision & Mission', 'Our Leadership', 'Sustainability'],
  },
];

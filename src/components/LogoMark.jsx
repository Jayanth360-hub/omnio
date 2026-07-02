export default function LogoMark({ size = 34, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M22 6h8a4 4 0 0 1 4 4v8h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-8h-8a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h8v-8a4 4 0 0 1 4-4z"
        fill="#15879A"
      />
      <circle cx="26" cy="46" r="7" fill="#F5B915" />
    </svg>
  );
}

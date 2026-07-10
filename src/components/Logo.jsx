export default function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <radialGradient id="logoSheen" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1c4a3d" />
          <stop offset="100%" stopColor="#0f2f2a" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="15" fill="url(#logoSheen)" />
      <circle cx="16" cy="16" r="15" fill="none" stroke="#c9a875" strokeOpacity="0.55" strokeWidth="0.75" />
      <path
        d="M16 6.2c-3.4 4.4-7.6 5.6-7.6 10.6a7.6 7.6 0 0 0 15.2 0c0-5-4.2-6.2-7.6-10.6z"
        fill="#f7f4ef"
      />
      <ellipse cx="13.4" cy="12.6" rx="1.6" ry="2.4" fill="#ffffff" opacity="0.35" />
    </svg>
  );
}

export default function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#3e6b4f" />
      <path
        d="M16 7c-3 4-7 5-7 10a7 7 0 0 0 14 0c0-5-4-6-7-10z"
        fill="#faf7f2"
      />
    </svg>
  );
}

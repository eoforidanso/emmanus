export default function Logo({ size = 34, variant = "droplet" }) {
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

      {variant === "monogram" ? (
        <text
          x="16"
          y="17.4"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Spectral, Georgia, serif"
          fontWeight="700"
          fontSize="16.5"
          fill="#f7f4ef"
        >
          E
        </text>
      ) : (
        <>
          {/* True teardrop: a semicircle capped by two symmetric cubic
              beziers meeting at a single apex — clean at any weight. */}
          <path
            d="M16 6.4
               C 19.6 10.6 22.4 13.9 22.4 17.6
               A 6.4 6.4 0 0 1 9.6 17.6
               C 9.6 13.9 12.4 10.6 16 6.4 Z"
            fill="#f7f4ef"
          />
          <ellipse cx="13.5" cy="13.6" rx="1.5" ry="2.2" fill="#ffffff" opacity="0.34" />
        </>
      )}
    </svg>
  );
}

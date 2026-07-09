// Thin-stroke, monochrome icon set (inherits currentColor).
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const IconLock = () => (
  <svg {...base}>
    <rect x="5" y="11" width="14" height="9" rx="1.5" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

export const IconShield = () => (
  <svg {...base}>
    <path d="M12 3l7 3v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6z" />
    <path d="M9.3 12l2 2 3.6-3.6" />
  </svg>
);

export const IconCalendar = () => (
  <svg {...base}>
    <rect x="4" y="6" width="16" height="15" rx="1.5" />
    <path d="M4 11h16M8 3v5M16 3v5" />
  </svg>
);

export const IconCapsule = () => (
  <svg {...base}>
    <rect x="4" y="9" width="16" height="6" rx="3" transform="rotate(-32 12 12)" />
    <path d="M9.5 8.4l5 7.2" />
  </svg>
);

export const IconUser = () => (
  <svg {...base}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
  </svg>
);

export const IconFlask = () => (
  <svg {...base}>
    <path d="M10 3h4M11 3v6l-5.4 8.9A2 2 0 0 0 7.3 21h9.4a2 2 0 0 0 1.7-3.1L13 9V3" />
    <path d="M8.5 15h7" />
  </svg>
);

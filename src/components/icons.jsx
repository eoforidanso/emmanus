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

/* Evaluation — clipboard with checklist */
export const IconEvaluation = () => (
  <svg {...base}>
    <rect x="6" y="4" width="12" height="17" rx="1.2" />
    <path d="M9 4V3.4A1.4 1.4 0 0 1 10.4 2h3.2A1.4 1.4 0 0 1 15 3.4V4" />
    <path d="M8.5 11l1.4 1.4L12.5 9M8.5 16h7" />
  </svg>
);

/* Treatment — capsule + pulse */
export const IconTreatment = () => (
  <svg {...base}>
    <rect x="4" y="10" width="12" height="5.4" rx="2.7" transform="rotate(-28 10 12.7)" />
    <path d="M8.2 9.8l3.6 6.2" />
    <path d="M15 19h2l1.2-2.4L19.6 19H21" />
  </svg>
);

/* Follow-up — calendar with arrow-return */
export const IconFollowUp = () => (
  <svg {...base}>
    <rect x="4" y="6" width="14" height="14" rx="1.2" />
    <path d="M4 10.5h14M7.5 3.5v5M14.5 3.5v5" />
    <path d="M19 14.5a4 4 0 1 1-1.4-3.1" />
    <path d="M19 9.5v2.4h-2.4" />
  </svg>
);

/* Insurance — shield with document lines */
export const IconInsurance = () => (
  <svg {...base}>
    <path d="M12 3l7 3v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6z" />
    <path d="M9.2 10.5h5.6M9.2 13.5h5.6M9.2 16h3.2" />
  </svg>
);

/* Telehealth — screen with signal waves */
export const IconTelehealth = () => (
  <svg {...base}>
    <rect x="3.5" y="6" width="17" height="12" rx="1.2" />
    <path d="M9.5 21h5M12 18v3" />
    <path d="M9.8 12a2.2 2.2 0 1 1 4.4 0 2.2 2.2 0 0 1-4.4 0z" />
    <path d="M7.4 9.5a5 5 0 0 1 0 5M16.6 9.5a5 5 0 0 1 0 5" />
  </svg>
);

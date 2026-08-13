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

/* ---------------------------------------------------------------------------
   Conditions. One mark per concern in CONDITIONS — geometric, never a face or
   a mascot, so the grid reads as one system rather than eleven moods.
   --------------------------------------------------------------------------- */

/* Anxiety & panic — restless water */
export const IconWaves = () => (
  <svg {...base}>
    <path d="M3 7.5c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
    <path d="M3 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
    <path d="M3 16.5c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
  </svg>
);

/* Depression — overcast */
export const IconCloud = () => (
  <svg {...base}>
    <path d="M7.5 18.5h9.6a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-9.9-1.3 4.1 4.1 0 0 0-.1 8.5z" />
  </svg>
);

/* ADHD — a fast, forked current */
export const IconBolt = () => (
  <svg {...base}>
    <path d="M13.6 2.8L6.2 13.4h5.1L10.4 21.2l7.4-10.6h-5.1z" />
  </svg>
);

/* Insomnia & sleep — night */
export const IconMoon = () => (
  <svg {...base}>
    <path d="M20.2 14.6A8.6 8.6 0 0 1 9.4 3.8a8.6 8.6 0 1 0 10.8 10.8z" />
  </svg>
);

/* PTSD & trauma — protection around something tender */
export const IconShieldHeart = () => (
  <svg {...base}>
    <path d="M12 3l7 3v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6z" />
    <path d="M12 15.4s-2.7-1.8-2.7-3.5a1.65 1.65 0 0 1 2.7-1.2 1.65 1.65 0 0 1 2.7 1.2c0 1.7-2.7 3.5-2.7 3.5z" />
  </svg>
);

/* OCD — the loop that won’t close */
export const IconLoop = () => (
  <svg {...base}>
    <path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3" />
    <path d="M17.4 3.1v3.6h-3.6" />
    <path d="M19.5 12a7.5 7.5 0 0 1-12.8 5.3" />
    <path d="M6.6 20.9v-3.6h3.6" />
  </svg>
);

/* Grief & loss — a candle kept lit */
export const IconCandle = () => (
  <svg {...base}>
    <path d="M12 3.2c1.6 1.9 2.4 3.1 2.4 4.3a2.4 2.4 0 0 1-4.8 0c0-1.2.8-2.4 2.4-4.3z" />
    <path d="M12 9.9v1.6" />
    <rect x="8.8" y="11.5" width="6.4" height="9.3" rx="1.2" />
  </svg>
);

/* Burnout & stress — burning down */
export const IconFlame = () => (
  <svg {...base}>
    <path d="M12 21c3.6 0 6-2.3 6-5.6 0-3.9-3.4-5.7-4.6-9.4-2 1.4-3.2 3.3-3.2 5.2 0 1-.6 1.7-1.3 1.7-.8 0-1.3-.7-1.2-1.8C6.6 12.6 6 14 6 15.4 6 18.7 8.4 21 12 21z" />
  </svg>
);

/* Postpartum wellness — a cradle, and what it holds */
export const IconCradle = () => (
  <svg {...base}>
    <path d="M12 10.4s-2.6-1.7-2.6-3.3A1.6 1.6 0 0 1 12 5.9a1.6 1.6 0 0 1 2.6 1.2c0 1.6-2.6 3.3-2.6 3.3z" />
    <path d="M3.5 13.6a8.5 8.5 0 0 0 17 0z" />
    <path d="M3.5 13.6h17" />
  </svg>
);

/* Life transitions — finding the next bearing */
export const IconCompass = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M15.6 8.4l-2.1 5.7-5.7 2.1 2.1-5.7z" />
  </svg>
);

/* Men’s mental health — a clear mark to aim at */
export const IconTarget = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8.6" />
    <circle cx="12" cy="12" r="4.4" />
    <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

/* Teen & adolescent care — two people, one younger */
export const IconTeen = () => (
  <svg {...base}>
    <circle cx="8.4" cy="6.4" r="3.1" />
    <path d="M3.2 20.6c0-3.3 2.3-5.4 5.2-5.4 1.1 0 2.1.3 2.9.9" />
    <circle cx="16.8" cy="10.6" r="2.5" />
    <path d="M12.6 20.6c0-2.7 1.9-4.5 4.2-4.5s4.2 1.8 4.2 4.5" />
  </svg>
);

/* ---------------------------------------------------------------------------
   Self-care tools, contact channels and small utility marks.
   --------------------------------------------------------------------------- */

/* Breathing & grounding — moving air */
export const IconWind = () => (
  <svg {...base}>
    <path d="M3 8.4h9.4a2.7 2.7 0 1 0-2.7-2.7" />
    <path d="M3 12.4h12.6a2.7 2.7 0 1 1-2.7 2.7" />
    <path d="M3 16.4h6.8" />
  </svg>
);

/* Mood tracking — the shape of a fortnight */
export const IconTrend = () => (
  <svg {...base}>
    <path d="M3.5 3.8v16.4h16.9" />
    <path d="M7 16.2l3.6-4.2 3.1 2.6 4.6-5.6" />
  </svg>
);

/* Thought reframing — the same thought, turned over */
export const IconReframe = () => (
  <svg {...base}>
    <path d="M20.5 11.8a7.8 7.8 0 0 1-11.4 6.9L4 20.2l1.5-4.7a7.8 7.8 0 1 1 15-3.7z" />
    <path d="M9.6 12.6a2.9 2.9 0 0 1 5-1.9" />
    <path d="M14.9 8.8v2h-2" />
  </svg>
);

/* Journaling — a few minutes on the page */
export const IconPen = () => (
  <svg {...base}>
    <path d="M4 20.2l1.1-4.3L15 6a2 2 0 0 1 2.8 0l1.3 1.3a2 2 0 0 1 0 2.8l-9.9 9.9z" />
    <path d="M13.6 7.4l3.9 3.9" />
  </svg>
);

/* Crisis planning — something to hold on to */
export const IconLifebuoy = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8.6" />
    <circle cx="12" cy="12" r="3.6" />
    <path d="M5.9 5.9l3.6 3.6M18.1 5.9l-3.6 3.6M5.9 18.1l3.6-3.6M18.1 18.1l-3.6-3.6" />
  </svg>
);

/* Recommended reading */
export const IconBook = () => (
  <svg {...base}>
    <path d="M4 4.6h5.6A2.6 2.6 0 0 1 12 7.2v12a2.2 2.2 0 0 0-2.4-1.9H4z" />
    <path d="M20 4.6h-5.6A2.6 2.6 0 0 0 12 7.2v12a2.2 2.2 0 0 1 2.4-1.9H20z" />
  </svg>
);

/* Two minutes */
export const IconClock = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 6.8v5.5l3.5 2" />
  </svg>
);

/* Research-backed */
export const IconChart = () => (
  <svg {...base}>
    <path d="M3.6 20.4h16.8" />
    <path d="M7.4 20.4v-6.2M12 20.4V7.2M16.6 20.4v-9" />
  </svg>
);

export const IconPhone = () => (
  <svg {...base}>
    <path d="M6.6 3.6h3l1.6 4-2 1.4a11.6 11.6 0 0 0 5.8 5.8l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.6 5.8a2 2 0 0 1 2-2.2z" />
  </svg>
);

export const IconFax = () => (
  <svg {...base}>
    <path d="M7 8.4V4.2h10v4.2" />
    <rect x="3.4" y="8.4" width="17.2" height="6.8" rx="1.4" />
    <path d="M6.6 11.6h1.6" />
    <path d="M7 15.2h10v4.6H7z" />
  </svg>
);

export const IconMail = () => (
  <svg {...base}>
    <rect x="3" y="5.4" width="18" height="13.2" rx="2" />
    <path d="M3.7 7l8.3 5.9L20.3 7" />
  </svg>
);

export const IconHeart = () => (
  <svg {...base}>
    <path d="M12 20.4S4.2 15.7 4.2 10.4A4.6 4.6 0 0 1 12 7.4a4.6 4.6 0 0 1 7.8 3c0 5.3-7.8 10-7.8 10z" />
  </svg>
);

/* Rating star — the one solid mark in the set */
export const IconStar = () => (
  <svg {...base} fill="currentColor" stroke="none">
    <path d="M12 3.4l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.9l6.1-.9z" />
  </svg>
);

/* Navigation chrome — glyphs the browser used to draw for us */
export const IconMenu = () => (
  <svg {...base}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = () => (
  <svg {...base}>
    <path d="M6.2 6.2l11.6 11.6M17.8 6.2L6.2 17.8" />
  </svg>
);

export const IconArrowLeft = () => (
  <svg {...base}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const IconArrowRight = () => (
  <svg {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowUp = () => (
  <svg {...base}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

/* The brand's leaf, as a mark rather than a 🌿 */
export const IconLeaf = () => (
  <svg {...base}>
    <path d="M20 4.2c0 9-5.2 13.2-10 13.2a5.4 5.4 0 0 1-5.4-5.4C4.6 7.6 10.4 4.2 20 4.2z" />
    <path d="M12.4 11.8c-2.6 1.7-4.4 4.4-5.2 8" />
  </svg>
);

export const IconSun = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.6v2.5M12 18.9v2.5M2.6 12h2.5M18.9 12h2.5M5.4 5.4l1.8 1.8M16.8 16.8l1.8 1.8M18.6 5.4l-1.8 1.8M7.2 16.8l-1.8 1.8" />
  </svg>
);

/* Social marks. Brand logos are conventionally solid, so these are the one
   place the set uses fill rather than stroke. */
const brand = { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true };

export const IconLinkedIn = () => (
  <svg {...brand}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9.5h4v11H3zM10 9.5h3.8v1.5a4.2 4.2 0 0 1 3.7-2c3 0 4.5 1.9 4.5 5.3v6.2h-4v-5.5c0-1.6-.6-2.6-2-2.6s-2.2 1-2.2 2.6v5.5H10z" />
  </svg>
);

export const IconInstagram = () => (
  <svg {...base}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
    <circle cx="12" cy="12" r="3.9" />
    <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconFacebook = () => (
  <svg {...brand}>
    <path d="M14.5 21v-7.7h2.6l.4-3h-3V8.4c0-.9.24-1.5 1.5-1.5H17.6V4.2A21 21 0 0 0 15.3 4c-2.3 0-3.9 1.4-3.9 4v2.3H8.8v3h2.6V21z" />
  </svg>
);

/* Mood scale — five faces on one geometry, so the row reads as a scale */
const face = (mouth, brows) => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="10.2" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10.2" r="1" fill="currentColor" stroke="none" />
    {brows}
    <path d={mouth} />
  </svg>
);

export const IconMoodRough = () =>
  face(
    "M8 16.6c1.1-2 2.5-3 4-3s2.9 1 4 3",
    <path d="M7.4 7.6l2.6 1M16.6 7.6l-2.6 1" />
  );
export const IconMoodLow = () =>
  face("M8.4 15.9c1-1.2 2.2-1.8 3.6-1.8s2.6.6 3.6 1.8");
export const IconMoodOkay = () => face("M8.4 15.2h7.2");
export const IconMoodGood = () =>
  face("M8.4 14.3c1 1.2 2.2 1.8 3.6 1.8s2.6-.6 3.6-1.8");
/* The happiest face gets a filled mouth so the top of the scale is
   unmistakable next to "Good" at 30px. */
export const IconMoodGreat = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="10.2" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10.2" r="1" fill="currentColor" stroke="none" />
    <path
      d="M7.6 13.6h8.8a4.4 4.4 0 0 1-8.8 0z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

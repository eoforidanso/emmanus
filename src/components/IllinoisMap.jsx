// Illinois outline — decorative geographic signal for a telehealth
// practice licensed only in Illinois. Not an interactive map; no
// physical office location is implied.
export default function IllinoisMap() {
  return (
    <div className="il-map">
      <svg
        viewBox="0 0 220 340"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Outline of the state of Illinois, where Emmanus Wellness is licensed to provide care"
      >
        <path
          d="M40 18 L150 18 L152 40 L163 56 L170 74 L178 96 L184 118 L188 140
             L186 160 L178 176 L170 190 L164 206 L158 222 L150 238 L142 252
             L134 264 L128 278 L120 292 L112 304 L104 314 L96 320 L88 314
             L82 302 L78 288 L74 272 L68 258 L60 246 L52 236 L46 224 L42 210
             L40 194 L38 176 L36 158 L34 140 L33 120 L32 100 L32 80 L34 58
             L36 38 Z"
          fill="var(--green-50)"
          stroke="var(--green-700)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="150" cy="62" r="13" fill="var(--gold)" opacity="0.22" />
        <circle cx="150" cy="62" r="5.5" fill="var(--gold)" />
      </svg>
      <p className="il-map__caption">
        Licensed in <strong>Illinois</strong> — care delivered statewide by
        secure video.
      </p>
    </div>
  );
}

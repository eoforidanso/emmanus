import { useState } from "react";

const TRAPS = [
  "All-or-nothing thinking",
  "Catastrophizing",
  "Mind reading",
  "Overgeneralizing",
  "'Should' statements",
  "Discounting the positive",
  "Self-blame",
];

const REFRAME_HINTS = [
  "What would you say to a friend who had this thought?",
  "What evidence doesn't fit this thought?",
  "Is there a kinder, equally true way to say it?",
];

export default function Reframe() {
  const [step, setStep] = useState(0);
  const [thought, setThought] = useState("");
  const [traps, setTraps] = useState([]);
  const [reframed, setReframed] = useState("");

  const toggleTrap = (t) =>
    setTraps((cur) =>
      cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]
    );

  const reset = () => {
    setStep(0);
    setThought("");
    setTraps([]);
    setReframed("");
  };

  return (
    <div className="finder">
      <div className="finder__progress" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className={i < step ? "done" : ""} />
        ))}
      </div>

      {step === 0 && (
        <>
          <h3>What thought is weighing on you?</h3>
          <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>
            Write it exactly as it sounds in your head — e.g. "I always mess
            things up."
          </p>
          <div className="field">
            <textarea
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              placeholder="The thought, in your own words…"
              aria-label="The thought you want to examine"
            />
          </div>
          <div style={{ marginTop: 18 }}>
            <button
              className="btn btn--primary"
              disabled={!thought.trim()}
              style={!thought.trim() ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
              onClick={() => setStep(1)}
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <h3>Any thinking traps in there?</h3>
          <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>
            These are common patterns our minds fall into under stress. Tap
            any that fit — naming them loosens their grip.
          </p>
          <div className="chip-row">
            {TRAPS.map((t) => (
              <button
                key={t}
                className={`chip-btn${traps.includes(t) ? " on" : ""}`}
                onClick={() => toggleTrap(t)}
                aria-pressed={traps.includes(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div style={{ marginTop: 22 }}>
            <button className="btn btn--primary" onClick={() => setStep(2)}>
              Next
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h3>Now, a kinder and truer version</h3>
          <ul className="profile__list" style={{ marginBottom: 16 }}>
            {REFRAME_HINTS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="field">
            <textarea
              value={reframed}
              onChange={(e) => setReframed(e.target.value)}
              placeholder="A more balanced way to see it…"
              aria-label="Your reframed thought"
            />
          </div>
          <div style={{ marginTop: 18 }}>
            <button
              className="btn btn--primary"
              disabled={!reframed.trim()}
              style={!reframed.trim() ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
              onClick={() => setStep(3)}
            >
              See it side by side
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h3>Look at the difference</h3>
          <div className="reframe-compare">
            <blockquote className="before">“{thought}”</blockquote>
            <blockquote className="after">“{reframed}”</blockquote>
          </div>
          {traps.length > 0 && (
            <p style={{ color: "var(--ink-soft)", fontSize: "0.9rem", marginBottom: 16 }}>
              Traps you spotted: {traps.join(", ")}.
            </p>
          )}
          <p style={{ color: "var(--ink-soft)", marginBottom: 18 }}>
            Reading the new version out loud — even once — helps it stick.
          </p>
          <button className="finder__reset" onClick={reset}>
            Reframe another thought
          </button>
          <p className="form-note">
            Nothing you write here is saved or sent anywhere. It disappears
            when you leave the page.
          </p>
        </>
      )}
    </div>
  );
}

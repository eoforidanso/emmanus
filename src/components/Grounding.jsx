import { useState } from "react";

const STEPS = [
  {
    count: 5,
    sense: "things you can see",
    hint: "Look around slowly. Name each one in your mind — colors, shapes, light.",
  },
  {
    count: 4,
    sense: "things you can touch",
    hint: "Your feet on the floor, the fabric of your clothes, the air on your skin.",
  },
  {
    count: 3,
    sense: "things you can hear",
    hint: "Near or far. Traffic, a fan, your own breathing.",
  },
  {
    count: 2,
    sense: "things you can smell",
    hint: "Or two smells you like, if nothing comes to mind.",
  },
  {
    count: 1,
    sense: "thing you can taste",
    hint: "Or take one slow sip of water and notice it fully.",
  },
];

export default function Grounding() {
  const [step, setStep] = useState(-1);

  const done = step >= STEPS.length;

  return (
    <div className="finder">
      {step === -1 && (
        <>
          <h3>5-4-3-2-1 Grounding</h3>
          <p style={{ color: "var(--ink-soft)", marginBottom: 22 }}>
            A simple exercise for anxious or racing moments. It anchors your
            attention in your senses, one step at a time. Takes about two
            minutes.
          </p>
          <button className="btn btn--primary" onClick={() => setStep(0)}>
            Begin
          </button>
        </>
      )}

      {step >= 0 && !done && (
        <>
          <div className="finder__progress" aria-hidden="true">
            {STEPS.map((s, i) => (
              <span key={s.sense} className={i < step ? "done" : ""} />
            ))}
          </div>
          <div className="grounding__count">{STEPS[step].count}</div>
          <h3>Notice {STEPS[step].count} {STEPS[step].sense}</h3>
          <p style={{ color: "var(--ink-soft)", marginBottom: 22 }}>
            {STEPS[step].hint}
          </p>
          <button className="btn btn--ghost" onClick={() => setStep(step + 1)}>
            {step === STEPS.length - 1 ? "Finish" : "Next"}
          </button>
        </>
      )}

      {done && (
        <>
          <h3>Welcome back 🌿</h3>
          <p style={{ color: "var(--ink-soft)", marginBottom: 22 }}>
            Notice how your body feels compared to two minutes ago. You can
            return to this anytime.
          </p>
          <button className="finder__reset" onClick={() => setStep(-1)}>
            Start over
          </button>
        </>
      )}
    </div>
  );
}

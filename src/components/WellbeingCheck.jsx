import { useState } from "react";
import { BOOKING_URL } from "../data";

// WHO-5 Well-Being Index — a widely used, non-diagnostic wellbeing measure.
const ITEMS = [
  "I have felt cheerful and in good spirits",
  "I have felt calm and relaxed",
  "I have felt active and vigorous",
  "I woke up feeling fresh and rested",
  "My daily life has been filled with things that interest me",
];

const OPTIONS = [
  { label: "All of the time", value: 5 },
  { label: "Most of the time", value: 4 },
  { label: "More than half the time", value: 3 },
  { label: "Less than half the time", value: 2 },
  { label: "Some of the time", value: 1 },
  { label: "At no time", value: 0 },
];

function interpret(score) {
  if (score >= 76)
    return {
      title: "Your wellbeing looks strong right now",
      text: "Keep doing what's working — sleep, movement, connection. Check back in whenever you like.",
      suggestBooking: false,
    };
  if (score >= 51)
    return {
      title: "You're doing okay — keep tending to yourself",
      text: "There's room to feel better. Small consistent habits help, and a few coaching or therapy sessions can too.",
      suggestBooking: false,
    };
  if (score >= 29)
    return {
      title: "Your wellbeing looks lower than we'd like",
      text: "You don't have to wait until things feel unmanageable. Talking with a clinician now can make a real difference.",
      suggestBooking: true,
    };
  return {
    title: "It sounds like things are heavy right now",
    text: "A low score here is a good reason to reach out — support is closer than it feels, and asking for it is a strength.",
    suggestBooking: true,
  };
}

export default function WellbeingCheck() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState([]);

  const done = step >= ITEMS.length;
  const raw = scores.reduce((a, b) => a + b, 0);
  const score = raw * 4; // WHO-5 percentage score, 0–100
  const result = done ? interpret(score) : null;

  const answer = (value) => {
    setScores((s) => [...s, value]);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setScores([]);
    setStep(0);
    setStarted(false);
  };

  if (!started) {
    return (
      <div className="finder">
        <h3>Five questions, two minutes</h3>
        <p style={{ color: "var(--ink-soft)", marginBottom: 8 }}>
          You'll rate five statements about the last two weeks and get a
          gentle read on where your wellbeing sits today.
        </p>
        <p className="form-note" style={{ marginBottom: 22 }}>
          Completely private — your answers never leave this page.
        </p>
        <button className="btn btn--primary" onClick={() => setStarted(true)}>
          Start the check-in →
        </button>
      </div>
    );
  }

  return (
    <div className="finder">
      <div className="finder__progress" aria-hidden="true">
        {ITEMS.map((item, i) => (
          <span key={item} className={i < step ? "done" : ""} />
        ))}
      </div>

      {!done ? (
        <>
          <p className="checkin__scale">
            Over the last two weeks… ({step + 1} of {ITEMS.length})
          </p>
          <h3>{ITEMS[step]}</h3>
          <div className="finder__options">
            {OPTIONS.map((o) => (
              <button
                key={o.label}
                className="finder__option"
                onClick={() => answer(o.value)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <div className="checkin__score">{score}/100</div>
          <div className="scorebar">
            <span style={{ width: `${score}%` }} />
          </div>
          <h3 style={{ marginTop: 18 }}>{result.title}</h3>
          <p style={{ color: "var(--ink-soft)", marginBottom: 20 }}>
            {result.text}
          </p>
          {result.suggestBooking && (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ marginBottom: 6 }}
            >
              Schedule a session
            </a>
          )}
          <br />
          <button className="finder__reset" onClick={reset}>
            Take it again
          </button>
          <p className="form-note">
            Based on the WHO-5 Well-Being Index. This is a wellbeing snapshot,
            not a diagnosis, and your answers never leave this page. If you're
            in crisis, call or text 988.
          </p>
        </div>
      )}
    </div>
  );
}

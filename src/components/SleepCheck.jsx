import { useState } from "react";
import { BOOKING_URL } from "../data";

const ITEMS = [
  "I fall asleep within about 30 minutes of going to bed",
  "I sleep through the night without long wake-ups",
  "I wake up feeling rested",
  "I have steady energy through the day",
  "I keep a fairly consistent sleep and wake time",
];

const OPTIONS = [
  { label: "Almost always", value: 3 },
  { label: "Most nights", value: 2 },
  { label: "Sometimes", value: 1 },
  { label: "Rarely or never", value: 0 },
];

const TIPS = [
  "Anchor your wake time — same time every day, even weekends",
  "Give yourself a wind-down hour: dim lights, no work, no doomscrolling",
  "Get outside light within an hour of waking — it sets tonight's sleep",
  "Keep the bed for sleep only, so your brain links it with rest",
  "If you can't sleep after ~20 minutes, get up and do something quiet until drowsy",
];

function interpret(score) {
  if (score >= 12)
    return {
      title: "Your sleep looks solid",
      text: "Whatever you're doing is working — protect that routine, especially during stressful stretches.",
      showTips: false,
      suggestBooking: false,
    };
  if (score >= 7)
    return {
      title: "Decent sleep, with room to improve",
      text: "A few small habit changes usually move the needle more than people expect. Try one or two of these for two weeks:",
      showTips: true,
      suggestBooking: false,
    };
  return {
    title: "Your sleep sounds like it's struggling",
    text: "Poor sleep and mood feed each other, and it's very treatable. These habits help — and if sleep has been hard for more than a few weeks, it's worth bringing to a session:",
    showTips: true,
    suggestBooking: true,
  };
}

export default function SleepCheck() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState([]);

  const done = step >= ITEMS.length;
  const score = scores.reduce((a, b) => a + b, 0);
  const result = done ? interpret(score) : null;

  const answer = (value) => {
    setScores((s) => [...s, value]);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setScores([]);
    setStep(0);
  };

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
          <div className="checkin__score">{score}/15</div>
          <div className="scorebar">
            <span style={{ width: `${(score / 15) * 100}%` }} />
          </div>
          <h3 style={{ marginTop: 18 }}>{result.title}</h3>
          <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>
            {result.text}
          </p>
          {result.showTips && (
            <ul className="profile__list" style={{ marginBottom: 20 }}>
              {TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
          {result.suggestBooking && (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ marginBottom: 6 }}
            >
              Talk to Dr. Ofori-Danso about sleep
            </a>
          )}
          <br />
          <button className="finder__reset" onClick={reset}>
            Take it again
          </button>
          <p className="form-note">
            A habits snapshot, not a diagnosis — and your answers never leave
            this page.
          </p>
        </div>
      )}
    </div>
  );
}

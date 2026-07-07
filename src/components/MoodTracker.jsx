import { useState } from "react";

const MOODS = [
  { emoji: "😞", value: 1, label: "Rough" },
  { emoji: "😕", value: 2, label: "Low" },
  { emoji: "😐", value: 3, label: "Okay" },
  { emoji: "🙂", value: 4, label: "Good" },
  { emoji: "😄", value: 5, label: "Great" },
];

const STORAGE_KEY = "ew-moods";
const DAYS_SHOWN = 14;

function loadMoods() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function dayKey(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() - offset);
  return d.toISOString().slice(0, 10);
}

export default function MoodTracker() {
  const [moods, setMoods] = useState(loadMoods);

  const today = dayKey();
  const todayMood = moods[today];

  const record = (value) => {
    const next = { ...moods, [today]: value };
    setMoods(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const clear = () => {
    setMoods({});
    localStorage.removeItem(STORAGE_KEY);
  };

  const history = Array.from({ length: DAYS_SHOWN }, (_, i) =>
    moods[dayKey(DAYS_SHOWN - 1 - i)]
  );
  const logged = Object.keys(moods).length;

  return (
    <div className="finder">
      <h3>How are you feeling today?</h3>
      <p style={{ color: "var(--ink-soft)", marginBottom: 18 }}>
        One tap a day is enough to start noticing patterns.
      </p>
      <div className="mood-row" role="group" aria-label="Select today's mood">
        {MOODS.map((m) => (
          <button
            key={m.value}
            className={`mood-btn${todayMood === m.value ? " selected" : ""}`}
            onClick={() => record(m.value)}
            aria-label={m.label}
            title={m.label}
          >
            {m.emoji}
          </button>
        ))}
      </div>

      {todayMood && (
        <p style={{ marginTop: 14, fontWeight: 600, color: "var(--green-600)" }}>
          Logged: {MOODS.find((m) => m.value === todayMood).label}. Nice check-in. 🌿
        </p>
      )}

      <div className="mood-chart" aria-hidden="true">
        {history.map((v, i) => (
          <div
            key={i}
            className={`bar${v ? "" : " empty"}`}
            style={{ height: v ? `${(v / 5) * 100}%` : "6px" }}
          />
        ))}
      </div>
      <div className="mood-chart-labels">
        <span>{DAYS_SHOWN} days ago</span>
        <span>today</span>
      </div>

      <p className="form-note">
        {logged > 0
          ? `${logged} day${logged === 1 ? "" : "s"} logged. `
          : ""}
        Saved only in this browser on this device — never sent anywhere.
      </p>
      {logged > 0 && (
        <button className="finder__reset" onClick={clear}>
          Clear my history
        </button>
      )}
    </div>
  );
}

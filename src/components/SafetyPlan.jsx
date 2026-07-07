import { useState } from "react";

// Modeled on the Stanley-Brown Safety Planning Intervention structure.
const SECTIONS = [
  {
    key: "warning",
    title: "1. My warning signs",
    hint: "Thoughts, moods, or situations that tell me things are getting harder",
  },
  {
    key: "coping",
    title: "2. Things I can do on my own to feel safer",
    hint: "Music, a walk, a shower, breathing exercises — whatever helps you settle",
  },
  {
    key: "distraction",
    title: "3. People and places that take my mind off things",
    hint: "A friend to sit with, a café, a park — connection without needing to explain",
  },
  {
    key: "support",
    title: "4. People I can ask for help",
    hint: "Names and numbers of people I trust enough to tell how I'm feeling",
  },
  {
    key: "professionals",
    title: "5. Professionals I can contact",
    hint: "Dr. Ofori-Danso via the patient portal · 988 Suicide & Crisis Lifeline (call/text) · Crisis Text Line: text HOME to 741741",
  },
  {
    key: "environment",
    title: "6. Ways to make my environment safer",
    hint: "Anything I can move, lock away, or hand to someone I trust for now",
  },
  {
    key: "reasons",
    title: "7. What's worth staying for",
    hint: "People, plans, small joys — in your own words",
  },
];

export default function SafetyPlan() {
  const [values, setValues] = useState({});

  const update = (key, val) => setValues((v) => ({ ...v, [key]: val }));
  const filled = SECTIONS.filter((s) => (values[s.key] || "").trim()).length;

  const download = () => {
    const lines = [
      "MY SAFETY PLAN — Emmanus Wellness",
      `Written ${new Date().toLocaleDateString()}`,
      "",
      "If I am in immediate danger: call 911.",
      "If I am in crisis: call or text 988 (Suicide & Crisis Lifeline), 24/7.",
      "",
      ...SECTIONS.flatMap((s) => [
        s.title.toUpperCase(),
        (values[s.key] || "").trim() || "—",
        "",
      ]),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-safety-plan.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="finder" style={{ maxWidth: 820 }}>
      <p style={{ color: "var(--ink-soft)", marginBottom: 22 }}>
        A safety plan is something you write when you're steady, so it's
        ready if a hard moment comes. Fill in whatever feels right — every
        field is optional, and nothing is stored or sent anywhere. When
        you're done, download a copy to keep somewhere you can find it.
      </p>
      <div className="form-grid" style={{ gridTemplateColumns: "1fr" }}>
        {SECTIONS.map((s) => (
          <div className="field" key={s.key}>
            <label htmlFor={`sp-${s.key}`}>{s.title}</label>
            <textarea
              id={`sp-${s.key}`}
              value={values[s.key] || ""}
              onChange={(e) => update(s.key, e.target.value)}
              placeholder={s.hint}
              style={{ minHeight: 70 }}
            />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <button
          className="btn btn--primary"
          onClick={download}
          disabled={filled === 0}
          style={filled === 0 ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
        >
          Download my plan
        </button>
        <span style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
          {filled} of {SECTIONS.length} sections filled in
        </span>
      </div>
      <p className="form-note">
        Your plan exists only on this page until you download it — it is
        never saved to any server. If you're in crisis right now, don't
        plan; call or text <strong>988</strong>.
      </p>
    </div>
  );
}

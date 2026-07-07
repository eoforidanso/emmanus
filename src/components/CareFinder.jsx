import { useState } from "react";
import { PORTAL_URL, SERVICES } from "../data";

const QUESTIONS = [
  {
    key: "who",
    q: "Who is care for?",
    options: [
      { label: "Myself", value: "self" },
      { label: "My teenager (13–17)", value: "teen" },
      { label: "Me and my partner", value: "couple" },
    ],
  },
  {
    key: "focus",
    q: "What matters most right now?",
    options: [
      { label: "Talking things through with a therapist", value: "therapy" },
      { label: "Medication questions or management", value: "medication" },
      { label: "Stress, burnout, sleep, or habits", value: "coaching" },
      { label: "Grief, or connecting with others like me", value: "group" },
    ],
  },
];

function recommend(answers) {
  if (answers.who === "couple") return "Couples Counseling";
  if (answers.who === "teen") return "Teen & Adolescent Care";
  switch (answers.focus) {
    case "medication":
      return "Psychiatry & Medication";
    case "coaching":
      return "Wellness Coaching";
    case "group":
      return "Group Support";
    default:
      return "Individual Therapy";
  }
}

export default function CareFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const done = step >= QUESTIONS.length;
  const service = done
    ? SERVICES.find((s) => s.title === recommend(answers))
    : null;

  const pick = (key, value) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setStep((s) => s + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <div className="finder">
      <div className="finder__progress" aria-hidden="true">
        {QUESTIONS.map((q, i) => (
          <span key={q.key} className={i < step || done ? "done" : ""} />
        ))}
      </div>

      {!done ? (
        <>
          <h3>{QUESTIONS[step].q}</h3>
          <div className="finder__options">
            {QUESTIONS[step].options.map((o) => (
              <button
                key={o.value}
                className="finder__option"
                onClick={() => pick(QUESTIONS[step].key, o.value)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="finder__result">
          <div className="card__icon" aria-hidden="true">
            {service.icon}
          </div>
          <h3>We'd suggest: {service.title}</h3>
          <p style={{ color: "var(--ink-soft)", marginBottom: 8 }}>
            {service.description}
          </p>
          <p className="card__meta" style={{ marginBottom: 24 }}>
            {service.detail}
          </p>
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Book this in the portal
          </a>
          <br />
          <button className="finder__reset" onClick={reset}>
            Start over
          </button>
        </div>
      )}
    </div>
  );
}

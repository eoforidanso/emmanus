import { useEffect, useState } from "react";

const PHASES = [
  { label: "Breathe in", expanded: true },
  { label: "Hold", expanded: true },
  { label: "Breathe out", expanded: false },
  { label: "Hold", expanded: false },
];

const SECONDS = 4;

export default function Breathe() {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState(0);
  const [count, setCount] = useState(SECONDS);

  useEffect(() => {
    if (!running) return;
    const tick = setInterval(() => {
      setCount((c) => {
        if (c > 1) return c - 1;
        setPhase((p) => (p + 1) % PHASES.length);
        return SECONDS;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [running]);

  const toggle = () => {
    setRunning((r) => !r);
    setPhase(0);
    setCount(SECONDS);
  };

  const expanded = running && PHASES[phase].expanded;

  return (
    <div className="breathe">
      <div className="breathe__stage">
        <div className="breathe__ring" aria-hidden="true" />
        <div
          className={`breathe__circle${expanded ? " is-in" : ""}`}
          role="timer"
          aria-live="polite"
        >
          <span>{running ? PHASES[phase].label : "A moment of calm"}</span>
          {running && <strong>{count}</strong>}
        </div>
      </div>
      <button className="btn btn--ghost" onClick={toggle}>
        {running ? "Pause" : "Try box breathing (4-4-4-4)"}
      </button>
    </div>
  );
}

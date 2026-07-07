import { useState } from "react";

const PROMPTS = [
  "What is one thing you handled better this week than you would have a year ago?",
  "Write about a moment today when you felt even slightly at ease. What made it possible?",
  "What would you say to a close friend feeling exactly what you're feeling right now?",
  "Name something you've been carrying silently. What would it feel like to set it down for one evening?",
  "What are three small things your body did for you today?",
  "Describe a place — real or imagined — where you feel completely safe.",
  "What boundary would make next week 10% lighter? What makes it hard to set?",
  "Finish this sentence honestly: 'Right now, I need…'",
  "What's one belief about yourself you're ready to question?",
  "Write a short thank-you note to yourself from one year in the future.",
];

export default function PromptGenerator() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => (i + 1 + Math.floor(Math.random() * (PROMPTS.length - 1))) % PROMPTS.length);

  return (
    <div className="prompt-card">
      <span className="eyebrow">Journaling prompt</span>
      <blockquote>“{PROMPTS[index]}”</blockquote>
      <button className="btn btn--ghost" onClick={next}>
        Give me another
      </button>
    </div>
  );
}

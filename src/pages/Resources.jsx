import Reveal from "../components/Reveal";
import WellbeingCheck from "../components/WellbeingCheck";
import Grounding from "../components/Grounding";
import PromptGenerator from "../components/PromptGenerator";
import Breathe from "../components/Breathe";
import MoodTracker from "../components/MoodTracker";
import Reframe from "../components/Reframe";
import SafetyPlan from "../components/SafetyPlan";
import SleepCheck from "../components/SleepCheck";
import CrisisBanner from "../components/CrisisBanner";
import { BOOKS } from "../data";
import usePageMeta from "../usePageMeta";

const TOOL_MENU = [
  {
    icon: "🌬️",
    title: "Breathing & grounding",
    text: "Short, guided practices to settle your body and calm your mind.",
    meta: "Breathing tools",
    href: "#breathing",
  },
  {
    icon: "📈",
    title: "Mood tracking",
    text: "A lightweight way to notice patterns, triggers, and small wins over time.",
    meta: "Mood tracking",
    href: "#mood",
  },
  {
    icon: "💭",
    title: "Thought reframing",
    text: "Evidence-based prompts to challenge unhelpful thinking and build healthier narratives.",
    meta: "Thought reframing",
    href: "#reframe",
  },
  {
    icon: "🌙",
    title: "Sleep check-in",
    text: "Five quick questions about your nights, with practical habits matched to your answers.",
    meta: "Sleep check-in",
    href: "#sleep",
  },
  {
    icon: "✍️",
    title: "Journaling prompts",
    text: "A question to write with — a few minutes a day is one of the best small habits for mood.",
    meta: "Journaling",
    href: "#journal",
  },
  {
    icon: "🛟",
    title: "Crisis planning",
    text: "A private space to outline your personal safety plan — only for you, never stored.",
    meta: "Crisis planning",
    href: "#safety",
  },
  {
    icon: "📚",
    title: "Recommended reading",
    text: "Clinician-respected books on mood, trauma, ADHD, relationships, grief, and more.",
    meta: "Reading list",
    href: "#reading",
  },
];

const CRISIS_LINES = [
  {
    name: "988 Suicide & Crisis Lifeline",
    detail: "Call or text 988 — free, confidential, 24/7",
    href: "tel:988",
  },
  {
    name: "Crisis Text Line",
    detail: "Text HOME to 741741 to reach a trained counselor",
    href: "sms:741741",
  },
  {
    name: "SAMHSA National Helpline",
    detail: "1-800-662-4357 — treatment referrals, 24/7",
    href: "tel:+18006624357",
  },
  {
    name: "Emergency",
    detail: "Call 911 or go to your nearest emergency room",
    href: "tel:911",
  },
];

export default function Resources() {
  usePageMeta(
    "Free Mental Health Self-Care Tools",
    "Private, free self-care tools: WHO-5 wellbeing check-in, mood tracking, thought reframing, box breathing, grounding, sleep check-in, safety planning, and crisis resources."
  );
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Resources</span>
          <h1>Tools you can use right now</h1>
          <p>
            Free, private self-care tools — no account needed, and nothing you
            do here is stored or shared. These are meant to support your
            wellbeing between sessions, not replace care.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="feature-panel">
              <div>
                <span className="eyebrow">Check in with yourself</span>
                <h2>How have you been feeling lately?</h2>
                <p>
                  A five-question check-in based on the WHO-5 Well-Being
                  Index — a simple, research-backed way to get a quick sense
                  of your emotional temperature.
                </p>
                <div className="hero__badges">
                  <span className="hero__badge">⏱️ Two minutes</span>
                  <span className="hero__badge">🔒 Never stored</span>
                  <span className="hero__badge">📊 Research-backed</span>
                </div>
              </div>
              <WellbeingCheck />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Explore more self-care tools</span>
              <h2>Pick what today calls for</h2>
            </div>
          </Reveal>
          <div className="grid-3">
            {TOOL_MENU.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 90}>
                <a href={t.href} className="card card--link">
                  <div className="card__icon" aria-hidden="true">{t.icon}</div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <div className="card__meta">{t.meta}</div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="crisis" style={{ marginTop: 32 }} role="note">
              <span aria-hidden="true">🔒</span>
              <span>
                <strong>Private by design.</strong> Every tool on this page
                runs entirely in your browser — no account, no tracking, and
                nothing you type is ever sent to us or anyone else. The mood
                tracker saves only to this device, and you can clear it
                anytime.
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="breathing">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Breathing &amp; grounding</span>
              <h2>Settle your nervous system</h2>
              <p>
                For anxious or racing moments — two short practices that bring
                you back to your body.
              </p>
            </div>
          </Reveal>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Reveal>
              <Grounding />
            </Reveal>
            <Reveal delay={120}>
              <div className="card" style={{ display: "flex", justifyContent: "center", padding: "40px 30px" }}>
                <Breathe />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tint" id="mood">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Mood tracking</span>
              <h2>Notice the pattern, not just the day</h2>
              <p>
                Moods make more sense in context. Log one tap a day and watch
                the shape of your last two weeks emerge — triggers, dips, and
                small wins included.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <MoodTracker />
          </Reveal>
        </div>
      </section>

      <section className="section" id="reframe">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Thought reframing</span>
              <h2>Catch the thought, then loosen it</h2>
              <p>
                A three-step exercise drawn from cognitive behavioral therapy:
                name the thought, spot the thinking trap, and write a version
                that's kinder — and truer.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Reframe />
          </Reveal>
        </div>
      </section>

      <section className="section section--tint" id="journal">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Journaling</span>
              <h2>A prompt to write with</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <PromptGenerator />
          </Reveal>
        </div>
      </section>

      <section className="section" id="sleep">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Sleep check-in</span>
              <h2>How are your nights treating you?</h2>
              <p>
                Sleep and mood are deeply linked. Five quick questions about
                the last two weeks, with practical habits matched to your
                answers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SleepCheck />
          </Reveal>
        </div>
      </section>

      <section className="section section--tint" id="safety">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Crisis planning</span>
              <h2>A plan you write on a good day, for a hard one</h2>
              <p>
                Private by design: your plan lives only on this page until you
                download it, and it's never stored or shared.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SafetyPlan />
          </Reveal>
        </div>
      </section>

      <section className="section" id="reading">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Recommended reading</span>
              <h2>Books our practice actually recommends</h2>
              <p>
                A shelf's worth of well-evidenced, genuinely readable books —
                organized by what you might be navigating. Most are available
                at your local library.
              </p>
            </div>
          </Reveal>
          <div className="grid-3">
            {BOOKS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 90}>
                <div className="card">
                  <span className="tag" style={{ marginBottom: 14, display: "inline-block" }}>
                    {b.topic}
                  </span>
                  <h3 style={{ fontSize: "1.1rem" }}>{b.title}</h3>
                  <p style={{ fontSize: "0.86rem", fontWeight: 600, color: "var(--green-600)", margin: "4px 0 10px" }}>
                    {b.author}
                  </p>
                  <p>{b.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="form-note" style={{ marginTop: 24, maxWidth: 640 }}>
              Books are a wonderful supplement to care, not a substitute for
              it. If something you read stirs more than it settles, bring it
              to a session — that's often where the real work starts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">If you need help now</span>
              <h2>Crisis support, 24/7</h2>
              <p>
                These services are free, confidential, and staffed around the
                clock. Reaching out is always the right call.
              </p>
            </div>
          </Reveal>
          <div className="grid-2">
            {CRISIS_LINES.map((line, i) => (
              <Reveal key={line.name} delay={(i % 2) * 90}>
                <a href={line.href} className="card card--link">
                  <h3>{line.name}</h3>
                  <p>{line.detail}</p>
                </a>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <CrisisBanner />
          </div>
        </div>
      </section>
    </>
  );
}

import { BOOKING_URL } from "../data";
import Reveal from "../components/Reveal";
import CrisisBanner from "../components/CrisisBanner";
import usePageMeta from "../usePageMeta";

const STEPS = [
  {
    icon: "📅",
    title: "Pick a time that works",
    text: "No account needed to look — see real-time availability, including evenings, with next-day appointments often open. Choose a free 15-minute consultation or a full first visit.",
  },
  {
    icon: "👤",
    title: "Confirm with a few details",
    text: "Name, date of birth, email, and phone — about 30 seconds. That confirms your time and sets up your secure patient portal in one step.",
  },
  {
    icon: "💻",
    title: "Meet Dr. Ofori-Danso on video",
    text: "You'll get a secure link by email. Join from a quiet, private spot on your phone or computer — no downloads or office visits.",
  },
];

const CHECKLIST = [
  "Photo ID",
  "Insurance card (or plan to self-pay)",
  "A list of current medications and doses, if any",
  "Anything you want to make sure gets discussed",
];

export default function HowBookingWorks() {
  usePageMeta(
    "How Booking Works",
    "Booking with Emmanus Wellness takes about 30 seconds: pick a time (next-day appointments often available, no account needed to look), confirm a few details, and meet Dr. Ofori-Danso on secure video."
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">How Booking Works</span>
          <h1>Three steps, and the first one takes 30 seconds</h1>
          <p>
            Not sure what happens after you click "Book a Session"? Here's
            the whole process, start to finish — no surprises.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="step">
                  <div className="step__num">0{i + 1}</div>
                  <div className="card__icon" aria-hidden="true">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                See Available Times <span className="btn__arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Reveal>
              <div>
                <span className="eyebrow">Before your first visit</span>
                <h2 style={{ fontSize: "1.7rem", margin: "10px 0 16px" }}>
                  Good to have ready
                </h2>
                <ul className="profile__list">
                  {CHECKLIST.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <span className="eyebrow">What the first visit is like</span>
                <h2 style={{ fontSize: "1.7rem", margin: "10px 0 16px" }}>
                  A conversation, not an interrogation
                </h2>
                <p style={{ color: "var(--ink-soft)" }}>
                  Your first appointment is a 60-minute evaluation. Dr.
                  Ofori-Danso will ask about what brings you in, your history,
                  sleep, stress, and goals — at your pace, with no judgment.
                  You'll leave with a plan you helped shape: medication
                  management, a referral for therapy, both together ("Pills
                  and Skills"), or simply a next check-in.
                </p>
                <p style={{ color: "var(--ink-soft)", marginTop: 12 }}>
                  Cost questions? Most major insurance is accepted, and
                  self-pay is available with sliding-scale spots for those
                  who qualify.
                </p>
              </div>
            </Reveal>
          </div>
          <div style={{ marginTop: 36 }}>
            <CrisisBanner />
          </div>
        </div>
      </section>
    </>
  );
}

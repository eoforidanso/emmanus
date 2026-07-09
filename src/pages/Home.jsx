import { Link } from "react-router-dom";
import {
  BOOKING_URL,
  SERVICES,
  STEPS,
  TESTIMONIALS,
  CONDITIONS,
  INSURERS,
  PROVIDERS,
} from "../data";
import CrisisBanner from "../components/CrisisBanner";
import Reveal from "../components/Reveal";
import Breathe from "../components/Breathe";
import usePageMeta from "../usePageMeta";
import {
  IconShield,
  IconCalendar,
  IconCapsule,
  IconUser,
  IconFlask,
  IconEvaluation,
  IconTreatment,
  IconFollowUp,
  IconInsurance,
  IconTelehealth,
} from "../components/icons";

const STEP_ICONS = [IconEvaluation, IconTreatment, IconFollowUp];

function HeroArt() {
  return (
    <svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstract composition of overlapping calm geometric forms suggesting balance and connection">
      <defs>
        <radialGradient id="haGold" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#c9a875" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c9a875" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="haSlate" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#3e4a66" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3e4a66" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="haIvory" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7f4ef" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#f7f4ef" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* off-center concentric rings — steadiness, deliberately asymmetric */}
      <circle cx="256" cy="140" r="158" fill="none" stroke="#f7f4ef" strokeOpacity="0.11" />
      <circle cx="256" cy="140" r="118" fill="none" stroke="#f7f4ef" strokeOpacity="0.085" />
      <circle cx="256" cy="140" r="80" fill="none" stroke="#f7f4ef" strokeOpacity="0.06" />

      {/* soft chromatic fields */}
      <circle cx="288" cy="104" r="118" fill="url(#haGold)" />
      <circle cx="140" cy="228" r="112" fill="url(#haSlate)" />

      {/* two overlapping discs — patient and clinician */}
      <circle cx="176" cy="150" r="66" fill="url(#haIvory)" />
      <circle cx="240" cy="188" r="72" fill="url(#haIvory)" />

      {/* thin axis lines — clinical measurement */}
      <path d="M30 96 H 200" stroke="#f7f4ef" strokeOpacity="0.16" strokeWidth="1" />
      <path d="M56 96 V 46" stroke="#f7f4ef" strokeOpacity="0.16" strokeWidth="1" />
      <circle cx="56" cy="96" r="2.5" fill="#c9a875" />

      {/* gold arc — the course of care */}
      <path d="M78 224 A132 132 0 0 1 224 78" fill="none" stroke="#c9a875" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.85" />
      <circle cx="224" cy="78" r="4" fill="#c9a875" />

      {/* clinical waveform */}
      <path
        d="M30 272 H 78 L 92 240 L 106 296 L 120 254 L 134 272 H 372"
        fill="none"
        stroke="#8ea0c9"
        strokeOpacity="0.65"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="372" cy="272" r="3.5" fill="#8ea0c9" />

      {/* quiet dot grid — data, measurement */}
      <g fill="#f7f4ef" fillOpacity="0.28">
        <circle cx="330" cy="66" r="1.6" /><circle cx="346" cy="66" r="1.6" /><circle cx="362" cy="66" r="1.6" />
        <circle cx="330" cy="80" r="1.6" /><circle cx="346" cy="80" r="1.6" /><circle cx="362" cy="80" r="1.6" />
      </g>
    </svg>
  );
}

export default function Home() {
  usePageMeta();
  const doctor = PROVIDERS[0];

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <h1>
              Evidence-based psychiatric care,{" "}
              <em>designed around your life.</em>
            </h1>
            <p>
              Thoughtful evaluation, clear treatment planning, and secure
              video sessions with Dr. Emmanuel Ofori-Danso — delivered with
              precision and compassion.
            </p>
            <div className="hero__actions">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Book a Session <span className="btn__arrow" aria-hidden="true">→</span>
              </a>
              <Link to="/resources" className="btn btn--ghost">
                Explore Resources
              </Link>
            </div>
            <div className="hero__micro">
              <span>Most insurance accepted</span>
              <span aria-hidden="true">·</span>
              <span>Next-day appointments often available</span>
            </div>
            <div className="hero__rule" aria-hidden="true" />
          </div>
          <div className="hero__art">
            <HeroArt />
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container grid-3">
          <Reveal>
            <div className="card card--mini">
              <div className="card__icon"><IconTelehealth /></div>
              <div>
                <h3>HIPAA-secure video</h3>
                <p>Every session runs on an encrypted, HIPAA-compliant platform — as private as a closed office door.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="card card--mini">
              <div className="card__icon"><IconShield /></div>
              <div>
                <h3>Board-certified NP</h3>
                <p>Care from Dr. Ofori-Danso — licensed, board-certified, and a clinical instructor in psychiatry.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="card card--mini">
              <div className="card__icon"><IconCalendar /></div>
              <div>
                <h3>Seen within days, often next-day</h3>
                <p>Next-day appointments are often available — most new patients are seen within 1–3 days, not weeks or months.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="stats">
        <div className="container stats__grid">
          <div>
            <div className="stats__num">12k+</div>
            <div className="stats__label">Sessions delivered</div>
          </div>
          <div>
            <div className="stats__num">10+</div>
            <div className="stats__label">Years of clinical experience</div>
          </div>
          <div>
            <div className="stats__num">Next-day</div>
            <div className="stats__label">Appointments often available</div>
          </div>
          <div>
            <div className="stats__num">4.9★</div>
            <div className="stats__label">Average client rating</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="divider" aria-hidden="true">◆</div>
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Conditions we treat</span>
              <h2>Whatever you're carrying, you don't have to carry it alone</h2>
              <p>
                Evidence-based assessment and treatment across the concerns
                people most often bring to telehealth.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="conditions">
              {CONDITIONS.map((c) => (
                <span className="condition" key={c.label}>
                  <span aria-hidden="true">{c.icon}</span>
                  {c.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Why Emmanus</span>
              <h2>A different kind of practice</h2>
            </div>
          </Reveal>
          <div className="grid-3">
            <Reveal>
              <div className="card card--pillar">
                <div className="card__icon"><IconCapsule /></div>
                <h3>Pills and Skills</h3>
                <p>
                  Medication can steady the ground; therapy teaches you to
                  walk it. We deliberately pair both, because each works
                  better with the other.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="card card--pillar">
                <div className="card__icon"><IconUser /></div>
                <h3>One clinician who knows you</h3>
                <p>
                  No rotating faces, no re-telling your story. Every visit is
                  with Dr. Ofori-Danso — continuity that compounds into
                  better care.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="card card--pillar">
                <div className="card__icon"><IconFlask /></div>
                <h3>Evidence over guesswork</h3>
                <p>
                  Measurement-informed treatment, conservative prescribing,
                  and GeneSight® testing where necessary — decisions guided
                  by data, explained in plain language.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="spotlight">
              <div
                className="spotlight__portrait"
                style={{ background: `linear-gradient(150deg, ${doctor.color}, var(--green-900))` }}
              >
                {doctor.photo ? (
                  <img src={doctor.photo} alt={`Portrait of ${doctor.name}`} />
                ) : (
                  <span aria-hidden="true">{doctor.initials}</span>
                )}
              </div>
              <div>
                <span className="eyebrow">Your clinician</span>
                <h2>{doctor.name}</h2>
                <div className="provider__role">{doctor.role}</div>
                <p style={{ color: "var(--ink-soft)", marginTop: 12 }}>
                  {doctor.bio}
                </p>
                <ul className="spotlight__creds">
                  <li>Board-certified psychiatric-mental health NP</li>
                  <li>Doctor of Nursing Practice (DNP), Rush University</li>
                  <li>Teaches weekly at Rush as a clinical instructor</li>
                  <li>
                    Practices "Pills and Skills" — therapy recommended
                    alongside medication for lasting results
                  </li>
                  <li>Same trusted clinician at every visit — no re-telling your story</li>
                </ul>
                <Link to="/team" className="btn btn--ghost">
                  Meet your provider <span className="btn__arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">What we offer</span>
              <h2>Care for every season of life</h2>
              <p>
                From weekly therapy to medication management, every service is
                delivered over secure video.
              </p>
            </div>
          </Reveal>
          <div className="grid-3">
            {SERVICES.slice(0, 3).map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="card">
                  <div className="card__icon" aria-hidden="true">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div className="card__meta">{s.detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link to="/services" className="btn btn--ghost">
              See all six services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">How it works</span>
              <h2>Getting started is simple</h2>
            </div>
          </Reveal>
          <div className="steps">
            {STEPS.map((step, i) => {
              const StepIcon = STEP_ICONS[i];
              return (
                <Reveal key={step.title} delay={i * 90}>
                  <div className="step">
                    <div className="step__top">
                      <div className="step__num">0{i + 1}</div>
                      <div className="card__icon"><StepIcon /></div>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={120}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link to="/how-booking-works" className="btn btn--ghost">
                See exactly how booking works <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="insurers" style={{ marginTop: 40 }}>
              <span
                style={{
                  border: "none",
                  background: "none",
                  paddingLeft: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ width: 18, height: 18, color: "var(--slate)" }}>
                  <IconInsurance />
                </span>
                Insurance &amp; payment:
              </span>
              {INSURERS.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <Reveal>
              <div className="section-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">Take a breath</span>
                <h2>Feeling overwhelmed right now?</h2>
                <p>
                  Box breathing is a simple technique used to settle the
                  nervous system: breathe in for 4, hold for 4, out for 4,
                  hold for 4. Try a round while you're here.
                </p>
                <Link to="/resources" className="btn btn--ghost" style={{ marginTop: 8 }}>
                  More free tools → Resources
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Breathe />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Client stories</span>
              <h2>Trusted by people like you</h2>
            </div>
          </Reveal>
          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 90}>
                <blockquote className="quote">
                  <div className="quote__stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <p>“{t.quote}”</p>
                  <footer>— {t.author}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta">
              <h2>Ready to take the first step?</h2>
              <p>
                Your first session could be just days away. Sign in to the
                patient portal to schedule with Dr. Ofori-Danso.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--light"
              >
                Book a Session
              </a>
            </div>
          </Reveal>
          <div style={{ marginTop: 28 }}>
            <CrisisBanner />
          </div>
        </div>
      </section>
    </>
  );
}

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
import Portrait from "../components/Portrait";
import TestimonialCarousel from "../components/TestimonialCarousel";
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
    <svg
      viewBox="0 0 680 520"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="An image of hope: dawn breaking over a dark horizon, with a small sprout growing toward the light"
    >
      <defs>
        <linearGradient id="haSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2f2a" />
          <stop offset="38%" stopColor="#1c4a3d" />
          <stop offset="60%" stopColor="#3f6b4a" />
          <stop offset="80%" stopColor="#c9a875" />
          <stop offset="100%" stopColor="#e8b768" />
        </linearGradient>
        <radialGradient id="haSun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f7e7c1" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#e8c47e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e8c47e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="haGround" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b2019" />
          <stop offset="100%" stopColor="#050f0c" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="680" height="520" fill="url(#haSky)" />
      <circle cx="340" cy="430" r="170" fill="url(#haSun)" />
      <circle cx="340" cy="430" r="54" fill="#f7f0dd" />
      <circle cx="340" cy="430" r="54" fill="none" stroke="#fbf3df" strokeWidth="1" opacity="0.7" />

      <g stroke="#f2d9a3" strokeWidth="1.5" strokeLinecap="round" opacity="0.55">
        <line x1="340" y1="330" x2="340" y2="308" />
        <line x1="410" y1="360" x2="428" y2="344" />
        <line x1="270" y1="360" x2="252" y2="344" />
        <line x1="440" y1="430" x2="464" y2="430" />
        <line x1="240" y1="430" x2="216" y2="430" />
      </g>

      <circle cx="120" cy="90" r="1.6" fill="#f7f4ef" opacity="0.6" />
      <circle cx="560" cy="70" r="1.4" fill="#f7f4ef" opacity="0.5" />
      <circle cx="600" cy="140" r="1.8" fill="#f7f4ef" opacity="0.55" />
      <circle cx="90" cy="160" r="1.3" fill="#f7f4ef" opacity="0.45" />
      <circle cx="480" cy="50" r="1.5" fill="#f7f4ef" opacity="0.5" />

      <path
        d="M0 470 C 140 452 260 472 340 466 C 430 460 560 446 680 468 L 680 496 L 0 496 Z"
        fill="#173328"
        opacity="0.85"
      />
      <rect x="0" y="486" width="680" height="34" fill="url(#haGround)" />

      <g>
        <path d="M340 486 C 340 456 340 428 340 404" fill="none" stroke="#c9a875" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M340 440 C 322 440 306 426 300 404 C 322 404 338 416 340 440 Z" fill="#4a7c59" />
        <path d="M340 428 C 358 428 374 414 380 392 C 358 392 342 404 340 428 Z" fill="#5d8a6a" />
        <path d="M340 406 C 328 406 316 396 312 380 C 326 380 337 388 340 406 Z" fill="#6fa27e" />
      </g>
      <ellipse cx="340" cy="490" rx="46" ry="7" fill="#0f2f2a" opacity="0.5" />
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
              Precision-driven psychiatric care,{" "}
              <em>delivered with compassion.</em>
            </h1>
            <p>
              Evidence-based psychiatric evaluation and medication
              management for adults and adolescents, grounded in clarity,
              consistency, and clinical excellence.
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
              <Link to="/team" className="btn btn--ghost">
                Meet Your Provider
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

      <div className="accent-bar" aria-hidden="true" />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Availability &amp; insurance</span>
              <h2>Care that fits your schedule</h2>
            </div>
          </Reveal>
          <div className="grid-flow">
            <Reveal>
              <div className="card card--mini">
                <div className="card__icon"><IconCalendar /></div>
                <div>
                  <h3>Next-day appointments often available</h3>
                  <p>Most new patients are seen within 1–3 days, not weeks or months.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="card card--mini">
                <div className="card__icon"><IconTelehealth /></div>
                <div>
                  <h3>Secure video sessions</h3>
                  <p>Every session runs on an encrypted, HIPAA-compliant platform — as private as a closed office door.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="card card--mini">
                <div className="card__icon"><IconShield /></div>
                <div>
                  <h3>Flexible scheduling</h3>
                  <p>Evening and weekend times available, built for busy professionals.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={270}>
              <div className="card card--mini">
                <div className="card__icon"><IconCapsule /></div>
                <div>
                  <h3>Same-day medication refills</h3>
                  <p>Message your provider about a routine refill and get same-day turnaround.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="card card--mini">
                <div className="card__icon"><IconUser /></div>
                <div>
                  <h3>Speak to a live rep</h3>
                  <p>Questions about scheduling or billing? A real person is a phone call away — no bots, no long hold times.</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="insurers" style={{ marginTop: 32 }}>
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
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Check Availability <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
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
            <div className="specialty-grid">
              {CONDITIONS.map((c) => (
                <div className="specialty-card" key={c.label}>
                  <div className="specialty-card__icon" aria-hidden="true">
                    {c.icon}
                  </div>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="callout-line">
              <span className="callout-line__icon" aria-hidden="true">🎯</span>
              <p>
                <strong>A note for men:</strong> you're statistically far less
                likely to seek mental health care — often because of stigma,
                or simply not knowing where to start. Dr. Ofori-Danso works
                with men on stress, anger, anxiety, relationship strain, and
                burnout, directly and without judgment. You don't need the
                right words yet.
              </p>
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
                  walk it. Dr. Ofori-Danso manages your medication and
                  connects you with a therapist, because each works better
                  with the other.
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
                  <Portrait src={doctor.photo} alt={`Portrait of ${doctor.name}`} />
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

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="philosophy">
              <span className="eyebrow">Treatment philosophy</span>
              <p className="philosophy__quote">
                "Effective psychiatric care requires clarity, collaboration,
                and compassion. My goal is to help you understand your
                mind, your options, and your path forward — without ever
                feeling rushed or unheard."
              </p>
              <Link to="/team" className="btn btn--ghost">
                Learn About the Emmanus Approach
              </Link>
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
          <div className="grid-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="card">
                  <div className="card__icon" aria-hidden="true">
                    {typeof s.icon === "string" ? s.icon : <s.icon />}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div className="card__meta">{s.detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link to="/services" className="btn btn--ghost">
              Learn more about our services
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
              <span className="eyebrow">Patient experience</span>
              <h2>Trusted by people like you</h2>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <TestimonialCarousel items={TESTIMONIALS} />
          </Reveal>
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

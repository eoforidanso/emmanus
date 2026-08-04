import { Link } from "react-router-dom";
import {
  BOOKING_URL,
  PORTAL_URL,
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
      aria-label="Two abstract figures, each within their own circle, the circles overlapping to form a shared space between them"
    >
      <defs>
        <radialGradient id="haGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c9a875" stopOpacity="0.30" />
          <stop offset="60%" stopColor="#c9a875" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#c9a875" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* No background plate — the hero's own gradient shows through, so the
          art sits in the page rather than as a rectangle on top of it. */}
      <circle cx="340" cy="258" r="250" fill="url(#haGlow)" />

      {/* Two fields, drawn so the intersection reads about twice as bright.
          The overlap is the whole idea and has to be legible. */}
      <circle cx="252" cy="258" r="168" fill="#c9a875" opacity="0.13" stroke="#c9a875" strokeWidth="1.4" strokeOpacity="0.5" />
      <circle cx="428" cy="258" r="168" fill="#7fa398" opacity="0.13" stroke="#7fa398" strokeWidth="1.4" strokeOpacity="0.52" />

      {/* Gold figure is the constant — the same clinician at every visit. */}
      <circle cx="212" cy="196" r="52" fill="#c9a875" />
      <path d="M126 404 L126 300 Q126 274 152 274 L272 274 Q298 274 298 300 L298 404 Z" fill="#c9a875" />

      <circle cx="468" cy="196" r="52" fill="#7fa398" />
      <path d="M382 404 L382 300 Q382 274 408 274 L528 274 Q554 274 554 300 L554 404 Z" fill="#7fa398" />

      <rect x="96" y="404" width="488" height="2" rx="1" fill="#f7f4ef" opacity="0.22" />
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
                  <a
                    href={PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card__link"
                  >
                    Request a refill <span className="btn__arrow" aria-hidden="true">→</span>
                  </a>
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
            <div className="stats__num">DNP</div>
            <div className="stats__label">Doctor of Nursing Practice, Rush University</div>
          </div>
          <div>
            <div className="stats__num">PMHNP-BC</div>
            <div className="stats__label">Board-certified psychiatric provider</div>
          </div>
          <div>
            <div className="stats__num">Next-day</div>
            <div className="stats__label">Appointments often available</div>
          </div>
          <div>
            <div className="stats__num">100%</div>
            <div className="stats__label">HIPAA-compliant telehealth across Illinois</div>
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

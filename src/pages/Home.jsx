import { Link } from "react-router-dom";
import {
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

function HeroArt() {
  return (
    <svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a calm video therapy session">
      {/* video call window */}
      <rect x="30" y="30" width="360" height="250" rx="18" fill="#ffffff" stroke="#e4ede6" strokeWidth="2" />
      <rect x="30" y="30" width="360" height="44" rx="18" fill="#f0f5f1" />
      <circle cx="56" cy="52" r="6" fill="#4a7c59" />
      <circle cx="76" cy="52" r="6" fill="#c9a227" />
      <circle cx="96" cy="52" r="6" fill="#e4ede6" />
      {/* person */}
      <circle cx="150" cy="150" r="34" fill="#4a7c59" />
      <path d="M96 250c0-38 26-58 54-58s54 20 54 58" fill="#4a7c59" />
      {/* second person (small window) */}
      <rect x="268" y="180" width="100" height="80" rx="12" fill="#f0f5f1" stroke="#e4ede6" strokeWidth="2" />
      <circle cx="318" cy="208" r="14" fill="#2c4a38" />
      <path d="M294 260c0-16 11-25 24-25s24 9 24 25" fill="#2c4a38" />
      {/* speech bubble */}
      <rect x="230" y="100" width="120" height="46" rx="14" fill="#3e6b4f" />
      <circle cx="258" cy="123" r="4" fill="#faf7f2" />
      <circle cx="288" cy="123" r="4" fill="#faf7f2" />
      <circle cx="318" cy="123" r="4" fill="#faf7f2" />
      <path d="M250 146l-10 16 24-10z" fill="#3e6b4f" />
      {/* leaves */}
      <path d="M50 320c30-40 80-40 110-20-40 10-70 25-110 20z" fill="#4a7c59" opacity="0.5" />
      <path d="M370 320c-30-40-80-40-110-20 40 10 70 25 110 20z" fill="#2c4a38" opacity="0.4" />
    </svg>
  );
}

export default function Home() {
  const doctor = PROVIDERS[0];

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="eyebrow">Emmanus Wellness · Telehealth</span>
            <h1>
              Care that meets you <em>where you are.</em>
            </h1>
            <p>
              Gentle, private mental health care with Dr. Emmanuel
              Ofori-Danso — secure video sessions, grounded in evidence-based
              practice.
            </p>
            <div className="hero__actions">
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Book a Session
              </a>
              <Link to="/resources" className="btn btn--ghost">
                Explore Resources
              </Link>
            </div>
            <div className="hero__badges">
              <span className="hero__badge">🔒 HIPAA-compliant video</span>
              <span className="hero__badge">🩺 Board-certified NP</span>
              <span className="hero__badge">📅 Sessions within days</span>
            </div>
          </div>
          <div className="hero__art">
            <HeroArt />
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
            <div className="stats__num">3–5 days</div>
            <div className="stats__label">Average time to first session</div>
          </div>
          <div>
            <div className="stats__num">4.9★</div>
            <div className="stats__label">Average client rating</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
              <div className="card">
                <div className="card__icon" aria-hidden="true">🌱</div>
                <h3>Pills and Skills</h3>
                <p>
                  Medication can steady the ground; therapy teaches you to
                  walk it. We deliberately pair both, because each works
                  better with the other.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="card">
                <div className="card__icon" aria-hidden="true">🤝</div>
                <h3>One clinician who knows you</h3>
                <p>
                  No rotating faces, no re-telling your story. Every visit is
                  with Dr. Ofori-Danso — continuity that compounds into
                  better care.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="card">
                <div className="card__icon" aria-hidden="true">🔬</div>
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
                  <li>Clinical instructor training the next generation of providers</li>
                  <li>
                    Practices "Pills and Skills" — therapy recommended
                    alongside medication for lasting results
                  </li>
                  <li>Same trusted clinician at every visit — no re-telling your story</li>
                </ul>
                <Link to="/team" className="btn btn--ghost">
                  Meet Dr. Ofori-Danso
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
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div className="step">
                  <div className="step__num">0{i + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="insurers" style={{ marginTop: 40 }}>
              <span style={{ border: "none", background: "none", paddingLeft: 0 }}>
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
                href={PORTAL_URL}
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

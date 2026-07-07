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
    <svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a warm video therapy session between a patient and clinician">
      {/* soft organic backdrop */}
      <path d="M64 44 C142 -8 318 -2 378 76 C428 144 404 258 322 306 C238 354 108 342 54 276 C4 214 -8 92 64 44z" fill="#f3ede3" />
      <circle cx="354" cy="52" r="24" fill="#c9a227" opacity="0.3" />
      <circle cx="376" cy="82" r="10" fill="#c9a227" opacity="0.18" />

      {/* video call window */}
      <rect x="50" y="50" width="320" height="230" rx="22" fill="#ffffff" stroke="#e4ede6" strokeWidth="2" />
      <path d="M50 72 a22 22 0 0 1 22-22 h276 a22 22 0 0 1 22 22 v18 h-320z" fill="#f0f5f1" />
      <circle cx="76" cy="70" r="5" fill="#4a7c59" />
      <circle cx="94" cy="70" r="5" fill="#c9a227" />
      <circle cx="112" cy="70" r="5" fill="#e4ede6" />

      {/* patient — warm skin, sage sweater */}
      <rect x="150" y="180" width="24" height="24" rx="10" fill="#9a6a44" />
      <path d="M107 262 c0 -35 25 -54 55 -54 s55 19 55 54" fill="#4a7c59" />
      <path d="M148 210 c4 8 9 12 14 12 s10 -4 14 -12" fill="#3e6b4f" />
      <circle cx="162" cy="158" r="31" fill="#9a6a44" />
      <path d="M131 158 a31 31 0 0 1 62 0 Q162 143 131 158 z" fill="#33241a" />
      <circle cx="151" cy="160" r="3" fill="#33241a" />
      <circle cx="173" cy="160" r="3" fill="#33241a" />
      <path d="M153 172 c3 4 6 6 9 6 s6 -2 9 -6" fill="none" stroke="#33241a" strokeWidth="2.5" strokeLinecap="round" />

      {/* clinician — picture-in-picture, warm gold top */}
      <rect x="272" y="182" width="86" height="76" rx="14" fill="#faf7f2" stroke="#e4ede6" strokeWidth="2" />
      <circle cx="315" cy="209" r="13" fill="#5c3a28" />
      <path d="M292 258 c0 -15 10 -24 23 -24 s23 9 23 24" fill="#c9a227" opacity="0.85" />

      {/* speech bubble with heart and leaf */}
      <rect x="228" y="104" width="110" height="44" rx="20" fill="#4a7c59" />
      <path d="M252 148 l-9 15 22 -8z" fill="#4a7c59" />
      <path d="M266 118 c-4 -7 -14 -5 -14 3 0 7 14 14 14 14 s14 -7 14 -14 c0 -8 -10 -10 -14 -3z" fill="#faf7f2" />
      <path d="M296 130 c7 -10 18 -12 26 -9 -4 9 -14 13 -26 9z" fill="#cfe3d6" />

      {/* plant, warm pot */}
      <path d="M84 250 c-2 -22 6 -38 20 -48 -1 18 -6 34 -20 48z" fill="#3e6b4f" />
      <path d="M96 252 c8 -16 22 -24 36 -24 -6 14 -19 23 -36 24z" fill="#5d8a6a" />
      <path d="M78 252 h48 l-6 30 a8 8 0 0 1 -8 7 h-20 a8 8 0 0 1 -8 -7z" fill="#c9a227" opacity="0.8" />

      {/* grounding shadow */}
      <ellipse cx="210" cy="308" rx="130" ry="10" fill="#2c4a38" opacity="0.08" />
    </svg>
  );
}

export default function Home() {
  const doctor = PROVIDERS[0];

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">Emmanus Wellness · Telehealth</span>
            <h1>
              Care that meets you <em>where you are.</em>
            </h1>
            <p>
              Gentle, private mental health care with Dr. Emmanuel
              Ofori-Danso — secure video sessions, grounded in evidence-based
              practice.
            </p>
            <p className="hero__philosophy">
              Rooted in evidence, delivered with compassion.
            </p>
            <div className="hero__actions">
              <a
                href={PORTAL_URL}
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
              <span>⏱️ Booking takes 30 seconds</span>
              <span>💳 Most insurance accepted</span>
            </div>
          </div>
          <div className="hero__art">
            <HeroArt />
            <div className="hero__chip hero__chip--tl">
              <span aria-hidden="true">🟢</span> Secure session in progress
            </div>
            <div className="hero__chip hero__chip--br">
              <span aria-hidden="true">⭐</span> 4.9 from 200+ clients
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container grid-3">
          <Reveal>
            <div className="card card--mini">
              <div className="card__icon" aria-hidden="true">🔒</div>
              <div>
                <h3>HIPAA-secure video</h3>
                <p>Every session runs on an encrypted, HIPAA-compliant platform — as private as a closed office door.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="card card--mini">
              <div className="card__icon" aria-hidden="true">🩺</div>
              <div>
                <h3>Board-certified NP</h3>
                <p>Care from Dr. Ofori-Danso — licensed, board-certified, and a clinical instructor in psychiatry.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="card card--mini">
              <div className="card__icon" aria-hidden="true">📅</div>
              <div>
                <h3>Seen within days</h3>
                <p>Most new patients have their first session within 3–5 days — not weeks or months.</p>
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
          <div className="divider" aria-hidden="true">🌿</div>
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
                <span className="card__motif" aria-hidden="true">🌿</span>
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
              <div className="card card--pillar">
                <span className="card__motif" aria-hidden="true">💛</span>
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
              <div className="card card--pillar">
                <span className="card__motif" aria-hidden="true">☀️</span>
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

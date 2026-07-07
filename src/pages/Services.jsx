import { PORTAL_URL, SERVICES, FAQS } from "../data";
import CrisisBanner from "../components/CrisisBanner";
import Reveal from "../components/Reveal";
import CareFinder from "../components/CareFinder";

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>Telehealth care, tailored to you</h1>
          <p>
            Every service is delivered over secure, HIPAA-compliant video by a
            clinician licensed in your state.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <div className="card">
                  <div className="card__icon" aria-hidden="true">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div className="card__meta">{s.detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Not sure where to start?</span>
              <h2>Find the right care in 30 seconds</h2>
              <p>
                Answer two quick questions and we'll point you to the service
                that fits best. Nothing is stored or shared.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <CareFinder />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Good to know</span>
              <h2>Frequently asked questions</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ maxWidth: 760 }}>
              {FAQS.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <div>{f.a}</div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta">
              <h2>Not sure which service fits?</h2>
              <p>
                Book a free 15-minute consultation and we'll help you find the
                right starting point.
              </p>
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--light"
              >
                Book a Free Consultation
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

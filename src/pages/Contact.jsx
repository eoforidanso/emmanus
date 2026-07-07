import { useState } from "react";
import CrisisBanner from "../components/CrisisBanner";
import StateChecker from "../components/StateChecker";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>We're here to help</h1>
          <p>
            Questions about services, insurance, or getting started? Reach out
            — a real person from our care team will respond.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="contact-info">
              <div className="contact-info__item">
                <div className="card__icon" aria-hidden="true">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+18005550123">1-800-555-0123</a>
                    <br />
                    Mon–Sat, 8am–8pm ET
                  </p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="card__icon" aria-hidden="true">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:care@emmanuswellness.com">
                      care@emmanuswellness.com
                    </a>
                    <br />
                    We reply within one business day
                  </p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="card__icon" aria-hidden="true">💻</div>
                <div>
                  <h4>Telehealth only</h4>
                  <p>
                    All care is delivered virtually — no office visits needed.
                    Available across multiple states.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 24 }}>
                <StateChecker />
              </div>
              <CrisisBanner />
            </div>

            <div className="form-card">
              {sent ? (
                <div className="success-box">
                  <div className="success-icon" aria-hidden="true">💌</div>
                  <h2 style={{ marginBottom: 12 }}>Message sent</h2>
                  <p style={{ color: "var(--ink-soft)" }}>
                    Thanks for reaching out — our care team will reply within
                    one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="name">Name *</label>
                      <input id="name" required autoComplete="name" />
                    </div>
                    <div className="field">
                      <label htmlFor="cEmail">Email *</label>
                      <input
                        id="cEmail"
                        type="email"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="field field--full">
                      <label htmlFor="subject">Subject</label>
                      <input id="subject" placeholder="e.g. Insurance question" />
                    </div>
                    <div className="field field--full">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" required />
                    </div>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <button type="submit" className="btn btn--primary">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

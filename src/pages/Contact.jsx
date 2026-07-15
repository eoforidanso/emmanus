import { useState } from "react";
import CrisisBanner from "../components/CrisisBanner";
import usePageMeta from "../usePageMeta";

export default function Contact() {
  usePageMeta(
    "Contact",
    "Questions about services, insurance, or getting started? Reach the Emmanus Wellness care team by phone or email."
  );
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = new FormData(e.target);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          subject: form.get("subject"),
          message: form.get("message"),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setError(
        "Something went wrong sending your message. Please email us directly at care@emmanuswellness.com."
      );
    } finally {
      setSending(false);
    }
  }

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
                    <a href="tel:+18005550123">(800) 555-0123</a>
                    <br />
                    Mon–Sat, 8am–8pm CT
                  </p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="card__icon" aria-hidden="true">📠</div>
                <div>
                  <h4>Fax</h4>
                  <p>(224) 253-5528</p>
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
                    Serving patients across Illinois.
                  </p>
                </div>
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
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="name">Name *</label>
                      <input id="name" name="name" required autoComplete="name" />
                    </div>
                    <div className="field">
                      <label htmlFor="cEmail">Email *</label>
                      <input
                        id="cEmail"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="field field--full">
                      <label htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        placeholder="e.g. Insurance question"
                      />
                    </div>
                    <div className="field field--full">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" name="message" required />
                    </div>
                  </div>
                  {error && (
                    <p style={{ color: "#b3261e", marginTop: 16, fontSize: "0.9rem" }}>
                      {error}
                    </p>
                  )}
                  <div style={{ marginTop: 24 }}>
                    <button
                      type="submit"
                      className="btn btn--primary"
                      disabled={sending}
                    >
                      {sending ? "Sending…" : "Send Message"}
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

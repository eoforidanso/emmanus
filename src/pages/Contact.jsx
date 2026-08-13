import CrisisBanner from "../components/CrisisBanner";
import IllinoisMap from "../components/IllinoisMap";
import usePageMeta from "../usePageMeta";
import { BOOKING_URL, PORTAL_URL } from "../data";
import {
  IconPhone,
  IconFax,
  IconMail,
  IconTelehealth,
} from "../components/icons";

export default function Contact() {
  usePageMeta(
    "Contact",
    "Questions about services, insurance, or getting started? Reach the Emmanus Wellness care team by phone or email."
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>We’re here to help</h1>
          <p>
            Questions about services, insurance, or getting started? Reach out
            — a real person from our care team will respond.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 grid-2--top">
            <div className="contact-info">
              <h2 className="contact-info__title">Contact details</h2>
              <div className="contact-info__item">
                <div className="card__icon"><IconPhone /></div>
                <div>
                  <h3>Phone &amp; text</h3>
                  <p>
                    (773) 340-0205 —{" "}
                    <a href="tel:+17733400205">call</a> or{" "}
                    <a href="sms:+17733400205">text</a>
                    <br />
                    Mon–Sat, 8am–8pm CT
                    <br />
                    <span className="contact-info__caveat">
                      Scheduling questions only — please don’t send medical
                      details by text.
                    </span>
                  </p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="card__icon"><IconFax /></div>
                <div>
                  <h3>Fax</h3>
                  <p>(224) 253-5528</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="card__icon"><IconMail /></div>
                <div>
                  <h3>Email</h3>
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
                <div className="card__icon"><IconTelehealth /></div>
                <div>
                  <h3>Telehealth only</h3>
                  <p>
                    All care is delivered virtually over a secure,
                    HIPAA-compliant video platform — no office visits needed.
                    Serving patients across Illinois.
                  </p>
                </div>
              </div>
              <IllinoisMap />
              <CrisisBanner />
            </div>

            {/* Anything clinical belongs in the portal, which is the only
                channel here covered by a BAA — email and phone are for
                general questions only. */}
            <div className="form-card">
              <h2 className="form-card__title">Where to start</h2>
              <p className="form-card__lede">
                Pick whichever fits — each one goes straight to the right
                place.
              </p>

              <div className="route">
                <h3>Already a patient?</h3>
                <p>
                  Use the patient portal for anything about your care —
                  medication questions, refills, records, or messaging Dr.
                  Ofori-Danso directly. It’s secure and HIPAA-compliant.
                </p>
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Open patient portal →
                </a>
              </div>

              <div className="route">
                <h3>New patient?</h3>
                <p>
                  Book directly — no referral needed, and next-day
                  appointments are often available.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  Book a session →
                </a>
              </div>

              <div className="route">
                <h3>General questions</h3>
                <p>
                  Insurance, scheduling, or how things work — email{" "}
                  <a href="mailto:care@emmanuswellness.com">
                    care@emmanuswellness.com
                  </a>{" "}
                  or <a href="tel:+17733400205">call</a> /{" "}
                  <a href="sms:+17733400205">text</a> (773) 340-0205. We reply
                  within one business day.
                </p>
              </div>

              <p className="form-note">
                Please don’t include symptoms, medications, or other health
                details in email — it isn’t a secure channel. Use the patient
                portal for anything clinical.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

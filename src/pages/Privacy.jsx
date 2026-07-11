import usePageMeta from "../usePageMeta";

export default function Privacy() {
  usePageMeta(
    "Privacy Policy",
    "How Emmanus Wellness handles your information: no tracking on this site, self-care tools run in your browser, and clinical data is protected under HIPAA."
  );
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Privacy Policy</span>
          <h1>Your privacy, plainly stated</h1>
          <p>Last updated July 2026.</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal">
          <p>
            Emmanus Wellness takes your privacy seriously — in care and on
            this website. This page explains what this website does and
            doesn't do with your information.
          </p>

          <h2>What this website collects</h2>
          <p>
            This website does not require an account, does not use tracking
            or advertising cookies, and does not sell data. The self-care
            tools on our Resources page (check-ins, thought reframing, safety
            planning) run entirely in your browser — nothing you enter is
            transmitted to us or anyone else. The mood tracker saves entries
            only to your own device's local storage, which you can clear at
            any time. Your theme preference (light/dark) is also stored
            locally on your device.
          </p>

          <h2>Booking and the patient portal</h2>
          <p>
            Scheduling, messaging, and clinical records are handled through
            our patient portal, operated on the Clarity EHR platform. Health
            information you share there is protected under HIPAA and governed
            by the Notice of Privacy Practices provided when you register.
          </p>

          <h2>When you contact us</h2>
          <p>
            If you email or call us, we use your contact information only to
            respond to you. Please avoid sharing detailed health information
            by email — the patient portal is the secure channel for that.
          </p>

          <h2>Your health information rights</h2>
          <p>
            As a patient you have the right to access your records, request
            corrections, and receive an accounting of disclosures. Clinical
            information is never shared without your written consent, except
            where the law requires (such as imminent risk of harm).
          </p>

          <h2>Questions</h2>
          <p>
            Contact us at care@emmanuswellness.com or (800) 555-0123 with any
            privacy question or concern.
          </p>
        </div>
      </section>
    </>
  );
}

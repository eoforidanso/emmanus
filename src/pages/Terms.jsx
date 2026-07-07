import usePageMeta from "../usePageMeta";

export default function Terms() {
  usePageMeta(
    "Terms of Use",
    "Terms of use for the Emmanus Wellness website: informational content, not medical advice, and not for emergencies."
  );
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Terms of Use</span>
          <h1>Terms of use</h1>
          <p>Last updated July 2026.</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal">
          <h2>This website is not medical care</h2>
          <p>
            The content and self-care tools on this website are for general
            information and wellbeing support only. They are not medical
            advice, diagnosis, or treatment, and they do not create a
            clinician–patient relationship. A clinical relationship begins
            only when you register and are seen through our patient portal.
          </p>

          <h2>Not for emergencies</h2>
          <p>
            This website and the patient portal are not monitored for
            emergencies. If you are in crisis, call or text 988 (Suicide
            &amp; Crisis Lifeline), available 24/7, or call 911.
          </p>

          <h2>Self-care tools</h2>
          <p>
            The check-ins and exercises on our Resources page are educational
            screeners and practices, not diagnostic instruments. Results
            should not be used to start, stop, or change any treatment —
            bring them to a clinician instead.
          </p>

          <h2>Use of content</h2>
          <p>
            You're welcome to share links to this site. Content, branding,
            and design may not be reproduced for commercial purposes without
            permission.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            Emmanus Wellness provides this website "as is" and is not liable
            for decisions made based on its informational content. Clinical
            services are governed by the agreements provided at intake.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: care@emmanuswellness.com.
          </p>
        </div>
      </section>
    </>
  );
}

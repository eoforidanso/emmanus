import { PORTAL_URL, PROVIDERS } from "../data";
import Reveal from "../components/Reveal";

const APPROACH = [
  "\"Pills and Skills\" — medication and therapy prescribed together, because each works better with the other",
  "Warm, judgment-free sessions where you set the pace",
  "Evidence-based care: measurement-informed treatment, CBT-informed psychotherapy, and conservative prescribing",
  "GeneSight® pharmacogenomic testing where necessary — so if past medications haven't worked, your genetics can help inform the next choice",
  "Whole-person focus — sleep, stress, relationships, and lifestyle alongside symptoms",
  "Clear explanations of every diagnosis and medication decision, so you're always in the loop",
];

const EXPECT = [
  "A 60-minute initial evaluation to understand your history and goals",
  "A collaborative treatment plan you help shape",
  "Secure messaging between visits for questions and refills",
  "Regular check-ins to measure what's working and adjust early",
];

export default function Team() {
  const doctor = PROVIDERS[0];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Team</span>
          <h1>Care that genuinely cares</h1>
          <p>
            Emmanus Wellness is led by a licensed clinician chosen for both
            clinical excellence and warmth — the same trusted face at every
            session.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="profile">
            <Reveal>
              <div className="card provider profile__card">
                <div
                  className="provider__avatar"
                  style={{ background: doctor.color, width: 120, height: 120, fontSize: "2.3rem" }}
                >
                  {doctor.photo ? (
                    <img src={doctor.photo} alt={`Portrait of ${doctor.name}`} />
                  ) : (
                    <span aria-hidden="true">{doctor.initials}</span>
                  )}
                </div>
                <h3>{doctor.name}</h3>
                <div className="provider__role">{doctor.role}</div>
                <div className="provider__tags">
                  {doctor.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 24 }}>
                  <a
                    href={PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    Book with Dr. Ofori-Danso
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="profile__body">
                <h2>About</h2>
                <p>{doctor.bio}</p>
                <p style={{ marginTop: 12 }}>
                  As a clinical instructor, Dr. Ofori-Danso also trains the
                  next generation of psychiatric providers — which means the
                  care you receive reflects current best practice, not
                  habit.
                </p>

                <blockquote className="quote" style={{ marginTop: 24 }}>
                  <p>
                    “Pills and Skills. Medication can steady the ground, but
                    therapy teaches you to walk it — my patients get the best
                    outcomes when we do both.”
                  </p>
                  <footer>— Dr. Emmanuel Ofori-Danso</footer>
                </blockquote>

                <h2>Approach to care</h2>
                <ul className="profile__list">
                  {APPROACH.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>What to expect as a client</h2>
                <ul className="profile__list">
                  {EXPECT.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta">
              <h2>Ready to get started?</h2>
              <p>
                Schedule your first visit with Dr. Ofori-Danso through the
                patient portal — most new clients are seen within days.
              </p>
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--light"
              >
                Book with Dr. Ofori-Danso
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

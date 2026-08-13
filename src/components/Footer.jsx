import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BOOKING_URL, PORTAL_URL, VIDEO_URL, INSURERS } from "../data";
import { IconLinkedIn, IconInstagram, IconFacebook } from "./icons";

// TODO: replace with the practice’s real social profiles before launch.
const SOCIALS = [
  { label: "LinkedIn", Icon: IconLinkedIn, href: "https://www.linkedin.com" },
  { label: "Instagram", Icon: IconInstagram, href: "https://www.instagram.com" },
  { label: "Facebook", Icon: IconFacebook, href: "https://www.facebook.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <Logo size={46} />
              <span>Emmanus Wellness</span>
            </div>
            <p className="footer__blurb">
              Compassionate, licensed mental health care delivered securely to
              wherever you are.
            </p>
            <div className="footer__social">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={s.label}
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__nav" aria-label="Care">
            <h2>Care</h2>
            <ul>
              <li><Link to="/services">Psychiatry &amp; Medication</Link></li>
              <li><Link to="/services">Teen &amp; Adolescent Care</Link></li>
              <li><Link to="/how-booking-works">How booking works</Link></li>
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a session
                </a>
              </li>
            </ul>
          </nav>

          <nav className="footer__nav" aria-label="Company">
            <h2>Company</h2>
            <ul>
              <li><Link to="/team">Your clinician</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li>
                <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
                  Patient portal
                </a>
              </li>
              <li>
                <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer">
                  Join session
                </a>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div>
            <h2>Contact &amp; hours</h2>
            <ul className="footer__facts">
              <li>
                (773) 340-0205 — <a href="tel:+17733400205">call</a> or{" "}
                <a href="sms:+17733400205">text</a>
              </li>
              <li><a href="mailto:care@emmanuswellness.com">care@emmanuswellness.com</a></li>
              <li>Mon–Sat, 8am–8pm CT</li>
              <li>
                100% telehealth — serving patients across Illinois from
                wherever you are
              </li>
            </ul>
          </div>

          <div>
            <h2>Insurance</h2>
            <ul className="footer__facts">
              {INSURERS.slice(0, 4).map((name) => (
                <li key={name}>{name}</li>
              ))}
              <li>Self-pay &amp; sliding scale</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Emmanus Wellness. All rights reserved.</span>
          <span className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </span>
          <span>
            In crisis? Call or text{" "}
            <a href="tel:988" className="crisis__tel">
              <strong>988</strong>
            </a>{" "}
            — available 24/7.
          </span>
        </div>
      </div>
    </footer>
  );
}

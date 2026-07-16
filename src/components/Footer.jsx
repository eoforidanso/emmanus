import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BOOKING_URL, PORTAL_URL, VIDEO_URL, INSURERS } from "../data";

// TODO: replace with the practice's real social profiles before launch.
const SOCIALS = [
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com" },
  { label: "Instagram", icon: "◎", href: "https://www.instagram.com" },
  { label: "Facebook", icon: "f", href: "https://www.facebook.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <Logo size={46} />
              Emmanus Wellness
            </div>
            <p style={{ fontSize: "0.9rem", maxWidth: 300 }}>
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
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Care</h4>
            <ul>
              <li><Link to="/services">Psychiatry &amp; Medication</Link></li>
              <li><Link to="/services">Teen &amp; Adolescent Care</Link></li>
              <li><Link to="/how-booking-works">How Booking Works</Link></li>
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Session
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/team">Providers</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li>
                <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
                  Patient Portal
                </a>
              </li>
              <li>
                <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer">
                  Join Session
                </a>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact &amp; Hours</h4>
            <ul>
              <li><a href="tel:+18005550123">(800) 555-0123</a></li>
              <li><a href="mailto:care@emmanuswellness.com">care@emmanuswellness.com</a></li>
              <li>Mon–Sat, 8am–8pm CT</li>
              <li>
                100% telehealth — serving patients across Illinois from
                wherever you are
              </li>
            </ul>
          </div>
          <div>
            <h4>Insurance</h4>
            <ul>
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
            In crisis? Call or text <strong>988</strong> — available 24/7.
          </span>
        </div>
      </div>
    </footer>
  );
}

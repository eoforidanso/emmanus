import { Link } from "react-router-dom";
import Logo from "./Logo";
import { PORTAL_URL } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <Logo size={30} />
              Emmanus Wellness
            </div>
            <p style={{ fontSize: "0.9rem", maxWidth: 300 }}>
              Compassionate, licensed mental health care delivered securely to
              wherever you are.
            </p>
          </div>
          <div>
            <h4>Care</h4>
            <ul>
              <li><Link to="/services">Individual Therapy</Link></li>
              <li><Link to="/services">Psychiatry</Link></li>
              <li><Link to="/services">Couples Counseling</Link></li>
              <li><Link to="/services">Group Support</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
                  Book a Session
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="tel:+18005550123">1-800-555-0123</a></li>
              <li><a href="mailto:care@emmanuswellness.com">care@emmanuswellness.com</a></li>
              <li>Mon–Sat, 8am–8pm ET</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Emmanus Wellness. All rights reserved.</span>
          <span>
            In crisis? Call or text <strong>988</strong> (Suicide & Crisis
            Lifeline) — available 24/7.
          </span>
        </div>
      </div>
    </footer>
  );
}

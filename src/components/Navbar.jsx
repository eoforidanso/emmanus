import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import { PORTAL_URL } from "../data";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Providers" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <Logo />
          Emmanus Wellness
        </Link>
        <ul className={`nav__links${open ? " open" : ""}`}>
          {LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Patient Portal
            </a>
          </li>
          <li>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              onClick={() => setOpen(false)}
            >
              Book a Session
            </a>
          </li>
        </ul>
        <div className="nav__controls">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

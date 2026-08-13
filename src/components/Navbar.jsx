import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import { BOOKING_URL, PORTAL_URL, VIDEO_URL } from "../data";
import { IconMenu, IconClose, IconMoon, IconSun } from "./icons";

// The logo is the home link, so "Home" doesn't need its own slot. Keeping this
// list to four keeps the full nav on screen down to 1024px instead of
// collapsing to a hamburger on every 13" laptop.
const LINKS = [
  { to: "/services", label: "Services" },
  { to: "/team", label: "Your Clinician" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  // While the sheet is open it owns the screen: the page underneath must not
  // scroll, Escape must close it, and focus must come back to the button that
  // opened it rather than to the top of the document.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll("a, button");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="nav">
        <div className="container nav__inner">
          <Link to="/" className="nav__brand" onClick={close}>
            <Logo size={46} />
            Emmanus Wellness
          </Link>

          <nav className="nav__primary" aria-label="Primary">
            <ul
              id="nav-menu"
              ref={panelRef}
              className={`nav__links${open ? " open" : ""}`}
            >
              {LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} onClick={close}>
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="nav__divider" aria-hidden="true" />
              <li>
                <a
                  href={VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav__utility"
                  onClick={close}
                >
                  Join session
                </a>
              </li>
              <li>
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav__utility"
                  onClick={close}
                >
                  Patient portal
                </a>
              </li>
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  onClick={close}
                >
                  Book a Session
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav__controls">
            <button
              className="icon-btn theme-toggle"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <IconMoon /> : <IconSun />}
            </button>
            <button
              ref={toggleRef}
              className="icon-btn nav__toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header> on purpose: the bar's backdrop-filter makes it the
          containing block for fixed descendants, so a scrim nested inside it
          only ever covered the bar itself. */}
      {open && (
        <button
          type="button"
          className="nav__scrim"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => {
            setOpen(false);
            toggleRef.current?.focus();
          }}
        />
      )}
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import { BOOKING_URL } from "../data";
import drPhoto from "../assets/dr-ofori-danso.jpg";
import { IconClose } from "./icons";

// Versioned like the announcement bar: bump when the pitch changes so it
// resurfaces for people who already dismissed the old copy.
const STORAGE_KEY = "ew-booking-widget-dismissed-v1";

/**
 * Floating booking prompt, bottom-left on every page.
 *
 * It appears as a small launcher and opens into the full card on tap. As a
 * permanently expanded panel it covered body copy on every screen and, on
 * load, sat directly over the hero's own "Book a Session" button — the exact
 * action it exists to promote. It now also waits until the reader has
 * scrolled past the hero.
 */
export default function BookingWidget() {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "1"
  );
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);
  const launcherRef = useRef(null);

  useEffect(() => {
    if (dismissed) return;
    const past = () => window.scrollY > window.innerHeight * 0.9;
    if (past()) {
      setMounted(true);
      return;
    }
    const onScroll = () => past() && setMounted(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  // Mount first, animate one frame later, or it would appear already at its
  // final opacity.
  useEffect(() => {
    if (!mounted) return;
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, [mounted]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (dismissed || !mounted) return null;

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  };

  if (!open) {
    return (
      <button
        ref={launcherRef}
        className={`booking-launcher${shown ? " is-visible" : ""}`}
        aria-label="Book an appointment"
        aria-expanded={false}
        onClick={() => setOpen(true)}
      >
        <img src={drPhoto} alt="" loading="lazy" decoding="async" />
        <span className="booking-launcher__pulse" aria-hidden="true" />
      </button>
    );
  }

  return (
    <div
      className="booking-widget is-visible"
      role="complementary"
      aria-label="Book an appointment"
    >
      <span className="booking-widget__tag">Now offering video visits</span>
      <button
        className="booking-widget__close"
        aria-label="Close booking prompt"
        title="Close"
        onClick={() => {
          setOpen(false);
          launcherRef.current?.focus();
        }}
      >
        <IconClose />
      </button>
      <div className="booking-widget__photo">
        <img src={drPhoto} alt="" loading="lazy" decoding="async" />
      </div>
      <p className="booking-widget__text">
        See available times and book an appointment right here.
      </p>
      <p className="booking-widget__sub">It’s quick, secure and private.</p>
      <a
        className="btn btn--primary booking-widget__cta"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={dismiss}
      >
        Book Online
      </a>
      <button className="booking-widget__mute" onClick={dismiss}>
        Don’t show this again
      </button>
    </div>
  );
}

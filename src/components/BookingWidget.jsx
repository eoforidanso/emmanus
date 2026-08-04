import { useEffect, useState } from "react";
import { BOOKING_URL } from "../data";
import drPhoto from "../assets/dr-ofori-danso.jpg";

// Versioned like the announcement bar: bump when the pitch changes so it
// resurfaces for people who already dismissed the old copy.
const STORAGE_KEY = "ew-booking-widget-dismissed-v1";

const REDUCE_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Floating "book online" card, bottom-left on every page — the provider's
 * photo, a quiet note that video visits are available, and a direct link
 * to the Clarity booking page. Dismissing it is remembered on this device.
 */
export default function BookingWidget() {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "1"
  );
  const [entered, setEntered] = useState(REDUCE_MOTION);

  useEffect(() => {
    if (dismissed || REDUCE_MOTION) return;
    const timer = setTimeout(() => setEntered(true), 1200);
    return () => clearTimeout(timer);
  }, [dismissed]);

  if (dismissed) return null;

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  };

  return (
    <div
      className={`booking-widget${entered ? " is-visible" : ""}`}
      role="complementary"
      aria-label="Book an appointment"
    >
      <span className="booking-widget__tag">Now offering video visits</span>
      <button
        className="booking-widget__close"
        aria-label="Close booking prompt"
        title="Close"
        onClick={dismiss}
      >
        ✕
      </button>
      <div className="booking-widget__photo">
        <img src={drPhoto} alt="" loading="lazy" decoding="async" />
      </div>
      <p className="booking-widget__text">
        See available times and book an appointment right here.
      </p>
      <p className="booking-widget__sub">It's quick, secure and private.</p>
      <a
        className="btn btn--primary booking-widget__cta"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={dismiss}
      >
        Book Online
      </a>
    </div>
  );
}

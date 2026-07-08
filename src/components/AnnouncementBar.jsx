import { useState } from "react";
import { BOOKING_URL } from "../data";

// Versioned: bump when the message changes so it reappears for past dismissers
const STORAGE_KEY = "ew-announce-dismissed-v2";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "1"
  );

  if (dismissed) return null;

  return (
    <div className="announce" role="region" aria-label="Announcement">
      <span>
        🌿 Next-day appointments often available across Illinois — most
        insurance accepted.{" "}
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Book a session →
        </a>
      </span>
      <button
        className="announce__close"
        aria-label="Dismiss announcement"
        onClick={() => {
          localStorage.setItem(STORAGE_KEY, "1");
          setDismissed(true);
        }}
      >
        ✕
      </button>
    </div>
  );
}

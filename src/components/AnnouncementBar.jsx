import { useState } from "react";
import { PORTAL_URL } from "../data";

const STORAGE_KEY = "ew-announce-dismissed";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "1"
  );

  if (dismissed) return null;

  return (
    <div className="announce" role="region" aria-label="Announcement">
      <span>
        🌿 Now welcoming new patients across Illinois — most insurance
        accepted.{" "}
        <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
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

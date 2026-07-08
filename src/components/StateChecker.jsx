import { useState } from "react";
import { LICENSED_STATES, BOOKING_URL } from "../data";

const ALL_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

export default function StateChecker() {
  const [state, setState] = useState("");
  const available = LICENSED_STATES.includes(state);

  return (
    <div className="field">
      <label htmlFor="stateCheck">Am I eligible? Check your state</label>
      <select
        id="stateCheck"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">Select your state…</option>
        {ALL_STATES.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      {state && (
        <div
          className={`state-result ${available ? "state-result--yes" : "state-result--no"}`}
          role="status"
        >
          {available ? (
            <>
              Yes! We're licensed in {state}.{" "}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Book your first session
              </a>
              .
            </>
          ) : (
            <>
              We're not licensed in {state} yet.{" "}
              <a
                href={`mailto:care@emmanuswellness.com?subject=Waitlist: ${state}`}
                style={{ textDecoration: "underline" }}
              >
                Join the waitlist
              </a>{" "}
              and we'll email you when that changes.
            </>
          )}
        </div>
      )}
    </div>
  );
}

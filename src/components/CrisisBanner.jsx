export default function CrisisBanner() {
  return (
    <div className="crisis" role="note">
      <span aria-hidden="true">💛</span>
      <span>
        <strong>Emmanus Wellness is not an emergency service.</strong> If you
        or someone you know is in crisis, call or text{" "}
        <a href="tel:988" className="crisis__tel">
          <strong>988</strong>
        </a>{" "}
        (Suicide & Crisis Lifeline) or call{" "}
        <a href="tel:911" className="crisis__tel">
          911
        </a>
        . Support is available 24/7.
      </span>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

const REDUCE_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Layered portrait animation: geometric mask reveal + fade-up on entrance,
 * a slow independent scroll parallax drift, and a continuous micro-zoom —
 * each on its own element so the transforms never fight each other.
 */
export default function Portrait({ src, alt, className = "" }) {
  const frameRef = useRef(null);
  const driftRef = useRef(null);
  const [visible, setVisible] = useState(REDUCE_MOTION);

  // One-time geometric mask reveal + fade/rise when scrolled into view
  useEffect(() => {
    if (REDUCE_MOTION) return;
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Continuous, barely-there parallax drift tied to scroll position
  useEffect(() => {
    if (REDUCE_MOTION) return;
    const el = driftRef.current;
    if (!el) return;
    let raf = null;

    const update = () => {
      const rect = el.parentElement.getBoundingClientRect();
      const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      const drift = Math.max(-1, Math.min(1, -mid / (window.innerHeight * 0.8)));
      el.style.transform = `translate3d(0, ${drift * 10}px, 0)`;
      raf = null;
    };

    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className={`portrait-frame${visible ? " is-visible" : ""} ${className}`.trim()}
    >
      <div ref={driftRef} className="portrait-drift">
        <img className="portrait-zoom" src={src} alt={alt} />
      </div>
    </div>
  );
}

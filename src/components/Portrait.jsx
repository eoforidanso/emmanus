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

  // One-time geometric mask reveal + fade/rise when scrolled near view.
  // Triggers early (rootMargin) so the reveal is finished by the time the
  // portrait is actually on screen, and a hard fallback guarantees the
  // photo is never stuck invisible (e.g. a screenshot taken instantly on
  // load, before any scroll/observer callback has run).
  useEffect(() => {
    if (REDUCE_MOTION) {
      setVisible(true);
      return;
    }
    const el = frameRef.current;
    if (!el) return;
    const mountedAt = performance.now();
    let revealTimer = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          // If the portrait was already in view at mount, the observer
          // fires almost instantly — reveal so fast after page load that
          // the slide-in is easy to miss entirely. Give it a beat so the
          // entrance is actually visible instead of just "already there".
          const alreadyInView = performance.now() - mountedAt < 100;
          revealTimer = setTimeout(() => setVisible(true), alreadyInView ? 350 : 0);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    // Safety net only — normal scrolling triggers the observer well before
    // this fires. Guarantees the photo can never get stuck invisible.
    const fallback = setTimeout(() => setVisible(true), 1200);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
      clearTimeout(revealTimer);
    };
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
      el.style.transform = `translate3d(0, ${drift * 16}px, 0)`;
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
        <img
          className="portrait-zoom"
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}

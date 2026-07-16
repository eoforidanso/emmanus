import { useEffect, useRef, useState } from "react";

const REDUCE_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (REDUCE_MOTION || items.length < 2) return;
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setIndex((i) => (i + 1) % items.length);
      }
    }, 6000);
    return () => clearInterval(id);
  }, [items.length]);

  const go = (delta) => {
    setIndex((i) => (i + delta + items.length) % items.length);
  };

  const current = items[index];

  return (
    <div
      className="carousel"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
    >
      <blockquote className="quote carousel__quote" aria-live="polite">
        <div className="quote__stars" aria-label="5 out of 5 stars">
          ★★★★★
        </div>
        <p>"{current.quote}"</p>
        <footer>— {current.author}</footer>
      </blockquote>

      {items.length > 1 && (
        <div className="carousel__controls">
          <button
            type="button"
            className="carousel__arrow"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <div className="carousel__dots">
            {items.map((t, i) => (
              <button
                key={t.author}
                type="button"
                className={`carousel__dot${i === index ? " is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1} of ${items.length}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <button
            type="button"
            className="carousel__arrow"
            onClick={() => go(1)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

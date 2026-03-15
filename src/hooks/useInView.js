import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isVisible].
 * Attach `ref` to any element; `isVisible` flips true once it enters the viewport.
 *
 * @param {IntersectionObserverInit} [options]
 */
export function useInView(options = { threshold: 0.1 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // fire once
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

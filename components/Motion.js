"use client";
import { useEffect, useRef, useState } from "react";

function useInView(onEnter) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); onEnter(el); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useInView((el) => el.classList.add("in"));
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</div>;
}

export function Counter({ to, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useInView(() => {
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1200, 1);
      setN(Math.round(to * p));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  return <span ref={ref}>{n}{suffix}</span>;
}

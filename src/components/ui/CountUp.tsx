"use client";

import { useEffect, useState } from "react";

export function CountUp({
  value,
  durationMs = 1200,
  suffix = "",
  prefix = "",
}: {
  value: number;
  durationMs?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (prefersReduced) {
        setDisplay(value);
        return;
      }
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value, durationMs]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

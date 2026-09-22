import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Animates a number from 0 to `end` once it scrolls into view, then holds. */
export default function CountUpStat({ end, prefix = "", suffix = "", duration = 1200, className }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);

  return (
    <div ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </div>
  );
}

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxLayerProps = {
  speed: number;
  className?: string;
  children: ReactNode;
};

/** Shifts its children vertically by scrollY * speed. Use small speeds (0.05–0.2) for a subtle depth effect. */
export default function ParallaxLayer({ speed, className, children }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) ref.current.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children}
    </div>
  );
}

import { useEffect, useState } from "react";

const STAGES = [
  "/images/pixel-art/growth-stage-1-seed.webp",
  "/images/pixel-art/growth-stage-2-sprout.webp",
  "/images/pixel-art/growth-stage-3-budding.webp",
  "/images/pixel-art/growth-stage-4-bloom.webp",
];

/** A small fixed plant in the corner that grows taller as the visitor scrolls, blooming near the footer. */
export default function ScrollProgressPlant() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
        setProgress(Math.min(Math.max(pct, 0), 1));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const stage = Math.min(Math.floor(progress * STAGES.length), STAGES.length - 1);

  return (
    <div
      className="hidden md:block fixed bottom-4 left-4 z-40 w-10 h-24 pointer-events-none"
      aria-hidden="true"
    >
      {STAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-contain object-bottom transition-opacity duration-300"
          style={{ opacity: i === stage ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

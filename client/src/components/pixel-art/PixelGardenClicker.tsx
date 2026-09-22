import { useEffect, useState } from "react";
import { PixelFlower, PixelFlowerWarm } from "./PixelSprites";

const STORAGE_KEY = "ph-garden-clicker-count";
const AUTOMATE_THRESHOLD = 20;
const MAX_VISIBLE_FLOWERS = 12;
const FLOWER_SPOTS = Array.from({ length: MAX_VISIBLE_FLOWERS }, (_, i) => ({
  left: `${4 + i * 8}%`,
  height: 20 + ((i * 7) % 16),
  warm: i % 2 === 0,
}));

function readStoredCount(): number {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? parseInt(raw, 10) : 0;
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
  } catch {
    return 0;
  }
}

function writeStoredCount(value: number) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(value));
  } catch {
    // per-viewer convenience only; ignore storage failures
  }
}

/** An in-page garden-growing game. Manual clicks grow the garden; past a threshold it keeps growing on its own. */
export default function PixelGardenClicker() {
  const [count, setCount] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const automated = count >= AUTOMATE_THRESHOLD;

  useEffect(() => {
    setCount(readStoredCount());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeStoredCount(count);
  }, [count, hydrated]);

  useEffect(() => {
    if (!automated) return;
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, [automated]);

  if (!hydrated) return null;

  const visibleFlowers = Math.min(count, MAX_VISIBLE_FLOWERS);

  return (
    <div className="w-full max-w-md mx-auto select-none">
      {/* GAME label, unmissable */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="inline-flex items-center px-3 py-1"
          style={{
            background: "var(--accent-warm)",
            color: "var(--accent-warm-foreground)",
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "0.6rem",
            border: "2px solid var(--pixel-ink)",
            boxShadow: "3px 3px 0 0 var(--pixel-ink)",
          }}
        >
          ▶ GAME
        </span>
        <span className="text-sm text-muted-foreground">Playable, not decoration — go ahead and click it.</span>
      </div>

      <div
        className="flex flex-col overflow-hidden"
        style={{ border: "3px solid var(--pixel-ink)", boxShadow: "5px 5px 0 0 var(--pixel-ink)" }}
        role="group"
        aria-label="Pixel garden clicker game"
      >
        {automated && (
          <div className="py-1.5 text-center" style={{ background: "var(--primary)" }}>
            <span
              className="text-[10px] tracking-wide"
              style={{ fontFamily: "'Press Start 2P', monospace", color: "var(--primary-foreground)" }}
            >
              AUTOMATE UNLOCKED
            </span>
          </div>
        )}
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          aria-label="Click to grow the garden"
          className="relative h-[200px] w-full cursor-pointer overflow-hidden"
        >
          <img
            src="/images/pixel-art/game-panel-bg.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 h-14" style={{ background: "linear-gradient(180deg, rgba(246,236,217,0.85) 0%, transparent 100%)" }} />
          <span
            className="absolute top-3 left-3 text-xs"
            style={{ fontFamily: "'Press Start 2P', monospace", color: "#2b2013" }}
          >
            {count} GROWN
          </span>
          {Array.from({ length: visibleFlowers }, (_, i) => {
            const spot = FLOWER_SPOTS[i];
            const Sprite = spot.warm ? PixelFlowerWarm : PixelFlower;
            return (
              <div key={i} className="absolute bottom-[8%] drop-shadow-[1px_1px_0_rgba(0,0,0,0.4)]" style={{ left: spot.left, height: spot.height }}>
                <Sprite className="h-full w-auto" />
              </div>
            );
          })}
          {count === 0 && (
            <span
              className="absolute bottom-[14%] left-1/2 -translate-x-1/2 text-xs whitespace-nowrap px-2 py-1"
              style={{ fontFamily: "'Press Start 2P', monospace", color: "#f6ecd9", background: "rgba(43,32,19,0.6)" }}
            >
              CLICK TO GROW
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const RESET_MS = 2000;
const CLICKS_TO_OPEN = 5;

/** The "PH" nav logo; clicking it 5 times quickly opens a small retro terminal easter egg. */
export default function TerminalEasterEgg() {
  const [open, setOpen] = useState(false);
  // A ref, not state: rapid clicks can fire faster than React re-renders,
  // and reading `clicks` state in the handler would close over a stale value.
  const clicksRef = useRef(0);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleClick = () => {
    clearTimeout(resetTimer.current);
    clicksRef.current += 1;
    if (clicksRef.current >= CLICKS_TO_OPEN) {
      setOpen(true);
      clicksRef.current = 0;
      return;
    }
    resetTimer.current = setTimeout(() => {
      clicksRef.current = 0;
    }, RESET_MS);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label="Peter Helm home"
        className="flex items-center gap-2"
      >
        <img src="/images/pixel-art/nav-mark.webp" alt="" className="h-8 w-8" />
        <span className="text-2xl font-bold text-accent">PH</span>
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Terminal"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md aspect-square"
          >
            <img
              src="/images/pixel-art/terminal-frame.webp"
              alt=""
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
            />
            <div
              className="absolute flex flex-col overflow-hidden"
              style={{ inset: "13%", background: "#141d10", color: "#a8e08a" }}
            >
              <div className="flex items-center justify-between px-3 py-1.5 flex-shrink-0" style={{ background: "#0e140a" }}>
                <span className="text-[10px]" style={{ fontFamily: "'Press Start 2P', monospace", color: "#a8e08a" }}>
                  ph@portfolio:~
                </span>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close terminal" className="text-[#a8e08a] hover:text-white">
                  <X size={14} />
                </button>
              </div>
              <div className="p-3 text-[11px] leading-relaxed overflow-y-auto" style={{ fontFamily: "'Geist Mono', monospace" }}>
                <p className="mb-2">
                  <span style={{ color: "#e0913f" }}>$</span> whoami
                  <br />
                  peter-helm — business systems, automation &amp; product design
                </p>
                <p className="mb-2">
                  <span style={{ color: "#e0913f" }}>$</span> cat philosophy.txt
                  <br />
                  "It's not just about optimizing a metric. It's about serving
                  the person on the other end of the process well." — after
                  "God and Guinness"
                </p>
                <p>
                  <span style={{ color: "#e0913f" }}>$</span> echo $LOCATION
                  <br />
                  Plymouth, NH · open to remote or hybrid roles
                  <br />
                  <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

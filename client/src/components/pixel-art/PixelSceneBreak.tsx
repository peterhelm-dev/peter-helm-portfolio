import PixelFirefly from "./PixelFirefly";

type PixelSceneBreakProps = {
  variant?: "dawn" | "dusk";
  className?: string;
};

const IMAGE_SRC: Record<"dawn" | "dusk", string> = {
  dawn: "/images/pixel-art/scene-break-dawn.webp",
  dusk: "/images/pixel-art/scene-break-dusk.webp",
};

/** A full-width illustrated garden vignette used as a visual break between sections. */
export default function PixelSceneBreak({ variant = "dawn", className }: PixelSceneBreakProps) {
  return (
    <div
      className={`relative w-full overflow-hidden border-y-2 border-[var(--pixel-ink)] h-[220px] md:h-[300px] ${className ?? ""}`}
      aria-hidden="true"
    >
      <img
        src={IMAGE_SRC[variant]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <PixelFirefly top="28%" left="18%" delay="0s" duration="10s" />
      <PixelFirefly top="45%" left="68%" delay="3s" duration="8s" />
    </div>
  );
}

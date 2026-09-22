type PixelFireflyProps = {
  top?: string;
  left?: string;
  delay?: string;
  duration?: string;
};

/** A small drifting glow, meant to sit inside a relatively-positioned garden scene. */
export default function PixelFirefly({ top = "30%", left = "50%", delay = "0s", duration = "9s" }: PixelFireflyProps) {
  return (
    <div
      className="pixel-firefly"
      style={{ top, left, animationDelay: delay, animationDuration: duration }}
      aria-hidden="true"
    />
  );
}

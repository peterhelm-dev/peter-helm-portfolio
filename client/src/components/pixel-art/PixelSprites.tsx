type SpriteProps = {
  className?: string;
};

/** Pixel-art compass, terracotta north / green south needle */
export function PixelCompass({ className }: SpriteProps) {
  return (
    <svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" className={className}>
      <rect x="6" y="1" width="5" height="1" fill="#2b2013" />
      <rect x="4" y="2" width="2" height="1" fill="#2b2013" />
      <rect x="6" y="2" width="2" height="1" fill="#f6ecd9" />
      <rect x="8" y="2" width="1" height="1" fill="#c96f3c" />
      <rect x="9" y="2" width="2" height="1" fill="#f6ecd9" />
      <rect x="11" y="2" width="2" height="1" fill="#2b2013" />
      <rect x="3" y="3" width="2" height="1" fill="#2b2013" />
      <rect x="5" y="3" width="7" height="1" fill="#f6ecd9" />
      <rect x="12" y="3" width="2" height="1" fill="#2b2013" />
      <rect x="2" y="4" width="2" height="1" fill="#2b2013" />
      <rect x="4" y="4" width="3" height="1" fill="#f6ecd9" />
      <rect x="7" y="4" width="1" height="1" fill="#c96f3c" />
      <rect x="8" y="4" width="1" height="1" fill="#f6ecd9" />
      <rect x="9" y="4" width="1" height="1" fill="#c96f3c" />
      <rect x="10" y="4" width="3" height="1" fill="#f6ecd9" />
      <rect x="13" y="4" width="2" height="1" fill="#2b2013" />
      <rect x="2" y="5" width="1" height="1" fill="#2b2013" />
      <rect x="3" y="5" width="5" height="1" fill="#f6ecd9" />
      <rect x="8" y="5" width="1" height="1" fill="#c96f3c" />
      <rect x="9" y="5" width="5" height="1" fill="#f6ecd9" />
      <rect x="14" y="5" width="1" height="1" fill="#2b2013" />
      <rect x="1" y="6" width="1" height="1" fill="#2b2013" />
      <rect x="2" y="6" width="13" height="1" fill="#f6ecd9" />
      <rect x="15" y="6" width="1" height="1" fill="#2b2013" />
      <rect x="1" y="7" width="1" height="1" fill="#2b2013" />
      <rect x="2" y="7" width="13" height="1" fill="#f6ecd9" />
      <rect x="15" y="7" width="1" height="1" fill="#2b2013" />
      <rect x="1" y="8" width="1" height="1" fill="#2b2013" />
      <rect x="2" y="8" width="6" height="1" fill="#f6ecd9" />
      <rect x="8" y="8" width="1" height="1" fill="#2b2013" />
      <rect x="9" y="8" width="6" height="1" fill="#f6ecd9" />
      <rect x="15" y="8" width="1" height="1" fill="#2b2013" />
      <rect x="1" y="9" width="1" height="1" fill="#2b2013" />
      <rect x="2" y="9" width="13" height="1" fill="#f6ecd9" />
      <rect x="15" y="9" width="1" height="1" fill="#2b2013" />
      <rect x="1" y="10" width="1" height="1" fill="#2b2013" />
      <rect x="2" y="10" width="13" height="1" fill="#f6ecd9" />
      <rect x="15" y="10" width="1" height="1" fill="#2b2013" />
      <rect x="2" y="11" width="1" height="1" fill="#2b2013" />
      <rect x="3" y="11" width="5" height="1" fill="#f6ecd9" />
      <rect x="8" y="11" width="1" height="1" fill="#3f6b3a" />
      <rect x="9" y="11" width="5" height="1" fill="#f6ecd9" />
      <rect x="14" y="11" width="1" height="1" fill="#2b2013" />
      <rect x="2" y="12" width="2" height="1" fill="#2b2013" />
      <rect x="4" y="12" width="3" height="1" fill="#f6ecd9" />
      <rect x="7" y="12" width="1" height="1" fill="#3f6b3a" />
      <rect x="8" y="12" width="1" height="1" fill="#f6ecd9" />
      <rect x="9" y="12" width="1" height="1" fill="#3f6b3a" />
      <rect x="10" y="12" width="3" height="1" fill="#f6ecd9" />
      <rect x="13" y="12" width="2" height="1" fill="#2b2013" />
      <rect x="3" y="13" width="2" height="1" fill="#2b2013" />
      <rect x="5" y="13" width="7" height="1" fill="#f6ecd9" />
      <rect x="12" y="13" width="2" height="1" fill="#2b2013" />
      <rect x="4" y="14" width="2" height="1" fill="#2b2013" />
      <rect x="6" y="14" width="2" height="1" fill="#f6ecd9" />
      <rect x="8" y="14" width="1" height="1" fill="#3f6b3a" />
      <rect x="9" y="14" width="2" height="1" fill="#f6ecd9" />
      <rect x="11" y="14" width="2" height="1" fill="#2b2013" />
      <rect x="6" y="15" width="5" height="1" fill="#2b2013" />
    </svg>
  );
}

/** Pixel-art pine tree */
export function PixelTree({ className }: SpriteProps) {
  return (
    <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" className={className}>
      <rect x="4" y="0" width="2" height="1" fill="#4f7942" />
      <rect x="3" y="1" width="4" height="1" fill="#4f7942" />
      <rect x="3" y="2" width="1" height="1" fill="#33502c" />
      <rect x="4" y="2" width="3" height="1" fill="#4f7942" />
      <rect x="7" y="2" width="1" height="1" fill="#33502c" />
      <rect x="2" y="3" width="8" height="1" fill="#4f7942" />
      <rect x="2" y="4" width="1" height="1" fill="#33502c" />
      <rect x="3" y="4" width="6" height="1" fill="#4f7942" />
      <rect x="9" y="4" width="1" height="1" fill="#33502c" />
      <rect x="1" y="5" width="10" height="1" fill="#4f7942" />
      <rect x="1" y="6" width="1" height="1" fill="#33502c" />
      <rect x="2" y="6" width="8" height="1" fill="#4f7942" />
      <rect x="10" y="6" width="1" height="1" fill="#33502c" />
      <rect x="0" y="7" width="12" height="1" fill="#4f7942" />
      <rect x="0" y="8" width="1" height="1" fill="#33502c" />
      <rect x="1" y="8" width="10" height="1" fill="#4f7942" />
      <rect x="11" y="8" width="1" height="1" fill="#33502c" />
      <rect x="4" y="9" width="4" height="1" fill="#6b4226" />
      <rect x="4" y="10" width="4" height="1" fill="#6b4226" />
      <rect x="4" y="11" width="4" height="1" fill="#6b4226" />
    </svg>
  );
}

/** Pixel-art garden bush */
export function PixelBush({ className }: SpriteProps) {
  return (
    <svg viewBox="0 0 14 6" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" className={className}>
      <rect x="4" y="0" width="6" height="1" fill="#5a8f4e" />
      <rect x="2" y="1" width="10" height="1" fill="#5a8f4e" />
      <rect x="1" y="2" width="1" height="1" fill="#5a8f4e" />
      <rect x="2" y="2" width="1" height="1" fill="#8fc16b" />
      <rect x="3" y="2" width="8" height="1" fill="#5a8f4e" />
      <rect x="11" y="2" width="1" height="1" fill="#8fc16b" />
      <rect x="12" y="2" width="1" height="1" fill="#5a8f4e" />
      <rect x="0" y="3" width="14" height="1" fill="#5a8f4e" />
      <rect x="0" y="4" width="1" height="1" fill="#375c2e" />
      <rect x="1" y="4" width="12" height="1" fill="#5a8f4e" />
      <rect x="13" y="4" width="1" height="1" fill="#375c2e" />
      <rect x="1" y="5" width="12" height="1" fill="#375c2e" />
    </svg>
  );
}

/** Pixel-art flower, rose/pink */
export function PixelFlower({ className }: SpriteProps) {
  return (
    <svg viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" className={className}>
      <rect x="3" y="0" width="1" height="1" fill="#e8637a" />
      <rect x="2" y="1" width="1" height="1" fill="#e8637a" />
      <rect x="3" y="1" width="1" height="1" fill="#f4c95d" />
      <rect x="4" y="1" width="1" height="1" fill="#e8637a" />
      <rect x="3" y="2" width="1" height="1" fill="#e8637a" />
      <rect x="3" y="3" width="1" height="1" fill="#3f6b3a" />
      <rect x="2" y="4" width="1" height="1" fill="#5a8f4e" />
      <rect x="3" y="4" width="1" height="1" fill="#3f6b3a" />
      <rect x="3" y="5" width="1" height="1" fill="#3f6b3a" />
      <rect x="3" y="6" width="1" height="1" fill="#3f6b3a" />
    </svg>
  );
}

/** Pixel-art flower, warm orange */
export function PixelFlowerWarm({ className }: SpriteProps) {
  return (
    <svg viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" className={className}>
      <rect x="3" y="0" width="1" height="1" fill="#e0913f" />
      <rect x="2" y="1" width="1" height="1" fill="#e0913f" />
      <rect x="3" y="1" width="1" height="1" fill="#f6ecd9" />
      <rect x="4" y="1" width="1" height="1" fill="#e0913f" />
      <rect x="3" y="2" width="1" height="1" fill="#e0913f" />
      <rect x="3" y="3" width="1" height="1" fill="#3f6b3a" />
      <rect x="3" y="4" width="1" height="1" fill="#3f6b3a" />
      <rect x="4" y="4" width="1" height="1" fill="#5a8f4e" />
      <rect x="3" y="5" width="1" height="1" fill="#3f6b3a" />
      <rect x="3" y="6" width="1" height="1" fill="#3f6b3a" />
    </svg>
  );
}

/** Pixel-art steaming coffee cup */
export function PixelCoffee({ className }: SpriteProps) {
  return (
    <svg viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" className={className}>
      <rect x="4" y="0" width="1" height="1" fill="#d9cbb8" />
      <rect x="9" y="0" width="1" height="1" fill="#d9cbb8" />
      <rect x="4" y="1" width="1" height="1" fill="#d9cbb8" />
      <rect x="9" y="1" width="1" height="1" fill="#d9cbb8" />
      <rect x="2" y="3" width="8" height="1" fill="#5c3d28" />
      <rect x="2" y="4" width="1" height="1" fill="#5c3d28" />
      <rect x="3" y="4" width="6" height="1" fill="#f6ecd9" />
      <rect x="9" y="4" width="1" height="1" fill="#5c3d28" />
      <rect x="10" y="4" width="3" height="1" fill="#5c3d28" />
      <rect x="2" y="5" width="1" height="1" fill="#5c3d28" />
      <rect x="3" y="5" width="6" height="1" fill="#f6ecd9" />
      <rect x="9" y="5" width="1" height="1" fill="#5c3d28" />
      <rect x="10" y="5" width="1" height="1" fill="#5c3d28" />
      <rect x="12" y="5" width="1" height="1" fill="#5c3d28" />
      <rect x="2" y="6" width="1" height="1" fill="#5c3d28" />
      <rect x="3" y="6" width="6" height="1" fill="#f6ecd9" />
      <rect x="9" y="6" width="1" height="1" fill="#5c3d28" />
      <rect x="10" y="6" width="1" height="1" fill="#5c3d28" />
      <rect x="12" y="6" width="1" height="1" fill="#5c3d28" />
      <rect x="2" y="7" width="1" height="1" fill="#5c3d28" />
      <rect x="3" y="7" width="6" height="1" fill="#f6ecd9" />
      <rect x="9" y="7" width="1" height="1" fill="#5c3d28" />
      <rect x="10" y="7" width="3" height="1" fill="#5c3d28" />
      <rect x="2" y="8" width="8" height="1" fill="#5c3d28" />
      <rect x="1" y="9" width="10" height="1" fill="#5c3d28" />
    </svg>
  );
}

/** Wide pixel-art layered mountain range with snow caps, for use as a decorative band */
export function PixelMountains({ className }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 160 46"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      preserveAspectRatio="none"
      className={className}
    >
      <rect x="100" y="12" width="7" height="1" fill="#f6ecd9" />
      <rect x="99" y="13" width="14" height="1" fill="#f6ecd9" />
      <rect x="97" y="14" width="22" height="1" fill="#f6ecd9" />
      <rect x="96" y="15" width="4" height="1" fill="#f6ecd9" />
      <rect x="100" y="15" width="7" height="1" fill="#9fb98a" />
      <rect x="107" y="15" width="18" height="1" fill="#f6ecd9" />
      <rect x="95" y="16" width="4" height="1" fill="#f6ecd9" />
      <rect x="99" y="16" width="14" height="1" fill="#9fb98a" />
      <rect x="113" y="16" width="18" height="1" fill="#f6ecd9" />
      <rect x="34" y="17" width="9" height="1" fill="#f6ecd9" />
      <rect x="93" y="17" width="4" height="1" fill="#f6ecd9" />
      <rect x="97" y="17" width="22" height="1" fill="#9fb98a" />
      <rect x="119" y="17" width="18" height="1" fill="#f6ecd9" />
      <rect x="29" y="18" width="19" height="1" fill="#f6ecd9" />
      <rect x="92" y="18" width="3" height="1" fill="#f6ecd9" />
      <rect x="95" y="18" width="30" height="1" fill="#9fb98a" />
      <rect x="125" y="18" width="1" height="1" fill="#f6ecd9" />
      <rect x="126" y="18" width="5" height="1" fill="#9fb98a" />
      <rect x="131" y="18" width="7" height="1" fill="#f6ecd9" />
      <rect x="24" y="19" width="10" height="1" fill="#f6ecd9" />
      <rect x="34" y="19" width="9" height="1" fill="#9fb98a" />
      <rect x="43" y="19" width="10" height="1" fill="#f6ecd9" />
      <rect x="91" y="19" width="2" height="1" fill="#f6ecd9" />
      <rect x="93" y="19" width="44" height="1" fill="#9fb98a" />
      <rect x="137" y="19" width="2" height="1" fill="#f6ecd9" />
      <rect x="19" y="20" width="4" height="1" fill="#9fb98a" />
      <rect x="23" y="20" width="6" height="1" fill="#f6ecd9" />
      <rect x="29" y="20" width="19" height="1" fill="#9fb98a" />
      <rect x="48" y="20" width="5" height="1" fill="#f6ecd9" />
      <rect x="53" y="20" width="5" height="1" fill="#9fb98a" />
      <rect x="89" y="20" width="2" height="1" fill="#9fb98a" />
      <rect x="91" y="20" width="1" height="1" fill="#f6ecd9" />
      <rect x="92" y="20" width="46" height="1" fill="#9fb98a" />
      <rect x="138" y="20" width="1" height="1" fill="#f6ecd9" />
      <rect x="139" y="20" width="1" height="1" fill="#9fb98a" />
      <rect x="17" y="21" width="6" height="1" fill="#9fb98a" />
      <rect x="23" y="21" width="1" height="1" fill="#f6ecd9" />
      <rect x="24" y="21" width="39" height="1" fill="#9fb98a" />
      <rect x="88" y="21" width="53" height="1" fill="#9fb98a" />
      <rect x="16" y="22" width="52" height="1" fill="#9fb98a" />
      <rect x="87" y="22" width="55" height="1" fill="#9fb98a" />
      <rect x="14" y="23" width="59" height="1" fill="#9fb98a" />
      <rect x="85" y="23" width="58" height="1" fill="#9fb98a" />
      <rect x="13" y="24" width="65" height="1" fill="#9fb98a" />
      <rect x="84" y="24" width="60" height="1" fill="#9fb98a" />
      <rect x="12" y="25" width="70" height="1" fill="#9fb98a" />
      <rect x="83" y="25" width="62" height="1" fill="#9fb98a" />
      <rect x="11" y="26" width="89" height="1" fill="#9fb98a" />
      <rect x="100" y="26" width="9" height="1" fill="#5a8f4e" />
      <rect x="109" y="26" width="37" height="1" fill="#9fb98a" />
      <rect x="10" y="27" width="82" height="1" fill="#9fb98a" />
      <rect x="92" y="27" width="19" height="1" fill="#5a8f4e" />
      <rect x="111" y="27" width="36" height="1" fill="#9fb98a" />
      <rect x="10" y="28" width="75" height="1" fill="#9fb98a" />
      <rect x="85" y="28" width="30" height="1" fill="#5a8f4e" />
      <rect x="115" y="28" width="33" height="1" fill="#9fb98a" />
      <rect x="9" y="29" width="68" height="1" fill="#9fb98a" />
      <rect x="77" y="29" width="41" height="1" fill="#5a8f4e" />
      <rect x="118" y="29" width="31" height="1" fill="#9fb98a" />
      <rect x="8" y="30" width="62" height="1" fill="#9fb98a" />
      <rect x="70" y="30" width="52" height="1" fill="#5a8f4e" />
      <rect x="122" y="30" width="28" height="1" fill="#9fb98a" />
      <rect x="8" y="31" width="8" height="1" fill="#9fb98a" />
      <rect x="16" y="31" width="22" height="1" fill="#5a8f4e" />
      <rect x="38" y="31" width="24" height="1" fill="#9fb98a" />
      <rect x="62" y="31" width="63" height="1" fill="#5a8f4e" />
      <rect x="125" y="31" width="26" height="1" fill="#9fb98a" />
      <rect x="7" y="32" width="3" height="1" fill="#9fb98a" />
      <rect x="10" y="32" width="44" height="1" fill="#5a8f4e" />
      <rect x="54" y="32" width="1" height="1" fill="#9fb98a" />
      <rect x="55" y="32" width="74" height="1" fill="#5a8f4e" />
      <rect x="129" y="32" width="23" height="1" fill="#9fb98a" />
      <rect x="6" y="33" width="3" height="1" fill="#9fb98a" />
      <rect x="9" y="33" width="123" height="1" fill="#5a8f4e" />
      <rect x="132" y="33" width="21" height="1" fill="#9fb98a" />
      <rect x="5" y="34" width="3" height="1" fill="#9fb98a" />
      <rect x="8" y="34" width="21" height="1" fill="#5a8f4e" />
      <rect x="29" y="34" width="7" height="1" fill="#33502c" />
      <rect x="36" y="34" width="100" height="1" fill="#5a8f4e" />
      <rect x="136" y="34" width="18" height="1" fill="#9fb98a" />
      <rect x="5" y="35" width="2" height="1" fill="#9fb98a" />
      <rect x="7" y="35" width="19" height="1" fill="#5a8f4e" />
      <rect x="26" y="35" width="14" height="1" fill="#33502c" />
      <rect x="40" y="35" width="99" height="1" fill="#5a8f4e" />
      <rect x="139" y="35" width="16" height="1" fill="#9fb98a" />
      <rect x="4" y="36" width="2" height="1" fill="#9fb98a" />
      <rect x="6" y="36" width="18" height="1" fill="#5a8f4e" />
      <rect x="24" y="36" width="20" height="1" fill="#33502c" />
      <rect x="44" y="36" width="99" height="1" fill="#5a8f4e" />
      <rect x="143" y="36" width="13" height="1" fill="#9fb98a" />
      <rect x="3" y="37" width="2" height="1" fill="#9fb98a" />
      <rect x="5" y="37" width="16" height="1" fill="#5a8f4e" />
      <rect x="21" y="37" width="28" height="1" fill="#33502c" />
      <rect x="49" y="37" width="67" height="1" fill="#5a8f4e" />
      <rect x="116" y="37" width="32" height="1" fill="#33502c" />
      <rect x="148" y="37" width="9" height="1" fill="#9fb98a" />
      <rect x="3" y="38" width="1" height="1" fill="#9fb98a" />
      <rect x="4" y="38" width="14" height="1" fill="#5a8f4e" />
      <rect x="18" y="38" width="35" height="1" fill="#33502c" />
      <rect x="53" y="38" width="34" height="1" fill="#5a8f4e" />
      <rect x="87" y="38" width="64" height="1" fill="#33502c" />
      <rect x="151" y="38" width="7" height="1" fill="#9fb98a" />
      <rect x="2" y="39" width="1" height="1" fill="#9fb98a" />
      <rect x="3" y="39" width="13" height="1" fill="#5a8f4e" />
      <rect x="16" y="39" width="41" height="1" fill="#33502c" />
      <rect x="57" y="39" width="1" height="1" fill="#5a8f4e" />
      <rect x="58" y="39" width="96" height="1" fill="#33502c" />
      <rect x="154" y="39" width="5" height="1" fill="#9fb98a" />
      <rect x="0" y="40" width="2" height="1" fill="#9fb98a" />
      <rect x="2" y="40" width="6" height="1" fill="#5a8f4e" />
      <rect x="8" y="40" width="149" height="1" fill="#33502c" />
      <rect x="157" y="40" width="3" height="1" fill="#9fb98a" />
      <rect x="0" y="41" width="1" height="1" fill="#9fb98a" />
      <rect x="1" y="41" width="159" height="1" fill="#33502c" />
      <rect x="0" y="42" width="160" height="1" fill="#33502c" />
      <rect x="0" y="43" width="160" height="1" fill="#33502c" />
      <rect x="0" y="44" width="160" height="1" fill="#33502c" />
      <rect x="0" y="45" width="160" height="1" fill="#33502c" />
    </svg>
  );
}

/** A repeating strip of alternating bushes/flowers/trees, used as a garden-row divider */
export function PixelGardenRow({ className }: SpriteProps) {
  const items = [PixelBush, PixelFlower, PixelTree, PixelFlowerWarm, PixelBush, PixelTree, PixelFlower, PixelBush, PixelFlowerWarm, PixelTree];
  return (
    <div className={`flex items-end justify-between gap-2 ${className ?? ""}`} aria-hidden="true">
      {items.map((Sprite, i) => (
        <Sprite key={i} className="h-8 w-auto opacity-90" />
      ))}
    </div>
  );
}

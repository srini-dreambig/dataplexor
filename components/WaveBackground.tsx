/**
 * Abstract wave hero backgrounds — pre-rendered fine-line "ribbon"
 * artwork (public/waves/*.jpg), one composition per section of the
 * site, all in one visual family: deep navy base, ruled-surface line
 * ribbons flowing purple → white → cyan/teal, soft glows. Regenerate
 * with scripts in the project history (canvas-based generator) if the
 * brand palette changes.
 *
 * Compositions keep the upper-left quiet so hero copy stays legible.
 */

export type WaveVariant =
  | "flow" // home — broad S-sweep ribbon
  | "pulse" // solutions — crossing double ribbons
  | "horizon" // industries — low horizon band with rising glow
  | "orbit" // products — concentric orbital arcs
  | "rise" // services — diagonal ascending ribbon
  | "aurora" // company — loose aurora ribbons
  | "calm"; // insights, legal — single quiet band

export function WaveBackground({
  variant = "flow",
}: {
  variant?: WaveVariant;
  /** kept for call-site compatibility; unused by the image renderer */
  idPrefix?: string;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#05050f]"
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/waves/${variant}.jpg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
        draggable={false}
      />
      {/* diagonal scrim over the copy column */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(5,5,15,0.68) 0%, rgba(5,5,15,0.42) 38%, rgba(5,5,15,0.08) 62%, rgba(5,5,15,0) 75%)",
        }}
      />
      {/* feathered depth-of-field pocket: blurs + dims the artwork
          directly behind the copy, fading out with no visible edge */}
      <div
        className="absolute inset-0 backdrop-blur-[7px]"
        style={{
          backgroundColor: "rgba(5,5,15,0.38)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 88% at 27% 54%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 74%)",
          maskImage:
            "radial-gradient(ellipse 60% 88% at 27% 54%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 74%)",
        }}
      />
      {/* seam into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05050f] to-transparent" />
    </div>
  );
}

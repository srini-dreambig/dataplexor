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
      {/* keep the copy zone readable on short viewports */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(5,5,15,0.55) 0%, rgba(5,5,15,0.25) 40%, rgba(5,5,15,0) 65%)",
        }}
      />
      {/* seam into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05050f] to-transparent" />
    </div>
  );
}

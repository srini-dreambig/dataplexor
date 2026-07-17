/**
 * Decorative dark hero background: vertical light "blinds", radial glows
 * and a data-plexus line network, in the spirit of the reference designs.
 */
export function PlexusBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* base */}
      <div className="absolute inset-0 bg-[#05050f]" />
      {/* vertical blinds */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(35,56,236,0.28) 0px, rgba(35,56,236,0.02) 26px, rgba(5,5,15,0) 52px)",
        }}
      />
      {/* glows */}
      <div
        className="absolute -top-1/3 left-1/2 h-[120%] w-[120%] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(59,80,255,0.5) 0%, rgba(35,56,236,0.15) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-2/3 w-2/3"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(16,223,194,0.14) 0%, transparent 60%)",
        }}
      />
      {/* plexus network */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="#7b8cff" strokeWidth="1">
          <path d="M120 480 340 380 520 470 760 350 980 440 1150 330" />
          <path d="M340 380 300 220 560 150 760 350M560 150 820 210 980 440M820 210 1150 330M120 480 300 220M520 470 560 150" />
        </g>
        <g fill="#aab6ff">
          <circle cx="120" cy="480" r="4" />
          <circle cx="340" cy="380" r="5" />
          <circle cx="300" cy="220" r="4" />
          <circle cx="560" cy="150" r="6" />
          <circle cx="520" cy="470" r="4" />
          <circle cx="760" cy="350" r="5" />
          <circle cx="820" cy="210" r="4" />
          <circle cx="980" cy="440" r="5" />
          <circle cx="1150" cy="330" r="4" />
        </g>
        <circle cx="560" cy="150" r="12" stroke="#10dfc2" strokeWidth="1.5" />
        <circle cx="980" cy="440" r="10" stroke="#7b8cff" strokeWidth="1" />
      </svg>
      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05050f] to-transparent" />
    </div>
  );
}

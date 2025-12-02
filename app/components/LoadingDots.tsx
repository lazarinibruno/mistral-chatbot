import React from "react";

type Props = {
  className?: string; // Tailwind color classes like "text-gray-400" or "text-primary"
  size?: string; // dot diameter, e.g. "8px" or "0.5rem"
  jump?: string; // how high the dot moves, e.g. "8px"
  gap?: string; // horizontal gap between dots, e.g. "8px"
  ariaLabel?: string;
};

/**
 * LoadingDots component
 * --------------------
 *
 * Renders three dots that move in a wave animation.
 *
 */
export default function LoadingDots({
  className = "text-gray-400",
  size = "0.5rem",
  jump = "6px",
  gap = "0.375rem",
  ariaLabel = "Loading",
}: Props) {
  // CSS custom props (inline) so no global CSS required
  const style = {
    // names as any to satisfy TypeScript for custom properties
    ["--dot-size" as any]: size,
    ["--jump" as any]: jump,
    ["--gap" as any]: gap,
    // container height reserves room for dot + jump (so nothing gets clipped)
    height: `calc(var(--dot-size) + var(--jump))`,
  } as React.CSSProperties;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`relative inline-block align-bottom ${className}`}
      style={style}
      aria-label={ariaLabel}
    >
      {/* three absolute dots aligned to bottom inside reserved height */}
      <span className="loading-dot dot-1" aria-hidden />
      <span className="loading-dot dot-2" aria-hidden />
      <span className="loading-dot dot-3" aria-hidden />
      <span className="sr-only">{ariaLabel}</span>

      {/* Scoped CSS so it won't rely on any global file */}
      <style jsx>{`
        .sr-only {
          position: absolute !important;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* base dot */
        .loading-dot {
          position: absolute;
          bottom: 0; /* anchor to bottom inside reserved height */
          width: var(--dot-size);
          height: var(--dot-size);
          border-radius: 9999px;
          background-color: currentColor; /* inherits the Tailwind text color */
          transform: translateY(0);
          will-change: transform;
          animation: wave 0.75s ease-in-out infinite;
        }

        /* horizontal placement */
        .dot-1 {
          left: 0;
          animation-delay: 0s;
        }
        .dot-2 {
          left: calc(var(--dot-size) + var(--gap));
          animation-delay: 0.12s;
        }
        .dot-3 {
          left: calc((var(--dot-size) + var(--gap)) * 2);
          animation-delay: 0.24s;
        }

        /* keyframes lift the dot up (negative translateY) */
        @keyframes wave {
          0%,
          60%,
          100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(calc(var(--jump) * -1));
          }
        }

        /* make sure svg/text baseline doesn't collapse container in some contexts */
        :global(.relative) {
          line-height: 1; /* avoid extra vertical stretching */
        }
      `}</style>
    </div>
  );
}

/**
 * The horizon scene — one continuous sky, not floating blobs.
 *
 * Paints a low horizon glow + a high sky wash whose colors are driven
 * by DayScroll (scroll position = time of day). On pages without
 * DayScroll (e.g. /resume) the CSS defaults hold a permanent dawn.
 *
 * Keeps the AuroraBackground name so existing imports stay stable.
 */
export function AuroraBackground() {
  return (
    <div className="horizon-scene" aria-hidden="true">
      <div className="horizon-glow" />
      <div className="sky-wash" />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

// Real source dimensions — used as the Image intrinsic width/height so Next
// reserves layout space and serves an optimized file at every rendered size.
const DUK_SRC = { src: "/images/Logo_DUK-with-padding.png", width: 204, height: 72 };
const CDIPD_SRC = { src: "/images/cdipd-logo.png", width: 191, height: 64 };

// Canonical accessible names — one pair, reused everywhere so screen-reader
// users hear the same announcement for the same logo on every page.
const DUK_ALT = "Digital University Kerala";
const CDIPD_ALT = "Centre for Digital Innovation and Product Development (CDIPD)";

type BrandLogosSize = "sm" | "md" | "lg";

const SIZE: Record<BrandLogosSize, { duk: string; cdipd: string; divider: string; gap: string }> = {
  sm: { duk: "h-5", cdipd: "h-4", divider: "h-3.5", gap: "gap-2" },
  md: { duk: "h-6", cdipd: "h-5", divider: "h-4", gap: "gap-2.5" },
  lg: { duk: "h-8 sm:h-9", cdipd: "h-7 sm:h-8", divider: "h-6", gap: "gap-2.5 sm:gap-3" },
};

/**
 * The DUK / CDIPD logo lockup, canonical across every header and footer.
 * Always a Link to "/" — including on the homepage — so it behaves the same
 * everywhere a user encounters it.
 */
export function BrandLogos({
  size = "md",
  muted = false,
  className = "",
}: {
  size?: BrandLogosSize;
  muted?: boolean;
  className?: string;
}) {
  const s = SIZE[size];
  const opacity = muted ? "opacity-90" : "";

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${s.gap} rounded transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${className}`}
    >
      <Image
        src={DUK_SRC.src}
        alt={DUK_ALT}
        width={DUK_SRC.width}
        height={DUK_SRC.height}
        className={`${s.duk} w-auto object-contain ${opacity}`}
      />
      <span className={`w-px ${s.divider} bg-slate-200`} aria-hidden="true" />
      <Image
        src={CDIPD_SRC.src}
        alt={CDIPD_ALT}
        width={CDIPD_SRC.width}
        height={CDIPD_SRC.height}
        className={`${s.cdipd} w-auto object-contain ${opacity}`}
      />
    </Link>
  );
}

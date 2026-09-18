import type { ElementType, ReactNode } from "react";
import { HeroBackground } from "./HeroBackground";

export type PageHeroIntensity = "full" | "lite" | "minimal";

const WASH_VARIANT: Record<PageHeroIntensity, "wash" | "wash-lite" | "wash-minimal"> = {
  full: "wash",
  lite: "wash-lite",
  minimal: "wash-minimal",
};

const MOTION_OFF = "motion-reduce:animate-none";

type Stagger = { badge: string; title: string; subhead: string; actions: string };

const STAGGER: Record<PageHeroIntensity, Stagger> = {
  full: {
    badge: `animate-fade-up ${MOTION_OFF}`,
    title: `animate-fade-up-1 ${MOTION_OFF}`,
    subhead: `animate-fade-up-2 ${MOTION_OFF}`,
    actions: `animate-fade-up-3 ${MOTION_OFF}`,
  },
  lite: {
    badge: `animate-fade-up-lite ${MOTION_OFF}`,
    title: `animate-fade-up-lite-1 ${MOTION_OFF}`,
    subhead: `animate-fade-up-lite-2 ${MOTION_OFF}`,
    actions: `animate-fade-up-lite-3 ${MOTION_OFF}`,
  },
  // Dense reading pages: no entrance choreography at all.
  minimal: { badge: "", title: "", subhead: "", actions: "" },
};

const MAX_WIDTH = {
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
} as const;

const VERTICAL_PADDING: Record<PageHeroIntensity, string> = {
  full: "py-12 sm:py-16",
  lite: "py-12 sm:py-16",
  // Dense reading pages: less ceremony before the content starts.
  minimal: "py-8 sm:py-10",
};

/**
 * Shared hero shell: tinted wash background (scaled by `intensity`) plus a
 * staggered fade/translate entrance for badge -> title -> subhead -> actions.
 *
 * `title`/`subhead`/`actions` mirror the badge/h1/subhead/CTA-row pattern
 * used on the homepage, ProgramHub and the semester pages: title+subhead
 * stack in one column, actions sit beside them in a responsive row.
 * `children` renders below, unanimated — for page-specific content (stat
 * grids, tabs) that doesn't fit that shape. Pages with a genuinely different
 * hero layout (e.g. coordination's two-column grid) can pass only
 * `children` and build their own structure inside the tinted panel.
 */
export function PageHero({
  as: Tag = "header",
  intensity = "full",
  maxWidth = "6xl",
  badge,
  title,
  subhead,
  actions,
  children,
  className = "",
}: {
  as?: ElementType;
  intensity?: PageHeroIntensity;
  maxWidth?: keyof typeof MAX_WIDTH;
  badge?: ReactNode;
  title?: ReactNode;
  subhead?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const stagger = STAGGER[intensity];

  return (
    <Tag className={`relative overflow-hidden border-b border-slate-200/80 bg-white ${className}`}>
      <HeroBackground variant={WASH_VARIANT[intensity]} />
      <div className={`relative mx-auto ${MAX_WIDTH[maxWidth]} px-5 sm:px-8 ${VERTICAL_PADDING[intensity]}`}>
        {badge && <div className={stagger.badge}>{badge}</div>}

        {(title || actions) && (
          <div
            className={`${badge ? "mt-5" : ""} flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between`}
          >
            <div className="max-w-3xl">
              {title && <div className={stagger.title}>{title}</div>}
              {subhead && <div className={`mt-4 ${stagger.subhead}`}>{subhead}</div>}
            </div>

            {actions && (
              <div className={`flex flex-wrap shrink-0 items-center gap-2 ${stagger.actions}`}>{actions}</div>
            )}
          </div>
        )}

        {children}
      </div>
    </Tag>
  );
}

export function HeroBackground({
  variant = "default",
}: {
  variant?: "default" | "subtle" | "wash" | "wash-lite" | "wash-minimal";
}) {
  if (variant === "wash") {
    return (
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden reduced-transparency:hidden more-contrast:hidden"
        aria-hidden="true"
      >
        {/* Two restrained blurred blobs, fading to the page background at the edges.
            Slow, small-amplitude drift; fully disabled under reduced motion. */}
        <div className="absolute -top-16 left-[6%] h-[380px] w-[560px] max-w-none animate-aurora-a rounded-full bg-indigo-500/10 blur-3xl motion-reduce:animate-none" />
        <div className="absolute top-4 right-[4%] h-[320px] w-[480px] max-w-none animate-aurora-b rounded-full bg-violet-500/8 blur-3xl motion-reduce:animate-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </div>
    );
  }

  if (variant === "wash-lite") {
    return (
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden reduced-transparency:hidden more-contrast:hidden"
        aria-hidden="true"
      >
        {/* ~40% of the "wash" blob size/opacity — a thinner tinted band for
            section-hero pages that don't need the homepage's full weight. */}
        <div className="absolute -top-10 left-[8%] h-[220px] w-[360px] max-w-none animate-aurora-a rounded-full bg-indigo-500/6 blur-3xl motion-reduce:animate-none" />
        <div className="absolute top-2 right-[6%] h-[190px] w-[300px] max-w-none animate-aurora-b rounded-full bg-violet-500/5 blur-3xl motion-reduce:animate-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
      </div>
    );
  }

  if (variant === "wash-minimal") {
    return (
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden reduced-transparency:hidden more-contrast:hidden"
        aria-hidden="true"
      >
        {/* A single faint, static tint — no drift. For dense reading pages
            (course pages) that should stay calm. */}
        <div className="absolute -top-8 left-[10%] h-[160px] w-[280px] max-w-none rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-white" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Base gradient foundation */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50" />

      {/* Primary top-center ambient spotlight glow */}
      <div
        className={`absolute -top-32 left-1/2 -translate-x-1/2 h-[460px] w-[840px] max-w-none rounded-full bg-gradient-to-tr from-indigo-400/22 via-sky-300/22 to-violet-400/18 blur-3xl ${
          variant === "subtle" ? "opacity-75" : "opacity-100"
        }`}
      />

      {/* Secondary accent ambient orbs */}
      <div className="absolute top-0 right-[-8%] h-[320px] w-[320px] rounded-full bg-sky-300/18 blur-3xl" />
      <div className="absolute bottom-0 left-[-8%] h-[280px] w-[280px] rounded-full bg-indigo-300/18 blur-3xl" />

      {/* Precision dot-grid texture with radial falloff */}
      <div
        className="absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.22) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, black 30%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, black 30%, transparent 95%)",
        }}
      />

      {/* Subtle bottom separator hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent" />
    </div>
  );
}

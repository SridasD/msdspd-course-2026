import type { ElementType, ReactNode } from "react";

/**
 * Large display heading: indigo -> violet bg-clip-text gradient, -0.02em tracking.
 * `prefix` renders in plain slate-900 before the gradient portion (children);
 * omit it when the whole heading should be gradient.
 */
export function GradientHeading({
  as: Tag = "h1",
  prefix,
  children,
  className = "",
}: {
  as?: ElementType;
  prefix?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag className={`tracking-display ${className}`}>
      {prefix}
      <span className="bg-gradient-brand bg-clip-text text-transparent">{children}</span>
    </Tag>
  );
}

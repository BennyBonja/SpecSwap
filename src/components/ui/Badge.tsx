import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "coral",
}: {
  children: ReactNode;
  tone?: "coral" | "navy";
}) {
  const toneClasses =
    tone === "coral"
      ? "bg-coral-50 text-coral-700"
      : "bg-navy-50 text-navy-700";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  );
}

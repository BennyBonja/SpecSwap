import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  highlighted = false,
}: {
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
}) {
  const border = highlighted
    ? "border-2 border-coral-500"
    : "border border-slate-200";

  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm ${border} ${className}`}
    >
      {children}
    </div>
  );
}

import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  highlighted = false,
  tinted = false,
}: {
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
  tinted?: boolean;
}) {
  const border = highlighted
    ? "border-2 border-coral-500"
    : "border border-slate-200";
  const background = tinted ? "bg-coral-50" : "bg-white";

  return (
    <div
      className={`rounded-2xl p-6 shadow-sm ${background} ${border} ${className}`}
    >
      {children}
    </div>
  );
}

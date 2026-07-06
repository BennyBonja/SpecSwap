import type { LucideIcon } from "lucide-react";

type Tone = "coral" | "navy";
type Size = "md" | "lg";

const toneClasses: Record<Tone, string> = {
  coral: "bg-coral-50 text-coral-600",
  navy: "bg-navy-50 text-navy-700",
};

const sizeClasses: Record<Size, { wrapper: string; icon: string }> = {
  md: { wrapper: "h-11 w-11", icon: "h-5 w-5" },
  lg: { wrapper: "h-14 w-14", icon: "h-7 w-7" },
};

export function IconBadge({
  icon: Icon,
  tone = "coral",
  size = "md",
  className = "",
}: {
  icon: LucideIcon;
  tone?: Tone;
  size?: Size;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${sizeClasses[size].wrapper} ${toneClasses[tone]} ${className}`}
    >
      <Icon className={sizeClasses[size].icon} strokeWidth={2} aria-hidden="true" />
    </span>
  );
}

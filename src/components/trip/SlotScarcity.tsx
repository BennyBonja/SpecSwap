import { Flame } from "lucide-react";
import { TRIP_SLOTS_TOTAL, TRIP_SLOTS_REMAINING } from "@/lib/constants";

export function SlotScarcity({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const claimedPercent = Math.round(
    ((TRIP_SLOTS_TOTAL - TRIP_SLOTS_REMAINING) / TRIP_SLOTS_TOTAL) * 100,
  );
  const trackClass = tone === "dark" ? "bg-white/10" : "bg-slate-200";
  const captionClass = tone === "dark" ? "text-navy-300" : "text-slate-500";

  return (
    <div className={className}>
      <p className="flex items-center gap-1.5 font-display text-lg font-bold text-coral-500">
        <Flame className="h-5 w-5 shrink-0" aria-hidden="true" />
        Only {TRIP_SLOTS_REMAINING} of {TRIP_SLOTS_TOTAL} slots left
      </p>
      <div
        role="progressbar"
        aria-label="Builder inspection slots claimed"
        aria-valuenow={TRIP_SLOTS_TOTAL - TRIP_SLOTS_REMAINING}
        aria-valuemin={0}
        aria-valuemax={TRIP_SLOTS_TOTAL}
        className={`mt-2 h-2 w-full max-w-xs overflow-hidden rounded-full ${trackClass}`}
      >
        <div
          className="h-full rounded-full bg-coral-500"
          style={{ width: `${claimedPercent}%` }}
        />
      </div>
      <p className={`mt-1.5 text-xs ${captionClass}`}>
        {TRIP_SLOTS_TOTAL - TRIP_SLOTS_REMAINING} of {TRIP_SLOTS_TOTAL} already claimed
      </p>
    </div>
  );
}

import { CheckCircle2 } from "lucide-react";
import { HERO_PACKAGE_REVIEW_CARD } from "@/lib/constants";

export function PackageReviewCard() {
  const card = HERO_PACKAGE_REVIEW_CARD;

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {card.kicker}
      </p>
      <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-slate-500">{card.localLabel}</span>
          <span className="font-display text-xl font-bold text-slate-400 line-through">
            {card.localPrice}
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-slate-500">{card.factoryLabel}</span>
          <span className="font-display text-2xl font-extrabold text-coral-600">
            {card.factoryPrice}
          </span>
        </div>
        <p className="text-xs text-slate-500">{card.factoryNote}</p>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-slate-200 pt-4 text-xs text-slate-500">
        <span>{card.leadTime}</span>
        <span>{card.freight}</span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-sm font-medium text-navy-900">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-coral-500" aria-hidden="true" />
        {card.status}
      </div>
      <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs italic text-slate-500">
        {card.footnote}
      </p>
    </div>
  );
}

"use client";

import { useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { TRIP_DATES, TRIP_SLOTS_REMAINING, TRIP_SLOTS_TOTAL } from "@/lib/constants";

const DISMISS_KEY = "specswap-trip-banner-dismissed";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return window.localStorage.getItem(DISMISS_KEY) === "1";
}

function getServerSnapshot() {
  return true;
}

export function TripBanner() {
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const pathname = usePathname();

  const handleDismiss = useCallback(() => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    window.dispatchEvent(new Event("storage"));
  }, []);

  if (dismissed || pathname === "/china-trip") return null;

  return (
    <div className="relative bg-navy-900 py-2.5 text-center text-sm font-medium text-white">
      <Link href="/china-trip" className="mx-8 inline-flex items-center gap-2 hover:underline">
        <span aria-hidden="true">🇨🇳</span>
        We&apos;re on factory floors in China {TRIP_DATES} — only{" "}
        <span className="font-bold text-coral-400">
          {TRIP_SLOTS_REMAINING} of {TRIP_SLOTS_TOTAL}
        </span>{" "}
        slots left. Claim yours →
      </Link>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-navy-300 hover:bg-white/10 hover:text-white"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}

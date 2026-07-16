"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-bold text-navy-900"
          >
            <Image
              src="/logo-icon.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span>
              Spec<span className="text-coral-500">Swap</span>
            </span>
          </Link>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-navy-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <UploadCtaButton className="hidden px-4 py-2 text-sm sm:inline-flex">
              Start a project
            </UploadCtaButton>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 lg:hidden"
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </Container>
        {menuOpen ? (
          <nav
            id="mobile-nav"
            aria-label="Primary"
            className="border-t border-slate-200 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-4 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-navy-900"
                >
                  {link.label}
                </a>
              ))}
              <UploadCtaButton className="w-full justify-center px-4 py-2 text-sm sm:hidden">
                Start a project
              </UploadCtaButton>
            </Container>
          </nav>
        ) : null}
      </header>
    </>
  );
}

"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/Accordion";
import { FAQ_CATEGORIES, FAQ_ITEMS, type FaqCategory } from "@/lib/constants";

const ALL = "All" as const;

export function Faq() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory | typeof ALL>(
    ALL,
  );
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const visibleItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === ALL || item.category === activeCategory;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      item.question.toLowerCase().includes(normalizedQuery) ||
      item.answer.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="faq" className="scroll-mt-16 bg-slate-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          align="center"
        />
        <div className="mx-auto mt-8 max-w-md">
          <label htmlFor="faq-search" className="sr-only">
            Search questions
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions…"
              className="block w-full rounded-full border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-navy-900 placeholder:text-slate-400 focus:border-navy-500 focus:ring-navy-500"
            />
          </div>
        </div>
        <div
          aria-label="Filter FAQs by category"
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {[ALL, ...FAQ_CATEGORIES].map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500 ${
                  isActive
                    ? "bg-navy-900 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="sr-only">
          Showing {visibleItems.length} questions
        </p>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-6">
          {visibleItems.length > 0 ? (
            visibleItems.map((item) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))
          ) : (
            <p className="py-6 text-center text-sm text-slate-500">
              No questions match &ldquo;{query}&rdquo;. Try a different
              search or category.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

type Tone = "light" | "dark";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: Tone;
  align?: "left" | "center";
}) {
  const subtleText = tone === "dark" ? "text-navy-200" : "text-slate-500";
  const bodyText = tone === "dark" ? "text-navy-100" : "text-slate-600";
  const headingText = tone === "dark" ? "text-white" : "text-navy-900";

  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-wider ${subtleText}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl ${headingText}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${bodyText} ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

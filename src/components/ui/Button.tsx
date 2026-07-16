import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-coral-500 text-white hover:bg-coral-600 focus-visible:outline-coral-600",
  secondary:
    "border border-navy-300 text-navy-700 hover:bg-navy-50 focus-visible:outline-navy-600",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, target, rel } = rest;
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}

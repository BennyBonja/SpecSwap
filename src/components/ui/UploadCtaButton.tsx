"use client";

import { Button } from "@/components/ui/Button";
import { useUploadForm } from "@/components/form/UploadFormProvider";

type Variant = "primary" | "secondary" | "outline-light";

export function UploadCtaButton({
  children = "Start a project",
  variant = "primary",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const { open } = useUploadForm();

  return (
    <Button variant={variant} className={className} onClick={open}>
      {children}
    </Button>
  );
}

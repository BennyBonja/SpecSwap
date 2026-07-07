import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex-1 bg-navy-900">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-navy-300">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-navy-200">
          The page you&apos;re looking for may have moved or the link might
          be out of date.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to homepage</Button>
          <Button variant="outline-light" href="/contact">
            Contact us
          </Button>
        </div>
      </Container>
    </main>
  );
}

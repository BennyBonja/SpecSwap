import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-slate-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-6">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

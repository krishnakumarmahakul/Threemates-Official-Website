"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  if (!items.length) {
    return (
      <div className="editor-card border-dashed border-slate-200 bg-white/80 text-sm leading-7 text-slate-500">
        Answers are being prepared. Reach out through the contact page and we&apos;ll respond directly.
      </div>
    );
  }

  return (
    <Accordion multiple className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={`${item.question}-${index}`}
          value={`faq-${index}`}
          className="editor-card overflow-hidden border border-white/80 bg-white/92 px-5 py-0"
        >
          <AccordionTrigger className="gap-4 py-5 text-base font-medium text-slate-950 hover:no-underline">
            <span className="pr-4 leading-7">{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-7 text-slate-600">
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

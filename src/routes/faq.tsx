import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Trendylocs" },
      { name: "description", content: "Common questions about locs, our services, and your hair journey." },
    ],
  }),
  component: FAQ,
});

const sections = [
  {
    title: "Getting Started",
    items: [
      [
        "What are locs and how are they different from dreadlocks?",
        'Locs (short for locked hair) and dreadlocks refer to the same hairstyle where hair is intentionally matted and rope-like. "Locs" is the preferred modern term as it\'s more respectful and doesn\'t carry the historical negative connotations of "dreadlocks."',
      ],
      [
        "Which loc method is best for me?",
        "It depends on your hair type, lifestyle, and the look you want. We recommend a free consultation so we can assess your hair and discuss your goals before recommending a method.",
      ],
      [
        "How long does my hair need to be to start locs?",
        "Most methods require at least 2–4 inches of hair. Sisterlocks™ and microlocs can sometimes be started on shorter hair depending on texture.",
      ],
    ],
  },
  {
    title: "Pricing & Appointments",
    items: [
      [
        "How much do locs cost?",
        "Prices start from £300 for starter locs and £800 for Sisterlocks™. Final pricing depends on hair length, density, and complexity we provide a detailed quote at consultation.",
      ],
      ["Do you offer payment plans?", "We will soon provide a payment plan."],
      [
        "How do I book an appointment?",
        "Book via the Contact page, the Setmore booking system, or directly by phone/WhatsApp.",
      ],
      ["What is your cancellation policy?", "We ask for at least 48 hours notice for cancellations or rescheduling."],
    ],
  },
  {
    title: "Maintenance & Care",
    items: [
      [
        "How often should I get my locs retightened?",
        "Every 4–6 weeks is recommended for most clients to keep your locs neat and healthy.",
      ],
      [
        "Can I wash my locs?",
        "Yes — and you should. We recommend washing every 1–2 weeks with a residue-free shampoo.",
      ],
      [
        "What products should I use on my locs?",
        "Lightweight, water-based moisturisers and natural oils work best. Avoid heavy waxes and butters that cause buildup.",
      ],
      [
        "How do I handle frizz and loose hair?",
        "Frizz is natural and adds character. We address loose hairs during your retightening appointments.",
      ],
    ],
  },
  {
    title: "Styling & Versatility",
    items: [
      [
        "Can I style my locs?",
        "Absolutely. Locs are incredibly versatile updos, braids, twists, accessories and more.",
      ],
      ["Can I color my locs?", "Yes, with care."],
      ["Can I swim with locs?", "Yes- use a swimming cap and shampoo after with chlorine removal shampoo."],
    ],
  },
  {
    title: "The Loc Journey",
    items: [
      [
        "How long does it take for locs to mature?",
        "Most locs fully mature between 18–24 months, though everyone's journey is unique.",
      ],
      [
        'What is the "ugly stage"?',
        "It's a phase early in the journey where locs look frizzy or unsettled. It passes and many clients learn to love it.",
      ],
      [
        "Can I take my locs out if I change my mind?",
        "Yes you can, but this depends on the size of the locks and the style used. The smaller the locks the more tedious the process.",
      ],
    ],
  },
];

function FAQ() {
  return (
    <>
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Answers</p>
          <h1 className="text-3xl md:text-4xl mb-3">Frequently Asked Questions</h1>
          <p className="text-base text-primary-foreground/70">
            Find answers to common questions about locs, our services, and your hair journey
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 space-y-12">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-3xl mb-6">{s.title}</h2>
            <Accordion type="single" collapsible className="w-full">
              {s.items.map(([q, a], i) => (
                <AccordionItem key={i} value={`${s.title}-${i}`}>
                  <AccordionTrigger className="text-left">{q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>

      <section className="bg-secondary/40 py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-4xl mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8">
            We're here to help! Book an appointment or get in touch with us directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-gold text-gold-foreground px-7 py-3.5 rounded-md hover:opacity-90">
              Book Appointment
            </Link>
            <Link to="/contact" className="bg-dark text-primary-foreground px-7 py-3.5 rounded-md hover:bg-dark/90">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

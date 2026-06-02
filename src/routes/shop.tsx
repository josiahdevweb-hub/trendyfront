import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, Sparkles, Store, BellRing } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [
    { title: "Shop Coming Soon — Trendylocs" },
    { name: "description", content: "The Trendylocs online shop is launching soon with curated loc care essentials, accessories, and premium beauty staples." },
  ]}),
  component: Shop,
});

const shopHighlights = [
  {
    icon: Sparkles,
    title: "Curated loc care",
    description: "Carefully selected essentials designed to support healthy, polished locs every day.",
  },
  {
    icon: Store,
    title: "Accessories & staples",
    description: "From finishing touches to maintenance must-haves, the range is built for real salon routines.",
  },
  {
    icon: BellRing,
    title: "Launch updates",
    description: "We’re preparing the first collection now, with more product drops to follow after launch.",
  },
];

function Shop() {
  return (
    <>
      <section className="relative overflow-hidden bg-dark text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-primary/20" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-primary-foreground/8 px-4 py-2 text-xs uppercase tracking-[0.24em] text-gold">
              <Clock3 className="h-4 w-4" />
              Shop launch in progress
            </div>

            <h1 className="max-w-xl text-4xl leading-tight md:text-5xl lg:text-6xl">
              The Trendylocs shop is coming soon.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/74 md:text-lg">
              We’re preparing a polished online store with premium loc care, finishing products, and accessories chosen to match the Trendylocs salon experience.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-medium text-gold-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 bg-primary-foreground/6 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground/12"
              >
                Explore services first
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {shopHighlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-md border border-primary-foreground/12 bg-primary-foreground/6 p-4 backdrop-blur-sm">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gold/16 text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg text-primary-foreground">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/68">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-primary-foreground/12 bg-primary-foreground/6 p-6 backdrop-blur-sm sm:p-8">
            <div className="rounded-md border border-dashed border-gold/40 bg-background/95 p-6 text-foreground sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-gold">What to expect</p>
              <div className="mt-6 space-y-6">
                {[
                  ["Launch-ready collections", "A focused first drop featuring premium care essentials and everyday beauty basics."],
                  ["Salon-aligned quality", "Products chosen to reflect the standard, finish, and maintenance needs of the Trendylocs client."],
                  ["Easy next step", "Until the shop opens, you can still book your appointment or contact the team directly."],
                ].map(([title, description]) => (
                  <div key={title} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                    <h2 className="text-xl text-foreground">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">In the meantime</p>
          <h2 className="mt-4 text-3xl text-foreground md:text-4xl">Keep in touch with the salon.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            While the store is being finished, you can still book your appointment, ask about recommended products, or contact Trendylocs directly for salon guidance.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-dark px-6 py-3 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-dark/90"
            >
              Contact Trendylocs
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-secondary"
            >
              View recent work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

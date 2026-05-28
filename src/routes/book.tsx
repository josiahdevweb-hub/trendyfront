import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ExternalLink } from "lucide-react";

const SETMORE_URL = "https://trendylocs.setmore.com";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Trendylocs" },
      {
        name: "description",
        content:
          "Book your locs appointment with Trendylocs in Manchester directly through our live Setmore calendar.",
      },
      { property: "og:title", content: "Book an Appointment — Trendylocs" },
      {
        property: "og:description",
        content: "Reserve your slot with Trendylocs via our live Setmore booking calendar.",
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-primary-foreground py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Live booking calendar</p>
          <h1 className="font-serif text-3xl md:text-4xl mb-3">Reserve Your Appointment</h1>
          <p className="text-sm md:text-base text-primary-foreground/70 max-w-xl mx-auto">
            Pick your service, stylist and time below. Confirmations and reminders are sent
            automatically.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SETMORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold text-gold-foreground text-sm hover:opacity-90 transition-opacity"
            >
              <CalendarDays className="h-4 w-4" /> Open booking in new tab
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-primary-foreground/20 text-primary-foreground/90 text-sm hover:border-gold hover:text-gold transition-colors"
            >
              Browse services first
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Setmore calendar */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-10">
        <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
          <iframe
            src={SETMORE_URL}
            title="Trendylocs booking calendar"
            className="w-full h-[1100px] md:h-[1200px] block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allow="payment; camera; microphone"
          />
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">
          Having trouble with the calendar?{" "}
          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Open it in a new tab
          </a>
          .
        </p>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ExternalLink, Phone, MessageCircle, Clock, ShieldCheck } from "lucide-react";

const SETMORE_URL = "https://trendylocs.setmore.com";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Trendylocs" },
      {
        name: "description",
        content:
          "Book your locs appointment with Trendylocs in Manchester. Reserve instantly via our Setmore calendar, call, or WhatsApp.",
      },
      { property: "og:title", content: "Book an Appointment — Trendylocs" },
      {
        property: "og:description",
        content: "Reserve your slot with Trendylocs — instant booking, call, or WhatsApp.",
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <section className="bg-dark text-primary-foreground min-h-[80vh] flex items-center py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center w-full">
        <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Book in 30 seconds</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-4">Reserve Your Appointment</h1>
        <p className="text-sm md:text-base text-primary-foreground/70 max-w-lg mx-auto mb-8">
          Pick your service, stylist and time on our live calendar. Confirmation and reminders are sent automatically —
          no account needed.
        </p>

        <a
          href={SETMORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-gold text-gold-foreground text-base font-medium hover:opacity-90 transition-opacity shadow-lg"
        >
          <CalendarDays className="h-5 w-5" />
          Book Now
          <ExternalLink className="h-4 w-4 opacity-70" />
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-primary-foreground/60">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold" /> Mon - Fri · 9:30am – 5:30pm
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" /> Free cancellation 24h before
          </span>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50 mb-4">
            Prefer to talk to someone?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+44123456789"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-primary-foreground/20 text-sm hover:border-gold hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" /> +447838328131
            </a>
            <a
              href="https://wa.me/447838328131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-primary-foreground/20 text-sm hover:border-gold hover:text-gold transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm text-primary-foreground/70 hover:text-gold transition-colors"
            >
              Browse services first →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays,
  ExternalLink,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";
import { getServiceBySlug } from "@/data/services";

const SETMORE_URL = "https://trendylocs.setmore.com";
const PHONE_NUMBER = "+447838328131";
const WHATSAPP_NUMBER = "447838328131";
const POLICY_AGREEMENT = "I have read and agree to the Trendylocs Booking Policy.";

type BookSearch = { service?: string };

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): BookSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
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

function buildWhatsAppMessage(serviceSlug?: string) {
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  if (service) {
    return `Hi Trendylocs! I'm interested in booking the *${service.title}* service (${service.price}, approx. ${service.time}). Could you help me find an available slot? ${POLICY_AGREEMENT} Thank you!`;
  }
  return `Hi Trendylocs! I'd like to book an appointment. Could you help me find an available slot? ${POLICY_AGREEMENT} Thank you!`;
}

function BookPage() {
  const { service: serviceSlug } = Route.useSearch();
  const selectedService = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const whatsappText = encodeURIComponent(buildWhatsAppMessage(serviceSlug));
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  const [agreed, setAgreed] = useState(false);
  const [nudge, setNudge] = useState(false);
  const agreementRef = useRef<HTMLLabelElement>(null);

  // Booking options stay locked until the client confirms they've read the policy.
  const guard = (e: MouseEvent<HTMLAnchorElement>) => {
    if (agreed) return;
    e.preventDefault();
    setNudge(true);
    agreementRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const optionClass = `group relative flex flex-col items-center justify-between gap-3 p-6 rounded-xl bg-gold text-gold-foreground shadow-lg transition-opacity ${
    agreed ? "hover:opacity-95" : "opacity-40 cursor-not-allowed"
  }`;
  const lockBadge = !agreed && <Lock className="absolute top-3 right-3 h-3.5 w-3.5 opacity-70" aria-hidden />;

  return (
    <section className="bg-dark text-primary-foreground min-h-[80vh] flex items-center py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center w-full">
        <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">Three ways to book</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-4">Reserve Your Appointment</h1>
        <p className="text-sm md:text-base text-primary-foreground/70 max-w-lg mx-auto mb-4">
          Please read our booking policy below, then pick whichever option suits you; book online, send a quick
          WhatsApp, or give us a call.
        </p>

        {selectedService && (
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gold/10 border border-gold/40 text-xs text-gold">
            <span className="uppercase tracking-[0.2em]">Selected</span>
            <span className="text-primary-foreground/90 normal-case tracking-normal">
              {selectedService.title} · {selectedService.price}
            </span>
          </div>
        )}

        {/* Booking policy — must be acknowledged before booking */}
        <div className="mt-6 text-left rounded-xl border-2 border-gold/60 bg-primary-foreground/5 p-5 md:p-7">
          <Link
            to="/booking-policy"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-sm text-gold underline underline-offset-4 hover:opacity-80"
          >
            Read the full Booking Policy <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <label
            ref={agreementRef}
            className={`mt-5 flex items-start gap-3 rounded-lg p-4 cursor-pointer transition-colors ${
              agreed
                ? "bg-gold/15 border border-gold"
                : nudge
                  ? "bg-red-500/10 border-2 border-red-400 animate-pulse"
                  : "bg-primary-foreground/5 border border-primary-foreground/20"
            }`}
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                setNudge(false);
              }}
              className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--gold)] cursor-pointer"
            />
            <span className="text-sm font-medium">
              I have read, understood, and agree to the Trendylocs Booking Policy, including the cancellation,
              late arrival, and hair preparation terms.
            </span>
          </label>
          {nudge && !agreed && (
            <p className="mt-2 text-xs text-red-300" role="alert">
              Please tick the box above to confirm you agree to the Booking Policy before booking.
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          {/* Online booking */}
          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={guard}
            aria-disabled={!agreed}
            className={optionClass}
          >
            {lockBadge}
            <CalendarDays className="h-7 w-7" />
            <div className="font-medium text-base flex items-center gap-1.5">
              Book Online <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.18em] opacity-80">Instant calendar</span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={guard}
            aria-disabled={!agreed}
            className={optionClass}
          >
            {lockBadge}
            <MessageCircle className="h-7 w-7" />
            <div className="font-medium text-base">WhatsApp Us</div>
            <span className="text-[11px] uppercase tracking-[0.18em] opacity-80">
              {selectedService ? "Pre-filled message" : "Quick chat"}
            </span>
          </a>

          {/* Phone */}
          <a href={`tel:${PHONE_NUMBER}`} onClick={guard} aria-disabled={!agreed} className={optionClass}>
            {lockBadge}
            <Phone className="h-7 w-7" />
            <div className="font-medium text-base">Call Us</div>
            <span className="text-[11px] uppercase tracking-[0.18em] opacity-80">{PHONE_NUMBER}</span>
          </a>
        </div>
        {!agreed && (
          <p className="mt-3 text-xs text-primary-foreground/60">
            Booking options unlock once you agree to the Booking Policy.
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-primary-foreground/60">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold" /> Mon - Fri · 9:30am – 5:30pm
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" /> 48 hrs notice to cancel or reschedule
          </span>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
          >
            Browse services first →
          </Link>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, Tag, CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Trendylocs" },
      { name: "description", content: "Sisterlocks™, Microlocs, Traditional Locs, retightening, styling and more." },
    ],
  }),
  component: Services,
});

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  if (e.currentTarget.src.indexOf("/images/fallback.jpg") === -1) e.currentTarget.src = "/images/fallback.jpg";
};

function Services() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = activeSlug ? (services.find((s) => s.slug === activeSlug) ?? null) : null;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-primary-foreground py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-3">What We Offer</p>
          <h1 className="font-serif text-3xl md:text-4xl mb-3">Our Services</h1>
          <p className="text-sm text-primary-foreground/70">Expert care for every stage of your natural hair journey</p>
        </div>
      </section>

      {/* ── DETAIL VIEW ─────────────────────────────────────────────── */}
      {active ? (
        <section className="mx-auto max-w-6xl px-6 py-12">
          <button
            onClick={() => setActiveSlug(null)}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground mb-8 uppercase tracking-[0.15em]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Services
          </button>

          <div className="grid lg:grid-cols-[1fr_380px] gap-10">
            {/* Left — image + description */}
            <article>
              <div className="aspect-[16/9] overflow-hidden rounded-xl mb-7">
                <img src={active.img} alt={active.title} onError={onImgError} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/8">
                  <Clock className="h-3.5 w-3.5 text-gold" /> {active.time}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/8">
                  <Tag className="h-3.5 w-3.5 text-gold" /> {active.price}
                </span>
              </div>

              <h2 className="font-serif text-3xl mb-2">{active.title}</h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm mb-8">
                {active.longDesc ?? active.desc}
              </div>

              <h3 className="font-serif text-lg mb-3">What's included</h3>
              <ul className="space-y-2 mb-8">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Booking bar */}
              <div className="flex items-center justify-between p-5 rounded-xl bg-secondary/50 border border-border/60">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Starting from</p>
                  <p className="font-serif text-3xl text-primary">{active.price}</p>
                </div>
                <Link
                  to="/book"
                  search={{ service: active.slug }}
                  className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-md text-xs uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book Now
                </Link>
              </div>
            </article>

            {/* Right sidebar — other services */}
            <aside className="lg:border-l lg:pl-8 border-border">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">More Services</p>
              <div className="space-y-3">
                {services
                  .filter((s) => s.slug !== active.slug)
                  .map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => {
                        setActiveSlug(s.slug);
                        scrollTop();
                      }}
                      className="flex gap-3 text-left group w-full p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-20 h-16 shrink-0 overflow-hidden rounded-md">
                        <img
                          src={s.img}
                          alt={s.title}
                          onError={onImgError}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0 py-0.5">
                        <p className="text-[10px] uppercase tracking-wider text-gold mb-0.5">{s.time}</p>
                        <p className="text-sm font-medium leading-snug group-hover:text-gold transition-colors line-clamp-2">
                          {s.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.price}</p>
                      </div>
                    </button>
                  ))}
              </div>
            </aside>
          </div>
        </section>
      ) : (
        /* ── GRID VIEW ─────────────────────────────────────────────── */
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <article
                key={s.slug}
                className="group flex flex-col bg-card border border-border/60 rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setActiveSlug(s.slug);
                  scrollTop();
                }}
              >
                {/* Image */}
                <div className="h-64 md:h-72 overflow-hidden shrink-0">
                  <img
                    src={s.img}
                    alt={s.title}
                    onError={onImgError}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-4 gap-2.5">
                  <div>
                    <h3 className="font-serif text-[15px] font-semibold leading-snug mb-1">{s.title}</h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <Clock className="h-3 w-3 shrink-0" />
                      <span>{s.time}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">{s.desc}</p>

                  {/* Price + CTAs */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-border/50 gap-2">
                    <span className="font-serif text-lg text-primary font-medium leading-none">{s.price}</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlug(s.slug);
                          scrollTop();
                        }}
                        className="text-[10px] uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors px-2 py-1.5"
                      >
                        Details
                      </button>
                      <Link
                        to="/book"
                        search={{ service: s.slug }}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 bg-gold text-gold-foreground text-[10px] uppercase tracking-[0.15em] font-medium px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
                      >
                        <CalendarCheck className="h-3 w-3" />
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      {!active && (
        <section className="bg-dark text-primary-foreground py-16 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="text-primary-foreground/70 mb-7 text-sm">
              Book your free consultation today and let's discuss your hair goals.
            </p>
            <Link
              to="/book"
              search={{ service: "consultation" }}
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3.5 rounded-md hover:opacity-90 transition-opacity"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Free Consultation
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
